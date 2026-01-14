import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import imagep1 from "../../src/images/Projcet 1/347ff8c7b3d44bc4991dc896e4b7dd3f.jpg"
import imagep2 from "../../src/images/Projcet 1/15e1efb7e70e40b194a15e9d13ed9dab.jpg"
import imagep3 from "../../src/images/Projcet 1/8f65de5a20d245d08a70aa7e0ab88e60.jpg"
import imagep4 from "../../src/images/Project 2/Screenshot 2025-04-22 075848.jpg"
import imagep5 from "../../src/images/Project 2/Screenshot 2025-04-22 075925.jpg"
import imagep6 from "../../src/images/Project 2/Screenshot 2025-04-22 075952.jpg"
import imagep7 from "../../src/images/Project 3/Screenshot 2025-04-22 080524.jpg"
import imagep8 from "../../src/images/Project 3/Screenshot 2025-04-22 080449.jpg"
import imagep9 from "../../src/images/Project 3/Screenshot 2025-04-22 080432.jpg"
import imagep10 from "../../src/images/Project 4/Screenshot 2025-04-22 080640.jpg"
import imagep11 from "../../src/images/Project 4/Screenshot 2025-04-22 080704.jpg"
import imagep12 from "../../src/images/Project 4/Screenshot 2025-04-22 080732.jpg"
import imagep13 from "../../src/images/Project 5/Screenshot 2025-04-22 080804.jpg"
import imagep14 from "../../src/images/Project 5/Screenshot 2025-04-22 080849.jpg"
import imagep15 from "../../src/images/Project 5/Screenshot 2025-04-22 080914.jpg"
import imagep16 from "../../src/images/Project 6/Screenshot 2025-04-22 080931.jpg"
import imagep17 from "../../src/images/Project 6/Screenshot 2025-04-22 080950.jpg"
import imagep18 from "../../src/images/Project 6/Screenshot 2025-04-22 081002.jpg"

