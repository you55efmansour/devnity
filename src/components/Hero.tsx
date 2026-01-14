import React from 'react';
import { ArrowRight, Code, Monitor, Smartphone, Brain } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();

  const handleSmoothScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section id="home" className={`relative ${theme === 'dark' ? 'bg-black' : 'bg-white'} min-h-screen pt-24 flex items-center`}>
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${theme === 'dark' ? 'from-blue-900/20 to-black z-0' : 'from-blue-400/20 to-white'} `}></div>
      
      {/* Blue light effect */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-600/20 blur-[100px] rounded-full z-0"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="h-1 w-12 bg-blue-600 mr-4"></div>
              <p className="text-blue-500 font-medium">INNOVATIVE SOLUTIONS</p>
              <div className="h-1 w-12 bg-blue-600 ml-4"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  leading-tight">
              Creating Digital <span className="text-blue-500">Excellence</span> For Your Business
            </h1>
            <p className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-lg max-w-lg`}>
              We build cutting-edge software solutions that transform businesses and deliver exceptional user experiences across web, mobile, AI, and desktop platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleSmoothScroll('#contact')} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-all duration-300 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => handleSmoothScroll('#portfolio')} 
                className={`${theme === 'dark' ? 'text-white ' : 'text-black'} border border-gray-600 hover:border-blue-500 px-8 py-3 rounded-md transition-all duration-300 flex items-center justify-center`}
              >
                View Our Work
              </button>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className={`relative z-10 bg-gradient-to-br ${theme === 'dark' ? 'from-blue-900/20 to-black' : 'from-white-600/20 to-white'} p-8 rounded-2xl border border-gray-800 shadow-2xl`}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Monitor className="text-blue-500" size={40} />, title: "Web Applications", desc: "Responsive & scalable", target: "#portfolio", filter: "web" },
                  { icon: <Smartphone className="text-blue-500" size={40} />, title: "Mobile Apps", desc: "iOS & Android", target: "#portfolio", filter: "mobile" },
                  { icon: <Brain className="text-blue-500" size={40} />, title: "AI Solutions", desc: "Smart automation", target: "#portfolio", filter: "ai" },
                  { icon: <Code className="text-blue-500" size={40} />, title: "Desktop Software", desc: "Powerful & reliable", target: "#portfolio", filter: "desktop" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`${theme === 'dark' ? 'bg-black/50' : 'bg-blue-700'} p-4 rounded-xl border border-gray-800 hover:border-blue-700 transition-all duration-300 hover:shadow-blue-900/30 hover:shadow-lg group cursor-pointer`}
                    onClick={() => {
                      handleSmoothScroll(item.target);
                      window.dispatchEvent(new CustomEvent('portfolio-filter', { detail: { filter: item.filter } }));
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyPress={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleSmoothScroll(item.target);
                        window.dispatchEvent(new CustomEvent('portfolio-filter', { detail: { filter: item.filter } }));
                      }
                    }}
                  >
                    <div className="mb-3 text-black transform group-hover:-translate-y-1 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-white font-medium mb-1">{item.title}</h3>
                    <p className="text-gray-100 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute w-24 h-24 border border-blue-600/30 rounded-lg -top-3 -left-3 z-0"></div>
            <div className="absolute w-32 h-32 border border-blue-600/20 rounded-lg -bottom-4 -right-4 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;