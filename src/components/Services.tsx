'use client';

import { motion } from 'framer-motion';
import { 
  Plus,
  ArrowUpRight
} from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Digital Engineering',
    description: 'Transforming architectural concepts into high-performance digital ecosystems. We specialize in Next.js, distributed systems, and heavy-load infrastructures.',
    size: 'col-span-1 md:col-span-2',
  },
  {
    number: '02',
    title: 'Intelligent Systems',
    description: 'Integration of custom-trained neural networks and automation layers that breathe life into static data.',
    size: 'col-span-1',
  },
  {
    number: '03',
    title: 'Strategic Design',
    description: 'Aesthetics meet utility. We create interfaces that are emotionally resonant and functionally precise.',
    size: 'col-span-1',
  },
  {
    number: '04',
    title: 'Venture Scaling',
    description: 'End-to-end technical partnership for Series A+ startups, focusing on rapid iteration and market stability.',
    size: 'col-span-1 md:col-span-2',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-40 relative bg-background border-y border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 mb-8"
            >
              <Plus className="w-4 h-4 text-primary" />
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-primary">Core Competencies</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-heading leading-[0.9] tracking-tight"
            >
              We Build The <br />
              <span className="italic text-muted/40">Architectural</span> <br />
              Backbone of Innovation.
            </motion.h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-muted/60 leading-relaxed border-l border-border pl-8"
            >
              Our process is rooted in mathematical precision and artistic intuition. We don't just write code; we engineer value.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`premium-card group min-h-[400px] flex flex-col justify-between border-collapse -ml-[1px] -mt-[1px] ${service.size}`}
            >
              <div className="space-y-12">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-muted/40">{service.number}</span>
                  <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                    <ArrowUpRight size={18} className="group-hover:text-background transition-colors" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-3xl font-heading tracking-tight">{service.title}</h3>
                  <p className="text-muted/60 leading-relaxed text-sm max-w-sm">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <div className="pt-12 border-t border-border mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary">Discover Methodology</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
