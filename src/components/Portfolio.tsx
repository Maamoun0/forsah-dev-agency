'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';

const projects = [
  {
    title: 'Neural Core Dashboard',
    category: 'SaaS / AI Ecosystem',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    year: '2025',
  },
  {
    title: 'Aether Mobile OS',
    category: 'Systems Design',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070',
    year: '2024',
  },
  {
    title: 'Lumina Protocol',
    category: 'Blockchain Architecture',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2232',
    year: '2025',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-40 bg-background overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 gap-12">
          <div className="space-y-8 max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <Plus className="w-4 h-4 text-primary" />
              <span className="text-xs uppercase tracking-[0.4em] font-medium text-primary">Portfolio of Intent</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-heading leading-[0.9] tracking-tight"
            >
              Proven <br />
              <span className="italic text-muted/40">Technical</span> <br />
              Superiority.
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pb-4"
          >
            <p className="text-muted/60 max-w-xs leading-relaxed mb-8">
              A curated selection of projects where logic meets aesthetic excellence.
            </p>
            <button className="text-sm uppercase tracking-widest font-bold border-b border-primary pb-2 hover:text-primary transition-all">
              Request Full Dossier
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-background p-8 hover:bg-surface transition-all duration-700 cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-10">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-700" />
                
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center text-background">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-muted/40 font-bold">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h4 className="text-3xl font-heading tracking-tight group-hover:text-primary transition-colors">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
