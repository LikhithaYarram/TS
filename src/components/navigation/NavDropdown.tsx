import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

interface NavDropdownProps {
  title: string;
  items: NavItem[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ title, items }) => {
  return (
    <div className="relative group">
      <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 group">
        {title}
        <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
      </button>
      <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="py-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          {items.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;