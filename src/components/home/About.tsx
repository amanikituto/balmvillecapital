
import { useEffect, useState, useRef } from 'react';
import { Activity, BarChart, Shield, Users } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const values = [
    {
      icon: <Shield className="h-6 w-6 text-balmville-gold" />,
      title: "Integrity",
      description: "We operate with transparency and trust in all our client relationships."
    },
    {
      icon: <Activity className="h-6 w-6 text-balmville-gold" />,
      title: "Innovation",
      description: "We leverage technology and data-driven insights to drive better outcomes."
    },
    {
      icon: <BarChart className="h-6 w-6 text-balmville-gold" />,
      title: "Impact",
      description: "We focus on meaningful, long-term growth for our clients."
    },
    {
      icon: <Users className="h-6 w-6 text-balmville-gold" />,
      title: "Collaboration",
      description: "We partner with clients for mutual success and shared goals."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="bg-gradient-to-b from-balmville-teal to-balmville-lightTeal section-padding">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-balmville-gold/30 bg-balmville-gold/10 text-balmville-gold mb-4">
            <p className="text-sm font-medium">About Us</p>
          </div>
          <h2 className="text-3xl md:text-4xl text-center text-white mb-4 max-w-3xl">
            A Premier Financial Consultancy Firm Based in <span className="gradient-text">Nairobi, Kenya</span>
          </h2>
          <div className="w-20 h-1 bg-balmville-gold/30 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[-20px]'}`}>
            <h3 className="text-2xl md:text-3xl text-balmville-gold mb-6">Our Mission</h3>
            <p className="text-white/90 mb-8 text-lg leading-relaxed">
              To empower businesses with cutting-edge financial insights and strategies that enhance profitability, 
              optimize credit processes, and enable sustainable expansion.
            </p>

            <h3 className="text-2xl md:text-3xl text-balmville-gold mb-6">Our Vision</h3>
            <p className="text-white/90 mb-8 text-lg leading-relaxed">
              To be among the leading financial and business advisory firms in Africa, 
              recognized for innovation, excellence, and impact in transforming enterprises.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className={`bg-balmville-teal/70 border border-balmville-gold/20 p-6 rounded-lg transition-all duration-1000 delay-${300 + index * 150} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="mb-4 p-3 inline-flex items-center justify-center rounded-full bg-balmville-gold/10">
                    {value.icon}
                  </div>
                  <h4 className="text-xl text-balmville-gold mb-2">{value.title}</h4>
                  <p className="text-white/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
