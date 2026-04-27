'use client';

import { motion } from 'framer-motion';
import { Search, ClipboardList, Code2, ShieldCheck, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Requirement Analysis',
    desc: 'We dive deep into your business goals and user needs.',
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: 'Planning',
    desc: 'Creating detailed roadmaps and architectural blueprints.',
    icon: <ClipboardList className="w-6 h-6" />,
  },
  {
    title: 'Development',
    desc: 'Agile coding process with continuous feedback loops.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'Testing',
    desc: 'Rigorous QA to ensure security and performance.',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: 'Deployment',
    desc: 'Seamless launch and scaling of your solution.',
    icon: <Rocket className="w-6 h-6" />,
  },
];

export default function Process() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Our Process</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading">From Idea to <span className="text-blue-400">Launch</span></h3>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col items-center text-center space-y-6 group"
              >
                <div className="w-16 h-16 bg-secondary border border-white/10 rounded-full flex items-center justify-center relative z-10 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(10,102,194,0.3)] transition-all">
                  <div className="text-primary">{step.icon}</div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-[10px] font-bold text-white">
                    {index + 1}
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold">{step.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-[200px] mx-auto">
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
