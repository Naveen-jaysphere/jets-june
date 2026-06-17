import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Phone, Mail, MapPin, Star, Award, Shield, Clock } from 'lucide-react';
import { siteData } from '../data/siteData';
import { SEO } from '../components/SEO';
import { ReviewWidget } from '../components/ReviewWidget';

export const About: React.FC = () => {
  return (
    <>
      <SEO 
        title={`About Jet's Window Cleaning | Richmond's Trusted Exterior Cleaners`}
        description="Learn about Jet's Window Cleaning, our commitment to quality, and why we are Richmond's preferred choice for window washing and power washing."
      />
      
      {/* Hero Section */}
      <section className="relative bg-primary-dark text-white py-24 overflow-hidden border-b-8 border-accent">
        {/* Diagonal Brand Stripes */}
        <div className="absolute inset-x-0 top-0 bottom-0 overflow-hidden opacity-25 pointer-events-none">
          <div className="absolute -right-1/4 -top-1/4 w-full h-[150%] bg-[#2B525F] rotate-[-35deg]" />
          <div className="absolute -right-1/3 -top-1/4 w-[150px] h-[150%] bg-[#65D6CE] rotate-[-35deg]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="font-retro text-5xl text-accent block mb-2 drop-shadow-[2px_2px_0px_rgba(14,42,53,1)]">Since Day One</span>
          <h1 className="text-5xl lg:text-7xl font-condensed tracking-wider uppercase mb-6">About Jet's Window Cleaning</h1>
          <p className="text-xl text-cream max-w-3xl mx-auto leading-relaxed font-medium">
            We are a locally owned and operated business dedicated to providing the highest quality exterior cleaning services in the Greater Richmond area.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-cream relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-retro text-4xl text-primary block mb-2">Our Foundation</span>
              <h2 className="text-4xl lg:text-6xl font-condensed text-primary-dark tracking-wide uppercase mb-8">Our Mission & Values</h2>
              <p className="text-lg text-primary-dark mb-6 leading-relaxed font-medium">
                At Jet's Window Cleaning, our mission is simple: to provide our customers with a level of service that exceeds their expectations every single time. We believe that clean windows and a well-maintained exterior are essential for any home or business, and we take pride in being the team that makes it happen.
              </p>
              <p className="text-lg text-primary-dark mb-8 leading-relaxed font-semibold">
                We've built our reputation on three core pillars: quality, reliability, and professionalism. When you hire Jet's, you aren't just getting a cleaning service; you're getting a partner who cares about the longevity and beauty of your property.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Quality First", desc: "We use professional-grade tools and techniques to ensure a perfect finish." },
                  { title: "Reliability", desc: "We show up on time and complete the job as promised." },
                  { title: "Safety", desc: "Fully insured and trained in the latest safety protocols." },
                  { title: "Community", desc: "Proudly serving our neighbors across the RVA area." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start bg-cream-light p-4 rounded-xl border-2 border-primary-dark shadow-[3px_3px_0px_#0E2A35]">
                    <CheckCircle className="h-6 w-6 text-accent bg-primary-dark rounded-full mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-condensed text-xl font-bold text-primary-dark uppercase tracking-wide">{item.title}</h4>
                      <p className="text-sm text-primary font-semibold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden border-2 border-primary-dark shadow-[8px_8px_0px_#0E2A35]">
              <img 
                src="/images/team.png" 
                alt="Our Professional Team" 
                width={600}
                height={400}
                loading="lazy"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-2 -right-2 bg-accent p-6 rounded-tl-2xl border-l-2 border-t-2 border-primary-dark max-w-xs text-primary-dark shadow-[4px_4px_0px_rgba(14,42,53,1)]">
                <p className="font-condensed text-5xl font-black mb-1 leading-none">100%</p>
                <p className="font-bold uppercase tracking-wider text-xs">Satisfaction Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-cream-light relative overflow-hidden border-t-2 border-primary-dark/10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="font-retro text-4xl text-accent block mb-2 drop-shadow-[1px_1px_0px_rgba(14,42,53,1)]">Jet Standards</span>
          <h2 className="text-4xl lg:text-6xl font-condensed text-primary-dark tracking-wide uppercase mb-16">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: "Fully Insured", desc: "We carry comprehensive liability and workers' comp insurance for your protection." },
              { icon: Award, title: "Expert Training", desc: "Our technicians are trained in the latest cleaning methods and safety standards." },
              { icon: Clock, title: "On-Time Service", desc: "We respect your schedule and provide clear communication throughout the process." }
            ].map((item, i) => (
              <div key={i} className="bg-cream p-10 rounded-3xl border-2 border-primary-dark shadow-[6px_6px_0px_#0E2A35]">
                <div className="bg-accent w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border-2 border-primary-dark">
                  <item.icon className="h-8 w-8 text-primary-dark" />
                </div>
                <h4 className="font-condensed text-3xl font-bold text-primary-dark mb-4 uppercase tracking-wider">{item.title}</h4>
                <p className="text-primary font-semibold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewWidget />
    </>
  );
};

export const Contact: React.FC = () => {
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsFormLoaded(true);
          observer.disconnect();

          // Dynamically load form script on demand
          const script = document.createElement('script');
          script.src = 'https://link.jaysphere.com/js/form_embed.js';
          script.async = true;
          document.body.appendChild(script);
        }
      },
      {
        rootMargin: '200px', // Load before it is fully in viewport
      }
    );

    if (formContainerRef.current) {
      observer.observe(formContainerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <SEO 
        title={`Contact Jet's Window Cleaning | Get a Free Quote in Richmond VA`}
        description="Ready for a sparkling home? Contact Jet's Window Cleaning today for a free, no-obligation quote for window washing, power washing, and more in Richmond."
      />
      
      {/* Hero Section */}
      <section className="relative bg-primary-dark text-white py-24 overflow-hidden border-b-8 border-accent">
        {/* Diagonal Brand Stripes */}
        <div className="absolute inset-x-0 top-0 bottom-0 overflow-hidden opacity-25 pointer-events-none">
          <div className="absolute -right-1/4 -top-1/4 w-full h-[150%] bg-[#2B525F] rotate-[-35deg]" />
          <div className="absolute -right-1/3 -top-1/4 w-[150px] h-[150%] bg-[#65D6CE] rotate-[-35deg]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="font-retro text-5xl text-accent block mb-2 drop-shadow-[2px_2px_0px_rgba(14,42,53,1)]">Say Hello</span>
          <h1 className="text-5xl lg:text-7xl font-condensed tracking-wider uppercase mb-6">Contact Us</h1>
          <p className="text-xl text-cream max-w-3xl mx-auto leading-relaxed font-semibold">
            Ready for a free estimate? Fill out the form below or give us a call. We look forward to serving you!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div ref={formContainerRef} className="bg-cream-light p-10 rounded-[2rem] border-2 border-primary-dark shadow-[8px_8px_0px_#0E2A35] min-h-[850px]">
              <h2 className="font-condensed text-4xl text-primary-dark uppercase mb-8 tracking-wider">Request a Free Quote</h2>
              {isFormLoaded ? (
                <iframe
                  src="https://link.jaysphere.com/widget/form/AawARwJLKV1wF9NuS4N1"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '14px' }}
                  id="inline-AawARwJLKV1wF9NuS4N1" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Website Form"
                  data-height="821"
                  data-layout-iframe-id="inline-AawARwJLKV1wF9NuS4N1"
                  data-form-id="AawARwJLKV1wF9NuS4N1"
                  title="Website Form"
                >
                </iframe>
              ) : (
                <div className="w-full h-[700px] flex items-center justify-center text-primary-dark/40">
                  <span className="font-bold">Loading request form...</span>
                </div>
              )}
            </div>

            {/* Contact Info & Map */}
            <div>
              <h2 className="font-condensed text-4xl text-primary-dark uppercase mb-8 tracking-wider">Get In Touch</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start bg-cream-light p-6 rounded-2xl border-2 border-primary-dark shadow-[4px_4px_0px_#0E2A35]">
                  <div className="bg-accent p-3 rounded-xl mr-4 border-2 border-primary-dark">
                    <Phone className="h-6 w-6 text-primary-dark" />
                  </div>
                  <div>
                    <h4 className="font-condensed text-xl font-bold text-primary-dark uppercase tracking-wide">Call Us</h4>
                    <a href={`tel:${siteData.phone}`} className="text-xl text-primary font-bold hover:text-accent">{siteData.phone}</a>
                  </div>
                </div>
                <div className="flex items-start bg-cream-light p-6 rounded-2xl border-2 border-primary-dark shadow-[4px_4px_0px_#0E2A35]">
                  <div className="bg-accent p-3 rounded-xl mr-4 border-2 border-primary-dark">
                    <Mail className="h-6 w-6 text-primary-dark" />
                  </div>
                  <div>
                    <h4 className="font-condensed text-xl font-bold text-primary-dark uppercase tracking-wide">Email Us</h4>
                    <a href={`mailto:${siteData.email}`} className="text-xl text-primary font-bold hover:text-accent">{siteData.email}</a>
                  </div>
                </div>
                <div className="flex items-start bg-cream-light p-6 rounded-2xl border-2 border-primary-dark shadow-[4px_4px_0px_#0E2A35]">
                  <div className="bg-accent p-3 rounded-xl mr-4 border-2 border-primary-dark">
                    <MapPin className="h-6 w-6 text-primary-dark" />
                  </div>
                  <div>
                    <h4 className="font-condensed text-xl font-bold text-primary-dark uppercase tracking-wide">Service Area</h4>
                    <p className="text-xl text-primary font-bold">{siteData.address} and surrounding counties</p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-[2rem] overflow-hidden border-2 border-primary-dark shadow-[8px_8px_0px_#2B525F]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202397.36043332377!2d-77.8478413422239!3d37.567813740072665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041b25c151159c9%3A0x3a7e78283f72b66!2sRVA%20Windows!5e0!3m2!1sen!2sus!4v1747802947430!5m2!1sen!2sus" 
                  width="100%" 
                  height="400" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewWidget />
    </>
  );
};
