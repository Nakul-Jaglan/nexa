'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const visionPoints = [
  {
    year: '2025',
    title: 'Foundation Launch',
    description: 'Establishing our core programs and building strategic partnerships across India.',
    status: 'active',
  },
  {
    year: '2026',
    title: 'Scale Impact',
    description: 'Reaching 100,000 students through innovative digital learning platforms.',
    status: 'upcoming',
  },
  {
    year: '2028',
    title: 'Global Expansion',
    description: 'Extending our mission to underserved communities across South Asia.',
    status: 'upcoming',
  },
  {
    year: '2030',
    title: 'Generational Change',
    description: 'Creating a sustainable ecosystem where education transforms entire communities.',
    status: 'upcoming',
  },
];

export default function VisionSection() {
  const sectionRef = useRef();
  const timelineRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal scroll animation
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      });

      timeline.fromTo(
        '.vision-card',
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 1,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-spacing bg-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-md font-medium mb-4">
            Our Vision
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            The Journey to{' '}
            <span className="gradient-text">Educational Equity</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We envision a world where every child, regardless of their background, 
            has access to quality education that empowers them to reach their full potential.
          </p>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 mb-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gold">
            "Education is a Human Right, Not a Privilege"
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            By 2030, we aim to have directly impacted over 1 million lives through our 
            education initiatives, creating a ripple effect of positive change that 
            extends to families, communities, and entire regions. Our vision is to 
            build sustainable educational ecosystems that continue to thrive long 
            after our initial intervention.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-skyblue to-gold transform md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                className={`vision-card flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Point */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gold rounded-full transform md:-translate-x-1/2 z-10">
                  <div className="absolute inset-0 bg-gold rounded-full animate-ping" />
                </div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <div className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-gold">{point.year}</span>
                      {point.status === 'active' && (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      )}
                      {point.status === 'upcoming' && (
                        <ArrowRight className="w-5 h-5 text-skyblue" />
                      )}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{point.title}</h4>
                    <p className="text-gray-300">{point.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}