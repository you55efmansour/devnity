import React from 'react';
import { Check, Users, Award, Clock } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();

  const stats = [
    { value: '250+', label: 'Projects Completed' },
    { value: '20+', label: 'Team Members' },
    // { value: '10+', label: 'Years Experience' },
    { value: '99%', label: 'Client Satisfaction' }
  ];
  
  const values = [
    { 
      icon: <Users className="text-blue-500" size={24} />,
      title: 'Client-Focused',
      description: 'We prioritize understanding your business needs and delivering solutions that exceed expectations.'
    },
    { 
      icon: <Award className="text-blue-500" size={24} />,
      title: 'Excellence',
      description: 'We strive for excellence in every line of code, every design decision, and every client interaction.'
    },
    { 
      icon: <Clock className="text-blue-500" size={24} />,
      title: 'Timeliness',
      description: 'We respect deadlines and deliver high-quality solutions on time and within budget.'
    }
  ];

  return (
    <section id="about" className={`py-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center">
              <div className="h-1 w-12 bg-blue-600 mr-4 mb-8"></div>
              <p className="text-blue-500 font-medium text-xl mb-8">ABOUT US</p>
              <div className="h-1 w-12 bg-blue-600 ml-4 mb-8"></div>
            </div>
            {/* <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Crafting Digital Solutions Since 2015
            </h2> */}
            <p className={`${theme === 'dark' ? 'text-white ' : 'text-black '} mb-6`}>
              Devinity is a premier software development company dedicated to creating innovative, scalable, and user-friendly applications. With a team of experienced developers, designers, and strategists, we deliver cutting-edge solutions that help businesses thrive in the digital age.
            </p>
            <p className={`${theme === 'dark' ? 'text-white ' : 'text-black '} mb-8`}>
              We specialize in web development, mobile applications, AI solutions, and desktop software, always staying at the forefront of technology to provide our clients with competitive advantages in their respective industries.
            </p>
            
            <div className="space-y-4 mb-8">
              {['Industry-leading development practices', 'Agile methodology for adaptable solutions', 'Comprehensive testing and quality assurance', 'Long-term support and maintenance'].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 bg-blue-500/30 rounded-full p-1 mr-3 flex-shrink-0">
                    <Check className="text-blue-500" size={16} />
                  </div>
                  <p className={`${theme === 'dark' ? 'text-white ' : 'text-black'}`}>{item}</p>
                </div>
              ))}
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors duration-300">
              Learn More About Us
            </button>
          </div>
          


          <div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 " >
                <div className="space-y-4 bg-transparent">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-600 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                    <p className="text-gray-400">To empower businesses through innovative software solutions that drive growth and efficiency.</p>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-600 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                    <p className="text-gray-400">To be the leading software development partner known for excellence, innovation, and client success.</p>
                  </div>
                </div>
                
                <div className="space-y-4 mt-8">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-600 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">Our Approach</h3>
                    <p className="text-gray-400">Collaborative, transparent, and focused on delivering measurable results through technology.</p>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-600 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">Our Team</h3>
                    <p className="text-gray-400">A diverse group of talented individuals passionate about technology and problem-solving.</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute w-20 h-20 border border-blue-600/30 rounded-lg -top-3 -left-3 z-0"></div>
              <div className="absolute w-20 h-20 border border-blue-600/20 rounded-lg -bottom-3 -right-3 z-0"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className={`p-4 rounded-lg text-center border border-blue-900/30 ${theme === 'dark' ? 'text-white bg-gray-900' : 'text-white bg-gray-900'}`}>
                  <div className="text-3xl font-bold  mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400 ">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
            <p className={`${theme === 'dark' ? 'text-white ' : 'text-black '} max-w-2xl mx-auto`}>
              These principles guide everything we do, from how we develop software to how we interact with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-600 transition-all duration-300 text-center">
                <div className="bg-blue-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;