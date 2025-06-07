'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Heart, BookOpen, Target } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Mission-Driven',
    description: 'Every initiative we launch is rooted in genuine care for community development and educational excellence.',
  },
  {
    icon: Users,
    title: 'Community-Centered',
    description: 'We work hand-in-hand with local communities to understand their unique needs and create tailored solutions.',
  },
  {
    icon: BookOpen,
    title: 'Innovation-First',
    description: 'Leveraging cutting-edge educational technology and methodologies to maximize learning outcomes.',
  },
  {
    icon: Target,
    title: 'Impact-Focused',
    description: 'We measure success through tangible improvements in lives, communities, and educational opportunities.',
  },
];

export default function WhoWeAreSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="section-spacing bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-skyblue/10 text-skyblue rounded-full text-md font-medium mb-4"
          >
            Who We Are
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6"
          >
            Pioneering Educational{' '}
            <span className="gradient-text">Transformation</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Born from the vision of Quantel Education's founders, Nexa Foundation bridges 
            the gap between educational aspiration and access, creating pathways for 
            underserved communities to thrive in the digital age.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                Building Tomorrow's Leaders Today
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We believe that quality education should never be a privilege. Through 
                strategic partnerships, innovative programs, and community engagement, 
                we're democratizing access to world-class educational opportunities.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "Education is the most powerful weapon which you can use to change the world. 
                At Nexa Foundation, we're putting this weapon in the hands of those who need it most."
              </blockquote>
              <cite className="text-navy font-semibold">
                - Founders, Quantel Education
              </cite>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(13, 27, 42, 0.1)',
                }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-gold/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-skyblue rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-navy mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}