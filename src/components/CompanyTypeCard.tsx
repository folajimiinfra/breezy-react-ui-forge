
import React from 'react';
import { cn } from '@/lib/utils';

interface CompanyTypeCardProps {
  icon: React.ReactNode;
  title: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const CompanyTypeCard: React.FC<CompanyTypeCardProps> = ({
  icon,
  title,
  isSelected = false,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center p-4 gap-4 rounded-lg border hover:border-vsured-teal transition-colors",
        "bg-vsured-gray hover:bg-white",
        isSelected ? "border-vsured-teal bg-white" : "border-transparent"
      )}
    >
      <div className="flex items-center justify-center bg-white p-2 rounded-lg">
        {icon}
      </div>
      <span className="text-vsured-dark font-medium">{title}</span>
    </button>
  );
};

export default CompanyTypeCard;
