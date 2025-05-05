
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import VSuredLogo from '@/components/VSuredLogo';
import CompanyTypeCard from '@/components/CompanyTypeCard';
import { 
  Building, 
  ArrowRight,
  Building2,
  PartyPopper,
  Ticket,
  Car,
  GraduationCap,
  Clock,
  Network
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface CompanyType {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const companyTypes: CompanyType[] = [
  { id: 'residential', title: 'Residential Estate', icon: <Building2 size={20} className="text-vsured-teal" /> },
  { id: 'corporate', title: 'Corporate Organisation', icon: <Building size={20} className="text-vsured-teal" /> },
  { id: 'social', title: 'Social Event', icon: <PartyPopper size={20} className="text-vsured-teal" /> },
  { id: 'ticketing', title: 'Ticketing Event', icon: <Ticket size={20} className="text-vsured-teal" /> },
  { id: 'carpark', title: 'Car Park Operators', icon: <Car size={20} className="text-vsured-teal" /> },
  { id: 'schools', title: 'Schools & Education Institutions', icon: <GraduationCap size={20} className="text-vsured-teal" /> },
  { id: 'workshift', title: 'Workshift Management', icon: <Clock size={20} className="text-vsured-teal" /> },
  { id: 'others', title: 'Others', icon: <Network size={20} className="text-vsured-teal" /> },
];

const Index: React.FC = () => {
  const [selectedCompanyType, setSelectedCompanyType] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGetStarted = () => {
    if (!selectedCompanyType) {
      toast({
        title: "Selection required",
        description: "Please select a company type to continue",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Getting started",
      description: `Setting up your ${selectedCompanyType} account`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left sidebar with image */}
      <div className="bg-vsured-dark text-white md:w-2/5 lg:w-1/3 relative">
        <div 
          className="p-8 h-full flex flex-col bg-gradient-to-b from-black/50 to-black/70 relative"
          style={{
            backgroundImage: "url('/lovable-uploads/5626919b-cdd4-4a28-8983-6ab5ff00371f.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="mt-auto mb-16 z-10">
            <h1 className="text-4xl font-bold mb-4">Digital Register</h1>
            <p className="mb-6">
              Unlock the future of access management with Vsured. 
              Our innovative app empowers communities and 
              organizations to effortlessly fortify security and 
              optimize access control across sprawling spaces.
            </p>
            <div className="flex space-x-2 mt-8">
              <div className="w-1/4 h-1 bg-white rounded-full"></div>
              <div className="w-1/4 h-1 bg-white/80 rounded-full"></div>
              <div className="w-1/4 h-1 bg-white/60 rounded-full"></div>
              <div className="w-1/4 h-1 bg-white/40 rounded-full"></div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-0"></div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-8 md:p-12 lg:p-16 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          <div className="mb-16">
            <VSuredLogo />
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Choose your company type</h2>
            <p className="text-gray-600">
              Tailor your security approach. Select your company type for customized access control with VSURED
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {companyTypes.map((type) => (
              <CompanyTypeCard 
                key={type.id}
                icon={type.icon}
                title={type.title}
                isSelected={selectedCompanyType === type.id}
                onClick={() => setSelectedCompanyType(type.id)}
              />
            ))}
          </div>
          
          <Button 
            onClick={handleGetStarted} 
            className="w-full py-6 bg-vsured-teal hover:bg-vsured-teal/90 text-white"
          >
            Get Started
            <ArrowRight className="ml-2" size={18} />
          </Button>
          
          <div className="mt-16 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <p>© 2024 VSURED Platform. All rights reserved.</p>
            <div className="flex items-center mt-4 md:mt-0">
              <p>Having troubles?</p>
              <a href="#" className="text-vsured-teal ml-2 hover:underline">
                Get Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
