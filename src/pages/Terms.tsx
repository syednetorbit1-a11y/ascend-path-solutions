import { Layout } from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="bg-primary py-16 lg:py-24">
        <div className="container-custom">
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-primary-foreground/80">
            Last updated: December 2024
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-2xl font-bold text-foreground">Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using the NexaTech Consulting website and services, you agree to be 
              bound by these Terms and Conditions. If you disagree with any part of these terms, 
              you may not access our services.
            </p>

            <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Use of Services</h2>
            <p className="text-muted-foreground">
              You agree to use our services only for lawful purposes and in accordance with these 
              Terms. You agree not to:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Use our services in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Transmit any malicious code or interfere with service functionality</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
            </ul>

            <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content on this website, including text, graphics, logos, and software, is the 
              property of NexaTech Consulting or its licensors and is protected by intellectual 
              property laws. You may not reproduce, distribute, or create derivative works without 
              our express written permission.
            </p>

            <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the fullest extent permitted by law, NexaTech Consulting shall not be liable for 
              any indirect, incidental, special, consequential, or punitive damages arising out of 
              or relating to your use of our services.
            </p>

            <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and construed in accordance with the laws of the 
              State of New York, without regard to its conflict of law provisions.
            </p>

            <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms at any time. We will notify you of any 
              changes by posting the new Terms on this page and updating the "Last updated" date.
            </p>

            <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about these Terms, please contact us at:
              <br />
              <strong className="text-foreground">legal@nexatech.com</strong>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
