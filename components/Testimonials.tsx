'use client';
import { motion, Variants } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause,
  Sparkles,
  Award,
  TrendingUp,
  Users,
  Target,
  CheckCircle,
  Calendar,
  Zap,
  Heart
} from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatarColor?: string;
  metrics?: {
    label: string;
    value: string;
    icon?: React.ReactNode;
  }[];
  industry?: string;
  duration?: string;
  date?: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'carousel' | 'cards' | 'grid' | 'minimal' | 'detailed';
  backgroundColor?: 'light' | 'white' | 'gradient' | 'dark' | 'neutral';
  autoplay?: boolean;
  autoplayInterval?: number;
  showControls?: boolean;
  showRating?: boolean;
  showMetrics?: boolean;
  showNavigation?: boolean;
  maxColumns?: 1 | 2 | 3 | 4;
  testimonials?: Testimonial[];
  withAnimation?: boolean;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Aisha Khan',
    role: 'Chief Technology Officer',
    company: 'Acme Corp',
    text: 'NeuraForge delivered our AI product in just 8 weeks, exceeding all expectations. Their team combined technical expertise with exceptional project management.',
    rating: 5,
    avatarColor: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    metrics: [
      { label: 'Time to Market', value: '8 weeks', icon: <Zap className="w-4 h-4" /> },
      { label: 'Cost Reduction', value: '40%', icon: <TrendingUp className="w-4 h-4" /> }
    ],
    industry: 'FinTech',
    duration: '6-month engagement',
    date: 'March 2024'
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'Founder & CEO',
    company: 'InnoTech Solutions',
    text: 'Excellent communication and engineering quality. They transformed our vision into a scalable product that now serves thousands of users daily.',
    rating: 5,
    avatarColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
    metrics: [
      { label: 'User Growth', value: '300%', icon: <Users className="w-4 h-4" /> },
      { label: 'Satisfaction', value: '98%', icon: <Heart className="w-4 h-4" /> }
    ],
    industry: 'Enterprise SaaS',
    duration: '1-year partnership',
    date: 'January 2024'
  },
  {
    id: 3,
    name: 'Lina Martinez',
    role: 'Head of Growth',
    company: 'GrowthLabs',
    text: 'Our traffic and conversions improved dramatically. The AI-powered recommendation system they built increased our revenue by 250% in the first quarter.',
    rating: 5,
    avatarColor: 'bg-gradient-to-br from-green-500 to-teal-500',
    metrics: [
      { label: 'Revenue Increase', value: '250%', icon: <TrendingUp className="w-4 h-4" /> },
      { label: 'Conversion Rate', value: '+35%', icon: <Target className="w-4 h-4" /> }
    ],
    industry: 'E-commerce',
    duration: '9-month project',
    date: 'February 2024'
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'Product Director',
    company: 'TechVision',
    text: 'Working with NeuraForge was a game-changer. Their AI implementation reduced our operational costs by 60% while improving accuracy.',
    rating: 4.5,
    avatarColor: 'bg-gradient-to-br from-orange-500 to-red-500',
    metrics: [
      { label: 'Cost Reduction', value: '60%', icon: <TrendingUp className="w-4 h-4" /> },
      { label: 'Accuracy', value: '99.5%', icon: <Target className="w-4 h-4" /> }
    ],
    industry: 'Healthcare Tech',
    duration: '4-month sprint',
    date: 'April 2024'
  },
  {
    id: 5,
    name: 'Sarah Johnson',
    role: 'VP of Engineering',
    company: 'FutureScale',
    text: 'Their team delivered beyond expectations. The scalability and performance of the solution have been exceptional, handling millions of requests daily.',
    rating: 5,
    avatarColor: 'bg-gradient-to-br from-indigo-500 to-blue-500',
    metrics: [
      { label: 'Uptime', value: '99.99%', icon: <Zap className="w-4 h-4" /> },
      { label: 'Requests/day', value: '10M+', icon: <TrendingUp className="w-4 h-4" /> }
    ],
    industry: 'Cloud Infrastructure',
    duration: '8-month engagement',
    date: 'December 2023'
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Digital Transformation Lead',
    company: 'Global Retail Group',
    text: 'A strategic partner who understands both technology and business. Their solutions have modernized our entire digital ecosystem.',
    rating: 4.8,
    avatarColor: 'bg-gradient-to-br from-rose-500 to-pink-500',
    metrics: [
      { label: 'Efficiency Gain', value: '75%', icon: <Zap className="w-4 h-4" /> },
      { label: 'Customer Satisfaction', value: '+40%', icon: <Heart className="w-4 h-4" /> }
    ],
    industry: 'Retail',
    duration: '1-year partnership',
    date: 'November 2023'
  }
];

