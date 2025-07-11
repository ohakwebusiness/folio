
import React from 'react';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { icon: Icon, title, description, technologies } = service;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-primary text-brand-light">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="mt-6 text-xl font-bold text-brand-primary">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200 flex-grow flex flex-col justify-end">
        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Technologies</h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs font-medium text-brand-secondary bg-indigo-100 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
