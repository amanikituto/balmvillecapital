
import { useEffect, useState, useRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
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
      className={`service-card transform transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="mb-6 p-3 inline-flex items-center justify-center rounded-full bg-balmville-gold/20">
        <Icon className="h-6 w-6 text-balmville-gold" />
      </div>
      <h3 className="text-xl font-medium text-balmville-gold mb-3">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
};

export default ServiceCard;
