
import React from 'react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-brand-secondary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose lg:prose-lg max-w-none text-gray-700 space-y-12">
            <div className="space-y-4">
              <h2>1. Agreement to Terms</h2>
              <p>
                By using our website, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our website. We may modify these terms at any time, and such modifications shall be effective immediately upon posting the modified terms on the website.
              </p>
            </div>

            <div className="space-y-4">
              <h2>2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
              </p>
            </div>

            <div className="space-y-4">
              <h2>3. User Representations</h2>
              <p>By using the Site, you represent and warrant that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2>4. Prohibited Activities</h2>
              <p>
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
            </div>

            <div className="space-y-4">
              <h2>5. Governing Law</h2>
              <p>
                These Terms of Service and your use of the Site are governed by and construed in accordance with the laws of the state where our company is registered, without regard to its conflict of law principles.
              </p>
            </div>

            <div className="space-y-4">
              <h2>6. Disclaimer</h2>
              <p>
                The site is provided on an as-is and as-available basis. You agree that your use of the site and our services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the site and your use thereof.
              </p>
            </div>

            <div className="space-y-4">
              <h2>7. Limitation of Liability</h2>
              <p>
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the site.
              </p>
            </div>

            <div className="space-y-4">
              <h2>8. Contact Us</h2>
              <p>
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
              </p>
              <address className="not-italic p-4 bg-gray-50 border-l-4 border-brand-accent">
                BigTink Digital Creations<br />
                2 Library Avenue, Umuahia. Abia State<br />
                <a href="mailto:help.bigtinkdigitals@gmail.com" className="text-brand-accent hover:underline">help.bigtinkdigitals@gmail.com</a>
              </address>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
