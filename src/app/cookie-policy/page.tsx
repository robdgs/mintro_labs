import Container from "@/components/Container";
import { HiArrowLeft } from "react-icons/hi2";
import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-8 text-foreground/70 hover:text-foreground transition-colors"
          >
            <HiArrowLeft className="w-5 h-5" />
            <span className="font-bold">Back to Home</span>
          </Link>

          <div className="bg-[#fafaf5] border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(46,46,46,1)] p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Cookie Policy
            </h1>
            <p className="text-sm text-foreground/60 mb-8">
              Last updated: March 9, 2026
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  1. What Are Cookies?
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Cookies are small text files that are placed on your device
                  (computer, smartphone, or tablet) when you visit a website.
                  They are widely used to make websites work more efficiently
                  and provide information to website owners.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  2. How We Use Cookies
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We use cookies to enhance your browsing experience, analyze
                  site traffic, personalize content, and serve targeted
                  advertisements. We categorize our cookies as follows:
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  3. Types of Cookies We Use
                </h2>

                <div className="bg-white border-2 border-foreground p-6 mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    3.1 Necessary Cookies
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    These cookies are essential for the website to function
                    properly. They enable core functionality such as security,
                    network management, and accessibility. Without these
                    cookies, services you have asked for cannot be provided.
                  </p>
                  <p className="text-sm text-foreground/60">
                    <strong>Legal Basis:</strong> Legitimate Interest
                  </p>
                  <p className="text-sm text-foreground/60">
                    <strong>Can be disabled:</strong> No
                  </p>
                </div>

                <div className="bg-white border-2 border-foreground p-6 mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    3.2 Analytics Cookies
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    These cookies help us understand how visitors interact with
                    our website by collecting and reporting information
                    anonymously. This helps us improve our website's
                    functionality and user experience.
                  </p>
                  <p className="text-sm text-foreground/60 mb-2">
                    <strong>Examples:</strong>
                  </p>
                  <ul className="list-disc list-inside text-sm text-foreground/70 mb-4 space-y-1">
                    <li>Google Analytics (_ga, _gid, _gat)</li>
                    <li>Page view tracking</li>
                    <li>Session duration measurement</li>
                  </ul>
                  <p className="text-sm text-foreground/60">
                    <strong>Legal Basis:</strong> Consent
                  </p>
                  <p className="text-sm text-foreground/60">
                    <strong>Can be disabled:</strong> Yes
                  </p>
                </div>

                <div className="bg-white border-2 border-foreground p-6 mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    3.3 Marketing Cookies
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    These cookies are used to track visitors across websites.
                    The intention is to display ads that are relevant and
                    engaging for individual users and thereby more valuable for
                    publishers and third-party advertisers.
                  </p>
                  <p className="text-sm text-foreground/60 mb-2">
                    <strong>Examples:</strong>
                  </p>
                  <ul className="list-disc list-inside text-sm text-foreground/70 mb-4 space-y-1">
                    <li>Facebook Pixel</li>
                    <li>Google Ads</li>
                    <li>LinkedIn Insight Tag</li>
                  </ul>
                  <p className="text-sm text-foreground/60">
                    <strong>Legal Basis:</strong> Consent
                  </p>
                  <p className="text-sm text-foreground/60">
                    <strong>Can be disabled:</strong> Yes
                  </p>
                </div>

                <div className="bg-white border-2 border-foreground p-6 mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    3.4 Preference Cookies
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    These cookies enable the website to remember choices you
                    make (such as your user name, language, or region) and
                    provide enhanced, more personalized features.
                  </p>
                  <p className="text-sm text-foreground/60 mb-2">
                    <strong>Examples:</strong>
                  </p>
                  <ul className="list-disc list-inside text-sm text-foreground/70 mb-4 space-y-1">
                    <li>Language preferences</li>
                    <li>Theme selection</li>
                    <li>User interface customization</li>
                  </ul>
                  <p className="text-sm text-foreground/60">
                    <strong>Legal Basis:</strong> Consent
                  </p>
                  <p className="text-sm text-foreground/60">
                    <strong>Can be disabled:</strong> Yes
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  4. Cookie Duration
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Cookies can be classified by their duration:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
                  <li>
                    <strong>Session Cookies:</strong> Temporary cookies that
                    expire when you close your browser
                  </li>
                  <li>
                    <strong>Persistent Cookies:</strong> Remain on your device
                    for a set period or until you delete them
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  5. Third-Party Cookies
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  In addition to our own cookies, we may use various third-party
                  cookies to report usage statistics, deliver advertisements,
                  and improve user experience. These third parties may collect
                  data about your online activities over time and across
                  different websites.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. Managing Your Cookie Preferences
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  You have the right to decide whether to accept or reject
                  cookies. You can exercise your cookie preferences by:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
                  <li>
                    Using our cookie consent banner when you first visit our
                    website
                  </li>
                  <li>
                    Clicking the "Cookie Settings" button (if available) to
                    change your preferences at any time
                  </li>
                  <li>Adjusting your browser settings to refuse cookies</li>
                </ul>
                <div className="bg-primary border-2 border-foreground p-4 mb-4">
                  <p className="text-foreground font-bold mb-2">
                    Browser Settings:
                  </p>
                  <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1">
                    <li>
                      Chrome:{" "}
                      <span className="font-mono">
                        Settings → Privacy and security → Cookies
                      </span>
                    </li>
                    <li>
                      Firefox:{" "}
                      <span className="font-mono">
                        Settings → Privacy & Security → Cookies
                      </span>
                    </li>
                    <li>
                      Safari:{" "}
                      <span className="font-mono">
                        Preferences → Privacy → Cookies
                      </span>
                    </li>
                    <li>
                      Edge:{" "}
                      <span className="font-mono">
                        Settings → Cookies and site permissions
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  7. Impact of Disabling Cookies
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  If you choose to disable cookies, some features of our website
                  may not function properly. Specifically:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
                  <li>
                    You may not be able to access certain areas of the site
                  </li>
                  <li>Some personalized features will not be available</li>
                  <li>You may experience reduced functionality</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  8. Updates to This Cookie Policy
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We may update this Cookie Policy from time to time to reflect
                  changes in technology, legislation, or our business
                  operations. We encourage you to review this policy
                  periodically.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  9. More Information
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  For more information about how we process your personal data,
                  please see our{" "}
                  <Link href="/privacy-policy" className="font-bold underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  If you have any questions about our use of cookies, please
                  contact us at:
                </p>
                <div className="bg-primary border-2 border-foreground p-4">
                  <p className="text-foreground font-bold">
                    Email: privacy@mintrolabs.com
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
