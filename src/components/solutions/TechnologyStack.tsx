import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TechnologyStackProps {
  category: string;
  icon: LucideIcon;
  items: string[];
}

const TechnologyStack: React.FC<TechnologyStackProps> = ({ category, icon: Icon, items }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <Icon className="h-6 w-6 text-indigo-600 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">{category}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechnologyStack;