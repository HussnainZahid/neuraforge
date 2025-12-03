'use client';
import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Users, 
  Zap, 
  Target, 
  Award, 
  Sparkles, 
  CheckCircle, 
  Clock, 
  Globe, 
  BarChart,
  ArrowRight,
  Star
} from 'lucide-react';

interface FeatureItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'blue' | 'purple' | 'green' | 'orange' | 'indigo' | 'pink';
  stats?: {
    value: string;
    label: string;
  };
}

interface WhyChooseUsProps {
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'cards' | 'grid' | 'detailed' | 'minimal';
  backgroundColor?: 'light' | 'white' | 'gradient' | 'dark';
  showStats?: boolean;
  showBadge?: boolean;
  maxColumns?: 2 | 3 | 4;
  withAnimation?: boolean;
  withHoverEffects?: boolean;
}

const defaultItems: FeatureItem[] = [
  {
    id: 1,
    icon: <Brain className="w-10 h-10" />,
    title: 'AI-First Engineering',
    description: 'Models in production—not prototypes.',
    color: 'blue',
    stats: { value: '3.5x', label: 'Faster Deployment' }
  },
  {
    id: 2,
    icon: <Shield className="w-10 h-10" />,
    title: 'Security & Compliance',
    description: 'Built-in security and enterprise controls.',
    color: 'purple',
    stats: { value: '100%', label: 'Security Compliance' }
  },
  {
    id: 3,
    icon: <Rocket className="w-10 h-10" />,
    title: 'Rapid Delivery',
    description: 'Sprints, CI/CD, and measurable outcomes.',
    color: 'green',
    stats: { value: '40%', label: 'Faster Time-to-Market' }
  },
  {
    id: 4,
    icon: <Users className="w-10 h-10" />,
    title: 'Partner-Focused',
    description: 'Close collaboration and clear roadmaps.',
    color: 'orange',
    stats: { value: '98%', label: 'Client Satisfaction' }
  },
  {
    id: 5,
    icon: <Target className="w-10 h-10" />,
    title: 'Results-Driven',
    description: 'Measurable ROI and business impact.',
    color: 'indigo',
    stats: { value: '5x', label: 'ROI Delivered' }
  },
  {
    id: 6,
    icon: <Globe className="w-10 h-10" />,
    title: 'Global Scale',
    description: 'Solutions that work worldwide.',
    color: 'pink',
    stats: { value: '99.9%', label: 'Uptime SLA' }
  }
];

export default function WhyChooseUs({
  title = "Why Choose NeuraForge",
  subtitle = "We combine cutting-edge technology, strategic thinking, and customer-first values to deliver solutions that truly drive success.",
  variant = 'default',
  backgroundColor = 'light',
  showStats = true,
  showBadge = true,
  maxColumns = 4,
  withAnimation = true,
  withHoverEffects = true
}: WhyChooseUsProps) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const items = variant === 'minimal' ? defaultItems.slice(0, maxColumns) : defaultItems;
  
  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  const backgroundClasses = {
    light: 'bg-gradient-to-b from-gray-50 to-white',
    white: 'bg-white',
    gradient: 'bg-gradient-to-br from-blue-50 via-white/80 to-purple-50',
    dark: 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white'
  };

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600 border-blue-200',
    purple: 'bg-purple-100 text-purple-600 border-purple-200',
    green: 'bg-emerald-100 text-emerald-600 border-emerald-200',
    orange: 'bg-orange-100 text-orange-600 border-orange-200',
    indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200',
    pink: 'bg-pink-100 text-pink-600 border-pink-200'
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

  const FeatureCard = ({ item, index }: { item: FeatureItem; index: number }) => (
    <motion.div
      key={item.id}
      variants={itemVariants}
      custom={index}
      className="relative group cursor-pointer h-full"
      onMouseEnter={() => withHoverEffects && setHoveredItem(item.id)}
      onMouseLeave={() => setHoveredItem(null)}
      whileHover={withHoverEffects ? { 
        scale: 1.05, 
        y: -8,
        transition: { 
          type: "spring" as const, 
          stiffness: 400, 
          damping: 25 
        } 
      } : {}}
    >
      <div className={`
        h-full rounded-2xl p-8 transition-all duration-500 relative overflow-hidden
        ${backgroundColor === 'dark' 
          ? 'bg-gray-800/50 border border-gray-700 hover:border-gray-600' 
          : 'bg-white border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl'
        }
      `}>
        {/* Icon */}
        <motion.div
          className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${colorClasses[item.color]} border-2`}
          whileHover={{ 
            scale: 1.15, 
            rotate: 180,
            transition: { duration: 0.4 }
          }}
          animate={hoveredItem === item.id ? {
            rotate: [0, 360],
            transition: { duration: 0.5 }
          } : {}}
        >
          {item.icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-4 group-hover:text-gray-800 transition-colors">
          {item.title}
        </h3>

        {/* Description */}
        <p className={`text-base mb-6 leading-relaxed ${backgroundColor === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          {item.description}
        </p>

        {/* Stats */}
        {showStats && item.stats && (
          <motion.div 
            className="mb-6 p-4 rounded-lg bg-gradient-to-r from-white/50 to-transparent border border-gray-200/50"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">{item.stats.value}</span>
              <span className="text-sm text-gray-500">{item.stats.label}</span>
            </div>
          </motion.div>
        )}

        {/* CTA Arrow */}
        <motion.div
          className="flex items-center gap-2 text-blue-600 font-medium mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: -10 }}
          animate={{ x: 0 }}
        >
          <span className="text-sm">Learn more</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
          <div className={`absolute top-0 right-0 w-24 h-24 ${colorClasses[item.color].split(' ')[0]} -translate-y-1/2 translate-x-1/2 rotate-45`} />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className={`relative py-24 ${backgroundClasses[backgroundColor]}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundColor !== 'dark' && (
          <>
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
          </>
        )}
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
          {showBadge && (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 mb-8"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">WHY CHOOSE US</span>
              <Award className="w-4 h-4 text-purple-600" />
            </motion.div>
          )}

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

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className={`grid ${gridClasses[maxColumns]} gap-8`}
        >
          {items.slice(0, maxColumns).map((item, index) => (
            <FeatureCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>

        {/* Stats Bar */}
        {showStats && variant !== 'minimal' && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="text-center mb-10">
              <h4 className="text-2xl font-bold mb-4">Our Impact in Numbers</h4>
              <p className="text-gray-500">Measurable results that speak for themselves</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '500+', label: 'Projects Delivered', icon: <Zap className="w-6 h-6" /> },
                { value: '98%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
                { value: '50+', label: 'Expert Team', icon: <Users className="w-6 h-6" /> },
                { value: '24/7', label: 'Global Support', icon: <Globe className="w-6 h-6" /> }
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

        {/* CTA */}
        {variant !== 'minimal' && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl">
              <span>Ready to get started?</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}