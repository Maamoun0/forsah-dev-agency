'use client';

import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  BrainCircuit, 
  Layers, 
  Zap, 
  Palette 
} from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'High-performance, scalable websites built with modern frameworks like Next.js and React.',
    icon: <Globe className="w-8 h-8 text-blue-400" />,
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps that provide seamless experiences across all devices.',
    icon: <Smartphone className="w-8 h-8 text-purple-400" />,
  },
  {
    title: 'AI Solutions',
    description: 'Integrating advanced AI and machine learning models to automate tasks and drive insights.',
    icon: <BrainCircuit className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: 'SaaS Development',
    description: 'Building robust, multi-tenant software platforms designed for scale and high availability.',
    icon: <Layers className="w-8 h-8 text-orange-400" />,
  },
  {
    title: 'Automation Systems',
    description: 'Custom workflow automation to reduce manual labor and increase business efficiency.',
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: 'UI/UX Design',
    description: 'User-centric design that focuses on aesthetics, accessibility, and intuitive navigation.',
    icon: <Palette className="w-8 h-8 text-pink-400" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading">
            Specialized Solutions for <span className="text-gray-500">Modern Challenges</span>
          </h3>
          <p className="text-gray-400 text-lg">
            We combine technical expertise with creative innovation to deliver results that exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card p-8 group hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
