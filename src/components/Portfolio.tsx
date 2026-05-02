'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

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
    <section id="portfolio" className="py-32 bg-surface">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-secondary font-bold tracking-widest uppercase text-sm"
            >
              Selected Work
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black font-heading leading-tight"
            >
              DIGITAL CRAFTSMANSHIP <span className="text-muted">AT SCALE</span>
            </motion.h2>
          </div>
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center space-x-3 text-white font-bold group"
          >
            <span className="border-b border-white/20 pb-1 group-hover:border-primary transition-colors">View all projects</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary transition-all">
              <ArrowRight size={18} />
            </div>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-900 mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">{project.category}</span>
                  <div className="h-[1px] w-8 bg-white/10" />
                </div>
                <h4 className="text-2xl font-bold font-heading group-hover:text-primary transition-colors">{project.title}</h4>
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-muted uppercase tracking-tighter">
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
