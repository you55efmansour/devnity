import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../ThemeContext';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  rating: number;
  text: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'RetailTech Inc.',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 5,
      text: 'Working with TechVisionaries transformed our entire e-commerce platform. Their team delivered a solution that exceeded our expectations in terms of both functionality and design. Our conversion rates have increased by 40% since launch.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CTO',
      company: 'HealthPlus',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 5,
      text: 'Their AI solution completely revolutionized how we handle patient data. The system is incredibly intuitive and has saved our staff countless hours. What impressed me most was their attention to security and compliance requirements.'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      position: 'Marketing Director',
      company: 'GlobalTravel',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 4,
      text: 'The mobile app TechVisionaries developed for us has received amazing feedback from our customers. The user experience is smooth, and the backend integration with our existing systems was seamless. They delivered on time and within budget.'
    }
  ];
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i}
        size={18}
        className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-400"}
      />
    ));
  };

  return (
    <section id="testimonials" className={`py-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center justify-center">
              <div className="h-1 w-12 bg-blue-600 mr-4"></div>
              <p className="text-blue-500 font-medium">TESTIMONIALS</p>
              <div className="h-1 w-12 bg-blue-600 ml-4"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Don't just take our word for it. Hear from our clients about their experience working with us.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="min-h-[400px] bg-blue-800 rounded-xl p-8 border border-gray-800">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-600/30 flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-2">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                <p className="text-gray-300 italic text-lg mb-6">
                  "{testimonials[currentIndex].text}"
                </p>
                <h4 className="text-white font-bold text-xl">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-white">
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <button 
              onClick={prevSlide}
              className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;