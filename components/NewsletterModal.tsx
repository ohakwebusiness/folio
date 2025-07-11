
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Subscriber } from '../types';
import XIcon from './icons/XIcon';
import MailIcon from './icons/MailIcon';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: (subscriber: Subscriber) => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose, onSubscribe }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setError('Please fill out all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        setError('Please enter a valid email address.');
        return;
    }
    setError('');

    const newSubscriber: Subscriber = { name, email, phone };
    
    try {
      const existingSubscribers = JSON.parse(localStorage.getItem('subscribers') || '[]') as Subscriber[];
      localStorage.setItem('subscribers', JSON.stringify([...existingSubscribers, newSubscriber]));
    } catch (e) {
      console.error("Could not save subscriber to local storage", e);
    }
    
    onSubscribe(newSubscriber);
    navigate('/thank-you');
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-md mx-auto relative transform transition-all duration-300 scale-95 animate-modal-pop"
        onClick={e => e.stopPropagation()}
      >
        <style>
          {`
          @keyframes modal-pop {
              from { transform: scale(0.95); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
          }
          .animate-modal-pop {
              animation: modal-pop 0.3s ease-out forwards;
          }
          `}
        </style>
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition-colors" aria-label="Close modal">
          <XIcon className="w-6 h-6" />
        </button>
        
        <div className="p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-brand-light text-brand-primary">
                <MailIcon className="h-8 w-8" />
            </div>
          <h2 id="modal-title" className="mt-6 text-2xl font-bold text-brand-primary">Subscribe to Our Newsletter</h2>
          <p className="mt-2 text-gray-600">
            Get the latest insights, tips, and news delivered straight to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="mt-6 text-left space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-700 sr-only">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name" 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-accent focus:border-brand-accent transition-shadow"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700 sr-only">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-accent focus:border-brand-accent transition-shadow"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-gray-700 sr-only">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)} 
                placeholder="Your Phone Number" 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-accent focus:border-brand-accent transition-shadow"
                required
              />
            </div>
            {error && <p className="text-sm text-red-600 text-center">{error}</p>}
            <button 
              type="submit" 
              className="w-full bg-brand-primary text-white font-bold py-3 px-8 rounded-md hover:bg-brand-secondary transition-colors duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
            >
              Subscribe Now
            </button>
          </form>
          <p className="mt-4 text-xs text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;