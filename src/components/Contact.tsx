'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Contact Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold font-heading leading-tight">
                Let's Build Something <span className="text-blue-400">Legendary</span> Together
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Have a project in mind? We'd love to hear from you. Send us a message and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary border border-white/10">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-lg font-medium">hello@forsahdev.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-green-400 border border-white/10">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">WhatsApp</p>
                  <p className="text-lg font-medium">+20 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-blue-400 border border-white/10">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Location</p>
                  <p className="text-lg font-medium">Cairo, Egypt / Remote</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-10 shadow-2xl relative"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary transition-colors focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary transition-colors focus:outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Project Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary transition-colors focus:outline-none appearance-none">
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>AI Solution</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary transition-colors focus:outline-none"
                ></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-blue-500 text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 shadow-lg shadow-primary/20 transition-all">
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
