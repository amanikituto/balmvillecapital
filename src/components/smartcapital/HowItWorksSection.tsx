
import React from 'react';

const HowItWorksSection = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-serif font-semibold text-white mb-6">
        How It <span className="gradient-text">Works</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-balmville-lightTeal/30 p-6 rounded-lg">
          <div className="w-12 h-12 rounded-full bg-balmville-gold text-balmville-teal flex items-center justify-center mb-4 mx-auto font-bold text-xl">1</div>
          <h3 className="text-xl font-medium text-white mb-2">Submit Your Application</h3>
          <p className="text-white/70">Complete the relevant form with your company or investment details.</p>
        </div>
        <div className="bg-balmville-lightTeal/30 p-6 rounded-lg">
          <div className="w-12 h-12 rounded-full bg-balmville-gold text-balmville-teal flex items-center justify-center mb-4 mx-auto font-bold text-xl">2</div>
          <h3 className="text-xl font-medium text-white mb-2">Verification Process</h3>
          <p className="text-white/70">Our team reviews and verifies all submissions for quality assurance.</p>
        </div>
        <div className="bg-balmville-lightTeal/30 p-6 rounded-lg">
          <div className="w-12 h-12 rounded-full bg-balmville-gold text-balmville-teal flex items-center justify-center mb-4 mx-auto font-bold text-xl">3</div>
          <h3 className="text-xl font-medium text-white mb-2">Curated Matching</h3>
          <p className="text-white/70">We personally match compatible startups and investors based on criteria.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
