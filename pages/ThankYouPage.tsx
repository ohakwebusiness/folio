
import React from 'react';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '../components/icons/CheckCircleIcon';

const ThankYouPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <CheckCircleIcon className="w-24 h-24 text-green-500" />
          <h1 className="mt-8 text-4xl md:text-5xl font-bold text-brand-primary">Thank You for Subscribing!</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            You've been successfully added to our mailing list. You'll be the first to know about our latest news, insights, and special offers.
          </p>
          <Link
            to="/"
            className="mt-10 inline-block bg-brand-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-brand-secondary transition-colors duration-300 shadow-lg"
          >
            Return to Homepage
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ThankYouPage;
