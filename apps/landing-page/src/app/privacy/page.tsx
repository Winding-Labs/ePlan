import type { Metadata } from "next";
import Link from "next/link";

import { getSupportEmail } from "@wildfires-org/turboplan-env";

import { LegalPage } from "@/components/legal/legal-page";
import { brand } from "@/lib/brand";
import { buildPageMetadata } from "@/lib/seo";
import { routing } from "@/utils/routing";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: `How ${brand.name} collects, uses and protects your information, which services process it, and how to reach us about your data.`,
  path: routing.privacy(),
});

// Lists only the processors the product actually calls (see CONFIGURATION.md).
// Update it when one is added or removed.
export default function PrivacyPage() {
  const supportEmail = getSupportEmail();

  return (
    <LegalPage title="Privacy Policy" updated="October 2, 2026">
      <p>
        This policy explains what information {brand.name} (the
        &quot;Service&quot;) collects when you use our website and web
        application, how we use it, and the choices you have.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Account information:</strong> your email address, name, the
          organizations and offices you belong to, and the role you pick during
          setup.
        </li>
        <li>
          <strong>Your content:</strong> project descriptions, chat messages,
          files you upload (such as PDFs, Word documents and GIS files),
          locations and maps, tasks, and the documents the Service drafts for
          you.
        </li>
        <li>
          <strong>Billing information:</strong> your plan and billing history.
          Card details go directly to our payment processor, Stripe, and never
          reach our servers.
        </li>
        <li>
          <strong>Usage data:</strong> pages viewed, features used, device and
          browser information, and error logs.
        </li>
        <li>
          <strong>Cookies and similar technologies:</strong> cookies that keep
          you signed in, and analytics and advertising cookies that measure
          visits and sign-ups, including the campaign that brought you to the
          site (UTM parameters and ad click IDs).
        </li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>
          To provide the Service: researching precedent, drafting documents and
          running your projects.
        </li>
        <li>To process payments and manage subscriptions.</li>
        <li>To send sign-in links, invitations and service notices.</li>
        <li>
          To understand how the Service is used, fix problems and improve it.
        </li>
        <li>To measure which marketing campaigns lead to sign-ups.</li>
      </ul>
      <p>
        We do not sell your personal information, and we do not use your content
        to train AI models.
      </p>

      <h2>Service providers</h2>
      <p>
        We share information only with providers that process it on our behalf
        to run the Service:
      </p>
      <ul>
        <li>
          Hosting, compute, storage and databases: Cloudflare, Fly.io, Modal and
          Neon.
        </li>
        <li>
          AI processing: Anthropic and OpenRouter, which route requests to AI
          model providers, generate drafts and answers from the content you
          submit. Exa runs web searches for research.
        </li>
        <li>Payments: Stripe.</li>
        <li>Email delivery: Resend.</li>
        <li>Electronic signatures, when you request one: Documenso.</li>
        <li>Product analytics: PostHog.</li>
        <li>
          Web analytics and ad measurement: Google Analytics and Google Ads.
        </li>
        <li>Error monitoring: Sentry.</li>
      </ul>
      <p>
        We may also disclose information when the law requires it, or to protect
        the rights and safety of our users and the Service.
      </p>

      <h2>Public projects</h2>
      <p>
        Projects are private by default. If you make a project public, its name,
        description, location and documents appear in the public project catalog
        and can be viewed by anyone.
      </p>

      <h2>Cookies and your choices</h2>
      <p>
        You can block or delete cookies in your browser settings. The Service
        needs its sign-in cookie to work. Blocking analytics and advertising
        cookies does not affect the Service. You can also opt out of Google
        Analytics with Google&apos;s{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          rel="noopener noreferrer"
          target="_blank"
        >
          browser add-on
        </a>
        .
      </p>

      <h2>Retention and deletion</h2>
      <p>
        We keep your information while your account is active. You can ask us to
        access, correct, export or delete your personal information at any time.
        We delete it unless we must keep it for legal, tax or security reasons.
      </p>

      <h2>Security</h2>
      <p>
        We use encryption in transit, access controls and other technical and
        organizational measures to protect your information. No method of
        transmission or storage is completely secure.
      </p>

      <h2>Children</h2>
      <p>
        The Service is for professional use and is not directed at children
        under 16. We do not knowingly collect their information.
      </p>

      <h2>Changes</h2>
      <p>
        When this policy changes, we update this page and the date at the top.
      </p>

      <h2>Contact</h2>
      <p>
        Questions or requests about your data:{" "}
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>. See also our{" "}
        <Link href={routing.terms()}>Terms of Service</Link>.
      </p>
    </LegalPage>
  );
}
