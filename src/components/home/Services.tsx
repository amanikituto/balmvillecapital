
import { useRef } from 'react';
import ServiceCard from '../ui/ServiceCard';
import { LineChart, PieChart, Briefcase, Cpu, BarChart4, Building } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" ref={sectionRef} className="bg-balmville-teal section-padding">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-balmville-gold/30 bg-balmville-gold/10 text-balmville-gold mb-4">
            <p className="text-sm font-medium">Our Services</p>
          </div>
          <h2 className="text-3xl md:text-4xl text-center text-white mb-4 max-w-3xl">
            Comprehensive <span className="gradient-text">Financial Solutions</span> for Your Business
          </h2>
          <div className="w-20 h-1 bg-balmville-gold/30 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={LineChart}
            title="Financial Modeling & Valuation"
            description="In-depth financial projections, business valuation, and investment analysis to support strategic decision-making."
            delay={100}
            imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          />
          
          <ServiceCard 
            icon={PieChart}
            title="Product Optimization"
            description="Enhancing the profitability and efficiency of financial products through research, design, and strategy implementation."
            delay={200}
            imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          />
          
          <ServiceCard 
            icon={Briefcase}
            title="Business Restructuring"
            description="Assisting businesses in turnaround strategies, operational efficiency, and financial restructuring to improve profitability."
            delay={300}
            imageUrl="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          />
          
          <ServiceCard 
            icon={BarChart4}
            title="Process Improvement"
            description="Streamlining business operations by identifying inefficiencies and implementing best practices for maximum productivity."
            delay={400}
            imageUrl="https://images.unsplash.com/photo-1569017388730-020b5f80a004?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          />
          
          <ServiceCard 
            icon={Building}
            title="SME Financing Advisory"
            description="Assisting small and medium-sized enterprises in accessing financing, structuring deals, and improving creditworthiness."
            delay={500}
            imageUrl="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          />
          
          <ServiceCard 
            icon={Cpu}
            title="AI-Driven Credit Process Efficiency"
            description="Implementing AI-powered tools to enhance credit risk assessment, automate decision-making, and optimize loan portfolio performance."
            delay={600}
            imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
