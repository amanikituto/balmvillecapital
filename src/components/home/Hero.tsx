
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-balmville-teal flex items-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-balmville-teal/90 to-balmville-teal/100"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-1 rounded-full border border-balmville-gold/30 bg-balmville-gold/10 text-balmville-gold mb-6">
              <p className="text-sm font-medium">Financial Consultancy</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
              Transforming <span className="gradient-text">Businesses</span> Through Strategic <span className="gradient-text">Financial</span> Advisory
            </h1>
            
            <p className="text-white/80 text-lg mb-8 max-w-xl">
              Empowering businesses with cutting-edge financial insights and strategies that enhance profitability, optimize processes, and enable sustainable growth.
            </p>
            
            <button 
              onClick={scrollToServices}
              className="flex items-center px-6 py-3 bg-balmville-gold text-balmville-teal font-medium rounded-md hover:shadow-lg hover:bg-balmville-lightGold transition-all duration-300"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          
          {/* Logo Display */}
          <div className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="w-full max-w-md">
              <img 
                src="/lovable-uploads/0b8cbd33-b211-431b-bdf0-2d70eb354bac.png" 
                alt="Balmville Capital Ltd Logo" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-balmville-gold text-sm mb-2">Scroll Down</span>
        <svg className="w-4 h-4 text-balmville-gold" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
