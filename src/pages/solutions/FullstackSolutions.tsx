import React from 'react';
import { Code, Server, Database, Smartphone, Cloud, Lock } from 'lucide-react';
import TechnologyStack from '../../components/solutions/TechnologyStack';

const technologies = [
  {
    category: 'Frontend',
    icon: Code,
    items: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['Node.js', 'Python', 'Java', 'Go', 'Express', 'Django'],
  },
  {
    category: 'Database',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch'],
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    items: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA'],
  },
  {
    category: 'Cloud',
    icon: Cloud,
    items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
  },
  {
    category: 'Security',
    icon: Lock,
    items: ['OAuth', 'JWT', 'HTTPS', 'API Security', 'Data Encryption'],
  },
];

const FullstackSolutions = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fullstack Development Solutions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Build scalable, secure, and performant applications with our comprehensive fullstack development services.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Technology Stack</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <TechnologyStack key={tech.category} {...tech} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Development Process</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Planning & Design</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Requirements gathering and analysis</li>
                <li>Architecture design and technology selection</li>
                <li>UI/UX design and prototyping</li>
                <li>Project timeline and milestone planning</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Development & Deployment</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Agile development methodology</li>
                <li>Continuous Integration/Deployment (CI/CD)</li>
                <li>Quality assurance and testing</li>
                <li>Performance optimization and monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullstackSolutions;