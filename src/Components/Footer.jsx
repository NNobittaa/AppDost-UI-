import React from 'react';
// Using Lucide-React for simple, self-contained icons
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowRight, Clock } from 'lucide-react'; 
import { a } from 'framer-motion/client';

const footerData = {
  company: {
    name: "AppDost",
    tagline: "COMPLETE IT SOLUTION",
    description: "Delivering innovative IT solutions since 2025. We transform ideas into powerful digital experiences with cutting-edge technology and expert craftsmanship.",
  },
  links: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/career" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "contact" },
  ],
  services: [
    { label: "Android App Development", href: "/services" },
    { label: "Web Development", href: "/services" },
    { label: "UI/UX Design", href: "/services" },
    { label: "CRM Software", href: "/services" },
    { label: "Cloud Solutions", href: "/services" },
    { label: "Cybersecurity", href: "/services" },
  ],
  contact: {
    email:"contact@appdost.in",
    phone: "+91 11 6929 0750",
    timing: "Mon - Sat: 9:00 AM - 6:00 PM IST",
    offices: [
      "3 Offices: Banka (HQ)",
      "Motihari, Patna"
    ],
  },
};

// Component for a single quick link item
const FooterLink = ({ label, href }) => (
  <a href={href} className="text-gray-400 hover:text-white transition-colors flex items-center mb-3 text-sm">
    <ArrowRight className="w-3 h-3 mr-2" />
    {label}
  </a>
);

// --- Main Footer Component ---
const AppFooter = () => {
  return (
    // Single main div container for the entire footer section
    // Use slate-900 for a dark background that contrasts well with slate-800 page background
    <div className="w-full bg-slate-900 text-white font-inter">
      
      {/* Top Section: Main Content Grid */}
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8 border-b border-slate-800">
        
        {/* Grid Container for 4 Columns (Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* 1. Company Info & Socials */}
          <div className="space-y-6">
            <div className="flex flex-col">
              {/* Placeholder for Logo */}
              <div className="text-3xl font-extrabold text-blue-400">AppDost</div>
              <p className="text-xs tracking-widest text-white/70">{footerData.company.tagline}</p>
            </div>
            <p className="text-sm text-gray-400">
              {footerData.company.description}
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-3">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label={Icon.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          {/* 2. Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b-2 border-blue-600/70 pb-1 inline-block">Quick Links</h4>
            {footerData.links.map((link, index) => (
              <FooterLink key={index} label={link.label} href={link.href} />
            ))}
          </div>
          
          {/* 3. Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b-2 border-blue-600/70 pb-1 inline-block">Our Services</h4>
            {footerData.services.map((service, index) => (
              <FooterLink key={index} label={service.label} href={service.href} />
            ))}
          </div>

          {/* 4. Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-6 border-b-2 border-blue-600/70 pb-1 inline-block">Contact Info</h4>
            
            <div className="flex items-start text-sm">
              <Mail className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <a href={`mailto:${footerData.contact.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {footerData.contact.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-start text-sm">
              <Phone className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <a href={`tel:${footerData.contact.phone}`} className="text-gray-400 hover:text-white transition-colors">
                  {footerData.contact.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-start text-sm">
              {/* Fix: Clock icon was causing ReferenceError because it wasn't imported */}
              <Clock className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-400">
                {footerData.contact.timing}
              </p>
            </div>

            <div className="flex items-start text-sm">
              <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-400 space-y-1">
                {footerData.contact.offices.map((line, index) => (
                  <span key={index} className="block">{line}</span>
                ))}
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright and Policies */}
      <div className="max-w-7xl mx-auto py-5 px-6 lg:px-8 text-sm text-gray-400">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Copyright */}
          <p>© {new Date().getFullYear()} AppDost – Complete IT Solution. All rights reserved.</p>

          {/* Policy Links & Built With */}
          <div className="flex flex-wrap justify-center md:justify-end items-center space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            
            <span className="ml-4 flex items-center">
              Built with <span className="mx-1 text-red-500">♥</span> in India
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AppFooter;