const MinimalNavbar: React.FC = () => {
  const { theme } = useTheme();
  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${theme === 'dark' ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-md py-3 shadow-lg`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-white font-bold text-xl flex items-center">
            <svg className="svvvgh" width="75px" height="40px" viewBox="0 0 187.3 93.7" preserveAspectRatio="xMidYMid meet">
              <path
                id="outline-bg"
                opacity="0.05"
                fill="none"
                stroke="#4285F4"
                strokeWidth={100}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 -8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
              />
              <path
                stroke="#4285F4"
                id="outline"
                className="animated"
                fill="none"
                strokeWidth={100}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 -8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
              />
              <polyline points="72,39 62,46.4 72,53.8" fill="none" stroke={theme === 'dark' ? '#fff' : '#000'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="115,39 125,46.4 115,53.8" fill="none" stroke={theme === 'dark' ? '#fff' : '#000'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-2xl text-blue-500 mr-1">Devinity</span><span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>.</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

interface Project {
  id: number;
  title: string;
  category: string;
  images: string[];
  description: string;
}

const AllProjects: React.FC = () => {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{ [key: number]: number }>({});
  const navigate = useNavigate();

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Web', value: 'web' },
    { name: 'Mobile', value: 'mobile' },
    { name: 'AI', value: 'ai' },
    { name: 'Desktop', value: 'desktop' }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      images: [imagep13, imagep14, imagep15],
      description: 'A comprehensive e-commerce solution with advanced product filtering, secure payments, and analytics dashboard.'
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      category: 'mobile',
      images: [
        'https://images.pexels.com/photos/4482896/pexels-photo-4482896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/4498574/pexels-photo-4498574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/4498603/pexels-photo-4498603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ],
      description: 'A mobile application that tracks workouts, nutrition, and provides personalized fitness plans.'
    },
    {
      id: 3,
      title: 'AI Recommendation Engine',
      category: 'ai',
      images: [
        'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ],
      description: 'Machine learning-based system that delivers personalized product recommendations based on user behavior.'
    },
    {
      id: 4,
      title: 'Productivity Suite',
      category: 'desktop',
      images: [imagep7, imagep8, imagep9],
      description: 'Desktop application for time management, task organization, and team collaboration.'
    },
    {
      id: 5,
      title: 'Healthcare Portal',
      category: 'web',
      images: [imagep10, imagep11, imagep12],
      description: 'Patient management system with appointment scheduling, medical records, and telemedicine features.'
    },
    {
      id: 6,
      title: 'AR Navigation App',
      category: 'mobile',
      images: [
        'https://images.pexels.com/photos/6498290/pexels-photo-6498290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/6498299/pexels-photo-6498299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/6498299/pexels-photo-6498299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ],
      description: 'Augmented reality application for indoor navigation in large facilities like malls and airports.'
    },
    {
      id: 7,
      title: 'Smart Home Control System',
      category: 'desktop',
      images: [imagep1, imagep2, imagep3],
      description: 'Desktop application for managing smart home devices with automation and energy monitoring.'
    },
    {
      id: 8,
      title: 'AI-Powered Chat Bot',
      category: 'ai',
      images: [
        'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/8438923/pexels-photo-8438923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/8438924/pexels-photo-8438924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ],
      description: 'Natural language processing chatbot for customer service automation and support.'
    },
    {
      id: 9,
      title: 'Real Estate Platform',
      category: 'web',
      images: [imagep16, imagep17, imagep18],
      description: 'Property listing and management platform with virtual tours and agent scheduling.'
    },
    {
      id: 10,
      title: 'Food Delivery App',
      category: 'mobile',
      images: [
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ],
      description: 'Mobile app for ordering food with real-time delivery tracking and restaurant management.'
    },
    {
      id: 11,
      title: 'Predictive Analytics Tool',
      category: 'ai',
      images: [
        'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/669616/pexels-photo-669616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/669617/pexels-photo-669617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ],
      description: 'AI-driven analytics platform for business intelligence and forecasting.'
    },
    {
      id: 12,
      title: 'Video Editing Suite',
      category: 'desktop',
      images: [imagep4, imagep5, imagep6],
      description: 'Professional video editing software with advanced effects and collaboration features.'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handlePrevImage = (projectId: number) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + 3) % 3
    }));
  };

  const handleNextImage = (projectId: number) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % 3
    }));
  };

  return (
    <>
      <MinimalNavbar />
      <section id="all-projects" className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-b from-black to-gray-900' : 'bg-gradient-to-b from-white to-gray-100'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="flex items-center justify-center">
                <div className="h-1 w-12 bg-blue-600 mr-4"></div>
                <p className="text-blue-500 font-medium">ALL PROJECTS</p>
                <div className="h-1 w-12 bg-blue-600 ml-4"></div>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold  mt-4">
              Explore All Projects
            </h2>
            <p className={`${theme === 'dark' ? 'text-white ' : 'text-black '} max-w-2xl mx-auto mt-4`}>
              Browse our complete portfolio with advanced filtering.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === filter.value
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group relative overflow-visible rounded-xl"
              >
                {/* Blue shadow background */}
                <div className="absolute inset-0 z-0 rounded-xl pointer-events-none" style={{
                  boxShadow: '25px 10px 12px 0px #2563eb55, 20px 20px 36px 20px #2563eb33',
                  filter: 'blur(15px)',
                  opacity: 0.35
                }} />
                <div className="relative z-10 overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-600 transition-all duration-300">
                  <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
                    <img 
                      src={project.images[currentImageIndexes[project.id] || 0]} 
                      alt={project.title} 
                      className="object-cover w-full h-[240px] transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-between px-4">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handlePrevImage(project.id);
                        }}
                        className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleNextImage(project.id);
                        }}
                        className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                      {[0, 1, 2].map((index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                            (currentImageIndexes[project.id] || 0) === index
                              ? 'bg-blue-500'
                              : 'bg-gray-400/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-medium text-blue-500 mb-2 uppercase">{project.category}</div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-white ' : 'text-white '}`}>
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => navigate(-1)}
              className="bg-transparent hover:bg-blue-600 border border-blue-600 px-8 py-3 rounded-md transition-all duration-300"
            >
              Back to Portfolio
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProjects;
