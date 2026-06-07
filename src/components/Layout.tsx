import React, { useEffect } from 'react';
import { Navbar, Footer } from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    let loaded = false;

    const loadChatWidget = () => {
      if (loaded) return;
      loaded = true;

      // Clean up event listeners immediately
      window.removeEventListener('scroll', loadChatWidget);
      window.removeEventListener('click', loadChatWidget);
      window.removeEventListener('touchstart', loadChatWidget);

      const script = document.createElement('script');
      script.src = "https://widgets.leadconnectorhq.com/loader.js";
      script.setAttribute('data-resources-url', "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
      script.setAttribute('data-widget-id', "683151ade4bd84cb632b4703");
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    // Trigger after 5 seconds
    const timer = setTimeout(loadChatWidget, 5000);

    // Trigger on user activity
    window.addEventListener('scroll', loadChatWidget, { passive: true });
    window.addEventListener('click', loadChatWidget, { passive: true });
    window.addEventListener('touchstart', loadChatWidget, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', loadChatWidget);
      window.removeEventListener('click', loadChatWidget);
      window.removeEventListener('touchstart', loadChatWidget);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F1EEE0]/30">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
