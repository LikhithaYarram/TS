import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Tarach Solutions</h3>
            <p className="text-gray-400">
              Innovate, Secure, Empower – Technology Solutions for Every Need
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/fullstack" className="text-gray-400 hover:text-white">
                  Fullstack Development
                </Link>
              </li>
              <li>
                <Link to="/solutions/cybersecurity" className="text-gray-400 hover:text-white">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/solutions/data-engineering" className="text-gray-400 hover:text-white">
                  Data Engineering
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/learnings" className="text-gray-400 hover:text-white">
                  Learnings
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-gray-400 hover:text-white">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-white">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>1234 Tech Street</li>
              <li>Silicon Valley, CA 94025</li>
              <li>contact@tarachsolutions.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tarach Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;