'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Zap, 
  ArrowRight, 
  Play, 
  ChevronRight, 
  Globe, 
  Shield, 
  Users, 
  TrendingUp, 
  Award,
  Star,
  Target,
  Brain,
  Cpu,
  Cloud,
  Code,
  Smartphone,
  Database,
  BarChart,
  Lock,
  Clock,
  Rocket,
  CheckCircle
} from 'lucide-react';

interface HeroProps {
  variant?: 'default' | 'gradient' | 'dark' | 'minimal' | 'animated' | 'showcase';
  title?: string;
  subtitle?: string;
  showStats?: boolean;
  showVideo?: boolean;
  showBadge?: boolean;
  showPartners?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  backgroundPattern?: boolean;
  with3DEffect?: boolean;
}

export default function Hero({
  variant = 'default',
  title = "Transform Ideas Into",
  subtitle = "We help companies design, build, and operate modern web platforms and production AI systems that scale with your business.",
  showStats = true,
  showVideo = false,
  showBadge = true,
  showPartners = true,
  primaryButtonText = "Start a Project",
  secondaryButtonText = "View Case Studies",
  backgroundPattern = true,
  with3DEffect = true
}: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 3D effect values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 500, damping: 100 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 500, damping: 100 });
  const rotateY = useTransform(smoothMouseX, [-300, 300], [10, -10]);
  const rotateX = useTransform(smoothMouseY, [-300, 300], [-10, 10]);

  const variantClasses = {
    default: 'bg-gradient-to-br from-white via-gray-50 to-blue-50',
    gradient: 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white',
    dark: 'bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white',
    minimal: 'bg-white',
    animated: 'bg-gradient-to-br from-blue-50 via-purple-50/30 to-pink-50',
    showcase: 'bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white'
  };

  const stats = [
    { value: '500+', label: 'Projects Delivered', icon: <CheckCircle className="w-5 h-5" /> },
    { value: '98%', label: 'Client Satisfaction', icon: <Star className="w-5 h-5" /> },
    { value: '40%', label: 'Faster Development', icon: <Zap className="w-5 h-5" /> },
    { value: '24/7', label: 'Support Coverage', icon: <Clock className="w-5 h-5" /> },
  ];

  const partners = [
    { name: 'Google', icon: <Globe className="w-6 h-6" /> },
    { name: 'Microsoft', icon: <Cloud className="w-6 h-6" /> },
    { name: 'Amazon', icon: <TrendingUp className="w-6 h-6" /> },
    { name: 'IBM', icon: <Brain className="w-6 h-6" /> },
    { name: 'Oracle', icon: <Database className="w-6 h-6" /> },
  ];

  const features = [
    { icon: <Brain className="w-6 h-6" />, text: 'AI-First Approach', color: 'from-blue-500 to-cyan-500' },
    { icon: <Shield className="w-6 h-6" />, text: 'Enterprise Security', color: 'from-green-500 to-emerald-500' },
    { icon: <Zap className="w-6 h-6" />, text: 'Fast Delivery', color: 'from-orange-500 to-red-500' },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    if (with3DEffect) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (with3DEffect) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [with3DEffect, mouseX, mouseY]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const floatingWords = ['AI-Powered', 'Scalable', 'Secure', 'Modern', 'Innovative'];

  return (
    <section 
      className={`relative overflow-hidden min-h-screen flex items-center ${variantClasses[variant]}`}
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundPattern && (
          <>
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 60, 0],
                rotate: [0, -180, -360]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
            />
            
            {/* Grid pattern for dark variants */}
            {(variant === 'dark' || variant === 'showcase') && (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px]" />
            )}
          </>
        )}

        {/* Floating words */}
        {variant === 'animated' && (
          <>
            {floatingWords.map((word, index) => (
              <motion.div
                key={word}
                initial={{ 
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                  opacity: 0 
                }}
                animate={{ 
                  x: [null, Math.random() * 100 - 50],
                  y: [null, Math.random() * 100 - 50],
                  opacity: [0, 0.3, 0]
                }}
                transition={{
                  duration: 15 + Math.random() * 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 2
                }}
                className="absolute text-4xl font-bold text-blue-500/20"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`
                }}
              >
                {word}
              </motion.div>
            ))}
          </>
        )}
      </div>

      {/* Mouse follower glow */}
      {variant === 'animated' && (
        <motion.div
          className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 128,
            y: mousePosition.y - 128,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="space-y-8"
          >
            {/* Badge */}
            {showBadge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">AI-POWERED INNOVATION</span>
                <Zap className="w-4 h-4 text-purple-600" />
              </motion.div>
            )}

            {/* Title with gradient */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
              <span className="block">{title}</span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative inline-block mt-2"
              >
                <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Intelligent Solutions
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-xl opacity-50"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-xl md:text-2xl ${variant === 'gradient' || variant === 'dark' || variant === 'showcase' ? 'text-white/80' : 'text-gray-600'} max-w-2xl leading-relaxed`}
            >
              {subtitle}
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.color} text-white`}>
                    {feature.icon}
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="group relative inline-flex items-center gap-4 px-8 py-4 text-lg font-bold rounded-2xl overflow-hidden"
                >
                  {/* Gradient Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                    animate={{
                      backgroundPosition: isHovered ? '100%' : '0%',
                    }}
                    transition={{ duration: 0.5 }}
                    style={{
                      backgroundSize: '200% 100%',
                      backgroundPositionX: isHovered ? '100%' : '0%',
                    }}
                  />
                  
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: isHovered ? '100%' : '-100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <span className="relative z-10 flex items-center gap-3">
                    {primaryButtonText}
                    <motion.div
                      animate={{ x: isHovered ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/services"
                  className={`group inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-2xl border-2 transition-all ${
                    variant === 'gradient' || variant === 'dark' || variant === 'showcase'
                      ? 'border-white/30 text-white hover:bg-white/10'
                      : 'border-gray-300 text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  {secondaryButtonText}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Play Video Button */}
              {showVideo && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`p-4 rounded-full ${
                    variant === 'gradient' || variant === 'dark' || variant === 'showcase'
                      ? 'bg-white/10 hover:bg-white/20'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <Play className="w-5 h-5" />
                </motion.button>
              )}
            </motion.div>

            {/* Stats */}
            {showStats && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                    <div className={`text-sm ${variant === 'gradient' || variant === 'dark' || variant === 'showcase' ? 'text-white/70' : 'text-gray-600'}`}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Trusted by */}
            {showPartners && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="pt-8 border-t border-gray-200/50"
              >
                <p className={`text-sm mb-4 ${variant === 'gradient' || variant === 'dark' || variant === 'showcase' ? 'text-white/60' : 'text-gray-500'}`}>
                  Trusted by industry leaders
                </p>
                <div className="flex flex-wrap items-center gap-6 opacity-70">
                  {partners.map((partner, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      {partner.icon}
                      <span className="font-semibold">{partner.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right Content - Hero Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative"
          >
            <div className="relative">
              {/* Main Hero Visual */}
              <motion.div
                style={{
                  rotateX: with3DEffect ? rotateX : 0,
                  rotateY: with3DEffect ? rotateY : 0,
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* Gradient Border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50" />
                
                {/* Main Content */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl">
                  {/* Mock Dashboard Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold">NeuraForge AI</div>
                        <div className="text-gray-400 text-sm">Production Dashboard</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm text-green-400">Live</span>
                    </div>
                  </div>

                  {/* Mock Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { label: 'AI Accuracy', value: '99.2%', trend: '+2.1%', color: 'from-green-500 to-emerald-500' },
                      { label: 'Response Time', value: '45ms', trend: '-15ms', color: 'from-blue-500 to-cyan-500' },
                      { label: 'Uptime', value: '99.99%', trend: '30 days', color: 'from-purple-500 to-pink-500' },
                      { label: 'Cost Saved', value: '$45K', trend: 'This month', color: 'from-orange-500 to-red-500' },
                    ].map((metric, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50"
                      >
                        <div className="text-gray-400 text-sm mb-1">{metric.label}</div>
                        <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                        <div className="text-xs text-green-400">{metric.trend}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mock Graph */}
                  <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-white font-medium">Performance Metrics</div>
                      <div className="text-gray-400 text-sm">Last 30 days</div>
                    </div>
                    <div className="h-32 relative">
                      {/* Simulated graph line */}
                      <svg className="w-full h-full" viewBox="0 0 300 120">
                        <path
                          d="M0,100 C50,80 100,40 150,60 C200,80 250,20 300,40"
                          fill="none"
                          stroke="url(#gradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl"
              >
                <Rocket className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}