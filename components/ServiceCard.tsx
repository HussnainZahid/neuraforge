'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Users, 
  Zap, 
  Shield, 
  Star,
  Brain,
  Code,
  Cloud,
  Smartphone,
  Database,
  Globe,
  Target,
  TrendingUp,
  Award,
  Sparkles,
  ChevronRight,
  Heart,
  BarChart,
  Cpu,
  Lock,
  MessageSquare,
  Rocket
} from 'lucide-react';

export interface Service {
  id?: string;
  title: string;
  slug: string;
  description: string;
  detailedDescription?: string;
  icon?: React.ReactNode;
  color?: 'blue' | 'purple' | 'green' | 'orange' | 'indigo' | 'teal' | 'pink' | 'amber';
  features?: string[];
  tags?: string[];
  stats?: {
    projects?: number;
    satisfaction?: number;
    timeline?: string;
  };
  pricing?: {
    starter: string;
    professional: string;
    enterprise: string;
  };
  timeline?: string;
  caseStudy?: {
    title: string;
    results: string[];
    metrics: Array<{ value: string; label: string }>;
  };
}

interface ServiceCardProps {
  service: Service;
  index?: number;
  variant?: 'default' | 'compact' | 'featured' | 'detailed' | 'hover' | 'minimal';
  showStats?: boolean;
  showCaseStudy?: boolean;
  showFeatures?: boolean;
  showTags?: boolean;
  animated?: boolean;
  className?: string;
}

const defaultIcons: Record<string, React.ReactNode> = {
  'ai': <Brain className="w-6 h-6" />,
  'machine-learning': <Brain className="w-6 h-6" />,
  'software': <Code className="w-6 h-6" />,
  'web': <Globe className="w-6 h-6" />,
  'mobile': <Smartphone className="w-6 h-6" />,
  'cloud': <Cloud className="w-6 h-6" />,
  'data': <Database className="w-6 h-6" />,
  'analytics': <BarChart className="w-6 h-6" />,
  'security': <Shield className="w-6 h-6" />,
  'consulting': <Users className="w-6 h-6" />,
  'development': <Cpu className="w-6 h-6" />,
  'devops': <Rocket className="w-6 h-6" />,
  'default': <Zap className="w-6 h-6" />
};

const colorClasses = {
  blue: {
    bg: 'bg-blue-100/80',
    text: 'text-blue-600',
    border: 'border-blue-200',
    gradient: 'from-blue-500 to-cyan-500'
  },
  purple: {
    bg: 'bg-purple-100/80',
    text: 'text-purple-600',
    border: 'border-purple-200',
    gradient: 'from-purple-500 to-pink-500'
  },
  green: {
    bg: 'bg-emerald-100/80',
    text: 'text-emerald-600',
    border: 'border-emerald-200',
    gradient: 'from-emerald-500 to-teal-500'
  },
  orange: {
    bg: 'bg-orange-100/80',
    text: 'text-orange-600',
    border: 'border-orange-200',
    gradient: 'from-orange-500 to-red-500'
  },
  indigo: {
    bg: 'bg-indigo-100/80',
    text: 'text-indigo-600',
    border: 'border-indigo-200',
    gradient: 'from-indigo-500 to-blue-500'
  },
  teal: {
    bg: 'bg-teal-100/80',
    text: 'text-teal-600',
    border: 'border-teal-200',
    gradient: 'from-teal-500 to-cyan-500'
  },
  pink: {
    bg: 'bg-pink-100/80',
    text: 'text-pink-600',
    border: 'border-pink-200',
    gradient: 'from-pink-500 to-rose-500'
  },
  amber: {
    bg: 'bg-amber-100/80',
    text: 'text-amber-600',
    border: 'border-amber-200',
    gradient: 'from-amber-500 to-orange-500'
  }
};

