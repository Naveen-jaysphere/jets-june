import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { siteData } from '../data/siteData';
import { ReviewWidget } from '../components/ReviewWidget';

export const Gallery: React.FC = () => {
  const images = [
    { src: "https://assets.cdn.filesafe.space/YWfVYzUiOZwlfqlBB4Wu/media/698c021352c952a014e920ac.jpg", alt: "Professional Window Cleaning" },
    { src: "https://assets.cdn.filesafe.space/YWfVYzUiOZwlfqlBB4Wu/media/683299cf9ba03cfdaf6e98bf.jpeg", alt: "Power Washing Results" },
    { src: "https://assets.cdn.filesafe.space/YWfVYzUiOZwlfqlBB4Wu/media/6832c2d7d64e1e86bc1fe37e.png", alt: "House Soft Washing" },
    { src: "https://assets.cdn.filesafe.space/YWfVYzUiOZwlfqlBB4Wu/media/683299cf0eaa6e549b4f4fec.jpeg", alt: "Gutter Cleaning Service" },
    { src: "https://assets.cdn.filesafe.space/YWfVYzUiOZwlfqlBB4Wu/media/6834b18a5b7ef56fb7953a7e.jpeg", alt: "Aggregate Sealing" },
    { src: "https://assets.cdn.filesafe.space/YWfVYzUiOZwlfqlBB4Wu/media/6834b736a0411eeda1e1f741.jpeg", alt: "Skylight Detailing" },
    { src: "https://assets.cdn.filesafe.space/YWfVYzUiOZwlfqlBB4Wu/media/6988c2dd0a7fd1240c2f7658.jpg", alt: "Exterior Maintenance" },
    { src: "https://assets.cdn.filesafe.space/YWfVYzUiOZwlfqlBB4Wu/media/6834b65790c587d1f3948755.jpeg", alt: "Residential Glass Care" },
    { src: "https://assets.cdn.filesafe.space/YWfVYzUiOZwlfqlBB4Wu/media/6834b60c016c6938d2f730e7.jpeg", alt: "Driveway Power Washing" },
    { src: "https://assets.cdn.filesafe.space/YWfVYzUiOZwlfqlBB4Wu/media/6834b602016c69d321f730dd.jpeg", alt: "Sidewalk Cleaning" },
    { src: "https://assets.cdn.filesafe.space/YWfVYzUiOZwlfqlBB4Wu/media/6834b3b7016c6983ccf72e55.jpeg", alt: "Patio Restoration" },
    { src: "https://assets.cdn.filesafe.space/YWfVYzUiOZwlfqlBB4Wu/media/6834b34b5b7ef58fe2953c76.jpeg", alt: "Brick Cleaning" },
    { src: "https://assets.cdn.filesafe.space/YWfVYzUiOZwlfqlBB4Wu/media/6834b12cc305a9c432bf307f.jpeg", alt: "Gutter Debris Removal" },
    { src: "https://assets.cdn.filesafe.space/YWfVYzUiOZwlfqlBB4Wu/media/683389dd7b2bc6a2bc0a84e6.jpeg", alt: "Window Sill Detailing" },
    { src: "https://assets.cdn.filesafe.space/YWfVYzUiOZwlfqlBB4Wu/media/683389dd7b2bc659660a84e4.jpeg", alt: "Track Cleaning" },
    { src: "https://assets.cdn.filesafe.space/YWfVYzUiOZwlfqlBB4Wu/media/68335b3bd4d052688a26db07.jpeg", alt: "Screen Washing" },
    { src: "https://assets.cdn.filesafe.space/YWfVYzUiOZwlfqlBB4Wu/media/683358f5d4d052406926d8ec.jpeg", alt: "Jet's Window Cleaning Excellence" },
  ];

  return (
    <>
      <SEO 
        title={`Gallery | Jet's Window Cleaning Richmond VA`}
        description="View our portfolio of professional window cleaning, power washing, and gutter cleaning projects across the Greater Richmond area."
      />
      
      {/* Hero Section */}
      <section className="relative bg-[#2B525F] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src={siteData.heroImage} 
            alt="Gallery Background" 
            width={1200}
            height={600}
            fetchPriority="high"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Work Gallery</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Take a look at some of the sparkling results we've delivered for our clients throughout Richmond and surrounding counties.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-cream/10 relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-3xl shadow-lg aspect-[4/3] bg-gray-50"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                width={400}
                height={300}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      <ReviewWidget />
    </>
  );
};
