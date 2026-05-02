'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Architectural Discovery',
    desc: 'We begin with a clinical analysis of your objectives, identifying the structural requirements for success.',
  },
  {
    title: 'Technical Blueprinting',
    desc: 'Drafting the foundational schemas and choosing the exact stack that guarantees longevity and scale.',
  },
  {
    title: 'Precision Iteration',
    desc: 'Our engineering cycles are rapid yet meticulous, ensuring every line of code serves a purpose.',
  },
  {
    title: 'Global Deployment',
    desc: 'Launching with surgical precision, backed by automated scaling and real-time monitoring.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-40 relative bg-background overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-4 sticky top-40 h-fit">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium tracking-[0.4em] uppercase text-xs mb-8"
            >
              The Philosophy
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-heading leading-tight mb-8"
            >
              Precision <br />
              <span className="italic">as a</span> <br />
              Standard.
            </motion.h2>
            <p className="text-muted/60 max-w-sm leading-relaxed">
              We don't follow trends. We follow logic. Our process is designed to eliminate uncertainty and deliver predictable excellence.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="group flex flex-col md:flex-row gap-12 items-start"
              >
                <div className="text-[5rem] md:text-[8rem] font-heading font-light leading-none text-muted/10 group-hover:text-primary/20 transition-colors duration-700 select-none">
                  0{index + 1}
                </div>
                <div className="pt-4 md:pt-12 space-y-6">
                  <h4 className="text-3xl font-heading tracking-tight">{step.title}</h4>
                  <p className="text-lg text-muted/60 leading-relaxed max-w-xl">
                    {step.desc}
                  </p>
                  <div className="h-[1px] w-0 group-hover:w-full bg-primary/40 transition-all duration-1000 ease-in-out" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-border/30 -z-10 hidden lg:block" />
    </section>
  );
}
