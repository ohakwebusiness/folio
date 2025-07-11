
import React from 'react';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-brand-secondary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose lg:prose-lg max-w-none text-gray-700 space-y-12">
            <div className="space-y-4">
              <h2>1. What Are Cookies?</h2>
              <p>
                A cookie is a small text file that is stored on your computer or mobile device when you visit a website. It enables the website to remember your actions and preferences (such as login, language, font size, and other display preferences) over a period of time, so you don’t have to keep re-entering them whenever you come back to the site or browse from one page to another.
              </p>
            </div>

            <div className="space-y-4">
              <h2>2. How We Use Cookies</h2>
              <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.</p>
              <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Functionality:</strong> To provide core website functionality, such as remembering your preferences.</li>
                  <li><strong>Analytics:</strong> To help us understand how our website is being used, so we can improve the user experience. We use services like Google Analytics for this purpose.</li>
                  <li><strong>Marketing:</strong> To deliver relevant advertising and measure the effectiveness of our campaigns.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2>3. Types of Cookies We Use</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems.
                </li>
                <li>
                  <strong>Performance and Analytics Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
                </li>
                <li>
                  <strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2>4. Your Choices Regarding Cookies</h2>
              <p>
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
              </p>
              <p>
                For more details, see <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">aboutcookies.org</a>.
              </p>
            </div>

            <div className="space-y-4">
              <h2>5. Changes to This Cookie Policy</h2>
              <p>
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
              </p>
            </div>

            <div className="space-y-4">
              <h2>6. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at:
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

export default CookiePolicyPage;
