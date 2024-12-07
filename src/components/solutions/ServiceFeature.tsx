import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceFeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceFeature: React.FC<ServiceFeatureProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-indigo-600 mb-4">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceFeature;