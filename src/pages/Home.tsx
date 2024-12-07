import React from 'react';
import { ArrowRight, Code, Shield, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import CompanyLogos from '../components/home/CompanyLogos';
import SecurityStats from '../components/home/SecurityStats';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
            alt="Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Innovate, Secure, Empower
          </h1>
          <p className="text-xl sm:text-2xl mb-8">
            Technology Solutions for Every Need
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/solutions"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <CompanyLogos />

      {/* Security Stats Section */}
      <SecurityStats />

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Our Expertise
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Comprehensive solutions for your technology needs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="relative p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-cyan-500 mb-4">
                <Code className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Fullstack Development</h3>
              <p className="text-gray-300 mb-4">
                Build scalable web and mobile applications with modern technologies
                and best practices.
              </p>
              <Link
                to="/solutions/fullstack"
                className="inline-flex items-center text-cyan-500 hover:text-cyan-400"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="relative p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-cyan-500 mb-4">
                <Shield className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">
                Protect your digital assets with advanced security solutions and
                expert consultation.
              </p>
              <Link
                to="/solutions/cybersecurity"
                className="inline-flex items-center text-cyan-500 hover:text-cyan-400"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="relative p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-cyan-500 mb-4">
                <Database className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Data Engineering</h3>
              <p className="text-gray-300 mb-4">
                Transform your data into actionable insights with our comprehensive
                data solutions.
              </p>
              <Link
                to="/solutions/data-engineering"
                className="inline-flex items-center text-cyan-500 hover:text-cyan-400"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 text-xl text-cyan-100">
              Join thousands of satisfied clients who trust Tarach Solutions
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-cyan-600 bg-white hover:bg-gray-50"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;