'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Heart, 
  Shield, 
  Award, 
  Users, 
  ArrowRight, 
  CheckCircle,
  CreditCard,
  Smartphone,
  Building,
  Gift
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

gsap.registerPlugin(ScrollTrigger);

const donationAmounts = [
  { amount: 1000, impact: 'Provides books for 2 students' },
  { amount: 2500, impact: 'Funds digital device for 1 student' },
  { amount: 5000, impact: 'Sponsors 1 month of education' },
  { amount: 10000, impact: 'Supports teacher training program' },
  { amount: 25000, impact: 'Establishes digital classroom' },
  { amount: 50000, impact: 'Sponsors complete education journey' },
];

const paymentMethods = [
  { icon: CreditCard, name: 'Credit/Debit Card', description: 'Visa, Mastercard, RuPay' },
  { icon: Smartphone, name: 'UPI', description: 'Google Pay, PhonePe, Paytm' },
  { icon: Building, name: 'Net Banking', description: 'All major banks supported' },
  { icon: Gift, name: 'Cheque/DD', description: 'Traditional payment methods' },
];

const taxBenefits = [
  {
    title: '80G Tax Exemption',
    description: 'Get 50% tax deduction on your donations under Section 80G',
    icon: Shield,
  },
  {
    title: 'Instant Tax Receipt',
    description: 'Receive your 80G certificate immediately via email',
    icon: Award,
  },
  {
    title: 'Transparent Usage',
    description: 'Track exactly how your donation is being utilized',
    icon: Users,
  },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(5000);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    pan: '',
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

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(0);
  };

  const handleInputChange = (e) => {
    setDonorInfo({
      ...donorInfo,
      [e.target.name]: e.target.value,
    });
  };

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;

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
            backgroundImage: `linear-gradient(rgba(13, 27, 42, 0.8), rgba(26, 26, 26, 0.8)), url('https://images.pexels.com/photos/31679224/pexels-photo-31679224/free-photo-of-exchanging-indonesian-currency-in-envelope.jpeg')`,
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
            <Heart className="w-16 h-16 text-gold mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Lives Through
              <br />
              <span className="gradient-text">Education</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your donation directly impacts students, teachers, and communities. 
              Join us in creating lasting educational change across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {taxBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-spacing bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-navy mb-4">Make Your Donation</h2>
              <p className="text-gray-600">Choose your donation amount and see the impact you'll create</p>
            </div>

            {/* Donation Type */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-navy mb-4">Donation Type</h3>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setDonationType('one-time')}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                    donationType === 'one-time'
                      ? 'bg-gold text-navy shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  One-time Donation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setDonationType('monthly')}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                    donationType === 'monthly'
                      ? 'bg-gold text-navy shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Monthly Donation
                </motion.button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-navy mb-4">Select Amount</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {donationAmounts.map((donation, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAmountSelect(donation.amount)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                      selectedAmount === donation.amount
                        ? 'border-gold bg-gold/10'
                        : 'border-gray-200 hover:border-gold/50'
                    }`}
                  >
                    <div className="text-xl font-bold text-navy">₹{donation.amount.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">{donation.impact}</div>
                  </motion.button>
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">Custom Amount:</span>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="flex-1 max-w-xs bg-white border border-gray-300 rounded-lg focus:ring-gold focus:border-gold transition-all duration-200"
                />
              </div>
            </div>

            {/* Impact Display */}
            {finalAmount > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gold/10 rounded-lg p-6 mb-8"
              >
                <h4 className="text-lg font-semibold text-navy mb-2">Your Impact</h4>
                <p className="text-gray-700">
                  Your donation of ₹{finalAmount.toLocaleString()} will help us continue our mission 
                  of providing quality education to underserved communities.
                </p>
                <div className="mt-4 text-sm text-gray-600">
                  <p>• Tax deduction: ₹{Math.floor(finalAmount * 0.5).toLocaleString()} (50% under 80G)</p>
                  <p>• Effective cost to you: ₹{Math.floor(finalAmount * 0.5).toLocaleString()}</p>
                </div>
              </motion.div>
            )}

            {/* Donor Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-navy mb-4">Donor Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={donorInfo.name}
                  onChange={handleInputChange}
                  required
                  className='bg-white border border-gray-300 rounded-lg focus:ring-gold focus:border-gold transition-all duration-200'
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={donorInfo.email}
                  onChange={handleInputChange}
                  required
                  className='bg-white border border-gray-300 rounded-lg focus:ring-gold focus:border-gold transition-all duration-200'
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={donorInfo.phone}
                  onChange={handleInputChange}
                  required
                  className='bg-white border border-gray-300 rounded-lg focus:ring-gold focus:border-gold transition-all duration-200'
                />
                <Input
                  type="text"
                  name="pan"
                  placeholder="PAN Number (for tax receipt)"
                  value={donorInfo.pan}
                  onChange={handleInputChange}
                  className='bg-white border border-gray-300 rounded-lg focus:ring-gold focus:border-gold transition-all duration-200'
                />
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-navy mb-4">Payment Methods</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {paymentMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="border border-gray-200 rounded-lg p-4 text-center hover:border-gold/50 transition-all duration-200"
                  >
                    <method.icon className="w-8 h-8 text-gold mx-auto mb-2" />
                    <div className="text-sm font-medium text-navy">{method.name}</div>
                    <div className="text-xs text-gray-600">{method.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Donate Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="w-full cursor-pointer bg-gold hover:bg-gold/90 text-navy font-semibold py-4 text-lg"
                disabled={!finalAmount || !donorInfo.name || !donorInfo.email}
              >
                Donate ₹{finalAmount.toLocaleString()} Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <div className="mt-4 text-center text-sm text-gray-600">
              <p>🔒 Your donation is secure and encrypted. You'll receive an instant tax receipt.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="section-spacing bg-gray-50 text-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Other Ways to Support Us
            </h2>
            <p className="text-xl text-navy mb-8 leading-relaxed">
              Beyond monetary donations, there are many ways to contribute to our mission
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass rounded-xl p-6">
                <Users className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Volunteer</h3>
                <p className="text-navy text-sm">Share your skills and time</p>
              </div>
              <div className="glass rounded-xl p-6">
                <Building className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Corporate Partnership</h3>
                <p className="text-navy text-sm">CSR and strategic alliances</p>
              </div>
              <div className="glass rounded-xl p-6">
                <Gift className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">In-Kind Donations</h3>
                <p className="text-navy text-sm">Equipment and resources</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}