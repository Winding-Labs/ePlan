// Sentry bootstrap — runs before app code, so it reads process.env directly
// (same as next.config.ts) instead of going through turboplan-env.
import * as Sentry from "@sentry/nextjs";
import type { Instrumentation } from "next";

export const register = async () => {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
};

// Bootstrap file — deliberately no app/package imports beyond Sentry, so the
// memory read is inlined rather than pulled in from a module.
const memoryLine = (): string => {
  try {
    const usage = process.memoryUsage();
    const mb = (bytes: number) => Math.round(bytes / 1024 / 1024);
    return `rss=${mb(usage.rss)}MB heap=${mb(usage.heapUsed)}MB ext=${mb(usage.external)}MB`;
  } catch {
    return "mem=n/a";
  }
};

// Captures all server-side request errors (RSC, route handlers, server
// actions) — the single server-side error hook, no per-route code needed.
// The console.error in front of it is diagnostic: Sentry can drop or sample
// events, while Workers Logs always keeps the line.
export const onRequestError: Instrumentation.onRequestError = (
  err,
  request,
  context,
) => {
  console.error("[request-error]", {
    path: request.path,
    method: request.method,
    routerKind: context.routerKind,
    routePath: context.routePath,
    routeType: context.routeType,
    renderSource: context.renderSource,
    errorName: (err as Error)?.name,
    errorMessage: (err as Error)?.message,
    digest: (err as { digest?: string })?.digest,
    mem: memoryLine(),
  });

  return Sentry.captureRequestError(err, request, context);
};
