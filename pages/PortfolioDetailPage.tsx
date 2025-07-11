
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioItems } from '../constants';
import ArrowLeftIcon from '../components/icons/ArrowLeftIcon';
import CheckCircleIcon from '../components/icons/CheckCircleIcon';

const PortfolioDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const portfolioItem = portfolioItems.find(item => item.id.toString() === id);

  if (!portfolioItem) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-brand-primary">Project Not Found</h1>
        <p className="mt-4 text-gray-600">Sorry, we couldn't find the project you're looking for.</p>
        <Link to="/portfolio" className="mt-8 inline-block bg-brand-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-brand-secondary transition-colors">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  const { title, image, client, year, servicesProvided, technologies, description, challenge, solution, result, keyFeatures } = portfolioItem;

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-brand-secondary py-12">
        <div className="container mx-auto px-4 max-w-5xl">
            <Link to="/portfolio" className="inline-flex items-center text-brand-light hover:text-white transition-colors mb-6">
                <ArrowLeftIcon className="w-5 h-5 mr-2" />
                Back to Portfolio
            </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
          <p className="mt-2 text-lg text-gray-300">{description}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
                <div>
                    <img src={image} alt={title} className="rounded-lg shadow-2xl w-full" />
                </div>
                
                <div className="prose lg:prose-lg max-w-none text-gray-800 space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-brand-primary">The Challenge</h2>
                        <p className="mt-2 text-gray-600 leading-relaxed">{challenge}</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-brand-primary">Our Solution</h2>
                        <p className="mt-2 text-gray-600 leading-relaxed">{solution}</p>
                    </div>
                    
                    <div>
                        <h2 className="text-2xl font-bold text-brand-primary">The Result</h2>
                        <p className="mt-2 text-gray-600 leading-relaxed">{result}</p>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1 space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-brand-primary border-b border-gray-300 pb-3 mb-4">Project Details</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between"><strong>Client:</strong> <span>{client}</span></li>
                  <li className="flex justify-between"><strong>Year:</strong> <span>{year}</span></li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-brand-primary border-b border-gray-300 pb-3 mb-4">Services Provided</h3>
                <ul className="space-y-2 mt-4">
                    {servicesProvided.map(service => (
                        <li key={service} className="flex items-center text-gray-700">
                            <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
                            <span>{service}</span>
                        </li>
                    ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-brand-primary border-b border-gray-300 pb-3 mb-4">Key Features</h3>
                 <ul className="space-y-2 mt-4">
                    {keyFeatures.map(feature => (
                        <li key={feature} className="flex items-start text-gray-700">
                             <span className="text-brand-accent mr-2 mt-1.5 flex-shrink-0">&#8227;</span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-brand-primary border-b border-gray-300 pb-3 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                    {technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 text-sm font-medium text-brand-secondary bg-indigo-100 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetailPage;
