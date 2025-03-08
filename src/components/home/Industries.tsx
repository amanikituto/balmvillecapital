
import { useRef } from 'react';
import IndustryCard from '../ui/IndustryCard';

const Industries = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      title: "SMEs & Startups",
      backgroundImage: "/lovable-uploads/aac8af31-2daf-477f-b912-1b1ee5b4fb05.png"
    },
    {
      title: "Banks & MFIs",
      backgroundImage: "/lovable-uploads/33f5d625-26a2-4acc-94d7-8423349f5f8d.png"
    },
    {
      title: "Manufacturing & Retail",
      backgroundImage: "/lovable-uploads/ca776323-b00a-4339-a499-cbfd4be595e0.png"
    },
    {
      title: "Fintech & Digital Transformation",
      backgroundImage: "/lovable-uploads/b5b2edf4-3efa-4f3d-be9b-8d14cf45ba6e.png"
    },
    {
      title: "Real Estate & Hospitality",
      backgroundImage: "/lovable-uploads/e344068c-08b0-4264-8ed1-2f498911eded.png"
    },
    {
      title: "Healthcare & Education",
      backgroundImage: "/lovable-uploads/0c846a2b-71d6-4b43-9abf-d44d947201cd.png"
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
