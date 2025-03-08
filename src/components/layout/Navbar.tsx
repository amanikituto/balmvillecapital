
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

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
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    } else {
      navigate(`/#${id}`);
      setIsMenuOpen(false);
    }
  };

  const navigateTo = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
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
            className="flex items-center cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            <img 
              src="/lovable-uploads/a8dd2986-dca3-432d-b4c8-c0ea8d93ce20.png" 
              alt="Balmville Capital Logo" 
              className="h-10 mr-3" 
            />
            <div className="flex flex-col items-start">
              <span className="text-2xl font-serif font-bold text-balmville-gold">Balmville</span>
              <span className="text-2xl font-serif text-white -mt-1">Capital</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isHome ? (
              <>
                <a onClick={() => scrollToSection('about')} className="nav-link cursor-pointer">About</a>
                <a onClick={() => scrollToSection('services')} className="nav-link cursor-pointer">Services</a>
                <a onClick={() => scrollToSection('industries')} className="nav-link cursor-pointer">Industries</a>
                <a onClick={() => scrollToSection('contact')} className="nav-link cursor-pointer">Contact</a>
              </>
            ) : (
              <>
                <a onClick={() => navigateTo('/#about')} className="nav-link cursor-pointer">About</a>
                <a onClick={() => navigateTo('/#services')} className="nav-link cursor-pointer">Services</a>
                <a onClick={() => navigateTo('/#industries')} className="nav-link cursor-pointer">Industries</a>
                <a onClick={() => navigateTo('/#contact')} className="nav-link cursor-pointer">Contact</a>
              </>
            )}
            <a 
              onClick={() => navigateTo('/smart-capital-connect')}
              className={`nav-link cursor-pointer ${location.pathname === '/smart-capital-connect' ? 'opacity-100' : ''}`}
            >
              Smart Capital
            </a>
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
            {isHome ? (
              <>
                <a onClick={() => scrollToSection('about')} className="nav-link cursor-pointer">About</a>
                <a onClick={() => scrollToSection('services')} className="nav-link cursor-pointer">Services</a>
                <a onClick={() => scrollToSection('industries')} className="nav-link cursor-pointer">Industries</a>
                <a onClick={() => scrollToSection('contact')} className="nav-link cursor-pointer">Contact</a>
              </>
            ) : (
              <>
                <a onClick={() => navigateTo('/#about')} className="nav-link cursor-pointer">About</a>
                <a onClick={() => navigateTo('/#services')} className="nav-link cursor-pointer">Services</a>
                <a onClick={() => navigateTo('/#industries')} className="nav-link cursor-pointer">Industries</a>
                <a onClick={() => navigateTo('/#contact')} className="nav-link cursor-pointer">Contact</a>
              </>
            )}
            <a 
              onClick={() => navigateTo('/smart-capital-connect')}
              className={`nav-link cursor-pointer ${location.pathname === '/smart-capital-connect' ? 'opacity-100' : ''}`}
            >
              Smart Capital
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
