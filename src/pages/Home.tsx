import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, Star, Shield, Clock, Award, Phone } from 'lucide-react';
import { siteData } from '../data/siteData';
import { SEO } from '../components/SEO';
import { ReviewWidget } from '../components/ReviewWidget';

const ServiceCard: React.FC<{ service: typeof siteData.services[0] }> = ({ service }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden group flex flex-col h-full transition-all hover:shadow-xl hover:shadow-[#2B525F]/5"
  >
    <div className="aspect-[4/3] overflow-hidden bg-gray-50">
      <img 
        src={service.image} 
        alt={service.title} 
        width={360}
        height={270}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-6 pt-0 flex flex-col flex-grow">
      <h3 className="text-lg font-bold text-[#2B525F] mb-4 group-hover:text-[#65D6CE] transition-colors line-clamp-1">{service.title}</h3>
      <Link 
        to={`/${service.slug}`} 
        className="mt-auto inline-flex items-center justify-center w-full py-3 rounded-xl bg-[#F1EEE0] text-[#2B525F] font-bold text-sm hover:bg-[#65D6CE] transition-all group/btn"
      >
        View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
      </Link>
    </div>
  </motion.div>
);

export const Home: React.FC = () => {
  // ... existing schema ...
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteData.companyName,
    "image": window.location.origin + "/images/team.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Richmond",
      "addressRegion": "VA",
      "postalCode": "23220",
      "streetAddress": "Richmond, VA"
    },
    "telephone": siteData.phone,
    "email": siteData.email,
    "url": window.location.origin,
    "priceRange": "$$",
    "openingHours": "Mo-Fr 08:00-18:00",
    "sameAs": [
      siteData.facebook,
      siteData.instagram
    ]
  };

  return (
    <>
      <SEO 
        title="Jets Window Cleaning | Window Cleaning Services in Richmond"
        description="Jets Window Cleaning in Richmond offers expert Window Cleaning services. For years, we have provided reliable Window Cleaning!"
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="relative bg-[#2B525F] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/hero-768.webp" 
            srcSet="/images/hero-480.webp 480w, /images/hero-768.webp 768w, /images/hero-1280.webp 1280w"
            sizes="100vw"
            alt="Jet's Window Cleaning Hero" 
            width={1280}
            height={720}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
            >
              Richmond's Premier <span className="text-[#65D6CE]">Window Cleaning</span> & Exterior Care
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-200 mb-10 leading-relaxed"
            >
              We provide professional, reliable, and high-quality exterior cleaning services that make your home or business shine. Streak-free windows, spotless siding, and clear gutters, guaranteed.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/contact" 
                className="bg-[#65D6CE] text-[#2B525F] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors text-center"
              >
                Get Your Free Quote
              </Link>
              <a 
                href={`tel:${siteData.phone}`} 
                className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#2B525F] transition-colors text-center flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" /> {siteData.phone}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-soft-teal/20 relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#2B525F] mb-4">Our Professional Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Expert care for every part of your property's exterior.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {siteData.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-cream/30 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#2B525F] mb-8">Why Richmond Homeowners Trust Jet's</h2>
              <div className="space-y-6">
                {[
                  { icon: Shield, title: "Fully Insured & Professional", desc: "We carry comprehensive insurance to protect your property and our team, giving you peace of mind." },
                  { icon: Award, title: "Quality Guarantee", desc: "We aren't happy until you are. If you aren't satisfied with our work, we'll make it right." },
                  { icon: Clock, title: "Reliable Scheduling", desc: "We value your time. We show up when we say we will and complete the job efficiently." },
                  { icon: Star, title: "Top-Rated Service", desc: "Our reputation in RVA is built on hundreds of happy customers and sparkling results." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-[#65D6CE] p-3 rounded-xl mr-4">
                      <item.icon className="h-6 w-6 text-[#2B525F]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2B525F] mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative bg-gray-100 rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto">
              <img 
                src="https://assets.cdn.filesafe.space/YWfVYzUiOZwlfqlBB4Wu/media/698c021352c952a014e920ac.jpg" 
                alt="Professional Window Cleaning Excellence" 
                width={600}
                height={450}
                loading="lazy"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs">
                <div className="flex text-[#65D6CE] mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-[#2B525F] font-bold italic">"The best window cleaning service in Richmond! My house looks brand new."</p>
                <p className="text-gray-500 text-sm mt-2">- Sarah J., Midlothian</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Preview */}
      <section className="py-24 bg-soft-teal/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#2B525F] mb-4">Proudly Serving the RVA Area</h2>
            <p className="text-xl text-gray-600">We bring our expert cleaning services to neighborhoods across Richmond and surrounding counties.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {siteData.locations.map((location) => (
              <Link 
                key={location.id} 
                to={`/${location.slug}`}
                className="bg-[#F1EEE0] text-[#2B525F] px-6 py-3 rounded-full font-bold hover:bg-[#65D6CE] transition-colors"
              >
                {location.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewWidget />

      {/* Call to Action Section */}
      <section className="py-24 bg-[#2B525F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">Ready for a Sparkling Home?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">Join hundreds of satisfied Richmond homeowners. Get your free, no-obligation quote in minutes.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact" 
              className="bg-[#65D6CE] text-[#2B525F] px-10 py-5 rounded-full font-bold text-xl hover:bg-white transition-colors"
            >
              Request a Free Quote
            </Link>
            <a 
              href={`tel:${siteData.phone}`} 
              className="bg-transparent border-2 border-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-[#2B525F] transition-colors"
            >
              Call {siteData.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
