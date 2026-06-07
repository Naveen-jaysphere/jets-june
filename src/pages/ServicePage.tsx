import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  ChevronRight, 
  Info, 
  AlertCircle, 
  CheckCircle2, 
  Building2, 
  ClipboardCheck, 
  Package,
  Star,
  ShieldCheck,
  Clock,
  Zap,
  MapPin
} from 'lucide-react';
import { siteData } from '../data/siteData';
import { SEO } from '../components/SEO';
import { FAQAccordion } from '../components/Accordion';
import { ReviewWidget } from '../components/ReviewWidget';

export const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = siteData.services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  // Helper to parse the HTML content into sections
  const parseContent = (html: string) => {
    const parts = html.split('<h3>');
    const intro = parts[0].replace(/<h2>.*?<\/h2>/, '').trim();
    
    const sections = parts.slice(1).map(part => {
      const [title, ...contentParts] = part.split('</h3>');
      const content = contentParts.join('</h3>').trim();
      
      // Determine icon based on title
      let Icon = Info;
      if (title.toLowerCase().includes('problem')) Icon = AlertCircle;
      if (title.toLowerCase().includes('outcome') || title.toLowerCase().includes('benefit')) Icon = CheckCircle2;
      if (title.toLowerCase().includes('involve')) Icon = Info;

      return { title, content, Icon };
    });

    return { intro, sections };
  };

  const { intro, sections } = parseContent(service.content);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": siteData.companyName,
      "telephone": siteData.phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Richmond",
        "addressRegion": "VA"
      }
    },
    "description": service.description,
    "areaServed": siteData.locations.map(l => l.name)
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <SEO 
        title={`${service.title} in Richmond, VA | ${siteData.companyName}`}
        description={`Professional ${service.title.toLowerCase()} in Richmond, VA. ${service.description.split('.')[0]}. Get a free, no-obligation estimate today!`}
        schema={[schema, faqSchema]}
      />
      
      {/* Hero Section */}
      <section className="relative bg-[#2B525F] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={service.image || siteData.heroImage} 
            alt={`${service.title} Background`} 
            width={1200}
            height={600}
            fetchPriority="high"
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
                <span>Services</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight"
              >
                {service.title} <span className="text-[#65D6CE]">in Richmond</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
              >
                {service.description} We deliver professional-grade results for residential and commercial properties throughout the RVA area.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-5"
              >
                <Link to="/contact" className="bg-[#65D6CE] text-[#2B525F] px-10 py-5 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105 text-center shadow-lg shadow-[#65D6CE]/20">
                  Request a Free Quote
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
                  <ShieldCheck className="mr-3 h-6 w-6" />
                  Why Choose Jets?
                </h3>
                <ul className="space-y-6">
                  {[
                    { label: 'Fully Insured', icon: ShieldCheck },
                    { label: 'Quality Guaranteed', icon: Star },
                    { label: 'Reliable Scheduling', icon: Clock },
                    { label: 'Fast Free Estimates', icon: Zap }
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
      <section className="py-24 bg-soft-teal/10 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              {/* Intro Text */}
              {intro && (
                <div className="bg-white p-10 lg:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 mb-12">
                  <div 
                    className="prose prose-xl max-w-none text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: intro }} 
                  />
                </div>
              )}

              {/* Dynamic Sections */}
              <div className="space-y-12">
                {sections.map((section, idx) => {
                  const isList = section.content.includes('<ul>') || section.content.includes('<ol>');
                  
                  return (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className={`bg-white p-10 lg:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 transition-all hover:shadow-md`}
                    >
                      <div className="flex items-center mb-8">
                        <div className="bg-[#2B525F]/5 p-3 rounded-2xl mr-5">
                          <section.Icon className="h-8 w-8 text-[#2B525F]" />
                        </div>
                        <h2 className="text-3xl font-bold text-[#2B525F] tracking-tight">{section.title}</h2>
                      </div>
                      
                      <div 
                        className={`prose prose-lg max-w-none text-gray-600 
                          ${isList ? 'prose-li:marker:text-[#65D6CE] prose-li:font-medium prose-ul:grid prose-ul:grid-cols-1 md:prose-ul:grid-cols-2 prose-ul:gap-x-8 prose-ul:gap-y-2' : ''}
                          prose-strong:text-[#2B525F] prose-strong:font-bold
                        `}
                      >
                        {(section.content.includes('<ul>') && (section.title.toLowerCase().includes('problem') || section.title.toLowerCase().includes('outcome') || section.title.toLowerCase().includes('benefit'))) ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mt-4">
                            {section.content.match(/<li>(.*?)<\/li>/g)?.map((li, i) => {
                              const content = li.replace(/<\/?li>/g, '');
                              return (
                                <div key={i} className="flex items-start p-5 bg-[#F9FAFB] rounded-2xl border border-gray-100 group hover:bg-white hover:shadow-md transition-all">
                                  <section.Icon className="h-5 w-5 text-[#65D6CE] mr-4 mt-1 flex-shrink-0" />
                                  <span className="font-medium text-gray-700 leading-relaxed">{content}</span>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <div dangerouslySetInnerHTML={{ __html: section.content }} />
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* FAQ Section */}
              <div className="mt-20 bg-[#2B525F] p-10 lg:p-16 rounded-[3rem] text-white">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-4xl font-bold mb-4 text-center">Common Questions</h2>
                  <p className="text-gray-300 text-center mb-12 text-lg">Everything you need to know about our {service.title.toLowerCase()} process.</p>
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-2 border border-white/10">
                    <FAQAccordion faqs={service.faqs} />
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              <ReviewWidget />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                {/* Other Services Card */}
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#65D6CE] opacity-5 rounded-full -mr-16 -mt-16"></div>
                  <h3 className="text-2xl font-bold mb-8 text-[#2B525F] flex items-center">
                    <Zap className="mr-3 h-6 w-6 text-[#65D6CE]" />
                    Other Services
                  </h3>
                  <ul className="space-y-3">
                    {siteData.services.filter(s => s.id !== service.id).map((s) => (
                        <li key={s.id}>
                          <Link 
                            to={`/${s.slug}`} 
                            className="flex items-center justify-between p-4 rounded-2xl hover:bg-[#F9FAFB] group transition-all border border-transparent hover:border-gray-100"
                          >
                            <div className="flex items-center">
                              <Star className="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#65D6CE] transition-colors" />
                              <span className="font-semibold text-gray-700 group-hover:text-[#2B525F]">{s.title}</span>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-[#65D6CE] group-hover:translate-x-1 transition-all" />
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Service Areas Card */}
                <div className="bg-[#F1EEE0] p-8 rounded-[2.5rem] border border-[#E5E2D4]">
                  <h3 className="text-2xl font-bold mb-8 text-[#2B525F] flex items-center">
                    <Building2 className="mr-3 h-6 w-6 text-[#2B525F]/60" />
                    Service Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {siteData.locations.map((area) => (
                      <Link 
                        key={area.id} 
                        to={`/${area.slug}`}
                        className="bg-white text-[#2B525F] px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#65D6CE] hover:text-[#2B525F] transition-all shadow-sm hover:shadow-md"
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-[#65D6CE] p-10 rounded-[2.5rem] text-[#2B525F] shadow-xl shadow-[#65D6CE]/20 relative overflow-hidden group">
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-10 rounded-full -mb-24 -mr-24 group-hover:scale-110 transition-transform duration-700"></div>
                  <h3 className="text-3xl font-bold mb-4 leading-tight">Ready for a <br />Spotless Home?</h3>
                  <p className="mb-8 font-medium text-lg opacity-90">Get your free, no-obligation estimate in minutes.</p>
                  <Link to="/contact" className="block w-full bg-[#2B525F] text-white text-center py-5 rounded-full font-bold hover:bg-white hover:text-[#2B525F] transition-all shadow-lg">
                    Get My Free Quote
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
