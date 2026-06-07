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
      <section className="relative bg-[#2B525F] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={siteData.heroImage} 
            alt={`Window Cleaning in ${location.name} Background`} 
            width={1200}
            height={600}
            decoding="async"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-3xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center text-[#65D6CE] mb-6 text-sm font-bold uppercase tracking-[0.2em]"
              >
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="h-4 w-4 mx-2 opacity-50" />
                <span>Service Areas</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight"
              >
                Window Cleaning in <span className="text-[#65D6CE]">{location.name}</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
              >
                Looking for the best window cleaning in {location.name}? {siteData.companyName} provides professional, reliable, and streak-free exterior cleaning services for residential and commercial properties throughout {location.name} and surrounding neighborhoods.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-5"
              >
                <Link to="/contact" className="bg-[#65D6CE] text-[#2B525F] px-10 py-5 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105 text-center shadow-lg shadow-[#65D6CE]/20">
                  Get a Free Quote in {location.name}
                </Link>
                <a href={`tel:${siteData.phone}`} className="bg-white/10 backdrop-blur-sm border-2 border-white/30 px-10 py-5 rounded-full font-bold hover:bg-white hover:text-[#2B525F] transition-all text-center flex items-center justify-center group">
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
              <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#65D6CE] opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
                <h3 className="text-2xl font-bold mb-8 text-[#65D6CE] flex items-center">
                  <MapPin className="mr-3 h-6 w-6" />
                  Local in {location.name}
                </h3>
                <ul className="space-y-6">
                  {[
                    { label: 'Local Richmond Business', icon: Building2 },
                    { label: 'Trusted by Neighbors', icon: Star },
                    { label: 'Fully Insured', icon: ShieldCheck },
                    { label: 'Free On-Site Estimates', icon: Zap }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-200 font-medium">
                      <div className="bg-[#65D6CE]/10 p-2 rounded-lg mr-4">
                        <item.icon className="h-5 w-5 text-[#65D6CE]" />
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
      <section className="py-24 bg-cream/10 relative">
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
                  className="bg-white p-10 lg:p-12 rounded-[2.5rem] shadow-sm border border-gray-100"
                >
                  <div className="flex items-center mb-8">
                    <div className="bg-[#2B525F]/5 p-3 rounded-2xl mr-5">
                      <Info className="h-8 w-8 text-[#2B525F]" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#2B525F] tracking-tight">What Our Local Service in {location.name} Involves</h3>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p>Our professional window cleaning and exterior maintenance in {location.name}, {location.state} is specifically tailored to the unique climate of Central Virginia. We specialize in residential window washing, high-pressure power washing, and safe soft washing for homes and businesses throughout {location.name} and surrounding neighborhoods like Midlothian and Short Pump. Our expert team uses purified water systems to deliver streak-free results while protecting your property from the heavy seasonal pollen and organic growth common in the RVA area. Whether you need gutter debris removal to protect your foundation or aggregate concrete sealing to enhance your curb appeal, we provide the top-rated local service that {location.name} homeowners trust for quality and reliability.</p>
                  </div>
                </motion.div>

                {/* Section 2: Problems Solved */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 lg:p-12 rounded-[2.5rem] shadow-sm border border-gray-100"
                >
                  <div className="flex items-center mb-8">
                    <div className="bg-[#2B525F]/5 p-3 rounded-2xl mr-5">
                      <AlertCircle className="h-8 w-8 text-[#2B525F]" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#2B525F] tracking-tight">Common Problems We Solve for {location.name} Residents</h3>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      'Hard water spots on windows from irrigation systems',
                      'Slippery green algae on driveways, walkways, and patios',
                      'Clogged gutters that lead to foundation damage',
                      'Baked-on pollen and environmental pollutants',
                      'Black streaks and organic growth on roofs and siding'
                    ].map((problem, i) => (
                      <li key={i} className="flex items-start bg-[#F9FAFB] p-5 rounded-2xl border border-gray-100">
                        <AlertCircle className="h-5 w-5 text-[#65D6CE] mr-3 mt-1 flex-shrink-0" />
                        <span className="font-medium text-gray-700">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Section 3: Real Outcomes */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#2B525F] p-10 lg:p-12 rounded-[2.5rem] text-white shadow-xl shadow-[#2B525F]/10"
                >
                  <div className="flex items-center mb-8">
                    <div className="bg-white/10 p-3 rounded-2xl mr-5">
                      <CheckCircle2 className="h-8 w-8 text-[#65D6CE]" />
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight">Real Outcomes You Can Expect</h3>
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
                        <CheckCircle2 className="h-5 w-5 text-[#65D6CE] mr-3 mt-1 flex-shrink-0" />
                        <span className="font-medium text-gray-200">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Section 6: Services in Detail */}
                <div className="space-y-8 mt-16">
                  <h3 className="text-3xl font-bold text-[#2B525F] mb-8 tracking-tight">Our Specialized Services in {location.name}</h3>
                  <div className="grid grid-cols-1 gap-8">
                    {siteData.services.map((service, idx) => (
                      <motion.div 
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-all group"
                      >
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                          <div className="w-full md:w-1/3">
                            <h4 className="text-2xl font-bold text-[#2B525F] mb-4 group-hover:text-[#65D6CE] transition-colors">{service.title}</h4>
                            <Link 
                              to={`/${service.slug}`}
                              className="inline-flex items-center text-[#65D6CE] font-bold hover:text-[#2B525F] transition-colors"
                            >
                              Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </div>
                          <div className="w-full md:w-2/3">
                            <p className="text-gray-600 leading-relaxed">
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
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#65D6CE] opacity-5 rounded-full -mr-16 -mt-16"></div>
                  <h3 className="text-2xl font-bold mb-8 text-[#2B525F] flex items-center">
                    <MapPin className="mr-3 h-6 w-6 text-[#65D6CE]" />
                    Other Areas
                  </h3>
                  <ul className="space-y-3">
                    {siteData.locations.filter(l => l.id !== location.id).map((l) => (
                      <li key={l.id}>
                        <Link 
                          to={`/${l.slug}`} 
                          className="flex items-center justify-between p-4 rounded-2xl hover:bg-[#F9FAFB] group transition-all border border-transparent hover:border-gray-100"
                        >
                          <span className="font-semibold text-gray-700 group-hover:text-[#2B525F]">{l.name}</span>
                          <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-[#65D6CE] group-hover:translate-x-1 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-[#65D6CE] p-10 rounded-[2.5rem] text-[#2B525F] shadow-xl shadow-[#65D6CE]/20 relative overflow-hidden group">
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-10 rounded-full -mb-24 -mr-24 group-hover:scale-110 transition-transform duration-700"></div>
                  <h3 className="text-3xl font-bold mb-4 leading-tight">Free Estimate in <br />{location.name}</h3>
                  <p className="mb-8 font-medium text-lg opacity-90">Ready to see the difference? Contact us today for a free, no-obligation quote.</p>
                  <Link to="/contact" className="block w-full bg-[#2B525F] text-white text-center py-5 rounded-full font-bold hover:bg-white hover:text-[#2B525F] transition-all shadow-lg">
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
