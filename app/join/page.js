'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Heart, 
  Users, 
  Building, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const joinOptions = [
  {
    icon: Heart,
    title: 'Individual Donors',
    subtitle: 'Make a personal impact',
    description: 'Join thousands of individuals who are creating lasting change through their generous contributions.',
    benefits: [
      'Tax benefits under 80G',
      'Quarterly impact reports',
      'Exclusive donor events',
      'Direct beneficiary updates',
    ],
    cta: 'Start Donating',
    href: '/donate',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50',
  },
  {
    icon: Users,
    title: 'Volunteers',
    subtitle: 'Give your time and skills',
    description: 'Contribute your expertise, time, and passion to directly support our educational programs.',
    benefits: [
      'Flexible time commitments',
      'Skill-based volunteering',
      'Training and development',
      'Community of changemakers',
    ],
    cta: 'Volunteer Now',
    href: '#volunteer',
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Building,
    title: 'Corporate Partners',
    subtitle: 'CSR and strategic partnerships',
    description: 'Partner with us to fulfill your CSR objectives while creating meaningful educational impact.',
    benefits: [
      'CSR compliance support',
      'Employee engagement programs',
      'Brand visibility opportunities',
      'Measurable impact metrics',
    ],
    cta: 'Partner With Us',
    href: '#form',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: GraduationCap,
    title: 'Educators',
    subtitle: 'Join our teaching network',
    description: 'Become part of our educator network and help design and deliver innovative learning experiences.',
    benefits: [
      'Professional development',
      'Innovative teaching tools',
      'Collaborative environment',
      'Competitive compensation',
    ],
    cta: 'Apply Now',
    href: '#form',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-50',
  },
];

const volunteerRoles = [
  {
    title: 'Content Creator',
    description: 'Help create educational content and materials',
    commitment: '5-10 hours/week',
    skills: 'Writing, Design, Video editing',
  },
  {
    title: 'Mentor',
    description: 'Guide students in their academic and career journey',
    commitment: '2-4 hours/week',
    skills: 'Industry experience, Communication',
  },
  {
    title: 'Tech Support',
    description: 'Maintain and improve our digital platforms',
    commitment: '10-15 hours/week',
    skills: 'Programming, WordPress',
  },
  {
    title: 'Event Coordinator',
    description: 'Organize workshops, seminars, and community events',
    commitment: '5-8 hours/week',
    skills: 'Event planning, Project management',
  },
];

export default function JoinPage() {
  const [activeTab, setActiveTab] = useState('volunteer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

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
            backgroundImage: `linear-gradient(rgba(13, 27, 42, 0.8), rgba(26, 26, 26, 0.8)), url('https://images.pexels.com/photos/3756678/pexels-photo-3756678.jpeg')`,
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
              Join Our Mission
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Be the Change
              <br />
              <span className="gradient-text">You Want to See</span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Whether you're an individual, volunteer, corporation, or educator, 
              there's a meaningful way for you to contribute to our mission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Join Options */}
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
              Choose Your Path to Impact
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Every contribution matters. Find the way that works best for you.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {joinOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`${option.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center mb-6`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-navy mb-2">{option.title}</h3>
                <p className="text-lg font-medium text-gray-700 mb-4">{option.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {option.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href={option.href}>
                  <Button className="w-full bg-navy hover:bg-navy/90 text-white font-semibold">
                    {option.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="section-spacing bg-gray-50">
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
              Volunteer Opportunities
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Use your skills and passion to make a direct impact
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {volunteerRoles.map((role, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-gold/20 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-navy mb-3">{role.title}</h4>
                <p className="text-gray-600 mb-4">{role.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Time Commitment:</span>
                    <span className="font-medium">{role.commitment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Skills Needed:</span>
                    <span className="font-medium">{role.skills}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-spacing bg-navy text-white" id='form'>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-100">
              Fill out the form below and we'll get in touch with you soon.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-navy rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-md font-medium text-white mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-navy rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white text-navy"
                />
              </div>
              <div>
                <label className="block text-md font-medium text-white mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-navy rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white text-navy"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-md font-medium text-white mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-navy rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white text-navy"
                />
              </div>
              <div>
                <label className="block text-md font-medium text-white mb-2">
                  Area of Interest *
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white text-navy"
                >
                  <option value="">Select an option</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="donate">Individual Donation</option>
                  <option value="corporate">Corporate Partnership</option>
                  <option value="educator">Educator Network</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-md font-medium text-white mb-2">
                Tell us more about your interest
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full border border-navy rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white text-navy"
                placeholder="Share your background, skills, or how you'd like to contribute..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full h-10 bg-gold hover:bg-gold/90 text-navy font-semibold"
            >
              Submit Application
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-spacing bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
              Have Questions? Let's Talk
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-xl text-navy font-semibold mb-2">Email Us</h3>
                <Link href="mailto:support@quantel.in">
                  <p className="text-navy">support@quantel.in</p>
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-xl text-navy font-semibold mb-2">Call Us</h3>
                <Link href="tel:+918527387917">
                  <p className="text-navy">+91 85273 87917</p>
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <Calendar className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-xl text-navy font-semibold mb-2">Schedule a Meeting</h3>
                <Link href="/contact">
                  <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}