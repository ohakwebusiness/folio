
import React from 'react';
import { services } from '../constants';
import ServiceCard from '../components/ServiceCard';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <section className="bg-brand-secondary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            A complete range of digital services to build, launch, and grow your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">What We Do For Our Clients</h2>
            <p className="mt-4 text-lg text-gray-600">
              As a full-stack digital agency, we provide comprehensive solutions tailored to meet your unique business needs. From strategy to execution, we are your dedicated partners in the digital landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
