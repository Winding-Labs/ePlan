/**
 * Best-effort process memory reporting for diagnostics.
 *
 * Cloudflare Workers (even with `nodejs_compat`) may not expose
 * `process.memoryUsage`, or may stub it in a way that throws. Every accessor
 * here is guarded so logging can never break a request path.
 */

export type MemorySnapshot = {
  rssMb?: number;
  heapUsedMb?: number;
  externalMb?: number;
  arrayBuffersMb?: number;
};

const BYTES_PER_MB = 1024 * 1024;

const toMb = (value: unknown): number | undefined => {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return undefined;
  }
  return Math.round(value / BYTES_PER_MB);
};

/**
 * Rounded MB memory figures, or `undefined` when the runtime does not expose
 * `process.memoryUsage()`. Never throws.
 */
export const getMemorySnapshot = (): MemorySnapshot | undefined => {
  try {
    const proc = (globalThis as { process?: { memoryUsage?: unknown } })
      .process;
    if (!proc || typeof proc.memoryUsage !== "function") {
      return undefined;
    }

    const usage = (proc.memoryUsage as () => Record<string, unknown>)();
    if (!usage || typeof usage !== "object") {
      return undefined;
    }

    return {
      rssMb: toMb(usage.rss),
      heapUsedMb: toMb(usage.heapUsed),
      externalMb: toMb(usage.external),
      arrayBuffersMb: toMb(usage.arrayBuffers),
    };
  } catch {
    return undefined;
  }
};

/**
 * Compact, greppable rendering of a snapshot, e.g.
 * `rss=412MB heap=180MB ext=96MB ab=96MB`. Returns `mem=n/a` when unavailable.
 */
export const formatMemorySnapshot = (
  snapshot: MemorySnapshot | undefined,
): string => {
  if (!snapshot) {
    return "mem=n/a";
  }

  const parts: string[] = [];
  if (snapshot.rssMb !== undefined) {
    parts.push(`rss=${snapshot.rssMb}MB`);
  }
  if (snapshot.heapUsedMb !== undefined) {
    parts.push(`heap=${snapshot.heapUsedMb}MB`);
  }
  if (snapshot.externalMb !== undefined) {
    parts.push(`ext=${snapshot.externalMb}MB`);
  }
  if (snapshot.arrayBuffersMb !== undefined) {
    parts.push(`ab=${snapshot.arrayBuffersMb}MB`);
  }

  if (parts.length === 0) {
    return "mem=n/a";
  }

  return parts.join(" ");
};
