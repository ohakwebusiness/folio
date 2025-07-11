import React from 'react';
import { Link } from 'react-router-dom';
import { services, portfolioItems, testimonials } from '../constants';
import ServiceCard from '../components/ServiceCard';
import PortfolioCard from '../components/PortfolioCard';
import TestimonialCard from '../components/TestimonialCard';
import CheckCircleIcon from '../components/icons/CheckCircleIcon';
import RocketIcon from '../components/icons/RocketIcon';
import BriefcaseIcon from '../components/icons/BriefcaseIcon';
import BuildingIcon from '../components/icons/BuildingIcon';

const HomePage: React.FC = () => {
  const featuredServices = services.slice(0, 3);
  const featuredPortfolio = portfolioItems.slice(0, 5);

  const processSteps = [
    { name: 'Discovery', description: 'We start by understanding your vision, goals, and challenges.' },
    { name: 'Strategy', description: 'We craft a data-driven strategy and roadmap for success.' },
    { name: 'Design', description: 'Our team designs intuitive and beautiful user interfaces.' },
    { name: 'Development', description: 'We build robust, scalable, and secure applications.' },
    { name: 'Testing', description: 'Rigorous testing ensures a flawless final product.' },
    { name: 'Launch', description: 'We deploy your project and support its growth.' },
  ];
  
  const techLogos = [
    'https://cdn.svgporn.com/logos/react.svg',
    'https://cdn.svgporn.com/logos/nodejs-icon.svg',
    'https://cdn.svgporn.com/logos/javascript.svg',
    'https://cdn.svgporn.com/logos/typescript-icon.svg',
    'https://cdn.svgporn.com/logos/python.svg',
    'https://cdn.svgporn.com/logos/postgresql.svg',
    'https://cdn.svgporn.com/logos/mongodb-icon.svg',
    'https://cdn.svgporn.com/logos/figma.svg',
    'https://cdn.svgporn.com/logos/shopify.svg',
  ];

  const clientLogos = [
    { name: 'Google', url: 'https://cdn.svgporn.com/logos/google-icon.svg' },
    { name: 'Microsoft', url: 'https://cdn.svgporn.com/logos/microsoft-icon.svg' },
    { name: 'Amazon', url: 'https://cdn.svgporn.com/logos/amazon-icon.svg' },
    { name: 'Netflix', url: 'https://cdn.svgporn.com/logos/netflix-icon.svg' },
    { name: 'Spotify', url: 'https://cdn.svgporn.com/logos/spotify-icon.svg' },
    { name: 'Slack', url: 'https://cdn.svgporn.com/logos/slack-icon.svg' },
  ];

  const whoWeServe = [
    {
      icon: RocketIcon,
      title: 'Startups & Entrepreneurs',
      description: 'We help you launch your vision with scalable MVPs, robust platforms, and strategic guidance to secure your place in the market.',
    },
    {
      icon: BriefcaseIcon,
      title: 'Small & Medium Businesses',
      description: 'We empower your growth with custom websites, e-commerce solutions, and digital marketing that boosts your online presence.',
    },
    {
      icon: BuildingIcon,
      title: 'Large Enterprises',
      description: 'We provide reliable, scalable, and secure digital solutions, from internal tools to large-scale platform architecture.',
    },
  ];


  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Transforming Ideas into <span className="text-brand-light">Digital Masterpieces</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
            We are a full-stack digital agency specializing in web development, mobile apps, and UI/UX design. We build solutions that drive growth and delight users.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block bg-brand-light text-brand-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>

      {/* Trusted by Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-base font-semibold text-gray-600 tracking-wider uppercase">
            Trusted by Industry Leaders
          </h2>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-x-10 md:gap-x-16 gap-y-8">
            {clientLogos.map((logo) => (
              <img
                key={logo.name}
                className="h-9 sm:h-10 transition-all duration-300 filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
                src={logo.url}
                alt={logo.name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Our Core Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              We offer a comprehensive suite of services to bring your digital vision to life.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="font-semibold text-brand-accent hover:text-brand-primary transition-colors">
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Featured Work</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Take a look at some of the impactful solutions we've delivered for our clients.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredPortfolio.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
           <div className="text-center mt-12">
            <Link to="/portfolio" className="font-semibold text-brand-accent hover:text-brand-primary transition-colors">
              Explore Our Portfolio &rarr;
            </Link>
          </div>
        </div>
      </section>
      
      {/* Who We Serve Section */}
      <section className="py-16 md:py-24 bg-brand-primary text-white">
          <div className="container mx-auto px-4">
              <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold">Serving Businesses of All Sizes</h2>
                  <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                      From ambitious startups to established enterprises, we tailor our solutions to fit your unique needs.
                  </p>
              </div>
              <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
                  {whoWeServe.map((client) => (
                      <div key={client.title} className="bg-brand-secondary p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                          <div className="inline-block p-4 bg-brand-accent rounded-full">
                              <client.icon className="h-8 w-8 text-brand-light" />
                          </div>
                          <h3 className="mt-6 text-xl font-bold text-white">{client.title}</h3>
                          <p className="mt-2 text-gray-300">{client.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Our Proven Process</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              We follow a structured approach to ensure quality, efficiency, and transparency from start to finish.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.name} className="flex items-start space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-brand-light text-brand-primary font-bold text-xl">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-primary">{step.name}</h3>
                  <p className="mt-1 text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-brand-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Clients Say</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              We're proud to build partnerships and deliver results that speak for themselves.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Tech Showcase */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-xl font-semibold text-gray-500">We Build With World-Class Technologies</h3>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-6">
            {techLogos.map((logo, index) => (
              <img key={index} src={logo} alt={`Tech logo ${index + 1}`} className="h-10 md:h-12 opacity-60 hover:opacity-100 transition-opacity" />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;