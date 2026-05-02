'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="container-custom">
        <div className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
          isScrolled ? 'glass-card mx-auto max-w-5xl shadow-2xl shadow-primary/10' : 'bg-transparent'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center font-bold text-xl text-white overflow-hidden shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
              <span className="relative z-10">F</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-2xl font-bold font-heading tracking-tight text-white pl-1">
              Forsah<span className="text-primary group-hover:text-secondary transition-colors duration-500">Dev</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <div className="pl-4">
              <Link 
                href="#contact"
                className="btn-primary flex items-center space-x-2 text-sm"
              >
                <span>Work with us</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 mx-6 glass-card overflow-hidden"
          >
            <div className="p-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-heading font-semibold text-gray-300 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full text-center py-4 text-lg"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