export default function Testimonials({
  title = "Trusted by Industry Leaders",
  subtitle = "Real results and measurable impact from our valued partners across industries.",
  variant = 'default',
  backgroundColor = 'light',
  autoplay = true,
  autoplayInterval = 5000,
  showControls = true,
  showRating = true,
  showMetrics = true,
  showNavigation = true,
  maxColumns = 3,
  testimonials = defaultTestimonials,
  withAnimation = true
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoplay);
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const visibleTestimonials = variant === 'carousel' ? testimonials.slice(currentIndex, currentIndex + maxColumns) : testimonials;

  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  const backgroundClasses = {
    light: 'bg-gradient-to-b from-gray-50 to-white',
    white: 'bg-white',
    gradient: 'bg-gradient-to-br from-blue-50 via-white/80 to-purple-50',
    dark: 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white',
    neutral: 'bg-gradient-to-b from-gray-100 via-white to-gray-200'
  };

  useEffect(() => {
    if (!autoplay || variant !== 'carousel' || !isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % (testimonials.length - maxColumns + 1));
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [autoplay, autoplayInterval, isAutoPlaying, testimonials.length, maxColumns, variant]);

  const handlePrev = () => {
    setCurrentIndex(prev => prev === 0 ? testimonials.length - maxColumns : prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex(prev => prev >= testimonials.length - maxColumns ? 0 : prev + 1);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoplay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: 'spring',
        bounce: 0.3
      }
    }
  };

  const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => (
    <motion.div
      key={testimonial.id}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative group h-full"
      onMouseEnter={() => setHoveredTestimonial(testimonial.id)}
      onMouseLeave={() => setHoveredTestimonial(null)}
      whileHover={{ 
        scale: 1.02, 
        y: -5,
        transition: { 
          type: "spring" as const, 
          stiffness: 400, 
          damping: 25 
        } 
      }}
    >
      <div className={`
        h-full rounded-2xl p-8 transition-all duration-500 relative overflow-hidden
        ${backgroundColor === 'dark' 
          ? 'bg-gray-800/50 border border-gray-700 hover:border-gray-600' 
          : 'bg-white border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl'
        }
      `}>
        {/* Quote icon */}
        <Quote className="absolute top-6 right-6 w-12 h-12 opacity-5" />

        {/* Rating */}
        {showRating && (
          <div className="flex gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: i * 0.1, type: 'spring' }}
              >
                <Star className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Testimonial text */}
        <blockquote className="text-lg italic mb-8 leading-relaxed relative">
          "{testimonial.text}"
          <div className="absolute -bottom-4 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
        </blockquote>

        {/* Author info */}
        <div className="flex items-center gap-4 mb-6">
          <motion.div 
            className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl ${testimonial.avatarColor || 'bg-gradient-to-br from-blue-500 to-purple-500'}`}
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {testimonial.name[0]}
          </motion.div>
          <div>
            <div className="font-bold text-lg">{testimonial.name}</div>
            <div className="text-gray-500 text-sm">{testimonial.role}</div>
            <div className="text-blue-600 font-medium">{testimonial.company}</div>
          </div>
        </div>

        {/* Metrics */}
        {showMetrics && testimonial.metrics && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            {testimonial.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-3 rounded-lg bg-gradient-to-r from-white/50 to-transparent border border-gray-200/50"
              >
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-xs text-gray-500">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Additional info */}
        <div className="flex items-center justify-between text-sm text-gray-500 pt-6 border-t border-gray-100">
          {testimonial.industry && (
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              {testimonial.industry}
            </div>
          )}
          {testimonial.date && (
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {testimonial.date}
            </div>
          )}
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
          <div className={`absolute top-0 right-0 w-24 h-24 ${backgroundColor === 'dark' ? 'bg-white/5' : 'bg-blue-50'} -translate-y-1/2 translate-x-1/2 rotate-45`} />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className={`relative py-24 ${backgroundClasses[backgroundColor]}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">CLIENT TESTIMONIALS</span>
            <Award className="w-4 h-4 text-purple-600" />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`text-xl ${backgroundColor === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Carousel Controls */}
        {variant === 'carousel' && showControls && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl border border-gray-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {autoplay && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleAutoplay}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg hover:shadow-xl border border-gray-200"
              >
                {isAutoPlaying ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Play</span>
                  </>
                )}
              </motion.button>
            )}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl border border-gray-200"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}

        {/* Testimonials Container */}
        {variant === 'carousel' ? (
          <motion.div
            ref={containerRef}
            className="flex overflow-x-auto gap-8 pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none' }}
          >
            {visibleTestimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="flex-shrink-0 w-full md:w-2/3 lg:w-1/3 snap-center">
                <TestimonialCard testimonial={testimonial} index={index} />
              </div>
            ))}
          </motion.div>
        ) : (
          <div className={`grid ${gridClasses[maxColumns]} gap-8`}>
            {testimonials.slice(0, maxColumns * (variant === 'minimal' ? 1 : 2)).map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        )}

        {/* Navigation Dots */}
        {variant === 'carousel' && showNavigation && testimonials.length > maxColumns && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-3 mt-12"
          >
            {Array.from({ length: testimonials.length - maxColumns + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className="relative group"
              >
                <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-gray-400 transition-colors" />
                {index === currentIndex && (
                  <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                )}
              </button>
            ))}
          </motion.div>
        )}

        {/* Stats Bar */}
        {variant !== 'minimal' && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '98%', label: 'Client Satisfaction', icon: <Heart className="w-6 h-6" /> },
                { value: '500+', label: 'Projects Delivered', icon: <CheckCircle className="w-6 h-6" /> },
                { value: '50+', label: 'Expert Team', icon: <Users className="w-6 h-6" /> },
                { value: '24/7', label: 'Global Support', icon: <Zap className="w-6 h-6" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white border border-gray-200 shadow-lg"
                >
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}