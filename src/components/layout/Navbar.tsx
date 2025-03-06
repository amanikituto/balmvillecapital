
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'blur-bg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="flex items-center"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="text-2xl font-serif font-bold text-balmville-gold">Balmville</span>
            <span className="text-2xl font-serif text-white ml-1">Capital</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a onClick={() => scrollToSection('about')} className="nav-link cursor-pointer">About</a>
            <a onClick={() => scrollToSection('services')} className="nav-link cursor-pointer">Services</a>
            <a onClick={() => scrollToSection('industries')} className="nav-link cursor-pointer">Industries</a>
            <a onClick={() => scrollToSection('contact')} className="nav-link cursor-pointer">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-balmville-gold" />
            ) : (
              <Menu className="h-6 w-6 text-balmville-gold" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 blur-bg">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a onClick={() => scrollToSection('about')} className="nav-link cursor-pointer">About</a>
            <a onClick={() => scrollToSection('services')} className="nav-link cursor-pointer">Services</a>
            <a onClick={() => scrollToSection('industries')} className="nav-link cursor-pointer">Industries</a>
            <a onClick={() => scrollToSection('contact')} className="nav-link cursor-pointer">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
