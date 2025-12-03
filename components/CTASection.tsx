'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Sparkles, Zap, Shield, ChevronRight, Target, Clock, Users, Star } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
  variant?: 'default' | 'gradient' | 'dark' | 'minimal' | 'glass' | 'split';
  showTrustBadges?: boolean;
  showStats?: boolean;
  withAnimation?: boolean;
  backgroundPattern?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  align?: 'center' | 'left' | 'right';
}

export default function CTASection({
  title = "Ready to Transform Your Business?",
  subtitle = "Join thousands of companies who have accelerated their growth with our cutting-edge solutions.",
  primaryButtonText = "Get Started Free",
  secondaryButtonText = "Book a Demo",
  primaryButtonLink = "/contact",
  secondaryButtonLink = "/demo",
  variant = 'default',
  showTrustBadges = true,
  showStats = false,
  withAnimation = true,
  backgroundPattern = true,
  maxWidth = 'lg',
  align = 'center'
}: CTASectionProps) {
  const [hoverPrimary, setHoverPrimary] = useState(false);
  const [hoverSecondary, setHoverSecondary] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const maxWidthClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-5xl',
    xl: 'max-w-6xl',
    full: 'max-w-full'
  };

  const alignClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right'
  };

  const variantClasses = {
    default: 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
    gradient: 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white',
    dark: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white',
    minimal: 'bg-white',
    glass: 'bg-white/10 backdrop-blur-2xl border border-white/20',
    split: 'bg-gradient-to-r from-blue-50 to-white'
  };

  const trustBadges = [
    { icon: <Shield className="w-4 h-4" />, text: 'Enterprise Security' },
    { icon: <Users className="w-4 h-4" />, text: '24/7 Support' },
    { icon: <Star className="w-4 h-4" />, text: '5-Star Rating' },
    { icon: <Clock className="w-4 h-4" />, text: 'Free 30-Day Trial' }
  ];

  const stats = [
    { value: '98%', label: 'Client Satisfaction', icon: <Star className="w-5 h-5" /> },
    { value: '24/7', label: 'Support', icon: <Clock className="w-5 h-5" /> },
    { value: '99.9%', label: 'Uptime', icon: <Zap className="w-5 h-5" /> },
    { value: '50+', label: 'Projects', icon: <Target className="w-5 h-5" /> }
  ];

  return (
    <section className={`relative py-24 overflow-hidden ${variantClasses[variant]}`}>
      {/* Background Pattern */}
      {backgroundPattern && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl" />
          </div>
          {variant === 'glass' && (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />
          )}
        </div>
      )}

      {/* Floating Elements */}
      {withAnimation && (
        <>
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute top-1/4 left-10 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
          >
            <Sparkles className="w-6 h-6 text-blue-400" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute bottom-1/4 right-10 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
          >
            <Zap className="w-6 h-6 text-purple-400" />
          </motion.div>
        </>
      )}

      <div className={`relative ${maxWidthClasses[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8`}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
          className={`${alignClasses[align]} mb-12`}
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Limited Time Offer</span>
            <Zap className="w-4 h-4 text-purple-600" />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className={`text-xl ${variant === 'gradient' || variant === 'dark' ? 'text-white/80' : 'text-gray-600'} max-w-3xl ${align === 'center' ? 'mx-auto' : ''} mb-10 leading-relaxed`}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${variant === 'dark' ? 'bg-white/10' : 'bg-blue-50'}`}>
                    {stat.icon}
                  </div>
                  <div className="text-left">
                    <div className="flex items-baseline gap-2">
                      <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`text-lg font-medium ${variant === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Buttons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${align === 'center' ? '' : align === 'right' ? 'justify-end' : 'justify-start'}`}
        >
          {/* Primary Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={primaryButtonLink}
              onMouseEnter={() => setHoverPrimary(true)}
              onMouseLeave={() => setHoverPrimary(false)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-2xl overflow-hidden"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
              
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                animate={hoverPrimary ? { x: '100%' } : { x: '-100%' }}
                transition={{ duration: 0.6 }}
              />
              
              <span className="relative z-10 flex items-center gap-3">
                {primaryButtonText}
                <motion.div
                  animate={{ x: hoverPrimary ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
            </Link>
          </motion.div>

          {/* Secondary Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={secondaryButtonLink}
              onMouseEnter={() => setHoverSecondary(true)}
              onMouseLeave={() => setHoverSecondary(false)}
              className={`group inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-2xl border-2 transition-all duration-300 ${
                variant === 'gradient' || variant === 'dark'
                  ? 'border-white/30 text-white hover:bg-white/10'
                  : 'border-gray-300 text-gray-800 hover:bg-gray-50'
              }`}
            >
              <Calendar className="w-5 h-5" />
              {secondaryButtonText}
              <motion.div
                animate={{ x: hoverSecondary ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust Badges */}
        {showTrustBadges && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mt-16 ${alignClasses[align]}`}
          >
            <p className={`text-sm mb-6 ${variant === 'gradient' || variant === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                    variant === 'gradient' || variant === 'dark'
                      ? 'bg-white/5 border border-white/10'
                      : 'bg-white border border-gray-200 shadow-sm'
                  }`}
                >
                  {badge.icon}
                  <span className="text-sm font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`mt-12 text-sm ${variant === 'gradient' || variant === 'dark' ? 'text-white/50' : 'text-gray-500'} ${alignClasses[align]}`}
        >
          <p>✓ No credit card required • ✓ 30-day free trial • ✓ Cancel anytime</p>
          <p className="mt-2">Get access to all features with your free trial</p>
        </motion.div>
      </div>
    </section>
  );
}