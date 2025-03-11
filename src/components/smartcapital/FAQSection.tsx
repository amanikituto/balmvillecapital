
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenFAQs(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index) 
        : [...prev, index]
    );
  };

  const faqItems: FAQItem[] = [
    {
      question: "Why is there a $10 registration fee for startups?",
      answer: "The fee ensures that only committed startups apply, allowing us to maintain a high-quality, investor-ready pipeline. It also covers administrative costs and enables us to provide curated matchmaking rather than an open-access platform."
    },
    {
      question: "Do investors have to pay a fee?",
      answer: "No, the registration fee applies only to startups. Balmville Capital works directly with investors to source and vet high-potential opportunities."
    },
    {
      question: "Will I have direct access to investors?",
      answer: "No, Balmville Capital serves as the trusted intermediary to ensure quality matchups between startups and investors. We carefully review each startup's profile, funding needs, and growth potential before introducing them to relevant investors."
    },
    {
      question: "What do I get for the $10 fee?",
      answer: "By registering, you receive:<br/>- Curated Investor Matchmaking – We connect you with investors who align with your industry and funding stage.<br/>- Expert Review – Our team evaluates your startup to ensure it's investor-ready.<br/>- Increased Credibility – Investors prefer vetted startups, improving your chances of securing funding."
    },
    {
      question: "How long will my information remain in the database?",
      answer: "Your startup profile will remain in our database for one year from the date of registration. During this period, we will actively consider your startup for potential investor matchups."
    },
    {
      question: "What happens after I submit my application?",
      answer: "After submission, you'll receive a confirmation email. Our team will review your application, and if it meets our criteria, we'll contact you with potential matches or for additional information. You can also check your application status by contacting us directly."
    },
    {
      question: "Is my information kept confidential?",
      answer: "Yes, all information submitted is kept strictly confidential. Startups and investors cannot see each other's information directly. Balmville Capital acts as an intermediary to protect your privacy and secure your data."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-balmville-lightTeal/30 p-6 md:p-8 rounded-lg mb-8">
        <h3 className="text-2xl font-serif font-semibold text-white mb-4">Frequently Asked Questions</h3>
        
        <div className="space-y-4">
          {faqItems.map((faq, index) => (
            <div key={index} className="border-b border-balmville-gold/30 pb-4">
              <button 
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown className={`h-5 w-5 text-balmville-gold transition-transform duration-200 ${openFAQs.includes(index) ? 'rotate-180' : ''}`} />
              </button>
              <div className={`mt-2 text-white/80 ${openFAQs.includes(index) ? 'block' : 'hidden'}`} dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
