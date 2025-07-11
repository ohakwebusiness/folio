
import React from 'react';
import { Link } from 'react-router-dom';
import type { PortfolioItem } from '../types';
import ArrowRightIcon from './icons/ArrowRightIcon';

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  return (
    <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
      <div className="overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold text-brand-accent uppercase tracking-wide">{item.category}</p>
        <h3 className="mt-2 text-xl font-bold text-brand-primary">{item.title}</h3>
        <p className="mt-3 text-gray-600 line-clamp-2">{item.description}</p>
        <div className="mt-4">
          <Link to={`/portfolio/${item.id}`} className="inline-flex items-center font-semibold text-brand-accent hover:text-brand-primary transition-colors">
            View Case Study
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
