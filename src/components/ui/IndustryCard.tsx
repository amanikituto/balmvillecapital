
import { useEffect, useState, useRef } from 'react';

interface IndustryCardProps {
  title: string;
  backgroundImage: string;
  delay?: number;
}

const IndustryCard = ({ title, backgroundImage, delay = 0 }: IndustryCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={`industry-card h-72 rounded-lg overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(254, 198, 161, 0.3)'
      }}
    >
      <div className="industry-card-content">
        <div className="bg-gradient-to-r from-amber-600/80 to-orange-600/80 p-3 rounded-md backdrop-blur-sm border border-amber-500/30">
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <div className="w-10 h-1 bg-amber-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
