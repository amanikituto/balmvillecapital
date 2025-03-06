
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
      className={`industry-card h-72 transition-all duration-700 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="industry-card-content">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <div className="w-10 h-1 bg-balmville-gold rounded-full"></div>
      </div>
    </div>
  );
};

export default IndustryCard;
