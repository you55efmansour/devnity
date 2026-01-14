import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send ,PhoneCall} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import { useTheme } from '../ThemeContext';

const Contact: React.FC = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const serviceID = 'service_4u5ujxa'; // Replace with your EmailJS service ID
      const templateID = 'template_hnd9pry'; // Replace with your EmailJS template ID
      const userID = 'UNgoKqW5YfLje0aqU'; // Replace with your EmailJS user ID

      emailjs
        .send(serviceID, templateID, formData, userID)
        .then(
          (response) => {
            console.log('Email sent successfully:', response);
            setSubmitted(true);

            // Reset form after submission
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: ''
            });

            // Reset submitted state after 5 seconds
            setTimeout(() => {
              setSubmitted(false);
            }, 5000);
          },
          (error) => {
            console.error('Failed to send email:', error);
          }
        );
    }
  };

  return (
    <section id="contact" className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-t from-black to-gray-900' : 'bg-gradient-to-t from-white to-gray-100'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center justify-center">
              <div className="h-1 w-12 bg-blue-600 mr-4"></div>
              <p className="text-blue-500 font-medium">CONTACT US</p>
              <div className="h-1 w-12 bg-blue-600 ml-4"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold  mt-4">
            Get In Touch With Us
          </h2>
          <p className={`${theme === 'dark' ? 'text-white ' : 'text-black '} max-w-2xl mx-auto mt-4`}>
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us A Message</h3>
            
            {submitted && (
              <div className="bg-green-800/40 border border-green-600 text-green-200 rounded-md p-4 mb-6 flex items-center">
                <Send size={20} className="mr-2" />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-md py-3 px-4 ${theme === 'dark' ? 'text-white bg-gray-900' : 'text-black bg-gray-200'} focus:outline-none focus:border-blue-500 transition-colors`}
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-md py-3 px-4 ${theme === 'dark' ? 'text-white bg-gray-900' : 'text-black bg-gray-200'} focus:outline-none focus:border-blue-500 transition-colors`}
                    placeholder="user@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject (Optional)</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 ${theme === 'dark' ? 'text-white bg-gray-900' : 'text-black bg-gray-200'} focus:outline-none focus:border-blue-500 transition-colors`}
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-md py-3 px-4 ${theme === 'dark' ? 'text-white bg-gray-900' : 'text-black bg-gray-200'} focus:outline-none focus:border-blue-500 transition-colors`}
                  placeholder="Tell us about your project..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors duration-300 w-full md:w-auto flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* <div className="flex items-start">
                  <div className="bg-blue-900/30 p-3 rounded-lg mr-4">
                    <MapPin className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Our Location</h4>
                    <p className="text-gray-400">
                      Assuit,Cairo
                    </p>
                  </div>
                </div> */}
                
                <div className="flex items-start">
                  <div className="bg-blue-900/30 p-3 rounded-lg mr-4">
                    <Phone className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Call Us</h4>
                    <p className="text-gray-400 ">
                      <a href="tel:+201146636466" className="flex justify-center items-center text-white  rounded-full hover:bg-gray-800 transition-colors" title="Call Us">
                      +20 101 859 5853
                        <PhoneCall size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </p>
                    <p className="text-gray-400 ">
                      <a href="tel:+201146636466" className="flex justify-center items-center text-white  rounded-full hover:bg-gray-800 transition-colors" title="Call Us">
                        +20 114 663 6466
                        <PhoneCall size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-900/30 p-3 rounded-lg mr-4">
                    <Mail className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email Us</h4>
                    <p className="text-gray-400">
                      mohamedabdelbasetmbm@gmail.com
                    </p>
                    <p className="text-gray-400">
                    mahmoudraft2002@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
              {/* <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday:</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday:</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday:</span>
                  <span className="text-white">Closed</span>
                </div>
              </div> */}
              
              <h4 className="text-white font-semibold mb-3">Follow Us:</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61575876446130" 
                  className="bg-gray-800 hover:bg-blue-900/50 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="text-gray-300 hover:text-white text-lg" />
                </a>
                <a 
                  href="https://www.instagram.com/dev_nity/" 
                  className="bg-gray-800 hover:bg-blue-900/50 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-gray-300 hover:text-white text-lg" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/devnitycompany/?viewAsMember=true" 
                  className="bg-gray-800 hover:bg-blue-900/50 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-gray-300 hover:text-white text-lg" />
                </a>
              <div className="mt-6 pt-6 border-t border-blue-900/50">
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;