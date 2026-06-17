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
                <span>Services</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl lg:text-7xl font-condensed tracking-wider uppercase mb-8 leading-[1.1]"
              >
                {service.title} <span className="font-retro text-accent lowercase block text-5xl lg:text-6xl mt-2 drop-shadow-[2px_2px_0px_rgba(14,42,53,1)]">in Richmond</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-cream mb-10 leading-relaxed max-w-2xl font-medium"
              >
                {service.description} We deliver professional-grade results for residential and commercial properties throughout the RVA area.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-5"
              >
                <Link to="/contact" className="bg-accent text-primary-dark px-10 py-5 rounded-full font-condensed text-xl uppercase tracking-wider font-extrabold border-2 border-primary-dark shadow-[4px_4px_0px_rgba(14,42,53,1)] hover:bg-white hover:translate-y-px hover:shadow-[2px_2px_0px_rgba(14,42,53,1)] transition-all text-center">
                  Request a Free Quote
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
                  <ShieldCheck className="mr-3 h-7 w-7 text-accent bg-primary-dark rounded-full p-0.5" />
                  Why Choose Jets?
                </h3>
                <ul className="space-y-6">
                  {[
                    { label: 'Fully Insured', icon: ShieldCheck },
                    { label: 'Quality Guaranteed', icon: Star },
                    { label: 'Reliable Scheduling', icon: Clock },
                    { label: 'Fast Free Estimates', icon: Zap }
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              {/* Intro Text */}
              {intro && (
                <div className="bg-cream-light p-10 lg:p-12 rounded-[2.5rem] border-2 border-primary-dark shadow-[6px_6px_0px_#0E2A35] mb-12">
                  <div 
                    className="prose prose-xl max-w-none text-primary-dark leading-relaxed font-medium"
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
                      className={`bg-cream-light p-10 lg:p-12 rounded-[2.5rem] border-2 border-primary-dark shadow-[6px_6px_0px_#0E2A35] transition-all`}
                    >
                      <div className="flex items-center mb-8">
                        <div className="bg-accent border-2 border-primary-dark p-3 rounded-2xl mr-5">
                          <section.Icon className="h-8 w-8 text-primary-dark" />
                        </div>
                        <h2 className="font-condensed text-3xl font-extrabold uppercase tracking-wide text-primary-dark">{section.title}</h2>
                      </div>
                      
                      <div 
                        className={`prose prose-lg max-w-none text-primary-dark/80 
                          ${isList ? 'prose-li:marker:text-accent prose-li:font-semibold prose-ul:grid prose-ul:grid-cols-1 md:prose-ul:grid-cols-2 prose-ul:gap-x-8 prose-ul:gap-y-2' : ''}
                          prose-strong:text-primary-dark prose-strong:font-black
                        `}
                      >
                        {(section.content.includes('<ul>') && (section.title.toLowerCase().includes('problem') || section.title.toLowerCase().includes('outcome') || section.title.toLowerCase().includes('benefit'))) ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mt-4">
                            {section.content.match(/<li>(.*?)<\/li>/g)?.map((li, i) => {
                              const content = li.replace(/<\/?li>/g, '');
                              return (
                                <div key={i} className="flex items-start p-5 bg-cream rounded-2xl border-2 border-primary-dark shadow-[3px_3px_0px_#0e2a35] transition-all">
                                  <section.Icon className="h-5 w-5 text-accent mr-4 mt-1 flex-shrink-0 bg-primary-dark rounded-full p-0.5" />
                                  <span className="font-bold text-primary-dark leading-relaxed">{content}</span>
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
              <div className="mt-20 bg-primary-dark p-10 lg:p-16 rounded-[4rem] text-white border-4 border-accent shadow-[8px_8px_0px_rgba(14,42,53,1)]">
                <div className="max-w-3xl mx-auto">
                  <h2 className="font-condensed text-4xl lg:text-5xl uppercase tracking-wider mb-4 text-center">Common Questions</h2>
                  <p className="text-cream text-center mb-12 text-lg font-semibold">Everything you need to know about our {service.title.toLowerCase()} process.</p>
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
                <div className="bg-cream-light p-8 rounded-[2.5rem] border-2 border-primary-dark shadow-[6px_6px_0px_#0E2A35] overflow-hidden relative">
                  <h3 className="font-condensed text-3xl font-bold mb-8 text-primary-dark uppercase tracking-wide flex items-center">
                    <Zap className="mr-3 h-6 w-6 text-accent bg-primary-dark rounded-full p-0.5" />
                    Other Services
                  </h3>
                  <ul className="space-y-3">
                    {siteData.services.filter(s => s.id !== service.id).map((s) => (
                        <li key={s.id}>
                          <Link 
                            to={`/${s.slug}`} 
                            className="flex items-center justify-between p-4 rounded-2xl border-2 border-transparent hover:border-primary-dark hover:bg-cream hover:shadow-[3px_3px_0px_#0e2a35] group transition-all"
                          >
                            <div className="flex items-center">
                              <Star className="h-5 w-5 mr-3 text-primary/40 group-hover:text-accent transition-colors" />
                              <span className="font-bold text-primary-dark">{s.title}</span>
                            </div>
                            <ArrowRight className="h-4 w-4 text-primary/30 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Service Areas Card */}
                <div className="bg-cream p-8 rounded-[2.5rem] border-2 border-primary-dark shadow-[6px_6px_0px_#2B525F]">
                  <h3 className="font-condensed text-3xl font-bold mb-8 text-primary-dark uppercase tracking-wide flex items-center">
                    <Building2 className="mr-3 h-6 w-6 text-accent bg-primary-dark p-0.5 rounded-full" />
                    Service Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {siteData.locations.map((area) => (
                      <Link 
                        key={area.id} 
                        to={`/${area.slug}`}
                        className="bg-cream-light text-primary-dark border-2 border-primary-dark px-5 py-2.5 rounded-full text-sm font-bold shadow-[2px_2px_0px_#0e2a35] hover:bg-accent hover:shadow-[1px_1px_0px_#0e2a35] transition-all"
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-accent p-10 rounded-[2.5rem] text-primary-dark border-2 border-primary-dark shadow-[8px_8px_0px_#0E2A35] relative overflow-hidden group">
                  <h3 className="font-condensed text-4xl font-extrabold uppercase tracking-wider mb-4 leading-none">Ready for a <br />Spotless Home?</h3>
                  <p className="mb-8 font-semibold text-lg opacity-90">Get your free, no-obligation estimate in minutes.</p>
                  <Link to="/contact" className="block w-full bg-primary-dark text-white border-2 border-primary-dark text-center py-5 rounded-full font-condensed text-xl font-extrabold uppercase tracking-wider shadow-[4px_4px_0px_rgba(14,42,53,0.3)] hover:bg-white hover:text-primary-dark hover:translate-y-px transition-all">
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
