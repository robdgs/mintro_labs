import Container from "@/components/Container";
import { HiArrowLeft } from "react-icons/hi2";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-sm text-foreground/60 mb-8">
              Last updated: March 9, 2026
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  1. Introduction
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Mintro Labs ("we", "our", or "us") is committed to protecting
                  your privacy. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you visit
                  our website and use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  2. Information We Collect
                </h2>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  2.1 Personal Data
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We may collect personally identifiable information that you
                  voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
                  <li>Register for an account</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Fill out a form</li>
                  <li>Contact us</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  This may include: name, email address, wallet address, and any
                  other information you choose to provide.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  2.2 Usage Data
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We automatically collect certain information when you visit,
                  use, or navigate our website, including:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>IP address</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We use the information we collect for various purposes:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
                  <li>To provide and maintain our services</li>
                  <li>To notify you about changes to our services</li>
                  <li>
                    To provide customer support and respond to your requests
                  </li>
                  <li>To analyze usage and improve our services</li>
                  <li>To detect, prevent and address technical issues</li>
                  <li>To send you marketing communications (with consent)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  4. Legal Basis for Processing (GDPR)
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  If you are from the European Economic Area (EEA), our legal
                  basis for collecting and using your personal information
                  depends on the data and context:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
                  <li>You have given consent for specific purposes</li>
                  <li>Processing is necessary for contract performance</li>
                  <li>Processing is necessary for legal obligations</li>
                  <li>Processing is in our legitimate interests</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  5. Your Data Protection Rights (GDPR)
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  If you are a resident of the EEA, you have the following data
                  protection rights:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
                  <li>
                    <strong>Right to access</strong> - You can request copies of
                    your personal data
                  </li>
                  <li>
                    <strong>Right to rectification</strong> - You can request
                    correction of inaccurate data
                  </li>
                  <li>
                    <strong>Right to erasure</strong> - You can request deletion
                    of your data
                  </li>
                  <li>
                    <strong>Right to restrict processing</strong> - You can
                    request restriction of processing
                  </li>
                  <li>
                    <strong>Right to object</strong> - You can object to
                    processing of your data
                  </li>
                  <li>
                    <strong>Right to data portability</strong> - You can request
                    transfer of your data
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. Cookies and Tracking Technologies
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to track
                  activity on our website. You can manage your cookie
                  preferences through our cookie consent banner. For more
                  details, please see our{" "}
                  <Link href="/cookie-policy" className="font-bold underline">
                    Cookie Policy
                  </Link>
                  .
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  7. Data Security
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security
                  measures to protect your personal data. However, no method of
                  transmission over the internet is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  8. Data Retention
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We retain your personal data only for as long as necessary for
                  the purposes set out in this Privacy Policy, unless a longer
                  retention period is required by law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  9. International Data Transfers
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Your information may be transferred to and maintained on
                  servers located outside your country. We ensure appropriate
                  safeguards are in place for such transfers in compliance with
                  GDPR.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  10. Children's Privacy
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Our services are not intended for individuals under 16 years
                  of age. We do not knowingly collect personal data from
                  children.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  11. Changes to This Privacy Policy
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  12. Contact Us
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or wish to
                  exercise your rights, please contact us at:
                </p>
                <div className="bg-primary border-2 border-foreground p-4">
                  <p className="text-foreground font-bold">
                    Email: privacy@mintrolabs.com
                  </p>
                  <p className="text-foreground/80">
                    Address: [Your Company Address]
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
