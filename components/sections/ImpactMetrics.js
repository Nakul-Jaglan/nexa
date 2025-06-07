'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Users, GraduationCap, Heart, Globe } from 'lucide-react';

const metrics = [
  {
    icon: Users,
    number: 10000,
    suffix: '+',
    label: 'Students Impacted',
    description: 'Direct beneficiaries of our education programs',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: GraduationCap,
    number: 200,
    suffix: '+',
    label: 'Education Partners',
    description: 'Schools and institutions in our network',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Heart,
    number: 50,
    suffix: 'L+',
    label: 'Funds Raised',
    description: 'Investment in educational infrastructure',
    color: 'from-gold to-yellow-500',
  },
  {
    icon: Globe,
    number: 25,
    suffix: '+',
    label: 'Communities',
    description: 'Rural and urban areas served',
    color: 'from-purple-500 to-purple-600',
  },
];

export default function ImpactMetrics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-navy/10 text-navy rounded-full text-md font-medium mb-4">
            Our Impact
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Measuring What{' '}
            <span className="gradient-text">Matters</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every number tells a story of transformation, hope, and the power of 
            education to change lives. Here's the tangible impact we've created together.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              }}
              className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-gold/20 transition-all duration-300 group overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>

              {/* Number */}
              <div className="text-center mb-4">
                <div className="text-4xl md:text-5xl font-bold text-navy mb-2">
                  {startCount ? (
                    <CountUp
                      end={metric.number}
                      duration={2.5}
                      separator=","
                    />
                  ) : (
                    '0'
                  )}
                  <span className="text-gold">{metric.suffix}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {metric.label}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Impact Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-navy to-mutedblack rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Beyond the Numbers
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mb-6">
            Each statistic represents real people whose lives have been transformed. 
            From rural villages gaining internet access for the first time, to urban 
            youth discovering coding and digital skills, to parents seeing their 
            children's confidence soar – this is the true measure of our success.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-1">98%</div>
              <div className="text-sm text-gray-300">Program Completion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-1">4.8/5</div>
              <div className="text-sm text-gray-300">Beneficiary Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-1">75%</div>
              <div className="text-sm text-gray-300">Career Advancement</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}