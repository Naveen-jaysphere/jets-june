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
      <section className="relative bg-[#2B525F] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src={siteData.heroImage} 
            alt="About Jet's Background" 
            width={1200}
            height={600}
            decoding="async"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Jet's Window Cleaning</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a locally owned and operated business dedicated to providing the highest quality exterior cleaning services in the Greater Richmond area.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-cream/20 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#2B525F] mb-8">Our Mission & Values</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Jet's Window Cleaning, our mission is simple: to provide our customers with a level of service that exceeds their expectations every single time. We believe that clean windows and a well-maintained exterior are essential for any home or business, and we take pride in being the team that makes it happen.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We've built our reputation on three core pillars: quality, reliability, and professionalism. When you hire Jet's, you aren't just getting a cleaning service; you're getting a partner who cares about the longevity and beauty of your property.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Quality First", desc: "We use professional-grade tools and techniques to ensure a perfect finish." },
                  { title: "Reliability", desc: "We show up on time and complete the job as promised." },
                  { title: "Safety", desc: "Fully insured and trained in the latest safety protocols." },
                  { title: "Community", desc: "Proudly serving our neighbors across the RVA area." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#65D6CE] mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#2B525F]">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/team.png" 
                alt="Our Professional Team" 
                width={600}
                height={400}
                loading="lazy"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-[#65D6CE] p-8 rounded-2xl shadow-xl max-w-xs text-[#2B525F]">
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="font-bold uppercase tracking-widest text-sm">Satisfaction Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-soft-teal/20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#2B525F] mb-16">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: "Fully Insured", desc: "We carry comprehensive liability and workers' comp insurance for your protection." },
              { icon: Award, title: "Expert Training", desc: "Our technicians are trained in the latest cleaning methods and safety standards." },
              { icon: Clock, title: "On-Time Service", desc: "We respect your schedule and provide clear communication throughout the process." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                <div className="bg-[#65D6CE] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-[#2B525F]" />
                </div>
                <h4 className="text-2xl font-bold text-[#2B525F] mb-4">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
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
      <section className="relative bg-[#2B525F] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src={siteData.heroImage} 
            alt="Contact Jet's Background" 
            width={1200}
            height={600}
            decoding="async"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready for a free estimate? Fill out the form below or give us a call. We look forward to serving you!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-cream/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div ref={formContainerRef} className="bg-[#F1EEE0]/30 p-10 rounded-3xl border border-[#F1EEE0] min-h-[850px]">
              <h2 className="text-3xl font-bold text-[#2B525F] mb-8">Request a Free Quote</h2>
              {isFormLoaded ? (
                <iframe
                  src="https://link.jaysphere.com/widget/form/AawARwJLKV1wF9NuS4N1"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '10px' }}
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
                <div className="w-full h-[700px] flex items-center justify-center text-gray-400">
                  <span>Loading request form...</span>
                </div>
              )}
            </div>

            {/* Contact Info & Map */}
            <div>
              <h2 className="text-3xl font-bold text-[#2B525F] mb-8">Get In Touch</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="bg-[#65D6CE] p-3 rounded-xl mr-4">
                    <Phone className="h-6 w-6 text-[#2B525F]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#2B525F]">Call Us</h4>
                    <a href={`tel:${siteData.phone}`} className="text-xl text-gray-600 hover:text-[#65D6CE]">{siteData.phone}</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#65D6CE] p-3 rounded-xl mr-4">
                    <Mail className="h-6 w-6 text-[#2B525F]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#2B525F]">Email Us</h4>
                    <a href={`mailto:${siteData.email}`} className="text-xl text-gray-600 hover:text-[#65D6CE]">{siteData.email}</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#65D6CE] p-3 rounded-xl mr-4">
                    <MapPin className="h-6 w-6 text-[#2B525F]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#2B525F]">Service Area</h4>
                    <p className="text-xl text-gray-600">{siteData.address} and surrounding counties</p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
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
