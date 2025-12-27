import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <section className="bg-primary py-16 lg:py-24">
        <div className="container-custom">
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-primary-foreground/80">
            Last updated: December 2024
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-2xl font-bold text-foreground">Introduction</h2>
            <p className="text-muted-foreground">
              NexaTech Consulting ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website or use our services.
            </p>

            <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Information We Collect</h2>
            <p className="text-muted-foreground">
              We may collect information about you in a variety of ways, including:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li><strong className="text-foreground">Personal Data:</strong> Name, email address, phone number, company name, and job title that you voluntarily provide when contacting us or using our services.</li>
              <li><strong className="text-foreground">Usage Data:</strong> Information about how you use our website, including pages visited, time spent, and navigation patterns.</li>
              <li><strong className="text-foreground">Technical Data:</strong> IP address, browser type, device information, and operating system.</li>
            </ul>

            <h2 className="mt-8 font-display text-2xl font-bold text-foreground">How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use the information we collect to:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Deliver services and fulfill contractual obligations</li>
              <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or 
              destruction. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Your Rights</h2>
            <p className="text-muted-foreground">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>

            <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Cookies</h2>
            <p className="text-muted-foreground">
              We use cookies and similar tracking technologies to enhance your experience on 
              our website. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              <strong className="text-foreground">privacy@nexatech.com</strong>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
