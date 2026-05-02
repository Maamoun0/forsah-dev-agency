'use client';

import { motion } from 'framer-motion';
import { Search, ClipboardList, Code2, ShieldCheck, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Insight',
    desc: 'Deep discovery into your business ecosystem and user behavior.',
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: 'Strategy',
    desc: 'Crafting high-level roadmaps and technical blueprints.',
    icon: <ClipboardList className="w-6 h-6" />,
  },
  {
    title: 'Execution',
    desc: 'Agile development cycles with extreme attention to detail.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'Precision',
    desc: 'Rigorous testing to ensure world-class performance.',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: 'Impact',
    desc: 'Strategic deployment and continuous optimization.',
    icon: <Rocket className="w-6 h-6" />,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 relative bg-background">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Workflow
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black font-heading"
          >
            OUR PATH TO <span className="text-muted">SUCCESS</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-[32px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-surface border border-white/5 flex items-center justify-center relative z-10 mb-8 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-white group-hover:text-primary transition-colors duration-500 relative z-10">
                    {step.icon}
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] font-black text-muted uppercase tracking-[0.3em]">Phase 0{index + 1}</span>
                  <h4 className="text-xl font-bold font-heading">{step.title}</h4>
                  <p className="text-sm text-muted leading-relaxed max-w-[180px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
