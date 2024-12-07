import React from 'react';
import { Award, Shield, Code, Database, Briefcase, Clock, DollarSign, Users } from 'lucide-react';

const certificationTracks = [
  {
    title: 'Fullstack Development Certifications',
    icon: Code,
    certifications: [
      {
        name: 'Advanced MERN Stack Developer',
        duration: '3 months',
        level: 'Advanced',
        price: '$999',
        topics: [
          'Advanced React & Redux',
          'Node.js Microservices',
          'MongoDB Optimization',
          'AWS Deployment',
          'Testing & CI/CD'
        ]
      },
      {
        name: 'Cloud Native Developer',
        duration: '4 months',
        level: 'Intermediate',
        price: '$1,299',
        topics: [
          'Docker & Kubernetes',
          'Serverless Architecture',
          'Cloud Services Integration',
          'Microservices Design',
          'DevOps Practices'
        ]
      }
    ]
  },
  {
    title: 'Cybersecurity Certifications',
    icon: Shield,
    certifications: [
      {
        name: 'Certified Security Analyst',
        duration: '4 months',
        level: 'Advanced',
        price: '$1,499',
        topics: [
          'Penetration Testing',
          'Threat Hunting',
          'Incident Response',
          'Malware Analysis',
          'Security Tools Mastery'
        ]
      },
      {
        name: 'Cloud Security Specialist',
        duration: '3 months',
        level: 'Intermediate',
        price: '$1,199',
        topics: [
          'Cloud Security Architecture',
          'Identity Management',
          'Compliance & Auditing',
          'Security Automation',
          'Threat Detection'
        ]
      }
    ]
  },
  {
    title: 'Data Engineering Certifications',
    icon: Database,
    certifications: [
      {
        name: 'Enterprise Data Engineer',
        duration: '4 months',
        level: 'Advanced',
        price: '$1,399',
        topics: [
          'Data Pipeline Architecture',
          'Big Data Processing',
          'Data Warehouse Design',
          'ETL Development',
          'Data Quality & Governance'
        ]
      },
      {
        name: 'Analytics Engineering Specialist',
        duration: '3 months',
        level: 'Intermediate',
        price: '$1,099',
        topics: [
          'Data Modeling',
          'SQL Optimization',
          'Business Intelligence',
          'Data Visualization',
          'Predictive Analytics'
        ]
      }
    ]
  }
];

const internshipFeatures = [
  {
    icon: Clock,
    title: 'Flexible Duration',
    description: '3-6 month programs tailored to your schedule'
  },
  {
    icon: Users,
    title: 'Mentorship',
    description: 'One-on-one guidance from industry experts'
  },
  {
    icon: DollarSign,
    title: 'Paid Opportunities',
    description: 'Competitive compensation for qualified candidates'
  },
  {
    icon: Briefcase,
    title: 'Job Placement',
    description: '80% placement rate with partner companies'
  }
];

const Certifications = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Award className="mx-auto h-12 w-12 text-cyan-500" />
          <h1 className="mt-4 text-4xl font-bold text-white mb-4">Professional Certifications</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Earn industry-recognized certifications and advance your career in technology
          </p>
        </div>

        {/* Certification Tracks */}
        <div className="mt-16 space-y-12">
          {certificationTracks.map((track) => (
            <div key={track.title} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <track.icon className="h-8 w-8 text-cyan-500" />
                  <h2 className="ml-3 text-2xl font-bold text-white">{track.title}</h2>
                </div>
                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  {track.certifications.map((cert) => (
                    <div key={cert.name} className="bg-gray-700 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4">{cert.name}</h3>
                      <div className="flex items-center text-gray-300 mb-4">
                        <Clock className="h-5 w-5 mr-2" />
                        <span>{cert.duration}</span>
                        <span className="mx-2">•</span>
                        <span>{cert.level}</span>
                        <span className="mx-2">•</span>
                        <span>{cert.price}</span>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">What You'll Learn</h4>
                        <ul className="space-y-2">
                          {cert.topics.map((topic) => (
                            <li key={topic} className="flex items-center text-gray-300">
                              <span className="h-1.5 w-1.5 bg-cyan-500 rounded-full mr-2"></span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                        <button className="mt-6 w-full bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Internship Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <Briefcase className="mx-auto h-12 w-12 text-cyan-500" />
            <h2 className="mt-4 text-3xl font-bold text-white">Internship Opportunities</h2>
            <p className="mt-2 text-gray-300">
              Gain real-world experience through our industry internship programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {internshipFeatures.map((feature) => (
              <div key={feature.title} className="bg-gray-800 rounded-lg p-6 text-center">
                <feature.icon className="mx-auto h-8 w-8 text-cyan-500" />
                <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Certified?</h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Join thousands of professionals who have advanced their careers through our certification programs.
          </p>
          <button className="bg-white text-cyan-600 py-3 px-8 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certifications;