'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Calendar,
  Users,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us a message anytime',
    value: 'support@quantel.in',
    action: 'mailto:support@quantel.in',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak with our team',
    value: '+91 85273 87917',
    action: 'tel:+918527387917',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Our main office',
    value: 'W 2/6, Block 2, West Patel Nagar, Patel Nagar, New Delhi, Delhi, 110008',
    action: 'https://maps.app.goo.gl/nyVcqhvgSczZTGBT9',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    description: 'When we\'re available',
    value: 'Mon-Fri: 10:00 AM - 7:00 PM',
    color: 'from-orange-500 to-orange-600',
  },
];

const inquiryTypes = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'donation', label: 'Donation & Partnerships' },
  { value: 'volunteer', label: 'Volunteering Opportunities' },
  { value: 'media', label: 'Media & Press' },
  { value: 'corporate', label: 'Corporate Partnerships' },
  { value: 'other', label: 'Other' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      inquiryType: '',
      subject: '',
      message: '',
    });
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
            backgroundImage: `linear-gradient(rgba(13, 27, 42, 0.8), rgba(26, 26, 26, 0.8)), url('https://images.pexels.com/photos/4831/hands-coffee-smartphone-technology.jpg')`,
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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Let's Create
              <br />
              <span className="gradient-text">Impact Together</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Whether you're interested in partnering, volunteering, or learning more 
              about our work, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
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
              Multiple Ways to Connect
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Choose the method that works best for you
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.action}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 block"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{info.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{info.description}</p>
                <p className="text-navy font-medium">{info.value}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-spacing bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-100">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-navy rounded-2xl p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full bg-white text-navy placeholder-gray-400 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Your Full Name"
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
                    className="w-full bg-white text-navy placeholder-gray-400 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-md font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white text-navy placeholder-gray-400 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-md font-medium text-white mb-2">
                    Organization (Optional)
                  </label>
                  <Input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full bg-white text-navy placeholder-gray-400 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Your organization name"
                  />
                </div>
              </div>

              {/* Inquiry Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-md font-medium text-white mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border bg-white text-navy border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  >
                    <option value="">Select inquiry type</option>
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-md font-medium text-white mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white text-navy placeholder-gray-400 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Brief subject line"
                  />
                </div>
              </div>

              <div>
                <label className="block text-md font-medium text-white mb-2">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                    className="w-full bg-white text-navy placeholder-gray-400 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Tell us more about your inquiry, goals, or how we can help..."
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full h-10 bg-gold hover:bg-gold/90 text-navy font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-navy mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-10 bg-white text-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-navy font-bold mb-6">
              Need Something Specific?
            </h2>
            <p className="text-xl text-navy">
              Quick access to common requests
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <Link href="mailto:support@quantel.in">
                <Calendar className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Schedule a Meeting</h3>
                <p className="text-navy mb-4">
                  Book a consultation to discuss partnerships or collaborations
                </p>
                <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                  Book Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <Link href="/join">
                <Users className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Join Our Team</h3>
                <p className="text-navy mb-4">
                  Explore career opportunities and volunteer positions
                </p>
                <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                  View Opportunities
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <Link href="/resources">
                <MessageCircle className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Media Inquiries</h3>
                <p className="text-navy mb-4">
                  Press kit, interviews, and media resources
                </p>
                <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                  Media Resources
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}