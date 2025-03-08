
import { useState } from 'react';
import { Bot, MessageCircle, Send, X, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the FAQ data structure
const faqData = [
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
    answer: "By registering, you receive:\n- Curated Investor Matchmaking – We connect you with investors who align with your industry and funding stage.\n- Expert Review – Our team evaluates your startup to ensure it's investor-ready.\n- Increased Credibility – Investors prefer vetted startups, improving your chances of securing funding."
  },
  {
    question: "How long will my information remain in the database?",
    answer: "Your startup profile will remain in our database for one year from the date of registration. During this period, we will actively consider your startup for potential investor matchups."
  }
];

// Define the message interface
interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const ChatbotFAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm the Balmville Capital assistant. How can I help you today? You can ask me about our startup-investor matching process, fees, or anything else.", isBot: true }
  ]);
  const [input, setInput] = useState('');
  
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setMinimized(false);
    }
  };
  
  const toggleMinimize = () => {
    setMinimized(!minimized);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  
  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Add user message
    const userMessageId = messages.length + 1;
    const newUserMessage = { id: userMessageId, text: input.trim(), isBot: false };
    setMessages([...messages, newUserMessage]);
    
    // Find best matching FAQ
    const botResponse = findAnswer(input);
    
    // Add bot response with a slight delay to simulate thinking
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages, 
        { id: userMessageId + 1, text: botResponse, isBot: true }
      ]);
    }, 600);
    
    setInput('');
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  const handleQuickQuestion = (question: string) => {
    const userMessageId = messages.length + 1;
    
    // Add user message
    setMessages([...messages, { id: userMessageId, text: question, isBot: false }]);
    
    // Find answer
    const botResponse = findAnswer(question);
    
    // Add bot response with a slight delay
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages, 
        { id: userMessageId + 1, text: botResponse, isBot: true }
      ]);
    }, 600);
  };
  
  // Simple keyword matching to find the most relevant answer
  const findAnswer = (question: string): string => {
    const questionLower = question.toLowerCase();
    
    // Check for exact questions
    const exactMatch = faqData.find(faq => 
      questionLower.includes(faq.question.toLowerCase())
    );
    if (exactMatch) return exactMatch.answer;
    
    // Check for keywords
    if (questionLower.includes('fee') || questionLower.includes('$10') || questionLower.includes('payment') || questionLower.includes('cost')) {
      if (questionLower.includes('investor')) {
        return faqData[1].answer;
      }
      if (questionLower.includes('what') || questionLower.includes('get') || questionLower.includes('receive')) {
        return faqData[3].answer;
      }
      return faqData[0].answer;
    }
    
    if (questionLower.includes('investor') && (questionLower.includes('direct') || questionLower.includes('access'))) {
      return faqData[2].answer;
    }
    
    if (questionLower.includes('database') || questionLower.includes('how long') || questionLower.includes('remain') || questionLower.includes('time')) {
      return faqData[4].answer;
    }
    
    return "I'm not sure I understand your question. Could you try rephrasing it, or select one of the common questions below?";
  };
  
  return (
    <>
      {/* Chat button */}
      <button 
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 rounded-full bg-balmville-gold text-balmville-teal shadow-lg hover:bg-balmville-lightGold transition-all duration-300"
        aria-label="Open chat assistant"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <div className={cn(
          "fixed bottom-24 right-6 z-50 w-80 md:w-96 rounded-lg shadow-xl bg-white overflow-hidden transition-all duration-300",
          minimized ? "h-14" : "h-[500px] max-h-[calc(100vh-120px)]"
        )}>
          {/* Header */}
          <div className="flex items-center justify-between bg-balmville-teal p-3 text-white">
            <div className="flex items-center">
              <Bot className="mr-2" size={20} />
              <h3 className="font-medium">Balmville Assistant</h3>
            </div>
            <button 
              onClick={toggleMinimize}
              className="p-1 rounded-full hover:bg-balmville-lightTeal/30"
              aria-label={minimized ? "Expand chat" : "Minimize chat"}
            >
              <ChevronUp 
                size={18} 
                className={cn(
                  "transition-transform duration-300",
                  minimized ? "rotate-180" : ""
                )} 
              />
            </button>
          </div>
          
          {!minimized && (
            <>
              {/* Chat messages */}
              <div className="flex-1 h-[calc(100%-112px)] overflow-y-auto p-4 bg-gray-50">
                <div className="space-y-4">
                  {messages.map(message => (
                    <div 
                      key={message.id}
                      className={cn(
                        "max-w-[80%] rounded-lg p-3",
                        message.isBot 
                          ? "bg-balmville-lightTeal/20 text-gray-800 mr-auto" 
                          : "bg-balmville-gold/90 text-balmville-teal ml-auto"
                      )}
                    >
                      <p className="whitespace-pre-line">{message.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Suggested questions */}
              <div className="p-2 border-t border-gray-200 bg-gray-50">
                <p className="text-xs text-gray-600 mb-2">Common questions:</p>
                <div className="flex flex-wrap gap-1">
                  <button 
                    onClick={() => handleQuickQuestion("Why is there a fee?")}
                    className="text-xs bg-balmville-lightTeal/10 hover:bg-balmville-lightTeal/20 text-balmville-teal px-2 py-1 rounded-full"
                  >
                    Why is there a fee?
                  </button>
                  <button 
                    onClick={() => handleQuickQuestion("Do investors pay fees?")}
                    className="text-xs bg-balmville-lightTeal/10 hover:bg-balmville-lightTeal/20 text-balmville-teal px-2 py-1 rounded-full"
                  >
                    Do investors pay?
                  </button>
                  <button 
                    onClick={() => handleQuickQuestion("Will I access investors directly?")}
                    className="text-xs bg-balmville-lightTeal/10 hover:bg-balmville-lightTeal/20 text-balmville-teal px-2 py-1 rounded-full"
                  >
                    Direct investor access?
                  </button>
                </div>
              </div>
              
              {/* Input area */}
              <div className="p-3 border-t border-gray-200 bg-white">
                <div className="flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your question..."
                    className="flex-1 py-2 px-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-balmville-gold"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-balmville-gold text-balmville-teal py-2 px-3 rounded-r-md hover:bg-balmville-lightGold focus:outline-none"
                    aria-label="Send message"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatbotFAQ;
