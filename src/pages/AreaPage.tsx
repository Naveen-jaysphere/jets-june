import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  ChevronRight, 
  MapPin, 
  Star,
  ShieldCheck,
  Clock,
  Zap,
  Building2,
  AlertCircle,
  CheckCircle2,
  ClipboardCheck,
  Package,
  Info
} from 'lucide-react';
import { siteData } from '../data/siteData';
import { SEO } from '../components/SEO';
import { ReviewWidget } from '../components/ReviewWidget';

export const AreaPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = siteData.locations.find(l => l.slug === slug);

  if (!location) {
    return <Navigate to="/" replace />;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${siteData.companyName} - ${location.name}`,
    "image": window.location.origin + "/images/team.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.name,
      "addressRegion": location.state,
      "streetAddress": `${location.name}, ${location.state}`
    },
    "telephone": siteData.phone,
    "email": siteData.email,
    "url": window.location.origin + `/${location.slug}`,
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": location.name
    }
  };

  return (
    <>
      <SEO 
        title={`Window Cleaning in ${location.name}, ${location.state} | ${siteData.companyName}`}
        description={`Professional window cleaning, power washing, and gutter cleaning in ${location.name}, ${location.state}. Top-rated local service for ${location.name} homeowners. Get a free quote!`}
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="relative bg-primary-dark text-white py-24 lg:py-32 overflow-hidden border-b-8 border-accent">
        {/* Diagonal Brand Stripes */}
        <div className="absolute inset-x-0 top-0 bottom-0 overflow-hidden opacity-25 pointer-events-none">
          <div className="absolute -right-1/4 -top-1/4 w-full h-[150%] bg-[#2B525F] rotate-[-35deg]" />
          <div className="absolute -right-1/3 -top-1/4 w-[150px] h-[150%] bg-[#65D6CE] rotate-[-35deg]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-3xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center text-accent mb-6 text-sm font-bold uppercase tracking-[0.2em] font-condensed"
              >
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="h-4 w-4 mx-2 opacity-50" />
                <span>Service Areas</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl lg:text-7xl font-condensed tracking-wider uppercase mb-8 leading-[1.1]"
              >
                Window Cleaning in <span className="font-retro text-accent lowercase block text-5xl lg:text-6xl mt-2 drop-shadow-[2px_2px_0px_rgba(14,42,53,1)]">{location.name}</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-cream mb-10 leading-relaxed max-w-2xl font-semibold"
              >
                Looking for the best window cleaning in {location.name}? {siteData.companyName} provides professional, reliable, and streak-free exterior cleaning services for residential and commercial properties throughout {location.name} and surrounding neighborhoods.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-5"
              >
                <Link to="/contact" className="bg-accent text-primary-dark px-10 py-5 rounded-full font-condensed text-xl uppercase tracking-wider font-extrabold border-2 border-primary-dark shadow-[4px_4px_0px_rgba(14,42,53,1)] hover:bg-white hover:translate-y-px hover:shadow-[2px_2px_0px_rgba(14,42,53,1)] transition-all text-center">
                  Get a Free Quote in {location.name}
                </Link>
                <a href={`tel:${siteData.phone}`} className="bg-cream text-primary-dark border-2 border-primary-dark px-10 py-5 rounded-full font-condensed text-xl uppercase tracking-wider font-extrabold hover:bg-accent hover:translate-y-px hover:shadow-[2px_2px_0px_rgba(14,42,53,1)] transition-all text-center flex items-center justify-center shadow-[4px_4px_0px_rgba(14,42,53,1)] group">
                  <Phone className="mr-3 h-5 w-5 group-hover:animate-pulse" /> {siteData.phone}
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full lg:w-[400px]"
            >
              <div className="bg-cream border-2 border-primary-dark p-10 rounded-[2.5rem] shadow-[8px_8px_0px_rgba(14,42,53,1)] text-primary-dark relative overflow-hidden group">
                <h3 className="font-condensed text-3xl font-bold mb-8 text-primary-dark uppercase tracking-wide flex items-center">
                  <MapPin className="mr-3 h-7 w-7 text-accent bg-primary-dark rounded-full p-0.5" />
                  Local in {location.name}
                </h3>
                <ul className="space-y-6">
                  {[
                    { label: 'Local Richmond Business', icon: Building2 },
                    { label: 'Trusted by Neighbors', icon: Star },
                    { label: 'Fully Insured', icon: ShieldCheck },
                    { label: 'Free On-Site Estimates', icon: Zap }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-primary-dark font-extrabold uppercase font-condensed text-xl">
                      <div className="bg-accent/30 p-2 border border-primary-dark rounded-lg mr-4">
                        <item.icon className="h-5 w-5 text-primary-dark" />
                      </div>
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-cream relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              {/* Structured Sections */}
              <div className="space-y-12">
                {/* Section 1: What it involves */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-cream-light p-10 lg:p-12 rounded-[2.5rem] border-2 border-primary-dark shadow-[6px_6px_0px_#0E2A35]"
                >
                  <div className="flex items-center mb-8">
                    <div className="bg-accent border-2 border-primary-dark p-3 rounded-2xl mr-5">
                      <Info className="h-8 w-8 text-primary-dark" />
                    </div>
                    <h3 className="font-condensed text-3xl font-extrabold uppercase tracking-wide text-primary-dark">What Our Local Service in {location.name} Involves</h3>
                  </div>
                  <div className="prose prose-lg max-w-none text-primary-dark/80 font-medium leading-relaxed">
                    <p>Our professional window cleaning and exterior maintenance in {location.name}, {location.state} is specifically tailored to the unique climate of Central Virginia. We specialize in residential window washing, high-pressure power washing, and safe soft washing for homes and businesses throughout {location.name} and surrounding neighborhoods like Midlothian and Short Pump. Our expert team uses purified water systems to deliver streak-free results while protecting your property from the heavy seasonal pollen and organic growth common in the RVA area. Whether you need gutter debris removal to protect your foundation or aggregate concrete sealing to enhance your curb appeal, we provide the top-rated local service that {location.name} homeowners trust for quality and reliability.</p>
                  </div>
                </motion.div>

                {/* Section 2: Problems Solved */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-cream-light p-10 lg:p-12 rounded-[2.5rem] border-2 border-primary-dark shadow-[6px_6px_0px_#0E2A35]"
                >
                  <div className="flex items-center mb-8">
                    <div className="bg-accent border-2 border-primary-dark p-3 rounded-2xl mr-5">
                      <AlertCircle className="h-8 w-8 text-primary-dark" />
                    </div>
                    <h3 className="font-condensed text-3xl font-extrabold uppercase tracking-wide text-primary-dark font-sans">Common Problems We Solve for {location.name} Residents</h3>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      'Hard water spots on windows from irrigation systems',
                      'Slippery green algae on driveways, walkways, and patios',
                      'Clogged gutters that lead to foundation damage',
                      'Baked-on pollen and environmental pollutants',
                      'Black streaks and organic growth on roofs and siding'
                    ].map((problem, i) => (
                      <li key={i} className="flex items-start bg-cream p-5 rounded-2xl border-2 border-primary-dark shadow-[3px_3px_0px_#0e2a35]">
                        <AlertCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0 bg-primary-dark rounded-full p-0.5" />
                        <span className="font-bold text-primary-dark">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Section 3: Real Outcomes */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-primary-dark p-10 lg:p-12 rounded-[2.5rem] text-cream border-4 border-accent shadow-[8px_8px_0px_rgba(14,42,53,1)]"
                >
                  <div className="flex items-center mb-8">
                    <div className="bg-accent border-2 border-primary-dark p-3 rounded-2xl mr-5">
                      <CheckCircle2 className="h-8 w-8 text-primary-dark" />
                    </div>
                    <h3 className="font-condensed text-3xl font-extrabold uppercase tracking-wide text-white">Real Outcomes You Can Expect</h3>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      'Crystal-clear windows that let in more natural light',
                      'Restored curb appeal that makes your property stand out',
                      'Safer, non-slip surfaces for your family and guests',
                      'Protection of your home\'s structural integrity',
                      'Extended lifespan of your windows and siding'
                    ].map((outcome, i) => (
                      <li key={i} className="flex items-start bg-white/5 p-5 rounded-2xl border border-white/10">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0 bg-[#0E2A35] rounded-full p-0.5" />
                        <span className="font-semibold text-gray-200">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Section 6: Services in Detail */}
                <div className="space-y-8 mt-16">
                  <h3 className="font-condensed text-4xl text-primary-dark mb-8 tracking-wider uppercase">Our Specialized Services in {location.name}</h3>
                  <div className="grid grid-cols-1 gap-8">
                    {siteData.services.map((service, idx) => (
                      <motion.div 
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-cream-light p-8 rounded-[2rem] border-2 border-primary-dark shadow-[4px_4px_0px_#0e2a35] hover:shadow-[6px_6px_0px_#0e2a35] transition-all group"
                      >
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                          <div className="w-full md:w-1/3">
                            <h4 className="font-condensed text-3xl font-extrabold text-primary-dark mb-4 uppercase tracking-wide group-hover:text-accent transition-colors">{service.title}</h4>
                            <Link 
                              to={`/${service.slug}`}
                              className="inline-flex items-center text-primary-dark font-black hover:text-accent transition-colors underline decoration-2 decoration-accent underline-offset-4"
                            >
                              Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </div>
                          <div className="w-full md:w-2/3">
                            <p className="text-primary-dark/80 font-semibold leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Reviews Section */}
              <ReviewWidget />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                {/* Other Areas Card */}
                <div className="bg-cream-light p-8 rounded-[2.5rem] border-2 border-primary-dark shadow-[6px_6px_0px_#0E2A35] overflow-hidden relative">
                  <h3 className="font-condensed text-3xl font-bold mb-8 text-primary-dark uppercase tracking-wide flex items-center">
                    <MapPin className="mr-3 h-6 w-6 text-accent bg-primary-dark rounded-full p-0.5" />
                    Other Areas
                  </h3>
                  <ul className="space-y-3">
                    {siteData.locations.filter(l => l.id !== location.id).map((l) => (
                      <li key={l.id}>
                        <Link 
                          to={`/${l.slug}`} 
                          className="flex items-center justify-between p-4 rounded-2xl border-2 border-transparent hover:border-primary-dark hover:bg-cream hover:shadow-[3px_3px_0px_#0e2a35] group transition-all"
                        >
                          <span className="font-bold text-primary-dark">{l.name}</span>
                          <ArrowRight className="h-4 w-4 text-primary/30 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-accent p-10 rounded-[2.5rem] text-primary-dark border-2 border-primary-dark shadow-[8px_8px_0px_#0E2A35] relative overflow-hidden group">
                  <h3 className="font-condensed text-4xl font-extrabold uppercase tracking-wider mb-4 leading-none">Free Estimate in <br />{location.name}</h3>
                  <p className="mb-8 font-semibold text-lg opacity-90">Ready to see the difference? Contact us today for a free, no-obligation quote.</p>
                  <Link to="/contact" className="block w-full bg-primary-dark text-white border-2 border-primary-dark text-center py-5 rounded-full font-condensed text-xl font-extrabold uppercase tracking-wider shadow-[4px_4px_0px_rgba(14,42,53,0.3)] hover:bg-white hover:text-primary-dark hover:translate-y-px transition-all">
                    Contact Us Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
