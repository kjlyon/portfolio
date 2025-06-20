import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, ExternalLink } from 'lucide-react';
import heroPic from "/src/assets/waterfall2.jpg"; 

const handleResumeDownload = () => {
  // download logic, or navigate, etc.
};

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-warm-gray-50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-soft-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-muted-pink rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-earth-blue rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 pt-16 pb-20 relative z-10">
        {/* Navigation */}
        <motion.nav 
          className="flex justify-between items-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-soft-purple to-muted-pink rounded-full"></div>
            <span className="font-inter font-medium text-warm-gray-800">Kelly Lyon</span>
          </div>
          
          <div className="flex space-x-8">
            <motion.a 
              href="#resume" 
              className="font-inter font-medium text-warm-gray-600 hover:text-soft-purple transition-colors duration-300 relative group"
              whileHover={{ y: -2 }}
            >
              Resume
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-soft-purple transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
            <motion.a 
              href="#portfolio" 
              className="font-inter font-medium text-warm-gray-600 hover:text-muted-pink transition-colors duration-300 relative group"
              whileHover={{ y: -2 }}
            >
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-muted-pink transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
            <motion.a 
              href="#contact" 
              className="font-inter font-medium text-warm-gray-600 hover:text-earth-blue transition-colors duration-300 relative group"
              whileHover={{ y: -2 }}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-earth-blue transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          </div>
        </motion.nav>

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h1 className="font-inter font-bold text-5xl lg:text-6xl leading-tight text-warm-gray-800">
                Empathy
                <span className="bg-gradient-to-r from-soft-purple via-muted-pink to-earth-blue bg-clip-text text-transparent block">
                  meets execution
                </span>
              </h1>
              
              <p className="font-inter text-xl text-warm-gray-600 leading-relaxed max-w-lg">
                  I design with empathy and intention — bringing ideas to life through collaboration and creating products that make a difference.              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                className="group bg-warm-gray-800 text-white px-8 py-4 rounded-full font-inter font-medium hover:bg-warm-gray-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}

              >
                <Download className="w-5 h-5" />
                <a href="/src/assets/KellyLyon-Resume.pdf" download>
                Download Resume
                </a>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
              
              <motion.button 
                className="group border-2 border-warm-gray-300 text-warm-gray-700 px-8 py-4 rounded-full font-inter font-medium hover:border-soft-purple hover:text-soft-purple transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5" />
                <a  href="mailto:kelly.jean.lyon@gmail.com">
                  Get in Touch</a>
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Photo frame with subtle creativity */}
              <div className="relative z-10 mx-auto lg:mx-0 w-80 h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-soft-purple/20 via-muted-pink/20 to-earth-blue/20 rounded-3xl rotate-3 transform"></div>
                <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl"></div>
                <div className="relative p-4 h-full">
                  <img 
                    src={heroPic}
                    alt="Kelly Lyon" 
                    className="w-full h-full object-cover rounded-2xl grayscale-[70%] hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-soft-purple to-muted-pink rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <ExternalLink className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-earth-blue to-soft-purple rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-white font-bold text-lg">✨</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;