export default function ServiceCard({ 
  service, 
  index = 0,
  variant = 'default',
  showStats = false,
  showCaseStudy = false,
  showFeatures = true,
  showTags = true,
  animated = true,
  className = ''
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine icon and color
  const getIcon = () => {
    if (service.icon) return service.icon;
    
    const slug = service.slug.toLowerCase();
    for (const [key, icon] of Object.entries(defaultIcons)) {
      if (slug.includes(key)) return icon;
    }
    return defaultIcons.default;
  };

  const getColor = () => {
    if (service.color && colorClasses[service.color]) {
      return service.color;
    }
    const colorKeys = Object.keys(colorClasses);
    return colorKeys[index % colorKeys.length] as keyof typeof colorClasses;
  };

  const color = getColor();
  const colorScheme = colorClasses[color];
  const Icon = getIcon();

  // Animation variants with proper typing
  const cardVariants = animated ? {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring" as const,
        bounce: 0.3,
        delay: index * 0.1
      }
    }
  } : undefined;

  // Animation props for conditional rendering
  const animationProps = animated ? {
    variants: cardVariants,
    initial: "hidden",
    whileInView: "visible" as const,
    viewport: { once: true, margin: '-50px' }
  } : {};

  // Compact Variant
  if (variant === 'compact') {
    return (
      <motion.div
        {...animationProps}
        whileHover={{ y: -5, scale: 1.02 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative group cursor-pointer ${className}`}
      >
        <div className="bg-white rounded-xl border border-gray-200 p-5 hover:border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
          {/* Background glow on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
          
          <div className="relative flex items-center gap-4">
            <motion.div
              animate={{ scale: isHovered ? 1.1 : 1 }}
              className={`p-3 rounded-lg ${colorScheme.bg} ${colorScheme.border} border`}
            >
              {Icon}
            </motion.div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 group-hover:text-gray-800 truncate">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {service.description}
              </p>
            </div>
            
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              className="flex-shrink-0"
            >
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Featured Variant
  if (variant === 'featured') {
    return (
      <motion.div
        {...animationProps}
        whileHover={{ y: -10, scale: 1.02 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative group h-full ${className}`}
      >
        <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-xl">
          <div className="relative p-8 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-6">
                <motion.div
                  animate={{ scale: isHovered ? 1.1 : 1 }}
                  className={`p-5 rounded-xl bg-gradient-to-br ${colorScheme.gradient} shadow-lg`}
                >
                  {Icon}
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  {showStats && service.stats?.satisfaction && (
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-300 rounded-full">
                      <Star className="w-3 h-3" />
                      <span className="text-sm font-bold">{service.stats.satisfaction}%</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-8 text-lg leading-relaxed flex-1">
              {service.description}
            </p>

            {/* Features */}
            {showFeatures && service.features && (
              <div className="mb-8">
                <h4 className="font-semibold text-white mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-700">
              <Link 
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-3 text-blue-400 hover:text-blue-300 font-semibold group"
              >
                <span>Explore Service</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {service.pricing && (
                <div className="text-right">
                  <div className="text-sm text-gray-400">Starting from</div>
                  <div className="text-xl font-bold text-white">{service.pricing.starter}</div>
                </div>
              )}
            </div>
          </div>

          {/* Hover effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: isHovered ? '100%' : '-100%' }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </motion.div>
    );
  }

  // Detailed Variant
  if (variant === 'detailed') {
    return (
      <motion.div
        {...animationProps}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative group ${className}`}
      >
        <div className={`relative bg-white rounded-2xl border ${colorScheme.border} overflow-hidden transition-all duration-300 ${isHovered ? 'shadow-2xl' : 'shadow-lg'}`}>
          <div className="p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-5">
                <motion.div
                  animate={{ scale: isHovered ? 1.1 : 1 }}
                  className={`p-4 rounded-xl bg-gradient-to-br ${colorScheme.gradient} shadow-lg`}
                >
                  {Icon}
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  {showTags && service.tags && (
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {service.description}
            </p>

            {/* Expanded Content */}
            {isExpanded && service.detailedDescription && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="overflow-hidden"
              >
                <p className="text-gray-600 mb-6">
                  {service.detailedDescription}
                </p>
                
                {/* Case Study */}
                {showCaseStudy && service.caseStudy && (
                  <div className="mb-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-5 h-5 text-blue-600" />
                      <h4 className="font-bold text-gray-900">Case Study Results</h4>
                    </div>
                    <div className="space-y-3">
                      {service.caseStudy.results.map((result, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                {showFeatures && service.features && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-100">
              <Link 
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold group"
              >
                <span>View Details</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {service.timeline && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  {service.timeline}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Minimal Variant
  if (variant === 'minimal') {
    return (
      <Link href={`/services/${service.slug}`}>
        <motion.div
          {...animationProps}
          whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
          className={`p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all ${className}`}
        >
          <div className={`w-12 h-12 rounded-lg ${colorScheme.bg} ${colorScheme.text} flex items-center justify-center mb-4`}>
            {Icon}
          </div>
          <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
          <p className="text-sm text-gray-600">{service.description}</p>
        </motion.div>
      </Link>
    );
  }

  // Default Variant
  return (
    <motion.div
      {...animationProps}
      whileHover={{ y: -10, scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group h-full ${className}`}
    >
      <div className="relative h-full bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-2xl">
        <div className="p-8 h-full flex flex-col">
          {/* Icon and Arrow */}
          <div className="flex items-center justify-between mb-8">
            <motion.div
              animate={{ scale: isHovered ? 1.1 : 1 }}
              className={`p-5 rounded-xl bg-gradient-to-br ${colorScheme.gradient} shadow-lg`}
            >
              {Icon}
            </motion.div>
            
            <motion.div
              animate={{ rotate: isHovered ? 90 : 0 }}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </motion.div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-8 leading-relaxed flex-1">
            {service.description}
          </p>

          {/* Features */}
          {showFeatures && service.features && service.features.length > 0 && (
            <div className="mb-8 space-y-3">
              <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">
                Key Features
              </h4>
              <div className="space-y-2">
                {service.features.slice(0, 3).map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {showTags && service.tags && service.tags.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              {service.tags.slice(0, 4).map((tag, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Stats */}
          {showStats && service.stats && (
            <div className="mb-8 grid grid-cols-2 gap-4">
              {service.stats.projects && (
                <div className="text-center p-3 rounded-lg bg-gradient-to-r from-blue-50 to-transparent">
                  <div className="text-2xl font-bold text-gray-900">{service.stats.projects}</div>
                  <div className="text-xs text-gray-600">Projects</div>
                </div>
              )}
              {service.stats.satisfaction && (
                <div className="text-center p-3 rounded-lg bg-gradient-to-r from-green-50 to-transparent">
                  <div className="text-2xl font-bold text-gray-900">{service.stats.satisfaction}%</div>
                  <div className="text-xs text-gray-600">Satisfaction</div>
                </div>
              )}
            </div>
          )}

          {/* Footer */}
          <div className="mt-auto pt-8 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <Link 
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold group"
              >
                <span>Explore Service</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {service.pricing && (
                <div className="text-right">
                  <div className="text-sm text-gray-500">Starting from</div>
                  <div className="text-lg font-bold text-gray-900">{service.pricing.starter}</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hover effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '100%' : '-100%' }}
          transition={{ duration: 0.6 }}
        />

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className={`absolute top-0 right-0 w-32 h-32 ${colorScheme.bg} -translate-y-1/2 translate-x-1/2 rotate-45`} />
        </div>
      </div>
    </motion.div>
  );
}