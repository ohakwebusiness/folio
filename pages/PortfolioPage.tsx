
import React from 'react';
import { portfolioItems } from '../constants';
import PortfolioCard from '../components/PortfolioCard';

const PortfolioPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <section className="bg-brand-secondary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Our Portfolio</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            We're proud of the work we do. Explore some of our favorite projects and case studies.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
