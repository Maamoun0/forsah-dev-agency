'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Philosophy', href: '#process' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-10'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-primary flex items-center justify-center font-serif font-bold text-background transition-transform group-hover:rotate-90 duration-500">
              F
            </div>
            <span className="text-xl font-heading font-medium tracking-widest uppercase">
              Forsah<span className="text-primary">Dev</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-foreground/60 hover:text-primary transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contact"
              className="px-6 py-2 border border-foreground/20 text-xs uppercase tracking-widest font-bold hover:bg-foreground hover:text-background transition-all duration-500"
            >
              Inquire
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-foreground" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[72px] bg-background z-40 md:hidden"
          >
            <div className="container-custom py-20 flex flex-col space-y-12 items-center text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-heading font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-primary text-xl font-medium border-b border-primary pb-2"
              >
                Let's Work Together
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
