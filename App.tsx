
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
      const notificationMessage = response.text || `New subscription from ${subscriber.name}!`;
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

  // --- AI Chat Bubble Component ---
  const AIChatBubble: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<{ from: 'user' | 'ai', text: string }[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
      if (!input.trim()) return;
      setMessages((msgs) => [...msgs, { from: 'user', text: input }]);
      setLoading(true);
      setInput('');
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: `You are a helpful assistant for a digital agency. Answer the user's question in a friendly, clear, and helpful way. If the user seems interested in services, encourage them to book a consultation or chat on WhatsApp (https://wa.link/szh5o9).\n\nUser: ${input}`,
        });
        const aiText = response.text || 'Sorry, I could not get an answer. Please try again.';
        setMessages((msgs) => [...msgs, { from: 'ai', text: aiText }]);
      } catch (e) {
        setMessages((msgs) => [...msgs, { from: 'ai', text: 'Sorry, something went wrong. Please try again.' }]);
      }
      setLoading(false);
    };

    return (
      <div className="fixed z-[200] bottom-6 right-4 md:right-8 flex flex-col items-end">
        {open && (
          <div className="w-80 max-w-xs bg-white rounded-lg shadow-2xl mb-3 p-4 flex flex-col border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-brand-primary">Ask BigTink AI</span>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-700 p-1 rounded-full focus:outline-none">
                ×
              </button>
            </div>
            <div className="flex-1 overflow-y-auto mb-2 max-h-48 text-sm space-y-2">
              {messages.length === 0 && (
                <div className="text-gray-500">Ask us anything about our services, or how we can help you!</div>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={msg.from === 'user' ? 'text-right' : 'text-left'}>
                  <span className={msg.from === 'user' ? 'inline-block bg-brand-light text-brand-primary px-3 py-1 rounded-lg mb-1' : 'inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-lg mb-1'}>
                    {msg.from === 'ai' && msg.text.includes('https://wa.link/szh5o9')
                      ? <span dangerouslySetInnerHTML={{ __html: msg.text.replace(/https:\/\/wa\.link\/szh5o9/g, '<a href="https://wa.link/szh5o9" target="_blank" rel="noopener noreferrer" class="underline text-brand-accent">Chat on WhatsApp</a>').replace(/\n/g, '<br />') }} />
                      : msg.from === 'ai'
                        ? <span dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }} />
                        : msg.text}
                  </span>
                </div>
              ))}
              {loading && <div className="text-gray-400">AI is typing...</div>}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm focus:ring-brand-accent focus:border-brand-accent"
                placeholder="Type your question..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
                disabled={loading}
              />
              <button
                onClick={handleSend}
                className="bg-brand-primary text-white px-3 py-1 rounded hover:bg-brand-secondary text-sm disabled:opacity-50"
                disabled={loading}
              >
                Send
              </button>
            </div>
            <div className="mt-2 text-xs text-gray-500 text-center">
              Need live help? <a href="https://wa.link/szh5o9" target="_blank" rel="noopener noreferrer" className="underline text-brand-accent">Chat on WhatsApp</a>
            </div>
          </div>
        )}
        <button
          onClick={() => setOpen(o => !o)}
          className="bg-brand-primary text-white rounded-full shadow-lg p-4 flex items-center justify-center hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-light"
          aria-label="Open chat"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#ffd700"/><path d="M8 10h8M8 14h5" stroke="#022c43" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>
    );
  };
  // --- End AI Chat Bubble ---

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
      <AIChatBubble />
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