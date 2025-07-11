
import React, { useEffect } from 'react';
import BellIcon from './icons/BellIcon';
import XIcon from './icons/XIcon';

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // Auto-close after 5 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div 
      role="alert"
      aria-live="assertive"
      className="fixed top-5 right-5 z-[200] w-full max-w-sm animate-slide-in"
    >
       <style>{`
          @keyframes slide-in {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-in {
            animation: slide-in 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }
       `}</style>
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="p-4 flex items-start">
          <div className="flex-shrink-0">
             <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <BellIcon className="w-6 h-6 text-green-600" />
             </div>
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-semibold text-gray-900">New Subscription!</p>
            <p className="mt-1 text-sm text-gray-600">{message}</p>
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              onClick={onClose}
              className="inline-flex rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
              aria-label="Close notification"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
