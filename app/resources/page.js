'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Download, 
  FileText, 
  Image, 
  Video, 
  Mic,
  ExternalLink,
  Calendar,
  Mail,
  User,
  Building2,
  Award,
  TrendingUp,
  Users,
  Target,
  Globe,
  FileDown,
  Camera,
  PlayCircle,
  Newspaper
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const pressKitItems = [
  {
    id: 1,
    title: 'Organization Fact Sheet',
    description: 'Key statistics, mission, and overview of our work',
    type: 'PDF',
    size: '2.1 MB',
    icon: FileText,
    downloadUrl: '#',
    category: 'documents'
  },
  {
    id: 2,
    title: 'High-Resolution Logo Pack',
    description: 'Various formats and color variations of our logo',
    type: 'ZIP',
    size: '15.3 MB',
    icon: Image,
    downloadUrl: '#',
    category: 'branding'
  },
  {
    id: 3,
    title: 'Executive Bios & Photos',
    description: 'Leadership team biographies and professional headshots',
    type: 'PDF',
    size: '8.7 MB',
    icon: User,
    downloadUrl: '#',
    category: 'leadership'
  },
  {
    id: 4,
    title: 'Impact Report 2024',
    description: 'Comprehensive annual report with data and success stories',
    type: 'PDF',
    size: '12.5 MB',
    icon: TrendingUp,
    downloadUrl: '#',
    category: 'reports'
  },
  {
    id: 5,
    title: 'Program Photos & Videos',
    description: 'High-quality media from our educational programs',
    type: 'ZIP',
    size: '125 MB',
    icon: Camera,
    downloadUrl: '#',
    category: 'media'
  },
  {
    id: 6,
    title: 'Brand Guidelines',
    description: 'Complete style guide for proper brand usage',
    type: 'PDF',
    size: '4.2 MB',
    icon: Building2,
    downloadUrl: '#',
    category: 'branding'
  }
];

const mediaResources = [
  {
    id: 1,
    title: 'Documentary: "Education for All"',
    description: 'A 15-minute documentary showcasing our rural education initiatives',
    type: 'Video',
    duration: '15:32',
    icon: PlayCircle,
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'video'
  },
  {
    id: 2,
    title: 'Podcast: Future of Education',
    description: 'CEO interview on transforming rural education landscape',
    type: 'Audio',
    duration: '28:45',
    icon: Mic,
    embedUrl: '#',
    category: 'audio'
  },
  {
    id: 3,
    title: 'Photo Gallery: Field Work',
    description: 'Collection of photos from our recent field visits',
    type: 'Gallery',
    count: '45 photos',
    icon: Image,
    embedUrl: '#',
    category: 'gallery'
  }
];

const pressReleases = [
  {
    id: 1,
    title: 'Nexa Foundation Launches Digital Literacy Program in 50 Villages',
    date: '2024-11-15',
    excerpt: 'Revolutionary program aims to bridge digital divide in rural India with comprehensive technology training.',
    readTime: '3 min read',
    downloadUrl: '#'
  },
  {
    id: 2,
    title: 'Partnership with Tech Giants Brings AI Education to Rural Schools',
    date: '2024-10-28',
    excerpt: 'Collaboration introduces artificial intelligence curriculum to underserved communities.',
    readTime: '4 min read',
    downloadUrl: '#'
  },
  {
    id: 3,
    title: 'Annual Impact Report Shows 300% Increase in Student Success Rates',
    date: '2024-09-12',
    excerpt: 'Latest data reveals significant improvements in educational outcomes across all program locations.',
    readTime: '5 min read',
    downloadUrl: '#'
  },
  {
    id: 4,
    title: 'Nexa Foundation Receives National Education Excellence Award',
    date: '2024-08-20',
    excerpt: 'Recognition for outstanding contribution to rural education transformation in India.',
    readTime: '2 min read',
    downloadUrl: '#'
  }
];

