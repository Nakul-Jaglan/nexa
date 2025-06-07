'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  const backgroundRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    // GSAP background animation
    gsap.fromTo(
      backgroundRef.current,
      { scale: 1.1 },
      { scale: 1, duration: 2, ease: 'power2.out' }
    );

    // Floating particles animation
    gsap.to('.particle', {
      y: -30,
      x: 20,
      rotation: 360,
      duration: 8,
      ease: 'none',
      repeat: -1,
      stagger: 0.5,
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 hero-gradient"
        style={{
          backgroundImage: `linear-gradient(rgba(13, 27, 42, 0.8), rgba(26, 26, 26, 0.8)), url('https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={textRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-md font-medium backdrop-blur-sm border border-gold/30">
              A Quantel Education Initiative
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Redefining Education.
            <br />
            <span className="gradient-text">Reshaping Futures.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Join us in transforming communities through innovative education initiatives. 
            Together, we're building a brighter, more equitable future for the next generation.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="/donate">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-4 text-lg rounded-full hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Become a Change Partner
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            <Link href={"https://www.youtube.com/watch?v=3bSxi7c6ZPU"} target="_blank">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-white hover:text-gold transition-colors duration-200 group"
              >
                <div className="w-12 h-12 border-2 border-white group-hover:border-gold rounded-full flex items-center justify-center transition-colors duration-200">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                <span className="font-medium">Watch Our Story</span>
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '10,000+', label: 'Students Impacted' },
              { number: '200+', label: 'Education Partners' },
              { number: '₹50L+', label: 'Funds Raised' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-lg p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          <span className="text-sm mb-2 font-medium">Discover More</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}