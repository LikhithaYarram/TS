import React from 'react';
import { Shield, Lock, AlertTriangle, Search, FileCheck, Users } from 'lucide-react';
import ServiceFeature from '../../components/solutions/ServiceFeature';

const features = [
  {
    title: 'Penetration Testing',
    description: 'Comprehensive security assessments to identify vulnerabilities in your systems.',
    icon: Search,
  },
  {
    title: 'Security Audits',
    description: 'Detailed analysis of your security posture and compliance requirements.',
    icon: FileCheck,
  },
  {
    title: 'Incident Response',
    description: '24/7 monitoring and rapid response to security incidents.',
    icon: AlertTriangle,
  },
  {
    title: 'Access Control',
    description: 'Implementation of robust authentication and authorization systems.',
    icon: Lock,
  },
  {
    title: 'Security Training',
    description: 'Employee security awareness training and best practices.',
    icon: Users,
  },
  {
    title: 'Compliance',
    description: 'Ensure adherence to industry standards and regulations.',
    icon: Shield,
  },
];

const CybersecuritySolutions = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cybersecurity Solutions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Protect your digital assets with our comprehensive cybersecurity services and solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <ServiceFeature key={feature.title} {...feature} />
          ))}
        </div>

        <div className="mt-16 bg-indigo-700 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Security Assessment</h2>
              <p className="text-indigo-100 mb-8">
                Get a comprehensive security assessment of your systems and infrastructure.
              </p>
              <button className="bg-white text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors">
                Schedule Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecuritySolutions;