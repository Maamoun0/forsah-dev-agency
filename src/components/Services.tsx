'use client';

import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  BrainCircuit, 
  Layers, 
  Zap, 
  Palette,
  ArrowUpRight
} from 'lucide-react';

const services = [
  {
    title: 'Web Engineering',
    description: 'High-performance, scalable websites built with modern frameworks like Next.js and React.',
    icon: <Globe className="w-8 h-8 text-indigo-400" />,
    size: 'col-span-1 md:col-span-2',
    bg: 'bg-indigo-500/5'
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile apps.',
    icon: <Smartphone className="w-8 h-8 text-emerald-400" />,
    size: 'col-span-1',
    bg: 'bg-emerald-500/5'
  },
  {
    title: 'AI & Automation',
    description: 'Integrating advanced AI models to automate complex business workflows.',
    icon: <BrainCircuit className="w-8 h-8 text-rose-400" />,
    size: 'col-span-1',
    bg: 'bg-rose-500/5'
  },
  {
    title: 'SaaS Platforms',
    description: 'Building robust, multi-tenant software platforms designed for high availability.',
    icon: <Layers className="w-8 h-8 text-amber-400" />,
    size: 'col-span-1 md:col-span-2',
    bg: 'bg-amber-500/5'
  },
  {
    title: 'UI/UX Design',
    description: 'User-centric design that focuses on aesthetics and intuitive navigation.',
    icon: <Palette className="w-8 h-8 text-sky-400" />,
    size: 'col-span-1',
    bg: 'bg-sky-500/5'
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions and DevOps.',
    icon: <Zap className="w-8 h-8 text-fuchsia-400" />,
    size: 'col-span-1',
    bg: 'bg-fuchsia-500/5'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden bg-background">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-primary font-bold tracking-widest uppercase text-sm"
            >
              Capabilities
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black font-heading leading-tight"
            >
              WE SOLVE <span className="text-muted">COMPLEX</span> PROBLEMS THROUGH CODE
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-muted text-lg max-w-sm"
          >
            Our expertise spans across the entire digital spectrum, ensuring your product is built with the latest technologies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glow-card p-10 group flex flex-col justify-between min-h-[320px] ${service.size}`}
            >
              <div>
                <div className={`mb-8 w-16 h-16 rounded-2xl flex items-center justify-center ${service.bg} group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading">{service.title}</h3>
                <p className="text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="mt-8 flex justify-end">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
