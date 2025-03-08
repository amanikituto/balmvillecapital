
import { useEffect, useState } from 'react';
import { ArrowRight, BarChart3, LineChart, PieChart, TrendingUp } from 'lucide-react';

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
              <p className="text-sm font-medium">Boutique Financial Consultancy</p>
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
          
          {/* Financial Chart Visual */}
          <div className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="w-full max-w-md bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-medium text-white">Growth Forecast</h3>
                <div className="flex space-x-2">
                  <TrendingUp className="h-5 w-5 text-balmville-gold" />
                  <LineChart className="h-5 w-5 text-balmville-gold" />
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Upward Trending Chart */}
                <div className="h-48 flex items-end space-x-2 relative">
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    {[0, 1, 2, 3, 4].map((_, idx) => (
                      <div key={idx} className="w-full h-px bg-white/10" />
                    ))}
                  </div>
                  
                  {/* Data points with progressive upward trend */}
                  {[20, 25, 30, 28, 35, 45, 55, 60, 75, 90].map((height, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-gradient-to-t from-balmville-gold/60 to-balmville-gold rounded-t-sm"
                        style={{ height: `${height}%`, transition: `height 1.5s ease-out ${0.1 * index}s` }}
                      ></div>
                      <div className="w-full h-px bg-white/20 mt-1"></div>
                      <span className="text-xs text-white/60 mt-1">Q{index + 1}</span>
                    </div>
                  ))}
                  
                  {/* Trend line overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path 
                        d="M0,80 Q10,75 20,70 T40,72 T60,55 T80,40 T100,10" 
                        fill="none" 
                        stroke="rgba(255,200,100,0.7)" 
                        strokeWidth="1.5"
                        className="opacity-75"
                      />
                      {/* Data points on the trend line */}
                      {[80, 75, 70, 72, 65, 55, 45, 40, 25, 10].map((y, i) => {
                        const x = i * 10;
                        return (
                          <circle 
                            key={i} 
                            cx={x} 
                            cy={y} 
                            r="1.2" 
                            fill="#FFD700" 
                            className="animate-pulse"
                          />
                        );
                      })}
                    </svg>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-sm">Growth</span>
                      <TrendingUp className="h-4 w-4 text-green-400" />
                    </div>
                    <p className="text-xl text-white font-medium mt-1">+24.8%</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-sm">Revenue</span>
                      <BarChart3 className="h-4 w-4 text-balmville-gold" />
                    </div>
                    <p className="text-xl text-white font-medium mt-1">$2.4M</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-sm">ROI</span>
                      <PieChart className="h-4 w-4 text-blue-400" />
                    </div>
                    <p className="text-xl text-white font-medium mt-1">32.5%</p>
                  </div>
                </div>
              </div>
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
