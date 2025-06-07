'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Heart, Users, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const missionPillars = [
  {
    icon: Target,
    title: 'Educational Excellence',
    description: 'Delivering world-class education that prepares students for the challenges of tomorrow.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Heart,
    title: 'Community Impact',
    description: 'Creating lasting positive change in underserved communities across India.',
    color: 'from-gold to-yellow-500',
  },
  {
    icon: Users,
    title: 'Inclusive Access',
    description: 'Ensuring quality education reaches every child, regardless of their background.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Globe,
    title: 'Sustainable Growth',
    description: 'Building educational ecosystems that continue to thrive and expand.',
    color: 'from-purple-500 to-purple-600',
  },
];

const achievements = [
  { number: '10,000+', label: 'Lives Transformed' },
  { number: '200+', label: 'Partner Schools' },
  { number: '25+', label: 'Communities Served' },
  { number: '98%', label: 'Success Rate' },
];

export default function MissionPage() {
  useEffect(() => {
    // Scroll progress indicator
    gsap.to('.scroll-indicator', {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    // Parallax effects
    gsap.to('.parallax-bg', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

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

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative min-h-[115vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: `linear-gradient(rgba(13, 27, 42, 0.8), rgba(26, 26, 26, 0.8)), url('https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-md font-medium mb-6">
              Our Mission
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transforming Lives Through
              <br />
              <span className="gradient-text">Quality Education</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We believe education is the most powerful tool for breaking cycles of poverty 
              and creating opportunities for sustainable development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-navy mb-8"
            >
              Our Mission Statement
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-navy to-mutedblack rounded-2xl p-8 md:p-12 text-white"
            >
              <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed">
                "To democratize access to quality education and empower underserved 
                communities with the knowledge, skills, and opportunities needed to 
                build a brighter, more equitable future for all."
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-navy mb-6"
            >
              Our Core Pillars
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Four fundamental principles guide everything we do
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {missionPillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-gold/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center mb-6`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-spacing bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Mission in Action
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Real impact, measurable results
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-300 font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-spacing bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Together, we can create a world where every child has access to quality education 
              and the opportunity to reach their full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <Button size="lg" className="bg-gold h-10 hover:bg-gold/90 text-navy font-semibold px-8">
                  Support Our Mission
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/join">
                <Button size="lg" variant="outline" className="border-navy h-10 text-navy hover:bg-navy hover:text-white">
                  Get Involved
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}