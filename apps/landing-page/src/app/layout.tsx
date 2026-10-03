import { Suspense } from "react";

import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import {
  AhrefsAnalytics,
  AnalyticsPageView,
} from "@wildfires-org/turboplan-analytics/client";
import { getLandingPageEnv } from "@wildfires-org/turboplan-env";

import LayoutWrapper from "@/app/layoutWrapper";
import { Navbar } from "@/components/home-v2/navbar";
import { SiteFooter } from "@/components/home-v2/site-footer";
import { ClientSessionProvider } from "@/components/providers/client-session-provider";
import { PostHogProvider } from "@/components/providers/posthog-provider";
import { UiScaleSync } from "@/components/providers/ui-scale-sync";
import { ReleaseInfoLogger } from "@/components/release-info-logger";
import { Toaster } from "@/components/ui/toaster";
import AnalyticsContextProvider, {
  InitializeAnalyticsContext,
} from "@/context/analytics";
import GlobalProvider from "@/context/global";
import { brand } from "@/lib/brand";
import { resolveMetadataBase } from "@/lib/metadata-base";
import {
  indexableRobots,
  SITE_DESCRIPTION,
  SITE_TAGLINE,
  SITE_TITLE,
} from "@/lib/seo";
import { cn } from "@/lib/utils";
import "../globals.css";

const geist = localFont({
  src: [
    {
      path: "../../public/fonts/Geist-Thin.woff2",
      style: "normal",
      weight: "100",
    },
    {
      path: "../../public/fonts/Geist-ExtraLight.woff2",
      style: "normal",
      weight: "200",
    },
    {
      path: "../../public/fonts/Geist-Light.woff2",
      style: "normal",
      weight: "300",
    },
    {
      path: "../../public/fonts/Geist-Regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/fonts/Geist-Medium.woff2",
      style: "normal",
      weight: "500",
    },
    {
      path: "../../public/fonts/Geist-SemiBold.woff2",
      style: "normal",
      weight: "600",
    },
    {
      path: "../../public/fonts/Geist-Bold.woff2",
      style: "normal",
      weight: "700",
    },
    {
      path: "../../public/fonts/Geist-ExtraBold.woff2",
      style: "normal",
      weight: "800",
    },
    {
      path: "../../public/fonts/Geist-Black.woff2",
      style: "normal",
      weight: "900",
    },
  ],
  variable: "--font-geist",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const APP_TITLE = brand.name;
const APP_TAGLINE = SITE_TAGLINE;
const APP_DESCRIPTION = SITE_DESCRIPTION;
const AHREFS_SITE_VERIFICATION = getLandingPageEnv().AHREFS_SITE_VERIFICATION;

// Pages set only their own part of the title (or `buildPageMetadata` from
// lib/seo); the template appends the brand. No canonical here: a
// layout-level canonical would be inherited by every page that doesn't
// override it and point them all at the home page.
export const metadata: Metadata = {
  metadataBase: resolveMetadataBase(getLandingPageEnv().LANDING_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${APP_TITLE}`,
  },
  description: APP_DESCRIPTION,
  applicationName: APP_TITLE,
  openGraph: {
    title: APP_TAGLINE,
    description: APP_DESCRIPTION,
    siteName: APP_TITLE,
    type: "website",
    images: [{ url: brand.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: APP_DESCRIPTION,
    images: [brand.ogImage],
  },
  // Only eplan.ai is indexed; staging and PR previews get noindex.
  robots: indexableRobots(),
  // Proves ownership to Ahrefs Site Audit. Production only.
  ...(AHREFS_SITE_VERIFICATION && {
    verification: {
      other: { "ahrefs-site-verification": AHREFS_SITE_VERIFICATION },
    },
  }),
  // public/favicon.ico holds 16, 32 and 48px images.
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "16x16 32x32 48x48" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // No cookies or session here: reading either makes every marketing page
  // dynamic and uncacheable. The session loads client-side
  // (ClientSessionProvider) and UiScaleSync applies the app's UI-scale cookie
  // after hydration.
  // Signup hands off to the app origin via a full navigation; warm up DNS/TLS
  // so that cross-origin jump starts faster.
  const appOrigin = new URL(getLandingPageEnv().TURBOPLAN_URL).origin;

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <meta name="theme-color" content="#f4f9f7" />
      <link rel="preconnect" href={appOrigin} />
      <body
        className={cn(
          geist.variable,
          inter.variable,
          "bg-brandAlt-100 font-geist min-h-screen flex flex-col justify-between overflow-x-hidden",
        )}
      >
        <ReleaseInfoLogger />
        <UiScaleSync />
        <PostHogProvider />
        {/* RootProvider supplies Fumadocs' search context for the /docs route.
            Purely additive — it wraps the existing session/analytics stack
            without altering its order.
            theme.enabled=false disables next-themes entirely: this app has no
            dark-mode design system (global Navbar/SiteFooter/home are light-only),
            so we never render the ThemeProvider and the `dark` class is never
            applied — not even from OS-level prefers-color-scheme.
            No Suspense around the page: a boundary here flushes a 200 before
            the page runs, so its notFound() can no longer send a 404. A
            component that reads search params wraps itself instead (the
            build fails on a statically prerendered page that doesn't). */}
        <RootProvider theme={{ enabled: false }}>
          <NuqsAdapter>
            <ClientSessionProvider>
              <AnalyticsContextProvider>
                <GlobalProvider>
                  <div className="min-h-screen flex flex-col justify-between">
                    <a
                      href="#main-content"
                      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-inter focus:text-[14px] focus:text-egray-900 focus:shadow-lg"
                    >
                      Skip to content
                    </a>
                    <Navbar />
                    <main
                      id="main-content"
                      className="relative flex w-full flex-1 justify-center"
                    >
                      <LayoutWrapper>{children}</LayoutWrapper>
                    </main>
                    <SiteFooter />
                  </div>
                </GlobalProvider>
                <Suspense>
                  <InitializeAnalyticsContext />
                </Suspense>
              </AnalyticsContextProvider>
            </ClientSessionProvider>
          </NuqsAdapter>
        </RootProvider>
        <Toaster />
        {/* Suspense boundary required: AnalyticsPageView reads
            useSearchParams to emit one pageview (PostHog + GA4) per route
            change. Loads gtag only when GA4 or the Google Ads tag is
            configured. */}
        <Suspense>
          <AnalyticsPageView />
        </Suspense>
        <AhrefsAnalytics />
      </body>
    </html>
  );
}
