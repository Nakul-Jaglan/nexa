'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Lock, Eye, Users, Mail, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const privacySections = [
  {
    icon: Shield,
    title: 'Information We Collect',
    content: [
      'Personal information you provide when contacting us, donating, or volunteering',
      'Technical information about your device and how you use our website',
      'Cookies and similar tracking technologies for website functionality',
      'Information from third-party services when you choose to connect them',
    ],
  },
  {
    icon: Lock,
    title: 'How We Use Your Information',
    content: [
      'To process donations and provide tax receipts',
      'To communicate about our programs and impact',
      'To improve our website and services',
      'To comply with legal and regulatory requirements',
      'To send newsletters and updates (with your consent)',
    ],
  },
  {
    icon: Eye,
    title: 'Information Sharing',
    content: [
      'We do not sell, trade, or rent your personal information to third parties',
      'We may share information with trusted service providers who assist our operations',
      'We may disclose information when required by law or to protect our rights',
      'Aggregated, non-personal data may be shared for research or reporting purposes',
    ],
  },
  {
    icon: Users,
    title: 'Your Rights',
    content: [
      'Access and review the personal information we hold about you',
      'Request corrections to inaccurate or incomplete information',
      'Request deletion of your personal information (subject to legal requirements)',
      'Opt-out of marketing communications at any time',
      'Request a copy of your data in a portable format',
    ],
  },
];

export default function PrivacyPage() {
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
            <Shield className="w-16 h-16 text-gold mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
            </p>
            <div className="mt-8 text-sm text-gray-400">
              <p>Last updated: June 7, 2025</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="section-spacing bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {privacySections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
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

      {/* Additional Information */}
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
              <h2 className="text-2xl font-bold text-navy mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or 
                destruction. This includes encryption, secure servers, and regular security audits.
              </p>
              <p className="text-gray-700 leading-relaxed">
                However, no method of transmission over the internet or electronic storage is 100% 
                secure. While we strive to protect your personal information, we cannot guarantee 
                its absolute security.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website uses cookies and similar tracking technologies to enhance your browsing 
                experience, analyze website traffic, and understand where our visitors are coming from.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You can control cookies through your browser settings. However, disabling cookies 
                may affect the functionality of our website.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website is not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13. If you are a parent or guardian 
                and believe your child has provided us with personal information, please contact us 
                immediately.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this privacy policy from time to time to reflect changes in our 
                practices or for other operational, legal, or regulatory reasons. We will notify 
                you of any material changes by posting the new policy on this page and updating 
                the "Last updated" date.
              </p>
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
            <h2 className="text-3xl font-bold mb-6">Questions About Your Privacy?</h2>
            <p className="text-xl text-navy mb-8 leading-relaxed">
              If you have any questions about this privacy policy or how we handle your 
              personal information, please don't hesitate to contact us.
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