import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Users, Zap, Heart } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  icon: React.ReactNode;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Small-Scale Product Design",
    description: "Launched a small-scale sticker line, iterating quickly to drive >10x ROI. Applied agile product practices to test pricing, displays, and user feedback, informing design and distribution strategies.",
    image: "/src/assets/stickers.jpg",
    category: "Product Design",
    icon: <Heart className="w-6 h-6" />,
    color: "from-muted-pink to-soft-purple"
  },
  {
    id: 2,
    title: "Vanlife Consultant",
    description: "Managed user-centered feature design across 10+ custom van builds, prioritizing client needs and constraints using Agile-inspired workflows and project management tools like Trello.",
    image: "/src/assets/vanlife.jpg",
    category: "Product Management",
    icon: <Users className="w-6 h-6" />,
    color: "from-green-400 to-earth-blue"
  },
  {
    id: 3,
    title: "Self Directed Learning",
    description: "Studying and applying what I have learned in React, AI, app development and product ownership in quick, iterative sprints developing new products that solve my real world problems.",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Learning and Applying",
    icon: <Zap className="w-6 h-6" />,
    color: "from-soft-purple to-muted-pink"
  },
  {
    id: 4,
    title: "STEM Education",
    description: "Designed and delivered STEM programs for 800+ students globally; built inclusive curricula, recruited and trained 25+ facilitators to ensure consistent delivery across international settings.",
    image: "/src/assets/stemEd.jpg",
    category: "Inspiring Learning",
    icon: <Calendar className="w-6 h-6" />,
    color: "from-earth-blue to-soft-purple"
  }
];

const CurrentProjects: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-inter font-bold text-4xl lg:text-5xl text-warm-gray-800 mb-6">
            Current Projects
          </h2>
          <p className="font-inter text-xl text-warm-gray-600 max-w-2xl mx-auto leading-relaxed">
            I help you visualize and take the first steps toward making your wildest dreams a reality.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="bg-warm-gray-50 rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-500 border border-warm-gray-100 hover:border-warm-gray-200">
                {/* Project Image */}
                <div className="relative mb-8 overflow-hidden rounded-2xl">
                  <div className="aspect-video relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
                  </div>
                  
                  {/* Floating Icon */}
                  <motion.div 
                    className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center text-white shadow-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {project.icon}
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-inter text-sm font-medium text-warm-gray-500 uppercase tracking-wide">
                      {project.category}
                    </span>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 4, y: -4 }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-warm-gray-400" />
                    </motion.div>
                  </div>
                  
                  <h3 className="font-inter font-bold text-2xl text-warm-gray-800 group-hover:text-warm-gray-900 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="font-inter text-warm-gray-600 leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>

                {/* Hover Effect Bar */}
                <div className={`w-0 h-1 bg-gradient-to-r ${project.color} rounded-full mt-6 group-hover:w-full transition-all duration-500 ease-out`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button 
            className="group inline-flex items-center space-x-3 font-inter font-medium text-warm-gray-600 hover:text-soft-purple transition-colors duration-300"
            whileHover={{ y: -2 }}
            onClick={() => {window.location.href = "/portfolio"}}
          >
            <span>See all projects</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentProjects;