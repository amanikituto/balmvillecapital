
import { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        setIsMenuOpen(false);
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${id}`);
      setIsMenuOpen(false);
    }
  };

  const navigateTo = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-balmville-teal py-4 transition-all duration-300"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="flex items-center cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
              window.scrollTo(0, 0);
            }}
          >
            <img 
              src="/lovable-uploads/a8dd2986-dca3-432d-b4c8-c0ea8d93ce20.png" 
              alt="Balmville Capital Logo" 
              className="h-10 mr-3" 
            />
            <div className="flex items-center">
              <span className="text-2xl font-serif font-bold bg-gradient-to-r from-balmville-gold to-balmville-lightGold bg-clip-text text-transparent">Balmville</span>
              <span className="text-2xl font-serif text-white ml-2">Capital</span>
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
            <a 
              onClick={() => navigateTo('/admin-login')}
              className="flex items-center nav-link cursor-pointer"
            >
              <ShieldCheck className="h-4 w-4 mr-1" />
              Admin
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-balmville-teal">
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
            <a 
              onClick={() => navigateTo('/admin-login')} 
              className="flex items-center nav-link cursor-pointer"
            >
              <ShieldCheck className="h-4 w-4 mr-1" />
              Admin
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
