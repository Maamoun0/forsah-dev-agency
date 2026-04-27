'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-blue-400 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>AI-Driven Software Development</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold font-heading leading-tight text-gradient">
            We Build Smart Software That <span className="text-white">Grows Your Business</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
            Forsah Dev builds scalable, modern, and AI-powered software solutions that accelerate business growth and innovation.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary hover:bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center space-x-2 shadow-2xl shadow-primary/30">
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center space-x-2">
              <Play className="w-5 h-5 fill-current" />
              <span>View Portfolio</span>
            </button>
          </div>

          {/* Stats Preview */}
          <div className="flex items-center space-x-8 pt-8 border-t border-white/5">
            <div>
              <p className="text-3xl font-bold">50+</p>
              <p className="text-sm text-gray-500">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm text-gray-500">Global Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold">3+</p>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative glass-card aspect-square w-full max-w-lg mx-auto overflow-hidden p-1">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
              alt="AI Concept" 
              className="w-full h-full object-cover rounded-2xl opacity-80"
            />
            {/* Overlay elements */}
            <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-mono text-gray-300">System Optimization Active</span>
              </div>
            </div>
            <div className="absolute bottom-8 right-8 bg-primary/20 backdrop-blur-md p-4 rounded-xl border border-primary/30 shadow-2xl">
              <p className="text-xs font-bold text-white uppercase tracking-wider">AI Integration</p>
              <p className="text-2xl font-bold text-blue-400">99.9%</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
