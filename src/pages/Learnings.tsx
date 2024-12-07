import React from 'react';
import { BookOpen, Code, Shield, Database, Clock, Users, Trophy, Brain } from 'lucide-react';

const learningTracks = [
  {
    title: 'Fullstack Development Track',
    icon: Code,
    duration: '6 months',
    level: 'Beginner to Advanced',
    topics: [
      'Modern JavaScript & TypeScript',
      'React & Next.js Development',
      'Node.js & Express Backend',
      'Database Design & Implementation',
      'API Development & Integration',
      'DevOps & Deployment Strategies'
    ],
    projects: [
      'E-commerce Platform',
      'Social Media Dashboard',
      'Real-time Chat Application'
    ]
  },
  {
    title: 'Cybersecurity Track',
    icon: Shield,
    duration: '4 months',
    level: 'Intermediate to Advanced',
    topics: [
      'Network Security Fundamentals',
      'Ethical Hacking Techniques',
      'Security Auditing & Compliance',
      'Incident Response & Forensics',
      'Cloud Security',
      'Security Architecture & Design'
    ],
    projects: [
      'Security Assessment Report',
      'Penetration Testing Lab',
      'Security Monitoring System'
    ]
  },
  {
    title: 'Data Engineering Track',
    icon: Database,
    duration: '5 months',
    level: 'Intermediate',
    topics: [
      'Data Pipeline Architecture',
      'ETL Process Development',
      'Big Data Processing',
      'Data Warehouse Design',
      'Data Analytics & Visualization',
      'Machine Learning Integration'
    ],
    projects: [
      'Data Pipeline Implementation',
      'Analytics Dashboard',
      'Predictive Analysis System'
    ]
  }
];

const features = [
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Learn at your own pace with our flexible scheduling options'
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Get guidance from industry professionals with years of experience'
  },
  {
    icon: Trophy,
    title: 'Industry Recognition',
    description: 'Earn certificates recognized by leading tech companies'
  },
  {
    icon: Brain,
    title: 'Practical Learning',
    description: 'Work on real-world projects and build your portfolio'
  }
];

const Learnings = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <BookOpen className="mx-auto h-12 w-12 text-cyan-500" />
          <h1 className="mt-4 text-4xl font-bold text-white mb-4">Professional Learning Programs</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Master the latest technologies with our comprehensive learning tracks designed for modern tech professionals.
          </p>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="bg-gray-800 rounded-lg p-6 text-center">
              <feature.icon className="mx-auto h-8 w-8 text-cyan-500" />
              <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Learning Tracks */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {learningTracks.map((track) => (
            <div key={track.title} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <track.icon className="h-10 w-10 text-cyan-500" />
                <h3 className="mt-4 text-xl font-bold text-white">{track.title}</h3>
                <div className="mt-2 flex items-center text-sm text-gray-400">
                  <Clock className="h-4 w-4 mr-1" />
                  {track.duration}
                  <span className="mx-2">•</span>
                  {track.level}
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-white">Key Topics</h4>
                  <ul className="mt-2 space-y-2">
                    {track.topics.map((topic) => (
                      <li key={topic} className="text-gray-400 flex items-center">
                        <span className="h-1.5 w-1.5 bg-cyan-500 rounded-full mr-2"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-white">Projects</h4>
                  <ul className="mt-2 space-y-2">
                    {track.projects.map((project) => (
                      <li key={project} className="text-gray-400 flex items-center">
                        <span className="h-1.5 w-1.5 bg-cyan-500 rounded-full mr-2"></span>
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-6 w-full bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers through our learning programs.
          </p>
          <button className="bg-white text-cyan-600 py-3 px-8 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learnings;