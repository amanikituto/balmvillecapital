
import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-balmville-teal section-padding">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-balmville-gold/30 bg-balmville-gold/10 text-balmville-gold mb-4">
            <p className="text-sm font-medium">Contact Us</p>
          </div>
          <h2 className="text-3xl md:text-4xl text-center text-white mb-4 max-w-3xl">
            Get in Touch with <span className="gradient-text">Balmville Capital</span>
          </h2>
          <div className="w-20 h-1 bg-balmville-gold/30 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-balmville-lightTeal/30 backdrop-blur-sm p-8 rounded-lg border border-balmville-gold/20">
            <h3 className="text-2xl text-balmville-gold mb-6">Send Us a Message</h3>
            
            {isSubmitted ? (
              <div className="bg-green-500/20 border border-green-500/30 text-green-300 p-4 rounded-md">
                <p>Thank you for your message! We'll get back to you soon.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-balmville-teal/60 border border-balmville-gold/20 rounded-md text-white focus:outline-none focus:border-balmville-gold/60 transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-balmville-teal/60 border border-balmville-gold/20 rounded-md text-white focus:outline-none focus:border-balmville-gold/60 transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 bg-balmville-teal/60 border border-balmville-gold/20 rounded-md text-white focus:outline-none focus:border-balmville-gold/60 transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 bg-balmville-teal/60 border border-balmville-gold/20 rounded-md text-white focus:outline-none focus:border-balmville-gold/60 transition-colors"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 ${
                    isSubmitting 
                      ? 'bg-balmville-gold/70' 
                      : 'bg-balmville-gold hover:bg-balmville-lightGold'
                  } text-balmville-teal font-medium rounded-md transition-colors`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
          
          <div className="bg-balmville-lightTeal/30 backdrop-blur-sm p-8 rounded-lg border border-balmville-gold/20">
            <h3 className="text-2xl text-balmville-gold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-balmville-gold/10 rounded-full">
                  <MapPin className="text-balmville-gold h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white text-lg mb-1">Location</h4>
                  <p className="text-white/80">Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-balmville-gold/10 rounded-full">
                  <Phone className="text-balmville-gold h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white text-lg mb-1">Phone</h4>
                  <p className="text-white/80">+254 759 763 246</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-balmville-gold/10 rounded-full">
                  <Mail className="text-balmville-gold h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white text-lg mb-1">Email</h4>
                  <p className="text-white/80">consulting@balmvillecapital.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-balmville-gold/10 rounded-full">
                  <Linkedin className="text-balmville-gold h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white text-lg mb-1">LinkedIn</h4>
                  <p className="text-white/80">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-balmville-gold transition-colors">
                      Balmville Capital Ltd
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-xl text-balmville-gold mb-4">Strategic Partners</h4>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-center">
                  <img src="/lovable-uploads/b31cedfa-3da1-4436-8930-b9a2af0349da.png" alt="FSD Kenya Logo" className="w-8 h-8 mr-3" />
                  FSD Kenya
                </li>
                <li className="flex items-center">
                  <img src="/lovable-uploads/753c4c71-4eae-44b4-abed-68024d47d5ab.png" alt="Absa Bank Logo" className="w-8 h-8 mr-3" />
                  Absa Bank Kenya PLC
                </li>
                <li className="flex items-center">
                  <img src="/lovable-uploads/fb9eb40e-0b5a-45a9-877f-374156677676.png" alt="Fitzrovian Africa Logo" className="w-8 h-8 mr-3" />
                  Fitzrovian Africa Business Advisory
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
