
import { type StartupFormValues } from './formValidation';

type CompanyInfoStepProps = {
  form: StartupFormValues;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  attachedFile: File | null;
}

const CompanyInfoStep = ({ form, handleInputChange, handleFileChange, attachedFile }: CompanyInfoStepProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h3 className="text-xl text-white mb-4">Company Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="companyName" className="block text-white mb-2">
            Company Name <span className="text-balmville-gold">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={form.companyName}
            onChange={handleInputChange}
            className="w-full bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
            placeholder="Registered company name"
            required
          />
        </div>
        
        <div>
          <label htmlFor="registrationNumber" className="block text-white mb-2">
            Registration Number <span className="text-balmville-gold">*</span>
          </label>
          <input
            type="text"
            id="registrationNumber"
            name="registrationNumber"
            value={form.registrationNumber}
            onChange={handleInputChange}
            className="w-full bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
            placeholder="Official registration number"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="industry" className="block text-white mb-2">
            Industry/Sector <span className="text-balmville-gold">*</span>
          </label>
          <select
            id="industry"
            name="industry"
            value={form.industry}
            onChange={handleInputChange}
            className="w-full bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
            required
          >
            <option value="" disabled>Select your industry</option>
            <option value="Technology">Technology</option>
            <option value="Fintech">Fintech</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Retail">Retail</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Hospitality">Hospitality</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="businessStage" className="block text-white mb-2">
            Business Stage <span className="text-balmville-gold">*</span>
          </label>
          <select
            id="businessStage"
            name="businessStage"
            value={form.businessStage}
            onChange={handleInputChange}
            className="w-full bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
            required
          >
            <option value="" disabled>Select your business stage</option>
            <option value="Early">Early (1-3 years)</option>
            <option value="Growth">Growth (3-5 years)</option>
            <option value="Scaling">Scaling (5+ years)</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="registrationDoc" className="block text-white mb-2">
          Company Registration Document <span className="text-balmville-gold">*</span>
        </label>
        <input
          type="file"
          id="registrationDoc"
          onChange={handleFileChange}
          className="w-full bg-white/10 border border-balmville-gold/30 rounded-md p-3 text-white focus:outline-none focus:border-balmville-gold"
          accept=".pdf,.doc,.docx,.png,.jpg"
          required
        />
        <p className="text-white/60 text-sm mt-1">
          Upload your business registration certificate (PDF, DOCX, or image)
        </p>
      </div>
    </div>
  );
};

export default CompanyInfoStep;
