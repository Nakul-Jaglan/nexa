'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = {
  'Quick Links': [
    { name: 'Our Mission', href: '/mission' },
    { name: 'Core Values', href: '/values' },
    { name: 'Success Stories', href: '/stories' },
    { name: 'Join Us', href: '/join' },
  ],
  'Get Involved': [
    { name: 'Donate', href: '/donate' },
    { name: 'Volunteer', href: '/join#volunteer' },
    { name: 'Partner with Us', href: '/join#form' },
    { name: 'Corporate CSR', href: '/join#form' },
  ],
  'Resources': [
    { name: 'Blog', href: '/blog' },
    { name: 'Media Resources', href: '/resources' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

const socialLinks = [
  // { name: 'Twitter', icon: Twitter, href: '#' },
  // { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/quantel-in/' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/quantelforbusiness' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Newsletter Section */}
      {/* <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Stay Connected with Our Mission
            </h3>
            <p className="text-gray-300 mb-6">
              Get updates on our latest initiatives, success stories, and ways to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-gold hover:bg-gold/90 text-navy font-semibold px-6">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="rounded-lg flex items-center justify-center">
                  <img src='/logo.png' className="w-10 text-white" />
                </div>
                <span className="text-2xl font-bold">Nexa Foundation</span>
              </Link>
              <p className="text-gray-300 mb-6 max-w-md">
                Transforming communities through innovative education initiatives. 
                Join us in building a brighter future for the next generation.
              </p>
              <div className="space-y-3">
                <div>
                  <Link href="mailto:support@quantel.in" className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gold" />
                    <span className="text-gray-300">support@quantel.in</span>
                  </Link>
                </div>
                <div>
                  <Link href="tel:+918527387917" className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gold" />
                    <span className="text-gray-300">+91 85273 87917</span>
                  </Link>
                </div>
                <div>
                  <Link href="https://maps.app.goo.gl/nyVcqhvgSczZTGBT9" target="_blank" className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gold" />
                    <span className="text-gray-300">W 2/6, Block 2, West Patel Nagar, Patel Nagar, New Delhi, Delhi, 110008</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-gold">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm mb-4 md:mb-0"
          >
            © 2025 Nexa Foundation. All rights reserved. | A Quantel Education Initiative
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white/10 hover:bg-gold hover:text-navy rounded-full flex items-center justify-center transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}