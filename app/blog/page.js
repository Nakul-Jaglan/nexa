'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Search,
  Tag,
  Clock,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Rural Education in India',
    excerpt: 'Exploring how technology and innovative teaching methods are transforming education in rural communities across India.',
    content: 'In the heart of rural India, a quiet revolution is taking place. Traditional classrooms are being transformed into dynamic learning environments where technology meets time-tested teaching wisdom...',
    author: 'Dr. Priya Sharma',
    date: '2024-01-15',
    category: 'Education Technology',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg',
    featured: true,
    tags: ['Rural Education', 'Technology', 'Innovation'],
  },
  {
    id: 2,
    title: 'Building Sustainable Learning Communities',
    excerpt: 'How community involvement and local ownership create lasting educational impact that extends beyond individual programs.',
    content: 'Sustainable education isn\'t just about funding or infrastructure—it\'s about creating communities that value and support learning at every level...',
    author: 'Rajesh Kumar',
    date: '2024-01-10',
    category: 'Community Development',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    featured: false,
    tags: ['Community', 'Sustainability', 'Impact'],
  },
  {
    id: 3,
    title: 'Digital Literacy: A Gateway to Opportunity',
    excerpt: 'Why digital skills are becoming essential for economic mobility and how we\'re bridging the digital divide.',
    content: 'In today\'s interconnected world, digital literacy isn\'t just a nice-to-have skill—it\'s a fundamental requirement for economic participation...',
    author: 'Meera Patel',
    date: '2024-01-05',
    category: 'Digital Skills',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg',
    featured: false,
    tags: ['Digital Literacy', 'Skills', 'Employment'],
  },
  {
    id: 4,
    title: 'Teacher Training: The Multiplier Effect',
    excerpt: 'How investing in teacher development creates exponential impact across entire educational ecosystems.',
    content: 'When we train one teacher, we don\'t just impact one classroom—we create a ripple effect that can transform entire schools and communities...',
    author: 'Dr. Amit Singh',
    date: '2023-12-28',
    category: 'Teacher Development',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/8471831/pexels-photo-8471831.jpeg',
    featured: false,
    tags: ['Teachers', 'Training', 'Impact'],
  },
  {
    id: 5,
    title: 'Measuring Educational Impact: Beyond Test Scores',
    excerpt: 'A comprehensive look at how we evaluate the true success of educational interventions and community programs.',
    content: 'Traditional metrics like test scores only tell part of the story. True educational impact encompasses confidence, creativity, critical thinking, and community engagement...',
    author: 'Dr. Sunita Reddy',
    date: '2023-12-20',
    category: 'Impact Measurement',
    readTime: '9 min read',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg',
    featured: false,
    tags: ['Measurement', 'Impact', 'Evaluation'],
  },
  {
    id: 6,
    title: 'The Role of Corporate Partnerships in Education',
    excerpt: 'How strategic corporate partnerships are accelerating educational innovation and expanding program reach.',
    content: 'Corporate social responsibility is evolving from charity to strategic partnership, creating win-win scenarios for businesses and educational outcomes...',
    author: 'Vikram Gupta',
    date: '2023-12-15',
    category: 'Partnerships',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    featured: false,
    tags: ['Corporate', 'Partnerships', 'CSR'],
  },
];

const categories = ['All', 'Education Technology', 'Community Development', 'Digital Skills', 'Teacher Development', 'Impact Measurement', 'Partnerships'];

// Format date consistently to avoid hydration issues
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Filter posts based on category and search term
    let filtered = blogPosts;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredPosts(filtered);
  }, [selectedCategory, searchTerm]);

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

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  if (!mounted) {
    return <div className="min-h-screen bg-white"></div>;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(13, 27, 42, 0.8), rgba(26, 26, 26, 0.8)), url('https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg')`,
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
              Insights & Stories
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Educational
              <br />
              <span className="gradient-text">Insights & Impact</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the latest trends, insights, and stories from the world of 
              educational transformation and community development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-6 items-center justify-between"
          >
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full bg-white border border-gray-300 rounded-full focus:ring-gold focus:border-gold transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gold text-navy shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && !searchTerm && (
        <section className="section-spacing bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center space-x-2 mb-6">
                <TrendingUp className="w-5 h-5 text-gold" />
                <span className="text-gold font-semibold">Featured Article</span>
              </div>
              
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gold text-navy rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(featuredPost.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <Link href={`/blog/${featuredPost.id}`}>
                      <Button className="bg-gold hover:bg-gold/90 text-navy font-semibold w-fit">
                        Read Full Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-navy rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-3 leading-tight hover:text-gold transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="text-gold hover:text-gold/80">
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-600">
                No articles found matching your criteria.
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchTerm('');
                }}
                className="mt-4 bg-gold hover:bg-gold/90 text-navy"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      {/* <section className="section-spacing bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get the latest articles, impact stories, and educational insights 
              delivered directly to your inbox.
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
      </section> */}
    </div>
  );
}