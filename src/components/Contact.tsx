'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, Send, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Left: Info */}
          <div className="space-y-16">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-primary font-bold tracking-widest uppercase text-sm"
              >
                Let's Talk
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black font-heading leading-tight"
              >
                READY TO <span className="text-muted">SCALE</span> YOUR VISION?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-muted text-xl leading-relaxed max-w-md"
              >
                We're currently accepting new projects for 2026. Reach out and let's discuss how we can help you grow.
              </motion.p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Mail />, label: 'Email', value: 'hello@forsahdev.com', color: 'text-primary' },
                { icon: <MessageSquare />, label: 'WhatsApp', value: '+20 123 456 7890', color: 'text-secondary' },
                { icon: <MapPin />, label: 'Location', value: 'Cairo / Remote', color: 'text-accent' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center space-x-6 group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-surface border border-white/5 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-muted uppercase tracking-widest">{item.label}</p>
                    <p className="text-xl font-bold group-hover:text-white transition-colors">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glow-card p-12"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-muted uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-background border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary transition-all focus:outline-none focus:ring-1 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-muted uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="name@company.com"
                    className="w-full bg-background border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary transition-all focus:outline-none focus:ring-1 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-muted uppercase tracking-widest ml-1">Project Category</label>
                <select className="w-full bg-background border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary transition-all focus:outline-none focus:ring-1 focus:ring-primary/20 appearance-none cursor-pointer">
                  <option>Web Engineering</option>
                  <option>Mobile Solutions</option>
                  <option>AI Integration</option>
                  <option>Branding & Design</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-muted uppercase tracking-widest ml-1">Project Details</label>
                <textarea 
                  rows={4}
                  placeholder="What are we building?"
                  className="w-full bg-background border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-primary transition-all focus:outline-none focus:ring-1 focus:ring-primary/20 resize-none"
                ></textarea>
              </div>
              <button className="btn-primary w-full group py-5 flex items-center justify-center space-x-3">
                <span className="text-lg">Send Proposal</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
