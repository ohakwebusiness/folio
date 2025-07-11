
import React from 'react';
import { Link } from 'react-router-dom';
import LinkedInIcon from './icons/LinkedInIcon';
import TwitterIcon from './icons/TwitterIcon';
import InstagramIcon from './icons/InstagramIcon';
import LightbulbIcon from './icons/LightbulbIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* About Section */}
          <div className="space-y-4 col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <LightbulbIcon className="w-8 h-8 text-brand-light" />
              <span className="text-xl font-bold">BigTink Digital Creations</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Transforming ideas into digital masterpieces. We are a full-stack agency dedicated to building innovative and effective digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-brand-light tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-brand-light tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-brand-light tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-brand-light tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="mt-1 mr-2">📍</span>
                <span>2 Library Avenue, Umuahia. Abia State</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:help.bigtinkdigitals@gmail.com" className="hover:text-white transition-colors">help.bigtinkdigitals@gmail.com</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:08166738666" className="hover:text-white transition-colors">08166738666</a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-brand-light tracking-wider uppercase">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-light transition-colors"><LinkedInIcon className="w-6 h-6" /></a>
              <a href="#" className="text-gray-300 hover:text-brand-light transition-colors"><TwitterIcon className="w-6 h-6" /></a>
              <a href="#" className="text-gray-300 hover:text-brand-light transition-colors"><InstagramIcon className="w-6 h-6" /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-secondary text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} BigTink Digital Creations. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;