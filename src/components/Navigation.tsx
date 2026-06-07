import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, Instagram, Facebook, MapPin } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl md:text-2xl font-bold text-[#2B525F] tracking-tight hover:text-[#65D6CE] transition-colors">
                Jets Window Cleaning
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#65D6CE] font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#65D6CE] font-medium">About</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-[#65D6CE] font-medium">Gallery</Link>
            
            <div className="relative group">
              <button 
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="flex items-center text-gray-700 hover:text-[#65D6CE] font-medium py-4"
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {servicesOpen && (
                <div 
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                >
                  <div className="py-1">
                    {siteData.services.map((service) => (
                      <Link
                        key={service.id}
                        to={`/${service.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F1EEE0] hover:text-[#2B525F]"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button 
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
                className="flex items-center text-gray-700 hover:text-[#65D6CE] font-medium py-4"
              >
                Service Areas <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {areasOpen && (
                <div 
                  onMouseEnter={() => setAreasOpen(true)}
                  onMouseLeave={() => setAreasOpen(false)}
                  className="absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                >
                  <div className="py-1">
                    {siteData.locations.map((area) => (
                      <Link
                        key={area.id}
                        to={`/${area.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F1EEE0] hover:text-[#2B525F]"
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-700 hover:text-[#65D6CE] font-medium">Contact</Link>
            <Link 
              to="/contact"
              className="bg-[#2B525F] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#65D6CE] transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#65D6CE]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 font-medium">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 font-medium">About</Link>
            <Link to="/gallery" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 font-medium">Gallery</Link>
            <div className="px-3 py-2 text-gray-700 font-bold">Services</div>
            {siteData.services.map((service) => (
              <Link
                key={service.id}
                to={`/${service.slug}`}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-2 text-sm text-gray-600"
              >
                {service.title}
              </Link>
            ))}
            <div className="px-3 py-2 text-gray-700 font-bold">Service Areas</div>
            {siteData.locations.map((area) => (
              <Link
                key={area.id}
                to={`/${area.slug}`}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-2 text-sm text-gray-600"
              >
                {area.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 font-medium">Contact</Link>
            <div className="px-3 py-4">
              <a 
                href={`tel:${siteData.phone}`}
                className="block w-full text-center bg-[#2B525F] text-white px-6 py-3 rounded-full font-semibold"
              >
                Call Now: {siteData.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2B525F] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-bold tracking-tight">
                JET'S <span className="text-[#65D6CE]">WINDOW CLEANING</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              Professional window cleaning and exterior maintenance services for Richmond and surrounding areas. We take pride in making your property shine.
            </p>
            <div className="flex space-x-4">
              <a href={siteData.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#65D6CE]" title="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href={siteData.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#65D6CE]" title="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href={siteData.gmb} target="_blank" rel="noopener noreferrer" className="hover:text-[#65D6CE]" title="Google Business Profile">
                <svg 
                  viewBox="0 0 24 24" 
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.928 4.176-1.224 1.224-3.136 2.552-6.712 2.552-5.44 0-9.76-4.4-9.76-9.84s4.32-9.84 9.76-9.84c2.936 0 5.152 1.152 6.728 2.648l2.312-2.312C18.584 1.584 15.856 0 12.48 0 5.704 0 0 5.704 0 12.48S5.704 24.96 12.48 24.96c3.656 0 6.424-1.208 8.64-3.52 2.304-2.304 3.032-5.528 3.032-8.128 0-.792-.064-1.544-.192-2.24l-11.48-.16z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#65D6CE]">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#65D6CE]">Our Services</h4>
            <ul className="space-y-3">
              {siteData.services.map((service) => (
                <li key={service.id}>
                  <Link to={`/${service.slug}`} className="text-gray-300 hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#65D6CE]">Service Areas</h4>
            <ul className="space-y-3">
              {siteData.locations.slice(0, 6).map((area) => (
                <li key={area.id}>
                  <Link to={`/${area.slug}`} className="text-gray-300 hover:text-white transition-colors">
                    {area.name}, {area.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#65D6CE]">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-[#65D6CE] flex-shrink-0" />
                <span className="text-gray-300">{siteData.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-[#65D6CE] flex-shrink-0" />
                <a href={`tel:${siteData.phone}`} className="text-gray-300 hover:text-white">{siteData.phone}</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[#65D6CE] flex-shrink-0" />
                <a href={`mailto:${siteData.email}`} className="text-gray-300 hover:text-white">{siteData.email}</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} {siteData.companyName}. All rights reserved. | Professional Exterior Cleaning in RVA | <Link to="/terms" className="hover:text-white underline underline-offset-4">Terms & Conditions</Link> | <Link to="/privacy-policy" className="hover:text-white underline underline-offset-4">Privacy Policy</Link></p>
        </div>
      </div>
    </footer>
  );
};