const awards = [
  {
    title: 'National Education Excellence Award',
    year: '2024',
    organization: 'Ministry of Education, Government of India',
    description: 'For outstanding contribution to rural education transformation'
  },
  {
    title: 'Social Impact Innovation Prize',
    year: '2023',
    organization: 'India Social Impact Foundation',
    description: 'Recognizing innovative approaches to educational challenges'
  },
  {
    title: 'Digital India Champion',
    year: '2023',
    organization: 'Digital India Initiative',
    description: 'For advancing digital literacy in rural communities'
  },
  {
    title: 'CSR Excellence Award',
    year: '2022',
    organization: 'Indian Chamber of Commerce',
    description: 'Outstanding corporate social responsibility impact'
  }
];

const keyStats = [
  { number: '500+', label: 'Villages Reached', icon: Globe },
  { number: '25,000+', label: 'Students Impacted', icon: Users },
  { number: '1,200+', label: 'Teachers Trained', icon: User },
  { number: '95%', label: 'Success Rate', icon: Target }
];

const categoryFilters = [
  { id: 'all', label: 'All Resources' },
  { id: 'documents', label: 'Documents' },
  { id: 'branding', label: 'Brand Assets' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'reports', label: 'Reports' },
  { id: 'media', label: 'Media Files' }
];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(pressKitItems);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredItems(pressKitItems);
    } else {
      setFilteredItems(pressKitItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

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

    // Stagger animations for cards
    gsap.fromTo('.resource-card', 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.resource-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(13, 27, 42, 0.8), rgba(26, 26, 26, 0.8)), url('https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg')`,
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
              Media & Resources
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Press Kit &
              <br />
              <span className="gradient-text">Media Resources</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to tell our story. High-quality assets, press releases, 
              interviews, and media content for journalists and partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {keyStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-gold mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Press Kit Downloads */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Press Kit Downloads
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready-to-use assets for media coverage and partnerships
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categoryFilters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === filter.id
                    ? 'bg-gold text-navy shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Resources Grid */}
          <motion.div
            className="resource-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="resource-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {item.type} • {item.size}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {item.description}
                </p>
                
                <Button 
                  className="w-full bg-navy hover:bg-navy/90 text-white"
                  onClick={() => window.open(item.downloadUrl, '_blank')}
                >
                  <Download className="mr-2 w-4 h-4" />
                  Download
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="section-spacing bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Media Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Videos, photos, and audio content showcasing our impact
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {mediaResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-navy to-gray-800 flex items-center justify-center">
                  <resource.icon className="w-16 h-16 text-gold" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full font-medium">
                      {resource.type}
                    </span>
                    <span className="text-xs text-gray-500">
                      {resource.duration || resource.count}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {resource.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-navy text-navy hover:bg-navy hover:text-white"
                  >
                    <ExternalLink className="mr-2 w-4 h-4" />
                    View {resource.type}
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Recent Press Releases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest news and announcements from Nexa Foundation
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {pressReleases.map((release, index) => (
              <motion.article
                key={release.id}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="text-sm text-gray-500">
                        {formatDate(release.date)}
                      </span>
                      <span className="text-sm text-gray-500">
                        {release.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-navy mb-2">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 mb-4 lg:mb-0">
                      {release.excerpt}
                    </p>
                  </div>
                  
                  <div className="lg:ml-6">
                    <Button 
                      variant="outline" 
                      className="border-navy text-navy hover:bg-navy hover:text-white"
                      onClick={() => window.open(release.downloadUrl, '_blank')}
                    >
                      <FileDown className="mr-2 w-4 h-4" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-spacing bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by leading organizations
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {awards.map((award, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-gold" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-white">
                        {award.title}
                      </h3>
                      <span className="text-gold font-medium">
                        {award.year}
                      </span>
                    </div>
                    
                    <p className="text-gray-200 font-medium mb-2">
                      {award.organization}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {award.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="section-spacing bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Media Inquiries
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              For interviews, press releases, or additional information
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-navy mb-4">
                    Media Relations
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gold" />
                      <Link href="mailto:support@quantel.in">
                        <span className="text-navy">support@quantel.in</span>
                      </Link>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-gold" />
                      <span className="text-navy">Available 24/7 for urgent inquiries</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-navy mb-4">
                    Quick Response
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We respond to all media inquiries within 4 hours during business days.
                  </p>
                  <Link href="mailto:support@quantel.in">
                    <Button className="bg-gold hover:bg-gold/90 text-navy">
                        <Mail className="mr-2 w-4 h-4" />
                        Contact Media Team
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
