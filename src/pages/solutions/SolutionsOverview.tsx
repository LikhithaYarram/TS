import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Shield, Database, ArrowRight } from 'lucide-react';
import ServiceCard from '../../components/solutions/ServiceCard';

const services = [
  {
    title: 'Fullstack Development',
    description: 'End-to-end web and mobile application development using cutting-edge technologies.',
    icon: Code,
    link: '/solutions/fullstack',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS'],
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
    icon: Shield,
    link: '/solutions/cybersecurity',
    technologies: ['Penetration Testing', 'Security Audits', 'Incident Response', 'Compliance'],
  },
  {
    title: 'Data Engineering',
    description: 'Transform raw data into actionable insights with modern data engineering solutions.',
    icon: Database,
    link: '/solutions/data-engineering',
    technologies: ['Big Data', 'ETL', 'Data Warehousing', 'Analytics'],
  },
];

const SolutionsOverview = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our expertise in technology can transform your business and drive innovation.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolutionsOverview;