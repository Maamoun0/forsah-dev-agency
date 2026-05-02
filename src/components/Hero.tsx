'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden animate-mesh">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10" />

      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-primary text-sm font-medium backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Redefining Software Excellence</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black font-heading leading-[0.9] tracking-tighter"
          >
            ENGINEERING <span className="text-gradient">FUTURE-READY</span> DIGITAL PRODUCTS
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted max-w-2xl mx-auto leading-relaxed"
          >
            We partner with ambitious brands to design and develop scalable, AI-powered software solutions that drive real business impact.
          </motion.p>

          {/* Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <button className="btn-primary group">
              <span className="flex items-center space-x-2">
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="flex items-center space-x-3 text-white font-bold hover:text-primary transition-colors group">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
                <Play className="w-5 h-5 fill-current" />
              </div>
              <span>View Showreel</span>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-secondary" />
              <span>Expert Development</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-secondary" />
              <span>AI-First Approach</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-secondary" />
              <span>Enterprise Scalability</span>
            </div>
          </motion.div>
        </div>

        {/* Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 relative max-w-6xl mx-auto"
        >
          <div className="glass-card p-2 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20">
            <div className="relative aspect-video rounded-[2rem] overflow-hidden">
              <img 
                src="/hero-brand.png" 
                alt="Forsah Dev Brand Visual" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>
          
          {/* Floating Stats */}
          <div className="absolute -bottom-10 -left-10 hidden xl:block">
            <div className="glass-card p-6 space-y-2 border-primary/30">
              <p className="text-4xl font-black text-primary">50+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-muted">Successful Launches</p>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 hidden xl:block">
            <div className="glass-card p-6 space-y-2 border-secondary/30">
              <p className="text-4xl font-black text-secondary">100%</p>
              <p className="text-xs font-bold uppercase tracking-widest text-muted">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
