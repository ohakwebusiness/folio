
import React from 'react';
import { teamMembers } from '../constants';
import TeamMemberCard from '../components/TeamMemberCard';
import CheckCircleIcon from '../components/icons/CheckCircleIcon';
import RocketIcon from '../components/icons/RocketIcon';
import BriefcaseIcon from '../components/icons/BriefcaseIcon';
import BuildingIcon from '../components/icons/BuildingIcon';

const AboutPage: React.FC = () => {
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
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-brand-secondary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About BigTink Digital Creations</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            Meet the passionate minds behind the digital masterpieces.
          </p>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-primary">Our Story</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Founded in 2020, BigTink Digital Creations was born from a desire to bridge the gap between great ideas and powerful digital execution. We saw a need for a truly integrated agency that could handle every aspect of a digital project—from initial strategy and design to development and launch—all under one roof. Our journey began with a small, dedicated team and a big vision: to become a trusted partner for businesses looking to make a real impact online.
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200&fit=max" alt="Team collaborating" className="rounded-lg shadow-xl"/>
            </div>
          </div>
          <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200&fit=max" alt="Whiteboard with strategy" className="rounded-lg shadow-xl"/>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-brand-primary">Mission & Vision</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                <strong>Our Mission:</strong> To empower businesses with innovative, high-quality digital solutions that drive growth, engagement, and success. We are committed to creativity, technical excellence, and building lasting client partnerships.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                <strong>Our Vision:</strong> To be a leading force in digital transformation, recognized for our ability to turn ambitious ideas into influential and enduring digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Stack Advantage */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">The Full-Stack Advantage</h2>
            <p className="mt-4 text-lg text-gray-600">
              As a full-stack agency, we offer a seamless, end-to-end development process. This integrated approach provides unique benefits for our clients.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircleIcon className="w-8 h-8 text-brand-light" />
              <h3 className="mt-4 text-xl font-bold text-brand-primary">Seamless Integration</h3>
              <p className="mt-2 text-gray-600">Our front-end and back-end teams work in harmony, ensuring your application is cohesive, stable, and high-performing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircleIcon className="w-8 h-8 text-brand-light" />
              <h3 className="mt-4 text-xl font-bold text-brand-primary">Efficient Problem-Solving</h3>
              <p className="mt-2 text-gray-600">With expertise across the entire stack, our team can quickly diagnose and resolve issues without cross-departmental delays.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircleIcon className="w-8 h-8 text-brand-light" />
              <h3 className="mt-4 text-xl font-bold text-brand-primary">Strategic Consistency</h3>
              <p className="mt-2 text-gray-600">A single, unified team ensures your project's vision and strategy are consistently applied from start to finish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
              <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Who We Serve</h2>
                  <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                      From ambitious startups to established enterprises, we tailor our solutions to fit your unique needs.
                  </p>
              </div>
              <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
                  {whoWeServe.map((client) => (
                      <div key={client.title} className="bg-gray-50 p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 border border-gray-200">
                          <div className="inline-block p-4 bg-brand-light rounded-full">
                              <client.icon className="h-8 w-8 text-brand-primary" />
                          </div>
                          <h3 className="mt-6 text-xl font-bold text-brand-primary">{client.title}</h3>
                          <p className="mt-2 text-gray-600">{client.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
      
      {/* Meet the Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Meet Our Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              The architects of your digital success. A blend of creativity, strategy, and technical prowess.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
