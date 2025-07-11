
import React from 'react';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import TwitterIcon from '../components/icons/TwitterIcon';
import InstagramIcon from '../components/icons/InstagramIcon';

const ContactPage: React.FC = () => {
  const contactDetails = [
    {
      icon: <svg className="w-6 h-6 mr-4 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>,
      label: 'Phone',
      value: '08166738666',
      href: 'tel:08166738666',
    },
    {
      icon: <svg className="w-6 h-6 mr-4 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
      label: 'Email',
      value: 'help.bigtinkdigitals@gmail.com',
      href: 'mailto:help.bigtinkdigitals@gmail.com',
    },
    {
      icon: <svg className="w-6 h-6 mr-4 text-brand-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>,
      label: 'Address',
      value: '2 Library Avenue, Umuahia. Abia State',
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-brand-secondary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            Have a project in mind? We'd love to hear from you. Reach out to us directly.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-brand-primary">Contact Information</h2>
              <p className="mt-2 text-lg text-gray-600">Our team is available to answer your questions. Reach out and let's start a conversation.</p>
              <div className="mt-8 space-y-6 text-left">
                {contactDetails.map(detail => (
                  <div key={detail.label} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">{detail.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-brand-primary">{detail.label}</h4>
                      {detail.href ? (
                         <a href={detail.href} className="text-gray-600 hover:text-brand-accent transition-colors duration-300">{detail.value}</a>
                      ) : (
                         <p className="text-gray-600">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social section */}
            <div className="mt-16 pt-12 border-t border-gray-200">
               <h3 className="text-2xl font-bold text-brand-primary">Follow Our Journey</h3>
               <p className="mt-2 text-gray-600">Stay connected with us on social media for the latest news, projects, and insights.</p>
               <div className="mt-6 flex justify-center space-x-6">
                <a href="#" className="text-gray-500 hover:text-brand-primary transition-colors"><LinkedInIcon className="w-8 h-8" /></a>
                <a href="#" className="text-gray-500 hover:text-brand-primary transition-colors"><TwitterIcon className="w-8 h-8" /></a>
                <a href="#" className="text-gray-500 hover:text-brand-primary transition-colors"><InstagramIcon className="w-8 h-8" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;