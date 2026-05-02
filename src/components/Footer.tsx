import Link from 'next/link';
import { Github, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background pt-40 pb-20 border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 mb-32">
          
          {/* Brand */}
          <div className="lg:col-span-4 space-y-12">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-primary flex items-center justify-center font-serif font-bold text-background transition-transform group-hover:rotate-90 duration-500">
                F
              </div>
              <span className="text-xl font-heading font-medium tracking-widest uppercase">
                Forsah<span className="text-primary">Dev</span>
              </span>
            </Link>
            <p className="text-muted/60 text-lg leading-relaxed max-w-sm font-sans">
              Engineering the next generation of digital infrastructure. We believe in precision, integrity, and the pursuit of technical perfection.
            </p>
            <div className="flex items-center space-x-8">
              {[
                { icon: <Twitter size={18} />, href: '#' },
                { icon: <Linkedin size={18} />, href: '#' },
                { icon: <Github size={18} />, href: '#' },
              ].map((social, i) => (
                <Link 
                  key={i}
                  href={social.href} 
                  className="text-muted/40 hover:text-primary transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Intelligence</h4>
            <ul className="space-y-6">
              {['Methodology', 'Capabilities', 'Selected Work', 'Inquiry'].map((link, i) => (
                <li key={i}>
                  <Link 
                    href={`#${['process', 'services', 'portfolio', 'contact'][i]}`} 
                    className="text-sm uppercase tracking-widest text-muted/60 hover:text-foreground transition-all flex items-center group"
                  >
                    <span>{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-6 space-y-12 text-right">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Inquire Directly</h4>
              <p className="text-4xl md:text-6xl font-heading tracking-tight hover:text-primary transition-colors cursor-pointer">hello@forsahdev.com</p>
            </div>
            
            <div className="flex justify-end gap-20 pt-12 border-t border-border">
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-muted/40 uppercase tracking-widest">Office</p>
                <p className="text-foreground font-medium">Cairo, EG</p>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-muted/40 uppercase tracking-widest">Availability</p>
                <p className="text-foreground font-medium">Remote / Global</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted/40 font-bold">
            &copy; {new Date().getFullYear()} Forsah Dev Agency. All Rights Reserved.
          </p>
          <div className="flex space-x-12 text-[10px] uppercase tracking-[0.2em] text-muted/40 font-bold">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
