import React from 'react';
import { Laptop, Smartphone, Brain, Monitor, Code, Database, Cloud, Shield } from 'lucide-react';
import { useTheme } from '../ThemeContext';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, category }) => {
  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 group">
      <div className="bg-blue-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-600/30 transition-colors duration-300">
        <div className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300">
          {icon}
        </div>
      </div>
      <div className="text-sm font-medium text-blue-500 mb-2">{category}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-200">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const { theme } = useTheme();

  const services = [
    {
      icon: <Laptop size={24} />,
      title: 'Web Development',
      description: 'Custom web applications with responsive interfaces and powerful backends.',
      category: 'WEB'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      category: 'MOBILE'
    },
    {
      icon: <Brain size={24} />,
      title: 'AI Solutions',
      description: 'Machine learning and AI-powered applications for intelligent automation.',
      category: 'AI'
    },
    {
      icon: <Monitor size={24} />,
      title: 'Desktop Applications',
      description: 'High-performance desktop software for Windows, macOS, and Linux.',
      category: 'DESKTOP'
    },
    {
      icon: <Code size={24} />,
      title: 'Custom Software',
      description: 'Bespoke software solutions tailored to your specific business needs.',
      category: 'SOFTWARE'
    },
    {
      icon: <Database size={24} />,
      title: 'Database Design',
      description: 'Robust database architecture with optimization for performance and scalability.',
      category: 'INFRASTRUCTURE'
    },
    {
      icon: <Cloud size={24} />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies for your applications.',
      category: 'INFRASTRUCTURE'
    },
    {
      icon: <Shield size={24} />,
      title: 'Security Audits',
      description: 'Comprehensive security reviews and implementation of best practices.',
      category: 'SECURITY'
    }
  ];

  return (
    <section id="services" className={`py-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 ">
          <div className="inline-block">
            <div className="flex items-center justify-center">
              <div className="h-1 w-12 bg-blue-600 mr-4"></div>
              <p className="text-blue-500 font-medium">OUR SERVICES</p>
              <div className="h-1 w-12 bg-blue-600 ml-4"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Innovative Software Solutions
          </h2>
          <p className={`max-w-2xl mx-auto mt-4 ${theme === 'dark' ? 'text-white ' : 'text-black '}`}>
            We deliver high-quality software across multiple platforms to solve complex business challenges and drive digital transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              category={service.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;