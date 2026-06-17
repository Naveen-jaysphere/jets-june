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
    className="bg-cream-light rounded-[2rem] shadow-sm border-2 border-primary-dark overflow-hidden group flex flex-col h-full transition-all hover:shadow-[6px_6px_0px_rgba(43,82,95,0.7)]"
  >
    <div className="aspect-[4/3] overflow-hidden bg-[#FAF9F3] border-b-2 border-primary-dark">
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
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-condensed text-3xl font-extrabold text-primary-dark mb-2 group-hover:text-accent transition-colors uppercase tracking-wider">{service.title}</h3>
      <p className="text-sm text-primary mb-6 line-clamp-3 leading-relaxed font-semibold">{service.description}</p>
      <Link 
        to={`/${service.slug}`} 
        className="mt-auto inline-flex items-center justify-center w-full py-3 rounded-xl bg-primary text-white font-condensed text-xl tracking-wider uppercase font-bold hover:bg-accent hover:text-primary-dark transition-all border border-primary/20 group/btn shadow-[3px_3px_0px_rgba(14,42,53,1)] hover:shadow-none"
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
      <section className="relative bg-primary-dark text-white py-24 lg:py-36 overflow-hidden">
        {/* Diagonal Brand Stripes */}
        <div className="absolute inset-x-0 top-0 bottom-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -right-1/4 -top-1/4 w-full h-[150%] bg-[#2B525F] rotate-[-35deg]" />
          <div className="absolute -right-1/3 -top-1/4 w-[150px] h-[150%] bg-[#65D6CE] rotate-[-35deg]" />
          <div className="absolute -right-1/2 -top-1/4 w-[80px] h-[150%] bg-[#65D6CE] rotate-[-35deg] opacity-75" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Retro Tagline */}
            <span className="inline-block font-condensed text-2xl tracking-widest text-accent uppercase mb-4 animate-pulse">
              Hundreds of Happy Homeowners
            </span>
            <h1 className="text-5xl lg:text-8xl font-condensed tracking-tight uppercase leading-[0.95] mb-2 text-white">
              Richmond
            </h1>
            <h2 className="font-retro text-7xl lg:text-9xl text-accent tracking-wide mb-6 drop-shadow-[5px_5px_0px_#0E2A35] leading-none">
              Window Cleaning
            </h2>
            <p className="text-xl text-cream mb-10 leading-relaxed max-w-2xl font-medium">
              We provide professional, reliable, and high-quality exterior cleaning services that make your home or business shine. Streak-free windows, spotless siding, and clear gutters, guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
              <Link 
                to="/contact" 
                className="bg-accent text-primary-dark py-4 px-8 rounded-xl font-condensed text-2xl tracking-wider hover:bg-cream hover:text-primary-dark transition-all text-center flex items-center justify-center uppercase shadow-[4px_4px_0px_#0E2A35] hover:shadow-[2px_2px_0px_#0E2A35] hover:scale-[1.01] active:scale-[0.99] duration-150 border-2 border-primary-dark group"
              >
                Get a Free Quote <span className="ml-2 font-black group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Link>
              <a 
                href={`tel:${siteData.phone}`}
                className="bg-transparent text-cream-light py-4 px-8 rounded-xl font-condensed text-2xl tracking-wider hover:bg-cream-light hover:text-primary-dark transition-all text-center flex items-center justify-center uppercase border-2 border-cream-light shadow-[4px_4px_0px_rgba(255,255,255,0.15)] group"
              >
                Call {siteData.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-cream relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="font-retro text-4xl text-primary block mb-2">Jet's Premium Services</span>
            <h2 className="text-4xl lg:text-6xl font-condensed text-primary-dark tracking-wide uppercase">What We Shine At</h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full border border-primary-dark"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {siteData.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-cream-light relative overflow-hidden border-y-2 border-primary-dark/10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2B525F]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="font-retro text-4xl text-primary block mb-2">Our Quality Promise</span>
            <h2 className="text-4xl lg:text-6xl font-condensed text-primary-dark tracking-wide uppercase mb-4">Why RVA Trusts Jet's</h2>
            <p className="text-xl text-[#2B525F] max-w-2xl mx-auto font-bold uppercase tracking-wider font-condensed">We are dedicated to providing the absolute best exterior cleaning experience in RVA.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { icon: Shield, title: "Fully Insured & Professional", desc: "We carry comprehensive insurance to protect your property and our team, giving you peace of mind." },
              { icon: Award, title: "Quality Guarantee", desc: "We aren't happy until you are. If you aren't satisfied with our work, we'll make it right." },
              { icon: Clock, title: "Reliable Scheduling", desc: "We value your time. We show up when we say we will and complete the job efficiently." },
              { icon: Star, title: "Top-Rated Service", desc: "Our reputation in RVA is built on hundreds of happy customers and sparkling results." }
            ].map((item, i) => (
              <div key={i} className="flex items-start bg-cream p-6 rounded-2xl border-2 border-primary-dark shadow-[4px_4px_0px_#0E2A35]">
                <div className="bg-accent p-3 rounded-xl mr-4 flex-shrink-0 border border-primary-dark">
                  <item.icon className="h-6 w-6 text-primary-dark" />
                </div>
                <div>
                  <h4 className="font-condensed text-2xl font-bold text-primary-dark mb-1 uppercase tracking-wide">{item.title}</h4>
                  <p className="text-primary leading-relaxed font-semibold">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-cream p-8 rounded-2xl border-2 border-primary-dark shadow-[6px_6px_0px_#2B525F] max-w-2xl mx-auto flex flex-col items-center text-center">
            <div className="flex text-accent drop-shadow-[1.5px_1.5px_0px_rgba(14,42,53,1)] mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <p className="text-lg text-primary-dark font-semibold italic">"The best window cleaning service in Richmond! My house looks brand new."</p>
            <p className="text-primary font-condensed text-xl uppercase tracking-wider font-bold mt-3">- Sarah J., Midlothian</p>
          </div>
        </div>
      </section>

      {/* Service Areas Preview */}
      <section className="py-24 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-retro text-4xl text-primary block mb-2">RVA Proud</span>
            <h2 className="text-4xl lg:text-6xl font-condensed text-primary-dark tracking-wide uppercase">Proudly Serving the RVA Area</h2>
            <p className="text-lg text-primary max-w-2xl mx-auto font-semibold">We bring our expert cleaning services to neighborhoods across Richmond and surrounding counties.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {siteData.locations.map((location) => (
              <Link 
                key={location.id} 
                to={`/${location.slug}`}
                className="bg-cream-light text-primary hover:bg-accent hover:text-primary-dark hover:shadow-[3px_3px_0px_#0E2A35] transition-all px-6 py-3 rounded-xl font-condensed text-xl uppercase tracking-wider font-bold border-2 border-primary-dark"
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
      <section className="py-24 bg-primary-dark text-white relative overflow-hidden border-t-8 border-accent">
        {/* Diagonal Brand Stripes */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -left-1/4 -bottom-1/4 w-full h-[150%] bg-[#65D6CE] rotate-[35deg]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="font-retro text-5xl text-accent block mb-2 drop-shadow-[2px_2px_0px_rgba(14,42,53,1)]">Ready for a Sparkling Home?</span>
          <h2 className="text-4xl lg:text-7xl font-condensed uppercase tracking-wider mb-8">Let's Get Your Free Estimate</h2>
          <p className="text-xl text-cream mb-12 max-w-2xl mx-auto font-medium">Join hundreds of satisfied Richmond homeowners. Get your free, no-obligation quote in minutes.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-accent text-primary-dark px-10 py-5 rounded-xl font-condensed text-2xl tracking-wider uppercase font-bold hover:bg-cream hover:text-[#0E2A35] transition-all shadow-[6px_6px_0px_#2B525F] border-2 border-primary-dark"
            >
              Request a Free Quote
            </Link>
            <a 
              href={`tel:${siteData.phone}`} 
              className="w-full sm:w-auto bg-transparent border-2 border-cream-light text-cream-light px-10 py-5 rounded-xl font-condensed text-2xl tracking-wider uppercase font-bold hover:bg-cream-light hover:text-primary-dark transition-all"
            >
              Call {siteData.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
