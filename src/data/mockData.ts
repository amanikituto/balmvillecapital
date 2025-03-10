
import { StartupSubmission, InvestorSubmission } from "../types/admin";

export const mockStartupSubmissions: StartupSubmission[] = [
  {
    id: "st-001",
    companyName: "TechInnovate Solutions",
    registrationNumber: "KE2023456789",
    industry: "Technology",
    businessStage: "Early",
    annualRevenue: "$120,000",
    fundingRequired: "$100,000 - $250,000",
    fundUse: "Expansion",
    businessModel: "SaaS platform providing AI-powered analytics for small businesses",
    email: "contact@techinnovate.co.ke",
    phoneNumber: "+254 712 345 678",
    submittedAt: "2023-10-15T14:30:22Z",
    status: "pending"
  },
  {
    id: "st-002",
    companyName: "AgriTech Kenya",
    registrationNumber: "KE2021123456",
    industry: "Agriculture",
    businessStage: "Growth",
    annualRevenue: "$280,000",
    fundingRequired: "$250,000 - $500,000",
    fundUse: "R&D",
    businessModel: "IoT solutions for improving agricultural yield and reducing waste",
    email: "info@agritech.co.ke",
    phoneNumber: "+254 723 456 789",
    submittedAt: "2023-10-10T09:15:45Z",
    status: "approved"
  },
  {
    id: "st-003",
    companyName: "HealthPlus Medical",
    registrationNumber: "KE2022789012",
    industry: "Healthcare",
    businessStage: "Early",
    annualRevenue: "$75,000",
    fundingRequired: "$50,000 - $100,000",
    fundUse: "Working Capital",
    businessModel: "Telemedicine platform connecting patients with doctors in rural areas",
    email: "support@healthplus.co.ke",
    phoneNumber: "+254 734 567 890",
    submittedAt: "2023-10-18T16:45:33Z",
    status: "rejected"
  }
];

export const mockInvestorSubmissions: InvestorSubmission[] = [
  {
    id: "inv-001",
    investorName: "Jane Mwangi",
    companyName: "Serengeti Ventures",
    investmentRange: "$100,000 - $250,000",
    investmentFocus: ["Technology", "Fintech", "Healthcare"],
    investmentType: "Equity",
    preferredStage: "Early",
    email: "jane@serengetiventures.com",
    phoneNumber: "+254 712 987 654",
    investmentCriteria: "Looking for innovative startups with strong growth potential in East Africa",
    submittedAt: "2023-10-16T11:20:45Z",
    status: "pending"
  },
  {
    id: "inv-002",
    investorName: "David Odhiambo",
    companyName: "Savannah Capital",
    investmentRange: "$250,000 - $500,000",
    investmentFocus: ["Agriculture", "Manufacturing", "Retail"],
    investmentType: "Hybrid",
    preferredStage: "Growth",
    email: "david@savannahcapital.com",
    phoneNumber: "+254 723 876 543",
    investmentCriteria: "Interested in businesses with proven revenue models and expansion opportunities",
    submittedAt: "2023-10-12T14:35:18Z",
    status: "approved"
  },
  {
    id: "inv-003",
    investorName: "Amina Hassan",
    companyName: "Baobab Investments",
    investmentRange: "$50,000 - $100,000",
    investmentFocus: ["Education", "Technology"],
    investmentType: "Convertible Note",
    preferredStage: "Early",
    email: "amina@baobabinvest.co.ke",
    phoneNumber: "+254 734 765 432",
    investmentCriteria: "Supporting educational technology solutions with social impact",
    submittedAt: "2023-10-17T09:50:27Z",
    status: "pending"
  }
];
