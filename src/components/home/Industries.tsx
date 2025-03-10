
import { useRef } from 'react';
import IndustryCard from '../ui/IndustryCard';

const Industries = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      title: "SMEs & Startups",
      backgroundImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Banks & MFIs",
      backgroundImage: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Manufacturing & Retail",
      backgroundImage: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Fintech & Digital Transformation",
      backgroundImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Real Estate & Hospitality",
      backgroundImage: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Healthcare & Education",
      backgroundImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
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
