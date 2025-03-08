
import { useRef } from 'react';
import IndustryCard from '../ui/IndustryCard';

const Industries = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      title: "SMEs & Startups",
      backgroundImage: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=3000"
    },
    {
      title: "Banks & MFIs",
      backgroundImage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=3000"
    },
    {
      title: "Manufacturing & Retail",
      backgroundImage: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80&w=3000"
    },
    {
      title: "Fintech & Digital Transformation",
      backgroundImage: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&fit=crop&q=80&w=3000"
    },
    {
      title: "Real Estate & Hospitality",
      backgroundImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=3000"
    },
    {
      title: "Healthcare & Education",
      backgroundImage: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&q=80&w=3000"
    }
  ];

  return (
    <section id="industries" ref={sectionRef} className="bg-gradient-to-b from-amber-900/20 to-balmville-teal section-padding">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-amber-600/30 bg-amber-600/10 text-amber-500 mb-4">
            <p className="text-sm font-medium">Industries We Serve</p>
          </div>
          <h2 className="text-3xl md:text-4xl text-center text-white mb-4 max-w-3xl">
            Tailored Solutions for <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">African Industries</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500/50 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard 
              key={index}
              title={industry.title}
              backgroundImage={industry.backgroundImage}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
