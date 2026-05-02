import Link from 'next/link';
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background pt-32 pb-12 border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">F</div>
              <span className="text-2xl font-bold font-heading tracking-tight text-white">Forsah<span className="text-primary transition-colors group-hover:text-secondary">Dev</span></span>
            </Link>
            <p className="text-muted text-lg leading-relaxed max-w-xs">
              Leading the way in AI-powered software engineering. We build the future, one project at a time.
            </p>
            <div className="flex items-center space-x-4">
              {[
                { icon: <Twitter size={18} />, href: '#' },
                { icon: <Linkedin size={18} />, href: '#' },
                { icon: <Github size={18} />, href: '#' },
              ].map((social, i) => (
                <Link 
                  key={i}
                  href={social.href} 
                  className="w-12 h-12 rounded-2xl bg-surface border border-white/5 flex items-center justify-center text-muted hover:text-white hover:border-primary transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Portfolio', 'Process', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    href={`#${link.toLowerCase()}`} 
                    className="text-muted hover:text-white transition-colors flex items-center group"
                  >
                    <span>{link}</span>
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Expertise</h4>
            <ul className="space-y-4">
              {['Web Engineering', 'Mobile Apps', 'AI & ML Solutions', 'Cloud Computing'].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-muted hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Headquarters</h4>
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-muted/50 uppercase tracking-widest">Office</p>
                <p className="text-white font-medium">Cairo, Egypt / Remote</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-muted/50 uppercase tracking-widest">Email</p>
                <p className="text-white font-medium">hello@forsahdev.com</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-muted/50 uppercase tracking-widest">Phone</p>
                <p className="text-white font-medium">+20 123 456 7890</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs text-muted/50 font-medium">
            &copy; {new Date().getFullYear()} Forsah Dev Agency. Crafted with precision.
          </p>
          <div className="flex space-x-8 text-xs text-muted/50 font-medium">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
