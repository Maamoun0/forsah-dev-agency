'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-background">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-12">
            {/* Tagline */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <div className="h-[1px] w-12 bg-primary" />
              <span className="text-sm uppercase tracking-[0.3em] text-primary font-medium">
                The New Standard of Engineering
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-6xl md:text-[7.5rem] leading-[0.95] tracking-tight font-heading">
                Crafting <br />
                <span className="text-primary italic">Digital</span> <br />
                Mastery
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted/80 max-w-xl leading-relaxed font-sans"
            >
              We believe in the intersection of human intuition and technical precision. 
              Forsah Dev builds software that doesn't just work—it inspires.
            </motion.p>

            {/* Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-8"
            >
              <button className="btn-premium group">
                <span className="flex items-center space-x-3">
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="flex items-center space-x-2 text-foreground hover:text-primary transition-all font-medium group">
                <span className="border-b border-foreground/20 group-hover:border-primary tracking-wide">Explore Our Work</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-[4/5] border border-border overflow-hidden"
            >
              <img 
                src="/hero-brand.png" 
                alt="Forsah Dev Studio" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Overlay Label */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-background/40 backdrop-blur-md border border-white/10">
                <p className="text-xs uppercase tracking-widest text-primary mb-1">Current Focus</p>
                <p className="text-lg font-heading">High-Performance Neural Interfaces & Scalable Ecosystems</p>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-primary/30" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-primary/30" />
          </div>

        </div>
      </div>

      {/* Background Typography */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 origin-left opacity-[0.02] select-none pointer-events-none">
        <span className="text-[20rem] font-black tracking-tighter uppercase">Est. 2024</span>
      </div>
    </section>
  );
}
