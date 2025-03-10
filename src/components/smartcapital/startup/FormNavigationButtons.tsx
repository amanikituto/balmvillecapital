
import React from 'react';

type FormNavigationButtonsProps = {
  step: number;
  isSubmitting: boolean;
  prevStep: () => void;
  nextStep: () => void;
}

const FormNavigationButtons = ({ step, isSubmitting, prevStep, nextStep }: FormNavigationButtonsProps) => {
  return (
    <div className="flex justify-between mt-10">
      {step > 1 ? (
        <button
          type="button"
          onClick={prevStep}
          className="px-6 py-3 bg-white/10 text-white font-medium rounded-md hover:bg-white/20 transition-all duration-300"
        >
          Previous
        </button>
      ) : (
        <div></div>
      )}
      
      {step < 3 ? (
        <button
          type="button"
          onClick={nextStep}
          className="px-6 py-3 bg-balmville-gold text-balmville-teal font-medium rounded-md hover:bg-balmville-lightGold transition-all duration-300"
        >
          Next
        </button>
      ) : (
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-3 bg-balmville-gold text-balmville-teal font-medium rounded-md hover:bg-balmville-lightGold transition-all duration-300 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      )}
    </div>
  );
};

export default FormNavigationButtons;
