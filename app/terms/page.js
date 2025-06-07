'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Scale, AlertCircle, Users, Mail, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const termsSections = [
  {
    icon: FileText,
    title: 'Acceptance of Terms',
    content: [
      'By accessing and using the Nexa Foundation website, you accept and agree to be bound by these terms',
      'If you do not agree to these terms, please do not use our website or services',
      'We reserve the right to modify these terms at any time with notice',
      'Continued use of the website after changes constitutes acceptance of new terms',
    ],
  },
  {
    icon: Scale,
    title: 'Use of Website',
    content: [
      'You may use our website for lawful purposes only',
      'You agree not to use the website in any way that could damage or impair our services',
      'You may not attempt to gain unauthorized access to any part of the website',
      'You are responsible for maintaining the confidentiality of your account information',
    ],
  },
  {
    icon: AlertCircle,
    title: 'Intellectual Property',
    content: [
      'All content on this website is owned by Nexa Foundation or our licensors',
      'You may not reproduce, distribute, or create derivative works without permission',
      'Our trademarks and logos may not be used without written consent',
      'User-generated content remains your property but grants us usage rights',
    ],
  },
  {
    icon: Users,
    title: 'Donations and Payments',
    content: [
      'All donations are voluntary and non-refundable unless required by law',
      'We provide tax receipts for eligible donations as per applicable regulations',
      'Payment processing is handled by secure third-party providers',
      'We reserve the right to refuse or return donations at our discretion',
    ],
  },
];

export default function TermsPage() {
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
      <section className="relative py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Scale className="w-16 h-16 text-gold mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Please read these terms and conditions carefully before using our website 
              or services. These terms govern your use of the Nexa Foundation platform.
            </p>
            <div className="mt-8 text-sm text-gray-400">
              <p>Last updated: June 7, 2025</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="section-spacing bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {termsSections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy to-mutedblack rounded-lg flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-navy mb-4">{section.title}</h2>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="section-spacing bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Disclaimer of Warranties</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website and services are provided "as is" without any warranties, express or 
                implied. We do not warrant that the website will be uninterrupted, error-free, 
                or free of viruses or other harmful components.
              </p>
              <p className="text-gray-700 leading-relaxed">
                While we strive to provide accurate and up-to-date information, we make no 
                representations or warranties about the completeness, accuracy, or reliability 
                of any information on the website.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the fullest extent permitted by law, Nexa Foundation shall not be liable for 
                any indirect, incidental, special, consequential, or punitive damages arising 
                from your use of the website or services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our total liability for any claims arising from your use of the website shall 
                not exceed the amount you have paid to us, if any, in the twelve months 
                preceding the claim.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the 
                laws of India. Any disputes arising from these terms shall be subject to the 
                exclusive jurisdiction of the courts in Mumbai, Maharashtra.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these terms is found to be unenforceable or invalid, that 
                provision will be limited or eliminated to the minimum extent necessary so that 
                the remaining terms will remain in full force and effect.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these terms and conditions, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Nexa Foundation</strong></p>
                <p>Email: support@quantel.in</p>
                <p>Phone: +91 85273 87917</p>
                <p>Address: W 2/6, Block 2, West Patel Nagar, Patel Nagar, New Delhi, Delhi, 110008</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing bg-gray-50 text-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Need Legal Clarification?</h2>
            <p className="text-xl text-navy mb-8 leading-relaxed">
              If you have any questions about these terms and conditions or need 
              legal clarification, our team is here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-gold" />
                <span>support@quantel.in</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Calendar className="w-6 h-6 text-gold" />
                <span>Schedule a consultation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}