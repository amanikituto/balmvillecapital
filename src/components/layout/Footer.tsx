
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-balmville-teal border-t border-balmville-gold/20 pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col space-y-4">
            <div className="mb-4">
              <a href="#" className="inline-block">
                <span className="text-2xl font-serif font-bold text-balmville-gold">Balmville</span>
                <span className="text-2xl font-serif text-white ml-1">Capital</span>
              </a>
            </div>
            <p className="text-white/80 max-w-md">
              Empowering businesses with cutting-edge financial insights and strategies that enhance profitability, optimize credit processes, and enable sustainable expansion.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-balmville-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:consulting@balmvillecapital.com" className="text-white hover:text-balmville-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl text-balmville-gold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/80 hover:text-balmville-gold transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-balmville-gold transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#industries" className="text-white/80 hover:text-balmville-gold transition-colors">Industries We Serve</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-balmville-gold transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-balmville-gold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-balmville-gold mt-1 flex-shrink-0" size={18} />
                <span className="text-white/80">Nairobi, Kenya</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="text-balmville-gold mt-1 flex-shrink-0" size={18} />
                <span className="text-white/80">+254 759 763 246</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-balmville-gold mt-1 flex-shrink-0" size={18} />
                <span className="text-white/80">consulting@balmvillecapital.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} Balmville Capital Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 text-sm hover:text-balmville-gold transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 text-sm hover:text-balmville-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
