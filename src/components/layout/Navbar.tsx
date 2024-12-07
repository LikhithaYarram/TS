import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Shield, Code, Database, BookOpen, Award, DollarSign, FileText } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Solutions',
    href: '/solutions',
    children: [
      { 
        name: 'Fullstack Development',
        href: '/solutions/fullstack',
        icon: Code,
        description: 'End-to-end web and mobile solutions'
      },
      { 
        name: 'Cybersecurity',
        href: '/solutions/cybersecurity',
        icon: Shield,
        description: 'Advanced security solutions'
      },
      { 
        name: 'Data Engineering',
        href: '/solutions/data-engineering',
        icon: Database,
        description: 'Data pipeline and analytics'
      },
    ],
  },
  { 
    name: 'Learning',
    href: '/learnings',
    icon: BookOpen,
    description: 'Professional training programs'
  },
  { 
    name: 'Certifications',
    href: '/certifications',
    icon: Award,
    description: 'Industry-recognized certifications'
  },
  { 
    name: 'Pricing',
    href: '/pricing',
    icon: DollarSign,
    description: 'Flexible pricing plans'
  },
  { 
    name: 'Resources',
    href: '/resources',
    icon: FileText,
    description: 'Guides and documentation'
  },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-gray-900 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Shield className="h-8 w-8 text-cyan-500" />
              <span className="ml-2 text-2xl font-bold text-white">Tarach</span>
              <span className="text-2xl font-bold text-cyan-500">Solutions</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <button
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-500 group"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-500"
                  >
                    {item.name}
                  </Link>
                )}

                {item.children && activeDropdown === item.name && (
                  <div
                    className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="py-1 bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="group flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-gray-700 hover:text-cyan-500"
                        >
                          {child.icon && <child.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-cyan-500" />}
                          <div>
                            <p className="font-medium">{child.name}</p>
                            <p className="text-xs text-gray-400">{child.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <>
                    <button
                      className="w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-500 hover:bg-gray-700"
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    >
                      <div className="flex justify-between items-center">
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 bg-gray-700">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-500 hover:bg-gray-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.icon && <child.icon className="mr-3 h-5 w-5" />}
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-500 hover:bg-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}