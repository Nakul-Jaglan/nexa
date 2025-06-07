'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Heart, 
  Users, 
  Lightbulb, 
  Shield, 
  Globe, 
  Zap,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const coreValues = [
  {
    icon: Heart,
    title: 'Compassion',
    subtitle: 'Leading with empathy',
    description: 'We approach every interaction with genuine care and understanding, recognizing that behind every statistic is a human story that deserves respect and dignity.',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50',
  },
  {
    icon: Users,
    title: 'Inclusivity',
    subtitle: 'Education for everyone',
    description: 'We believe that quality education should be accessible to all, regardless of background, gender, economic status, or geographic location.',
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    subtitle: 'Pioneering solutions',
    description: 'We continuously seek creative and technology-driven approaches to overcome educational barriers and enhance learning experiences.',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: Shield,
    title: 'Integrity',
    subtitle: 'Transparent and accountable',
    description: 'We maintain the highest standards of honesty, transparency, and accountability in all our operations and relationships.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Globe,
    title: 'Sustainability',
    subtitle: 'Long-term impact',
    description: 'We design programs and initiatives that create lasting change, building capacity within communities to continue growing independently.',
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-50',
  },
  {
    icon: Zap,
    title: 'Excellence',
    subtitle: 'Striving for the best',
    description: 'We are committed to delivering the highest quality in everything we do, continuously improving and setting new standards in educational impact.',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-50',
  },
];

const valueInAction = [
  {
    value: 'Compassion',
    example: 'Providing emotional support and counseling alongside academic programs',
  },
  {
    value: 'Inclusivity',
    example: 'Developing programs specifically for children with disabilities',
  },
  {
    value: 'Innovation',
    example: 'Using AI-powered learning platforms to personalize education',
  },
  {
    value: 'Integrity',
    example: 'Publishing detailed impact reports and financial transparency',
  },
  {
    value: 'Sustainability',
    example: 'Training local teachers to continue programs independently',
  },
  {
    value: 'Excellence',
    example: 'Achieving 98% program completion rates across all initiatives',
  },
];

export default function ValuesPage() {
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

    // Staggered card animations
    gsap.fromTo('.value-card', 
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.values-grid',
          start: 'top 80%',
          end: 'bottom 20%',
        },
      }
    );

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(13, 27, 42, 0.8), rgba(26, 26, 26, 0.8)), url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-md font-medium mb-6">
              Our Core Values
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Values That
              <br />
              <span className="gradient-text">Drive Our Impact</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our values are not just words on a page—they are the foundation of every 
              decision we make and every life we touch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-spacing bg-white">
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
              Six Pillars of Our Foundation
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              These values guide our work and define who we are as an organization
            </motion.p>
          </motion.div>

          <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className={`value-card ${value.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">{value.title}</h3>
                <p className="text-lg font-medium text-gray-700 mb-4">{value.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values in Action */}
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
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Values in Action
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-white max-w-3xl mx-auto"
            >
              See how our values translate into real-world impact
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {valueInAction.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 rounded-xl p-6 shadow-lg border border-gray-100 hover:border-gold/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-navy mb-2">{item.value}</h4>
                    <p className="text-gray-600">{item.example}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Statement */}
      <section className="section-spacing bg-gray-50 text-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Living Our Values Every Day
            </h2>
            <blockquote className="text-xl md:text-2xl font-light italic leading-relaxed mb-8">
              "Our values are not aspirational—they are operational. They guide every 
              decision, inform every program, and inspire every team member to create 
              meaningful, lasting change in the world."
            </blockquote>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join">
                <Button size="lg" className="bg-gold h-10 hover:bg-gold/90 text-navy font-semibold px-8">
                  Join Our Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/mission">
                <Button size="lg" variant="outline" className="h-10 border-navy text-navy hover:bg-navy hover:text-white">
                  Learn About Our Mission
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}