'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-40 relative bg-background border-t border-border">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-24">
          
          {/* Left: Info */}
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <Plus className="w-4 h-4 text-primary" />
                <span className="text-xs uppercase tracking-[0.4em] font-medium text-primary">Inquiry</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-8xl font-heading leading-[0.9] tracking-tight"
              >
                Let's <br />
                <span className="italic text-muted/40">Initiate</span> <br />
                Success.
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted/60 leading-relaxed max-w-sm"
              >
                We are selective about our partnerships. We look for visionaries who value technical integrity and design excellence.
              </motion.p>
            </div>

            <div className="space-y-12 pt-12 border-t border-border">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-4">Direct Communication</p>
                <p className="text-3xl font-heading">hello@forsahdev.com</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-4">Studio Location</p>
                <p className="text-3xl font-heading">Cairo / Remote / Global</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="premium-card"
            >
              <form className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest text-muted/40 font-bold">Identifer / Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-border py-4 focus:border-primary transition-all focus:outline-none text-xl font-heading"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest text-muted/40 font-bold">Electronic Mail</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-border py-4 focus:border-primary transition-all focus:outline-none text-xl font-heading"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest text-muted/40 font-bold">The Objective</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border-b border-border py-4 focus:border-primary transition-all focus:outline-none text-xl font-heading resize-none"
                  ></textarea>
                </div>

                <button className="btn-premium w-full group py-6">
                  <span className="flex items-center justify-center space-x-4">
                    <span className="text-sm uppercase tracking-[0.2em] font-bold">Submit Brief</span>
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
