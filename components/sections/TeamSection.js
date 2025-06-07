'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  ExternalLink,
  Award,
  Users,
  Heart
} from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    role: 'Founder & CEO',
    department: 'Leadership',
    bio: 'Former education policy advisor with 15+ years of experience in educational transformation. PhD in Educational Psychology from IIT Delhi.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    achievements: ['UNESCO Education Award 2023', 'Forbes 40 Under 40', 'TEDx Speaker'],
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'priya@nexafoundation.org',
    },
    featured: true,
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Chief Technology Officer',
    department: 'Technology',
    bio: 'Tech entrepreneur and former Google engineer specializing in educational technology and scalable learning platforms.',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg',
    achievements: ['MIT Technology Review Innovator', 'EdTech Pioneer Award'],
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'rajesh@nexafoundation.org',
    },
    featured: true,
  },
  {
    id: 3,
    name: 'Meera Patel',
    role: 'Director of Programs',
    department: 'Operations',
    bio: 'Community development specialist with expertise in rural education and sustainable program implementation.',
    image: 'https://images.pexels.com/photos/8471831/pexels-photo-8471831.jpeg',
    achievements: ['Rural Development Excellence Award', 'Community Impact Leader'],
    social: {
      linkedin: '#',
      email: 'meera@nexafoundation.org',
    },
    featured: true,
  },
  {
    id: 4,
    name: 'Dr. Amit Singh',
    role: 'Head of Research',
    department: 'Research',
    bio: 'Educational researcher focused on learning outcomes measurement and evidence-based program design.',
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg',
    achievements: ['Research Excellence Award', 'Published 50+ Papers'],
    social: {
      linkedin: '#',
      email: 'amit@nexafoundation.org',
    },
    featured: false,
  },
  {
    id: 5,
    name: 'Sunita Reddy',
    role: 'Partnerships Director',
    department: 'Partnerships',
    bio: 'Corporate partnerships expert with a track record of building strategic alliances for social impact.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    achievements: ['Partnership Excellence Award', 'CSR Leader of the Year'],
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'sunita@nexafoundation.org',
    },
    featured: false,
  },
  {
    id: 6,
    name: 'Vikram Gupta',
    role: 'Finance Director',
    department: 'Finance',
    bio: 'Chartered accountant with expertise in non-profit financial management and impact measurement.',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg',
    achievements: ['Financial Transparency Award', 'CA Excellence Medal'],
    social: {
      linkedin: '#',
      email: 'vikram@nexafoundation.org',
    },
    featured: false,
  },
];

const departments = [
  {
    name: 'Leadership',
    icon: Award,
    color: 'from-gold to-yellow-500',
    description: 'Strategic vision and organizational direction',
  },
  {
    name: 'Technology',
    icon: ExternalLink,
    color: 'from-blue-500 to-blue-600',
    description: 'Digital innovation and platform development',
  },
  {
    name: 'Operations',
    icon: Users,
    color: 'from-green-500 to-green-600',
    description: 'Program implementation and community engagement',
  },
  {
    name: 'Research',
    icon: Heart,
    color: 'from-purple-500 to-purple-600',
    description: 'Impact measurement and evidence-based insights',
  },
];

export default function TeamSection({ showAll = false }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const displayMembers = showAll ? teamMembers : teamMembers.filter(member => member.featured);

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4"
          >
            Our Team
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6"
          >
            Meet the Visionaries Behind{' '}
            <span className="gradient-text">Our Mission</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Our diverse team of educators, technologists, and changemakers brings 
            together decades of experience in creating meaningful educational impact.
          </motion.p>
        </motion.div>

        {/* Departments Overview */}
        {showAll && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${dept.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <dept.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{dept.name}</h3>
                <p className="text-gray-600 text-sm">{dept.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                y: -10,
                boxShadow: '0 20px 40px rgba(13, 27, 42, 0.15)',
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-gold/20 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Links Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {member.social.linkedin && (
                    <motion.a
                      href={member.social.linkedin}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all duration-200"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                  )}
                  {member.social.twitter && (
                    <motion.a
                      href={member.social.twitter}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all duration-200"
                    >
                      <Twitter className="w-5 h-5" />
                    </motion.a>
                  )}
                  <motion.a
                    href={`mailto:${member.social.email}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all duration-200"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                </div>

                {/* Department Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gold text-navy rounded-full text-sm font-medium">
                    {member.department}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-1">{member.name}</h3>
                <p className="text-gold font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Achievements */}
                {member.achievements && member.achievements.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-navy">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {member.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-xs text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-navy mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our vision 
              of transforming education and creating lasting impact.
            </p>
            <motion.a
              href="/join"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full transition-all duration-200"
            >
              Explore Opportunities
              <ExternalLink className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
}