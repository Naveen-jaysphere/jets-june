import React, { useEffect, useState, useRef } from 'react';

export const ReviewWidget: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
          
          // Dynamically load the widget script
          const script = document.createElement('script');
          script.src = 'https://reputationhub.site/reputation/assets/review-widget.js';
          script.async = true;
          document.body.appendChild(script);
        }
      },
      {
        rootMargin: '200px', // Load when section is close to viewport (200px before)
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={containerRef} className="pt-16 pb-0 bg-soft-teal/30 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 blur-3xl rounded-full"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#2B525F] mb-4">Customer Reviews</h2>
          <p className="text-xl text-gray-600">See what our satisfied customers in Richmond are saying about our work.</p>
        </div>
        <div className="w-full min-h-[400px]">
          {isLoaded ? (
            <iframe 
              className='lc_reviews_widget' 
              src='https://reputationhub.site/reputation/widgets/review_widget/YWfVYzUiOZwlfqlBB4Wu' 
              frameBorder='0' 
              scrolling='no' 
              style={{ minWidth: '100%', width: '100%', height: '550px' }}
              title="Customer Reviews"
            />
          ) : (
            <div className="w-full h-[550px] flex items-center justify-center text-gray-400">
              <span>Loading customer reviews...</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
