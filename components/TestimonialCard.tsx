
import React from 'react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-brand-primary text-white rounded-lg shadow-lg p-8 h-full flex flex-col">
        <svg className="w-10 h-10 text-brand-light mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.33 12.5h-4.33v-10h10v4.469c-2.58 0.531-4.688 2.625-5.67 5.531zM26.67 12.5h-4.33v-10h10v4.469c-2.58 0.531-4.688 2.625-5.67 5.531z"></path>
        </svg>
      <blockquote className="flex-grow">
        <p className="text-lg italic">"{testimonial.quote}"</p>
      </blockquote>
      <footer className="mt-6">
        <p className="font-bold text-brand-light">{testimonial.author}</p>
        <p className="text-sm text-gray-300">{testimonial.company}</p>
      </footer>
    </div>
  );
};

export default TestimonialCard;
