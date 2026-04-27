'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Nexus AI Dashboard',
    category: 'SaaS / AI',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    tags: ['Next.js', 'PyTorch', 'Tailwind'],
  },
  {
    title: 'EcoTrack Mobile App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070',
    tags: ['React Native', 'Firebase'],
  },
  {
    title: 'CryptoVault Platform',
    category: 'Fintech',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2232',
    tags: ['Solidity', 'Web3.js', 'Node.js'],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Our Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading">
              Proven Excellence in <span className="text-gray-500">Every Line of Code</span>
            </h3>
          </div>
          <button className="text-primary font-bold flex items-center space-x-2 group">
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 space-y-3">
                <p className="text-primary text-xs font-bold uppercase tracking-widest">{project.category}</p>
                <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-1 bg-white/10 rounded-full text-gray-300 backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
