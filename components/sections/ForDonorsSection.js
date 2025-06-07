'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Award, FileText, Users, ArrowRight, CheckCircle, Book, Globe, Glasses } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const benefits = [
  {
    icon: Shield,
    title: 'Tax Benefits',
    description: '80G certification for maximum tax deductions on your contributions',
  },
  {
    icon: Award,
    title: 'Legacy Impact',
    description: 'Create lasting change that will be remembered for generations',
  },
  {
    icon: FileText,
    title: 'Transparent Reporting',
    description: 'Detailed impact reports and financial transparency every quarter',
  },
  {
    icon: Users,
    title: 'Exclusive Community',
    description: 'Join an elite network of change-makers and thought leaders',
  },
];

const donationTiers = [
  {
    amount: '₹50,000',
    title: 'Education Advocate',
    description: 'Sponsor one child\'s complete education journey',
    features: ['Tax benefits', 'Quarterly reports', 'Certificate of appreciation'],
    color: 'from-blue-500 to-blue-600',
    icon: Book
  },
  {
    amount: '₹2,00,000',
    title: 'Community Champion',
    description: 'Transform an entire classroom with digital learning',
    features: ['All Advocate benefits', 'School naming opportunity', 'Annual site visit'],
    color: 'from-gold to-yellow-500',
    popular: true,
    icon: Globe
  },
  {
    amount: '₹10,00,000+',
    title: 'Visionary Partner',
    description: 'Establish a complete learning center in your name',
    features: ['All Champion benefits', 'Advisory board position', 'Legacy recognition'],
    color: 'from-purple-500 to-purple-600',
    icon: Glasses
  },
];

export default function ForDonorsSection() {
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
            className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-md font-medium mb-4"
          >
            For Visionary Donors
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6"
          >
            Invest in{' '}
            <span className="gradient-text">Generational Change</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Join India's most successful entrepreneurs and leaders in creating 
            sustainable educational impact. Your investment today shapes tomorrow's leaders.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-gold/20 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-gold to-skyblue rounded-lg flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Donation Tiers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-navy text-center mb-12"
          >
            Partnership Levels
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donationTiers.map((tier, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -10 }}
                className={`relative bg-white rounded-2xl p-8 shadow-xl border-2 transition-all duration-300 ${
                  tier.popular 
                    ? 'border-gold shadow-2xl' 
                    : 'border-gray-100 hover:border-gold/30'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold text-navy px-6 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    {/* <span className="text-2xl font-bold text-white">{tier.icon}</span> */}
                    {(() => {
                      const TierIcon = tier.icon;
                      return <TierIcon className="text-white" />;
                    })()}
                  </div>
                  <div className="text-3xl font-bold text-navy mb-2">{tier.amount}</div>
                  <h4 className="text-xl font-semibold text-navy mb-2">{tier.title}</h4>
                  <p className="text-gray-600">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/donate" className="block">
                  <Button 
                    className={`w-full ${
                      tier.popular
                        ? 'bg-gold hover:bg-gold/90 text-navy'
                        : 'bg-navy hover:bg-navy/90 text-white'
                    } font-semibold py-3 rounded-xl`}
                  >
                    Choose This Level
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="bg-navy rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Lives?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a personal consultation to discuss how your contribution 
            can create maximum impact and align with your philanthropic goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-gold h-10 hover:bg-gold/90 text-navy font-semibold px-8">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/donate">
              <Button size="lg" variant="outline" className="border-white h-10 text-white hover:bg-white hover:text-navy">
                Donate Now
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}