
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { GoogleGenAI } from '@google/genai';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import PortfolioDetailPage from './pages/PortfolioDetailPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import NewsletterModal from './components/NewsletterModal';
import ThankYouPage from './pages/ThankYouPage';
import Toast from './components/Toast';
import type { Subscriber } from './types';

// This component contains the main app logic and can use router hooks
const AppContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Only show modal on the home page for the first visit in a session
    if (location.pathname === '/') {
      const modalShown = sessionStorage.getItem('newsletterModalShown');
      if (!modalShown) {
        const timer = setTimeout(() => {
          setIsModalOpen(true);
          sessionStorage.setItem('newsletterModalShown', 'true');
        }, 2000);
        return () => clearTimeout(timer);
      }
    }
  }, [location.pathname]);
  
  // Close modal on route change
  useEffect(() => {
     setIsModalOpen(false);
  }, [location.pathname]);

  const handleNewSubscription = async (subscriber: Subscriber) => {
    // 1. Show a toast notification on the dashboard
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Generate a short, friendly notification message for an admin dashboard. The message should confirm that a new user has just subscribed to the newsletter. User details: Name: ${subscriber.name}. Keep it under 15 words.`,
      });
      const notificationMessage = response.text;
      setToastMessage(notificationMessage);
    } catch (error) {
      console.error("Error generating toast notification:", error);
      // Fallback message if AI fails
      setToastMessage(`New subscription from ${subscriber.name}!`);
    }

    // 2. Simulate preparing data for a backend email notification service
    // In a real application, you would send this payload to a secure backend endpoint.
    const emailNotificationPayload = {
      recipient: 'ohakwebusiness@gmail.com',
      subject: `New Newsletter Subscription: ${subscriber.name}`,
      body: `A new user has subscribed to your newsletter.\n\nName: ${subscriber.name}\nEmail: ${subscriber.email}\nPhone: ${subscriber.phone}`,
      subscriberData: subscriber,
    };

    console.log('--- EMAIL NOTIFICATION SIMULATION ---');
    console.log('This payload should be sent to a secure backend endpoint for email delivery:');
    console.log(emailNotificationPayload);
    
    // Example of how you would send this data to a backend using fetch:
    /*
    try {
      const response = await fetch('https://your-backend-api.com/send-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailNotificationPayload),
      });
      if (!response.ok) {
        throw new Error('Backend notification failed');
      }
      console.log('Successfully sent notification data to backend.');
    } catch (error) {
      console.error('Failed to send notification data to backend:', error);
    }
    */
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </main>
      <Footer />
      <NewsletterModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubscribe={handleNewSubscription} 
      />
      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage(null)} />}
    </div>
  );
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;