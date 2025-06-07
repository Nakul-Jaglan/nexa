'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Calendar, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section ref={ref} className="section-spacing bg-gradient-to-br from-navy via-mutedblack to-navy text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-skyblue rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-md font-medium mb-6">
              Take Action Today
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Be the Change You
              <br />
              <span className="gradient-text">Want to See</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Every great transformation begins with a single step. Join thousands 
              of visionaries who are already making a difference in the lives of 
              students and communities across India.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {/* Donate Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass rounded-2xl p-8 text-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Make a Donation</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Fund education programs and transform lives with your contribution
              </p>
              <Link href="/donate">
                <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold">
                  Donate Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Schedule Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass rounded-2xl p-8 text-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-skyblue to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Schedule a Meeting</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Discuss partnership opportunities and customized impact strategies
              </p>
              <Link href="/contact">
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-navy">
                  Book Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Join Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass rounded-2xl p-8 text-center group cursor-pointer md:col-span-2 lg:col-span-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Join Our Mission</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Become a volunteer, educator, or ambassador for educational change
              </p>
              <Link href="/join">
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-navy">
                  Get Involved
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <p className="text-lg text-gray-300 mb-8">
              Questions? We're here to help you make the biggest impact possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="mailto:support@quantel.in">
                <Button size="lg" variant="ghost" className="text-white h-10 hover:bg-white/10">
                  support@quantel.in
                </Button>
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="tel:+918527387917">
                <Button size="lg" variant="ghost" className="text-white h-10 hover:bg-white/10">
                  +91 85273 87917
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}