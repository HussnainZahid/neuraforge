'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Brain,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Youtube,
  Send,
  ArrowUpRight,
  Globe,
  Shield,
  Award,
  Heart,
  Sparkles,
  Zap,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';
import { useState } from 'react';

interface FooterProps {
  variant?: 'default' | 'dark' | 'gradient' | 'minimal' | 'modern';
  showNewsletter?: boolean;
  showSocial?: boolean;
  showBackToTop?: boolean;
  showTrustBadges?: boolean;
  showCompanyStats?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export default function Footer({
  variant = 'default',
  showNewsletter = true,
  showSocial = true,
  showBackToTop = true,
  showTrustBadges = true,
  showCompanyStats = true,
  maxWidth = 'lg'
}: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHoveredBackToTop, setIsHoveredBackToTop] = useState(false);

  const currentYear = new Date().getFullYear();

  const maxWidthClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-7xl',
    xl: 'max-w-8xl',
    full: 'max-w-full'
  };

  const variantClasses = {
    default: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-b from-gray-900 to-gray-800 text-white',
    minimal: 'bg-gray-50 text-gray-900',
    modern: 'bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900'
  };

  const borderClasses = {
    default: 'border-gray-200',
    dark: 'border-gray-800',
    gradient: 'border-gray-800',
    minimal: 'border-gray-200',
    modern: 'border-gray-200'
  };

  const companyLinks = [
    { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
    { name: 'Our Team', href: '/team', icon: <Users className="w-4 h-4" /> },
    { name: 'Careers', href: '/careers', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'Press', href: '/press', icon: <Send className="w-4 h-4" /> },
    { name: 'Blog', href: '/blog', icon: <Send className="w-4 h-4" /> },
    { name: 'Case Studies', href: '/case-studies', icon: <Award className="w-4 h-4" /> },
  ];

  const servicesLinks = [
    { name: 'AI & Machine Learning', href: '/services/ai', icon: <Brain className="w-4 h-4" /> },
    { name: 'Web Development', href: '/services/web', icon: <Globe className="w-4 h-4" /> },
    { name: 'Mobile Apps', href: '/services/mobile', icon: <Zap className="w-4 h-4" /> },
    { name: 'Cloud Solutions', href: '/services/cloud', icon: <Globe className="w-4 h-4" /> },
    { name: 'Data Analytics', href: '/services/analytics', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'Digital Transformation', href: '/services/transformation', icon: <Sparkles className="w-4 h-4" /> },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy', icon: <Shield className="w-4 h-4" /> },
    { name: 'Terms of Service', href: '/terms', icon: <Shield className="w-4 h-4" /> },
    { name: 'Cookie Policy', href: '/cookies', icon: <Shield className="w-4 h-4" /> },
    { name: 'GDPR Compliance', href: '/gdpr', icon: <Shield className="w-4 h-4" /> },
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/neuraforge', icon: <Twitter className="w-5 h-5" /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/neuraforge', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'GitHub', href: 'https://github.com/neuraforge', icon: <Github className="w-5 h-5" /> },
    { name: 'Instagram', href: 'https://instagram.com/neuraforge', icon: <Instagram className="w-5 h-5" /> },
    { name: 'YouTube', href: 'https://youtube.com/neuraforge', icon: <Youtube className="w-5 h-5" /> },
  ];

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, text: 'hello@neuraforge.com', href: 'mailto:hello@neuraforge.com' },
    { icon: <Phone className="w-4 h-4" />, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: <MapPin className="w-4 h-4" />, text: 'San Francisco, CA', href: '#' },
  ];

  const companyStats = [
    { value: '500+', label: 'Projects Delivered', icon: <Award className="w-5 h-5" /> },
    { value: '50+', label: 'Team Members', icon: <Users className="w-5 h-5" /> },
    { value: '24/7', label: 'Support', icon: <Clock className="w-5 h-5" /> },
    { value: '98%', label: 'Client Satisfaction', icon: <Heart className="w-5 h-5" /> },
  ];

  const trustBadges = [
    { name: 'ISO 27001 Certified', icon: <Shield className="w-5 h-5" /> },
    { name: 'GDPR Compliant', icon: <Shield className="w-5 h-5" /> },
    { name: 'SOC 2 Type II', icon: <Award className="w-5 h-5" /> },
    { name: 'Google Partner', icon: <Award className="w-5 h-5" /> },
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setEmail('');
    setIsSubmitting(false);
    // In a real app, you would show a success message here
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative ${variantClasses[variant]}`}>
      {/* Decorative elements */}
      {variant === 'modern' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
      )}

      <div className={`relative ${maxWidthClasses[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8`}>
        {/* Newsletter Section */}
        {showNewsletter && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`py-12 border-b ${borderClasses[variant]}`}
          >
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 mb-6">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">STAY UPDATED</span>
                <Zap className="w-4 h-4 text-purple-600" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Join Our Newsletter
              </h3>

              <p className={`text-lg mb-8 ${variant === 'dark' || variant === 'gradient' ? 'text-gray-300' : 'text-gray-600'}`}>
                Get the latest AI insights, case studies, and industry news delivered to your inbox.
              </p>

              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className={`flex-1 px-6 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${variant === 'dark' || variant === 'gradient'
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    required
                  />
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${variant === 'dark' || variant === 'gradient'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </div>
                <p className={`text-sm mt-4 ${variant === 'dark' || variant === 'gradient' ? 'text-gray-400' : 'text-gray-500'}`}>
                  No spam. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </motion.div>
        )}

        {/* Main Footer Content */}
        <div className={`py-16 ${showNewsletter ? '' : 'border-b'} ${borderClasses[variant]}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${variant === 'dark' || variant === 'gradient'
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600'
                  : 'bg-gradient-to-br from-blue-600 to-purple-600'
                  }`}>
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">NeuraForge</div>
                  <div className={`text-sm ${variant === 'dark' || variant === 'gradient' ? 'text-gray-300' : 'text-gray-600'}`}>
                    AI-Powered Innovation
                  </div>
                </div>
              </motion.div>

              <p className={`text-sm leading-relaxed ${variant === 'dark' || variant === 'gradient' ? 'text-gray-300' : 'text-gray-600'}`}>
                We design and ship production-ready AI applications and ML systems that drive measurable business impact for modern enterprises.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-3 text-sm hover:text-blue-500 transition-colors ${variant === 'dark' || variant === 'gradient' ? 'text-gray-300' : 'text-gray-600'
                      }`}
                  >
                    {contact.icon}
                    <span>{contact.text}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg font-semibold mb-6"
              >
                Company
              </motion.h4>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-3 text-sm hover:text-blue-500 transition-all group ${variant === 'dark' || variant === 'gradient' ? 'text-gray-300' : 'text-gray-600'
                        }`}
                    >
                      {link.icon}
                      <span>{link.name}</span>
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg font-semibold mb-6"
              >
                Services
              </motion.h4>
              <ul className="space-y-3">
                {servicesLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-3 text-sm hover:text-blue-500 transition-all group ${variant === 'dark' || variant === 'gradient' ? 'text-gray-300' : 'text-gray-600'
                        }`}
                    >
                      {link.icon}
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg font-semibold mb-6"
              >
                Legal
              </motion.h4>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-3 text-sm hover:text-blue-500 transition-all group ${variant === 'dark' || variant === 'gradient' ? 'text-gray-300' : 'text-gray-600'
                        }`}
                    >
                      {link.icon}
                      <span>{link.name}</span>
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Social Links */}
              {showSocial && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-8"
                >
                  <h5 className="text-sm font-medium mb-4">Follow Us</h5>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        className={`p-2 rounded-lg transition-all ${variant === 'dark' || variant === 'gradient'
                          ? 'bg-gray-800 hover:bg-gray-700'
                          : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Company Stats */}
        {showCompanyStats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`py-8 border-t ${borderClasses[variant]}`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold mb-2">{stat.value}</div>
                  <div className={`text-sm ${variant === 'dark' || variant === 'gradient' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Trust Badges */}
        {showTrustBadges && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`py-8 border-t ${borderClasses[variant]}`}
          >
            <div className="flex flex-wrap justify-center items-center gap-6">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${variant === 'dark' || variant === 'gradient'
                    ? 'bg-gray-800/50 border border-gray-700'
                    : 'bg-gray-50 border border-gray-200'
                    }`}
                >
                  {badge.icon}
                  <span className="text-sm font-medium">{badge.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Bottom Bar */}
        <div className={`py-8 border-t ${borderClasses[variant]}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className={`text-sm ${variant === 'dark' || variant === 'gradient' ? 'text-gray-400' : 'text-gray-600'}`}>
              © {currentYear} NeuraForge. All rights reserved.
            </div>

            <div className="flex items-center gap-6">


              {/* Back to Top Button */}
              {showBackToTop && (
                <motion.button
                  onMouseEnter={() => setIsHoveredBackToTop(true)}
                  onMouseLeave={() => setIsHoveredBackToTop(false)}
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full transition-all ${variant === 'dark' || variant === 'gradient'
                    ? 'bg-gray-800 hover:bg-gray-700'
                    : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                >
                  <motion.div
                    animate={{ rotate: isHoveredBackToTop ? -360 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}