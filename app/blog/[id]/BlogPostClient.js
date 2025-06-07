'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Calendar, 
  User, 
  ArrowLeft, 
  Clock,
  Tag,
  Share2,
  Heart,
  BookOpen,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { notFound } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

// Format date consistently to avoid hydration issues
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default function BlogPostClient({ post, relatedPosts }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !post) return;

    // Scroll animations
    gsap.fromTo('.article-content h2, .article-content h3', 
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.article-content',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.article-content p', 
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.article-content',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [mounted, post]);

  if (!mounted) {
    return <div className="min-h-screen bg-white"></div>;
  }

  if (!post) {
    notFound();
    return null;
  }

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(13, 27, 42, 0.7), rgba(26, 26, 26, 0.7)), url('${post.image}')`,
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
            <div className="mb-6">
              <Link href="/blog">
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-gold hover:bg-white/10 mb-4"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Blog
                </Button>
              </Link>
            </div>
            
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-md font-medium mb-6">
              {post.category}
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="article-content prose prose-lg max-w-none"
            style={{
              '--tw-prose-headings': '#0d1b2a',
              '--tw-prose-links': '#d4af37',
              '--tw-prose-bold': '#0d1b2a',
              '--tw-prose-code': '#0d1b2a',
            }}
          >
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-3xl font-bold text-navy mt-12 mb-6">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              } else if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-2xl font-bold text-navy mt-8 mb-4">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              } else if (paragraph.startsWith('#### ')) {
                return (
                  <h4 key={index} className="text-xl font-semibold text-navy mt-6 mb-3">
                    {paragraph.replace('#### ', '')}
                  </h4>
                );
              } else if (paragraph.match(/^\d+\./)) {
                return (
                  <div key={index} className="mb-4">
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {paragraph}
                    </p>
                  </div>
                );
              } else if (paragraph.startsWith('- ')) {
                return (
                  <ul key={index} className="mb-6 ml-6">
                    <li className="text-gray-700 leading-relaxed mb-2">
                      {paragraph.replace('- ', '')}
                    </li>
                  </ul>
                );
              } else {
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              }
            })}
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex items-center space-x-4">
              <Tag className="w-5 h-5 text-gold" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 pt-8 border-t border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" /> */}
                {/* <Share2 className="w-5 h-5 text-gray-400 hover:text-gold cursor-pointer transition-colors" /> */}
                <button
                    type="button"
                    className="focus:outline-none"
                    onClick={() => {
                            if (typeof window !== 'undefined') {
                                navigator.clipboard.writeText(window.location.href);
                                alert('Link copied to clipboard!');
                            }
                        }
                    }
                    aria-label="Share this article">
                    <Share2 className="w-5 h-5 text-gray-400 hover:text-gold cursor-pointer transition-colors" />
                </button>
              </div>
              <Link
                href={
                  relatedPosts && relatedPosts.length > 0
                    ? `/blog/${relatedPosts[0].id}`
                    : '/blog'
                }
                passHref
              >
                <Button className="bg-gold hover:bg-gold/90 text-navy">
                  <BookOpen className="mr-2 w-4 h-4" />
                  Read More Articles
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Related Articles
              </h2>
              <p className="text-lg text-gray-600">
                Continue exploring insights in {post.category}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-navy rounded-full text-sm font-medium">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy mb-3 leading-tight hover:text-gold transition-colors">
                      <Link href={`/blog/${relatedPost.id}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {relatedPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{relatedPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                    
                    <Link href={`/blog/${relatedPost.id}`}>
                      <Button variant="ghost" size="sm" className="text-gold hover:text-gold/80">
                        Read More
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
