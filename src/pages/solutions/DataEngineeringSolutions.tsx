import React from 'react';
import { Database, BarChart, GitBranch, Workflow, Server, Layers } from 'lucide-react';
import ServiceFeature from '../../components/solutions/ServiceFeature';

const features = [
  {
    title: 'Data Pipeline Development',
    description: 'Build robust ETL pipelines for efficient data processing and transformation.',
    icon: Workflow,
  },
  {
    title: 'Data Warehousing',
    description: 'Design and implement scalable data warehouse solutions.',
    icon: Database,
  },
  {
    title: 'Big Data Processing',
    description: 'Handle large-scale data processing with modern technologies.',
    icon: Server,
  },
  {
    title: 'Data Analytics',
    description: 'Transform raw data into actionable business insights.',
    icon: BarChart,
  },
  {
    title: 'Data Integration',
    description: 'Seamlessly integrate data from multiple sources and systems.',
    icon: GitBranch,
  },
  {
    title: 'Data Architecture',
    description: 'Design scalable and efficient data architectures.',
    icon: Layers,
  },
];

const DataEngineeringSolutions = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Data Engineering Solutions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your data into valuable insights with our comprehensive data engineering services.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <ServiceFeature key={feature.title} {...feature} />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Data Assessment</h2>
              <p className="text-indigo-100 mb-8">
                Let us help you unlock the full potential of your data with a comprehensive assessment.
              </p>
              <button className="bg-white text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataEngineeringSolutions;