import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { stripTelemetryHeaders } from "@/lib/telemetry-proxy";

// CORS headers for preflight requests
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Requested-With",
  "Access-Control-Max-Age": "86400",
};

// Lives in src/: with a src directory Next.js only loads src/middleware.ts.
// From the v1.0.0 release until 2026-10-02 this file sat at the app root and
// never ran, so neither the /ingest header stripping nor the CORS preflight
// took effect.
export function middleware(request: NextRequest) {
  // Telemetry proxy: strip cookies so session cookies never reach the
  // third-party ingestion host through the /ingest rewrite.
  if (request.nextUrl.pathname.startsWith("/ingest")) {
    return NextResponse.next({
      request: { headers: stripTelemetryHeaders(request.headers) },
    });
  }

  // One URL per page: /for/nepa/ redirects to /for/nepa. next.config sets
  // skipTrailingSlashRedirect so the /ingest proxy keeps PostHog's paths, so
  // the redirect lives here, after the /ingest branch above.
  // The raw URL, not request.nextUrl: NextURL drops the trailing slash.
  const url = new URL(request.url);
  if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.replace(/\/+$/, "");
    return NextResponse.redirect(url, 308);
  }

  // Handle CORS preflight requests immediately
  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths to handle OPTIONS requests
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
