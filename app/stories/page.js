'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Play, 
  MapPin, 
  Calendar, 
  Users, 
  ArrowRight, 
  Filter,
  Heart,
  GraduationCap,
  Laptop
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const successStories = [
  {
    id: 1,
    title: 'From Village to Tech Hub',
    subtitle: 'Priya\'s Digital Transformation',
    description: 'A young girl from rural Maharashtra becomes a software developer through our coding bootcamp program.',
    fullStory: 'Priya Sharma, 19, from a small village in Maharashtra, had never seen a computer until she joined our Digital Literacy Program. Today, she works as a junior developer at a tech startup in Pune, earning more than her entire family\'s previous income. Her journey represents the transformative power of accessible technology education.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    location: 'Maharashtra, India',
    date: '2024',
    category: 'Technology',
    impact: '1 life transformed, 5 family members lifted out of poverty',
    icon: Laptop,
    stats: {
      duration: '6 months',
      outcome: 'Full-time employment',
      salary: '300% income increase',
    },
  },
  {
    id: 2,
    title: 'Breaking Barriers',
    subtitle: 'Arjun\'s Educational Journey',
    description: 'A first-generation college student overcomes financial barriers to pursue higher education.',
    fullStory: 'Arjun Kumar\'s parents work as daily wage laborers in Delhi. Through our scholarship program and mentorship support, he became the first in his family to attend university. Now studying engineering, he tutors other underprivileged students, creating a ripple effect of educational empowerment.',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg',
    location: 'Delhi, India',
    date: '2023',
    category: 'Education',
    impact: '1 scholarship recipient, 20+ students mentored',
    icon: GraduationCap,
    stats: {
      duration: '4 years',
      outcome: 'University admission',
      achievement: '85% academic performance',
    },
  },
  {
    id: 3,
    title: 'Community Transformation',
    subtitle: 'Sundarpur Village Success',
    description: 'An entire village gains digital literacy and internet access, transforming local economy.',
    fullStory: 'Sundarpur village in Rajasthan had no internet connectivity until 2023. Our Digital Village Initiative brought high-speed internet, computer training, and e-commerce education. Today, local artisans sell their crafts globally, farmers access real-time market prices, and children attend virtual classes.',
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg',
    location: 'Rajasthan, India',
    date: '2023',
    category: 'Community',
    impact: '500+ villagers trained, 40% income increase',
    icon: Users,
    stats: {
      duration: '1 year',
      outcome: 'Digital transformation',
      reach: '500+ beneficiaries',
    },
  },
  {
    id: 4,
    title: 'Teacher Empowerment',
    subtitle: 'Meera\'s Teaching Revolution',
    description: 'A rural teacher transforms her classroom with digital tools and innovative teaching methods.',
    fullStory: 'Meera Devi taught in a one-room school in Bihar with limited resources. Through our Teacher Training Program, she learned to use tablets, interactive content, and project-based learning. Her students\' test scores improved by 60%, and her methods are now replicated in 50+ schools.',
    image: 'https://images.pexels.com/photos/8471831/pexels-photo-8471831.jpeg',
    location: 'Bihar, India',
    date: '2024',
    category: 'Education',
    impact: '1 teacher trained, 200+ students benefited',
    icon: Heart,
    stats: {
      duration: '3 months',
      outcome: '60% score improvement',
      scale: '50+ schools adopting methods',
    },
  },
];

const categories = ['All', 'Technology', 'Education', 'Community'];

export default function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStory, setSelectedStory] = useState(null);

  const filteredStories = selectedCategory === 'All' 
    ? successStories 
    : successStories.filter(story => story.category === selectedCategory);

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
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(13, 27, 42, 0.8), rgba(26, 26, 26, 0.8)), url('https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg')`,
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
              Success Stories
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Stories of
              <br />
              <span className="gradient-text">Transformation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real people, real change. Discover how education is transforming lives 
              and communities across India.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="py-12 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Filter className="w-5 h-5 text-gray-400 mt-2" />
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gold text-navy shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-10 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedStory(story)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className={`w-12 h-12 bg-gradient-to-br from-gold to-yellow-500 rounded-lg flex items-center justify-center`}>
                        <story.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-4 text-white text-sm">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{story.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{story.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium">
                        {story.category}
                      </span>
                      <Play className="w-5 h-5 text-gray-400" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-navy mb-2">{story.title}</h3>
                    <p className="text-lg font-medium text-gray-700 mb-3">{story.subtitle}</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">{story.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{story.impact}</span>
                      <ArrowRight className="w-5 h-5 text-gold" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Story Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStory(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedStory.image}
                  alt={selectedStory.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => setSelectedStory(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  ×
                </button>
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedStory.title}</h2>
                  <p className="text-xl text-gray-200">{selectedStory.subtitle}</p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {Object.entries(selectedStory.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-gold mb-1">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {selectedStory.fullStory}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gold hover:bg-gold/90 text-navy font-semibold">
                    Share This Story
                  </Button>
                  <Link href="/donate">
                    <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                      Support Similar Stories
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="section-spacing bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Be Part of the Next Success Story
            </h2>
            <p className="text-xl text-navy mb-8 leading-relaxed">
              Every donation, every volunteer hour, every partnership creates new stories 
              of transformation. Help us write the next chapter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <Button size="lg" className="h-10 bg-gold hover:bg-gold/90 text-navy font-semibold px-8">
                  Create Impact Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/join">
                <Button size="lg" variant="outline" className="h-10 border-navy text-navy hover:bg-navy hover:text-white">
                  Join Our Mission
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}