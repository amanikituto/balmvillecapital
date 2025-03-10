
import { useState } from 'react';
import { 
  ChevronDown, 
  Check, 
  X, 
  Clock,
  Eye,
  Filter
} from 'lucide-react';
import { StartupSubmission, InvestorSubmission } from '@/types/admin';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SubmissionTableProps {
  submissions: (StartupSubmission | InvestorSubmission)[];
  type: 'startup' | 'investor';
}

const SubmissionTable = ({ submissions, type }: SubmissionTableProps) => {
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  
  const filteredSubmissions = statusFilter === 'all' 
    ? submissions 
    : submissions.filter(sub => sub.status === statusFilter);
  
  const getStatusBadgeClass = (status: string) => {
    switch(status) {
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-600/30';
      case 'approved':
        return 'bg-green-500/20 text-green-400 border-green-600/30';
      case 'rejected':
        return 'bg-red-500/20 text-red-400 border-red-600/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-600/30';
    }
  };
  
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'approved':
        return <Check className="h-4 w-4" />;
      case 'rejected':
        return <X className="h-4 w-4" />;
      default:
        return null;
    }
  };
  
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM d, yyyy');
    } catch (e) {
      return 'Invalid date';
    }
  };
  
  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium text-white">
          {type === 'startup' ? 'Startup' : 'Investor'} Submissions ({filteredSubmissions.length})
        </h2>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-balmville-lightTeal text-white border-balmville-gold/30 hover:bg-balmville-lightTeal/70"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter: {statusFilter === 'all' ? 'All Status' : statusFilter}
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-balmville-lightTeal border-balmville-gold/30">
            <DropdownMenuItem 
              className="text-white hover:bg-balmville-teal cursor-pointer"
              onClick={() => setStatusFilter('all')}
            >
              All Status
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="text-white hover:bg-balmville-teal cursor-pointer"
              onClick={() => setStatusFilter('pending')}
            >
              Pending
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="text-white hover:bg-balmville-teal cursor-pointer"
              onClick={() => setStatusFilter('approved')}
            >
              Approved
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="text-white hover:bg-balmville-teal cursor-pointer"
              onClick={() => setStatusFilter('rejected')}
            >
              Rejected
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      {filteredSubmissions.length > 0 ? (
        <div className="rounded-lg overflow-hidden border border-balmville-gold/30">
          <table className="min-w-full divide-y divide-balmville-gold/30">
            <thead className="bg-balmville-lightTeal">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  {type === 'startup' ? 'Company' : 'Investor'}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  {type === 'startup' ? 'Industry' : 'Focus'}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  {type === 'startup' ? 'Funding Needed' : 'Investment Range'}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-white uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-balmville-teal divide-y divide-balmville-gold/30">
              {filteredSubmissions.map((submission) => (
                <tr key={submission.id} className="hover:bg-balmville-teal/70 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-white">
                      {type === 'startup' 
                        ? (submission as StartupSubmission).companyName 
                        : (submission as InvestorSubmission).investorName}
                    </div>
                    <div className="text-xs text-white/60">
                      {submission.id}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-white">
                      {type === 'startup' 
                        ? (submission as StartupSubmission).industry 
                        : (submission as InvestorSubmission).investmentFocus.join(', ')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-white">
                      {type === 'startup' 
                        ? (submission as StartupSubmission).fundingRequired 
                        : (submission as InvestorSubmission).investmentRange}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-white">{submission.email}</div>
                    <div className="text-xs text-white/60">{submission.phoneNumber}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-white">{formatDate(submission.submittedAt)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusBadgeClass(submission.status)}`}>
                      {getStatusIcon(submission.status)}
                      <span className="ml-1 capitalize">{submission.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <Button
                      size="sm"
                      variant="outline"
                      className="inline-flex items-center border-balmville-gold/30 bg-transparent text-white hover:bg-balmville-gold/20"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-balmville-lightTeal/20 border border-balmville-gold/30 rounded-lg p-8 text-center">
          <p className="text-white text-lg">
            No {statusFilter !== 'all' ? statusFilter : ''} submissions found.
          </p>
          <p className="text-white/60 mt-2">
            {statusFilter === 'all' 
              ? `When ${type === 'startup' ? 'startups' : 'investors'} submit their information through the Smart Capital Connect page, they will appear here.`
              : `No ${type === 'startup' ? 'startups' : 'investors'} with ${statusFilter} status.`}
          </p>
        </div>
      )}
    </div>
  );
};

export default SubmissionTable;
