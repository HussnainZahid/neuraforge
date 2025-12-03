'use client';
import { motion, Variants } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiReact, 
  SiDocker, 
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiKubernetes,
  SiGit,
  SiRedis,
  SiPrisma,
  SiFramer,
  SiVercel,
  SiFirebase,
  SiGooglecloud
} from 'react-icons/si';
import { 
  Sparkles, 
  Zap, 
  Cpu, 
  Cloud, 
  Database, 
  Globe,
  Server,
  Code,
  Layers,
  Terminal,
  Shield,
  Workflow,
  Clock,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

interface TechItem {
  id: number;
  name: string;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'cloud' | 'tools';
  description?: string;
  color: string;
  popularity: number; // 1-10
  experience?: string;
  isFavorite?: boolean;
}

interface TechStackProps {
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'grid' | 'carousel' | 'interactive' | 'detailed' | 'minimal' | 'animated';
  backgroundColor?: 'light' | 'white' | 'gradient' | 'dark' | 'tech';
  showCategories?: boolean;
  showDescriptions?: boolean;
  showStats?: boolean;
  withAnimation?: boolean;
  autoplay?: boolean;
  maxItems?: number;
  columns?: 3 | 4 | 5 | 6;
}

const defaultStack: TechItem[] = [
  // Frontend
  {
    id: 1,
    name: 'Next.js',
    icon: <SiNextdotjs />,
    category: 'frontend',
    description: 'React framework for production-grade applications',
    color: 'from-gray-800 to-black',
    popularity: 10,
    experience: 'Expert',
    isFavorite: true
  },
  {
    id: 2,
    name: 'React',
    icon: <SiReact />,
    category: 'frontend',
    description: 'Library for building user interfaces',
    color: 'from-cyan-500 to-blue-500',
    popularity: 10,
    experience: 'Expert'
  },
  {
    id: 3,
    name: 'TypeScript',
    icon: <SiTypescript />,
    category: 'frontend',
    description: 'Typed superset of JavaScript',
    color: 'from-blue-600 to-blue-800',
    popularity: 9,
    experience: 'Expert'
  },
  {
    id: 4,
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    category: 'frontend',
    description: 'Utility-first CSS framework',
    color: 'from-teal-400 to-cyan-500',
    popularity: 9,
    experience: 'Expert'
  },
  {
    id: 5,
    name: 'Framer Motion',
    icon: <SiFramer />,
    category: 'frontend',
    description: 'Production-ready animations for React',
    color: 'from-pink-500 to-purple-500',
    popularity: 8,
    experience: 'Advanced'
  },
  
  // Backend
  {
    id: 6,
    name: 'Node.js',
    icon: <SiNodedotjs />,
    category: 'backend',
    description: 'JavaScript runtime built on Chrome\'s V8 engine',
    color: 'from-green-500 to-emerald-500',
    popularity: 9,
    experience: 'Expert'
  },
  {
    id: 7,
    name: 'Python',
    icon: <SiPython />,
    category: 'backend',
    description: 'High-level programming language',
    color: 'from-blue-500 to-cyan-500',
    popularity: 8,
    experience: 'Advanced'
  },
  {
    id: 8,
    name: 'GraphQL',
    icon: <SiGraphql />,
    category: 'backend',
    description: 'Query language for APIs',
    color: 'from-pink-500 to-purple-500',
    popularity: 7,
    experience: 'Advanced'
  },
  
  // Database
  {
    id: 9,
    name: 'MongoDB',
    icon: <SiMongodb />,
    category: 'database',
    description: 'NoSQL database program',
    color: 'from-green-500 to-emerald-600',
    popularity: 8,
    experience: 'Expert'
  },
  {
    id: 10,
    name: 'PostgreSQL',
    icon: <SiPostgresql />,
    category: 'database',
    description: 'Advanced open-source relational database',
    color: 'from-blue-400 to-blue-600',
    popularity: 8,
    experience: 'Advanced'
  },
  {
    id: 11,
    name: 'Redis',
    icon: <SiRedis />,
    category: 'database',
    description: 'In-memory data structure store',
    color: 'from-red-500 to-orange-500',
    popularity: 7,
    experience: 'Advanced'
  },
  {
    id: 12,
    name: 'Prisma',
    icon: <SiPrisma />,
    category: 'database',
    description: 'Next-generation ORM for Node.js & TypeScript',
    color: 'from-gray-700 to-gray-900',
    popularity: 7,
    experience: 'Advanced'
  },
  
  // DevOps & Cloud
  {
    id: 13,
    name: 'Docker',
    icon: <SiDocker />,
    category: 'devops',
    description: 'Platform for developing, shipping, and running applications',
    color: 'from-blue-500 to-blue-700',
    popularity: 9,
    experience: 'Expert'
  },
  {
    id: 14,
    name: 'Kubernetes',
    icon: <SiKubernetes />,
    category: 'devops',
    description: 'Container orchestration system',
    color: 'from-blue-500 to-blue-600',
    popularity: 7,
    experience: 'Advanced'
  },
  {
    id: 15,
    name: 'Google Cloud',
    icon: <SiGooglecloud />,
    category: 'cloud',
    description: 'Suite of cloud computing services',
    color: 'from-blue-500 to-blue-600',
    popularity: 7,
    experience: 'Intermediate'
  },
  {
    id: 16,
    name: 'Vercel',
    icon: <SiVercel />,
    category: 'cloud',
    description: 'Platform for frontend frameworks and static sites',
    color: 'from-gray-800 to-black',
    popularity: 8,
    experience: 'Expert'
  },
  {
    id: 17,
    name: 'Firebase',
    icon: <SiFirebase />,
    category: 'cloud',
    description: 'Google\'s mobile and web application development platform',
    color: 'from-yellow-500 to-orange-500',
    popularity: 7,
    experience: 'Advanced'
  },
  
  // Tools
  {
    id: 18,
    name: 'Git',
    icon: <SiGit />,
    category: 'tools',
    description: 'Distributed version control system',
    color: 'from-orange-500 to-red-500',
    popularity: 10,
    experience: 'Expert'
  }
];

const categories = [
  { id: 'frontend', name: 'Frontend', icon: <Code className="w-4 h-4" /> },
  { id: 'backend', name: 'Backend', icon: <Server className="w-4 h-4" /> },
  { id: 'database', name: 'Database', icon: <Database className="w-4 h-4" /> },
  { id: 'devops', name: 'DevOps', icon: <Workflow className="w-4 h-4" /> },
  { id: 'cloud', name: 'Cloud', icon: <Cloud className="w-4 h-4" /> },
  { id: 'tools', name: 'Tools', icon: <Terminal className="w-4 h-4" /> }
];

export default function TechStack({
  title = "Technology Stack",
  subtitle = "Modern, scalable tools and frameworks we use to build exceptional products.",
  variant = 'default',
  backgroundColor = 'tech',
  showCategories = true,
  showDescriptions = false,
  showStats = true,
  withAnimation = true,
  autoplay = false,
  maxItems = 12,
  columns = 5
}: TechStackProps) {
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoplay);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredStack = selectedCategory === 'all' 
    ? defaultStack.slice(0, maxItems)
    : defaultStack.filter(tech => tech.category === selectedCategory).slice(0, maxItems);

  const gridColumns = {
    3: 'grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
    5: 'grid-cols-3 md:grid-cols-5',
    6: 'grid-cols-3 md:grid-cols-6'
  };

  const backgroundClasses = {
    light: 'bg-gradient-to-b from-gray-50 to-white',
    white: 'bg-white',
    gradient: 'bg-gradient-to-br from-blue-50 via-white/80 to-purple-50',
    dark: 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white',
    tech: 'bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white'
  };

  const categoryClasses = {
    frontend: 'border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20',
    backend: 'border-green-500/30 bg-green-500/10 hover:bg-green-500/20',
    database: 'border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20',
    devops: 'border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20',
    cloud: 'border-orange-500/30 bg-orange-500/10 hover:bg-orange-500/20',
    tools: 'border-red-500/30 bg-red-500/10 hover:bg-red-500/20'
  };

  useEffect(() => {
    if (!autoplay || variant !== 'carousel' || !isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % (filteredStack.length - 5 + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [autoplay, isAutoPlaying, variant, filteredStack.length]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
        bounce: 0.3
      }
    }
  };

  const TechCard = ({ tech, index }: { tech: TechItem; index: number }) => (
    <motion.div
      key={tech.id}
      variants={itemVariants}
      custom={index}
      className="relative group"
      onMouseEnter={() => setHoveredTech(tech.id)}
      onMouseLeave={() => setHoveredTech(null)}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        transition: { 
          type: "spring" as const, 
          stiffness: 400, 
          damping: 25 
        } 
      }}
    >
      <div className={`
        relative p-6 rounded-2xl transition-all duration-500 overflow-hidden
        ${backgroundColor === 'dark' || backgroundColor === 'tech'
          ? 'bg-gray-800/50 border border-gray-700 hover:border-gray-600'
          : 'bg-white border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl'
        }
      `}>
        {/* Background glow */}
        <div className={`
          absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl opacity-0 group-hover:opacity-10
          transition-opacity duration-700
        `} />

        {/* Favorite badge */}
        {tech.isFavorite && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute -top-2 -right-2 p-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
          >
            <Sparkles className="w-3 h-3 text-white" />
          </motion.div>
        )}

        {/* Icon */}
        <motion.div
          className={`text-4xl mb-4 relative z-10 ${backgroundColor === 'dark' || backgroundColor === 'tech' ? 'text-white' : 'text-gray-800'}`}
          animate={hoveredTech === tech.id ? {
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          } : {}}
          transition={{ duration: 0.5 }}
        >
          {tech.icon}
        </motion.div>

        {/* Name */}
        <h4 className="font-bold text-lg mb-2 relative z-10">{tech.name}</h4>

        {/* Description */}
        {showDescriptions && tech.description && (
          <p className="text-sm opacity-70 mb-3 relative z-10">{tech.description}</p>
        )}

        {/* Experience level */}
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${
              tech.experience === 'Expert' ? 'bg-green-500' :
              tech.experience === 'Advanced' ? 'bg-blue-500' : 'bg-yellow-500'
            }`} />
            <span className="text-xs opacity-70">{tech.experience}</span>
          </div>
          
          {/* Popularity indicator */}
          <div className="flex gap-0.5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={`w-1 h-3 rounded-sm ${
                  i < tech.popularity
                    ? i < 7 ? 'bg-blue-500' : 'bg-green-500'
                    : backgroundColor === 'dark' || backgroundColor === 'tech'
                      ? 'bg-gray-700'
                      : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Category tag */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 ${categoryClasses[tech.category]} transition-all duration-300`} />

        {/* Hover effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          initial={{ x: '-100%' }}
          animate={hoveredTech === tech.id ? { x: '100%' } : { x: '-100%' }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </motion.div>
  );

  return (
    <section className={`relative py-24 overflow-hidden ${backgroundClasses[backgroundColor]}`}>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundColor === 'tech' && (
          <>
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
            
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px]" />
            
            {/* Binary code animation */}
            <motion.div
              className="absolute top-10 right-20 text-blue-400/10 font-mono text-lg"
              animate={{ y: [0, -100, 0] }}
              transition={{ duration: 20, repeat: Infinity }}
            >
              01010111 01100101 00100000 01000010 01110101 01101001 01101100 01100100
            </motion.div>
            <motion.div
              className="absolute bottom-20 left-10 text-purple-400/10 font-mono text-lg"
              animate={{ y: [0, 100, 0] }}
              transition={{ duration: 25, repeat: Infinity }}
            >
              01010100 01100101 01100011 01101000 01101110 01101111 01101100 01101111 01100111 01111001
            </motion.div>
          </>
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 mb-8"
          >
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">TECHNOLOGY STACK</span>
            <Cpu className="w-4 h-4 text-purple-400" />
          </motion.div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h2>

          {/* Subtitle */}
          <p className={`text-xl ${backgroundColor === 'dark' || backgroundColor === 'tech' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            {subtitle}
          </p>
        </motion.div>

        {/* Category Filter */}
        {showCategories && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <button
              onClick={() => setSelectedCategory('all')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : backgroundColor === 'dark' || backgroundColor === 'tech'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">All</span>
              <span className="text-xs px-2 py-1 rounded-full bg-white/20">{defaultStack.length}</span>
            </button>
            
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? `${categoryClasses[category.id as keyof typeof categoryClasses]} text-white`
                    : backgroundColor === 'dark' || backgroundColor === 'tech'
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-white/20">
                  {defaultStack.filter(t => t.category === category.id).length}
                </span>
              </button>
            ))}
          </motion.div>
        )}

        {/* Tech Grid/Carousel */}
        {variant === 'carousel' ? (
          <motion.div
            ref={containerRef}
            className="flex overflow-x-auto gap-8 pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none' }}
          >
            {filteredStack.map((tech, index) => (
              <div key={tech.id} className="flex-shrink-0 w-64 snap-center">
                <TechCard tech={tech} index={index} />
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className={`grid ${gridColumns[columns]} gap-6`}
          >
            {filteredStack.map((tech, index) => (
              <TechCard key={tech.id} tech={tech} index={index} />
            ))}
          </motion.div>
        )}

        {/* Stats Section */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="text-center mb-10">
              <h4 className="text-2xl font-bold mb-4">Our Technical Excellence</h4>
              <p className="text-gray-500">Numbers that define our expertise</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '50+', label: 'Technologies', icon: <Layers className="w-6 h-6" /> },
                { value: '10+', label: 'Years Experience', icon: <Clock className="w-6 h-6" /> },
                { value: '500+', label: 'Projects Built', icon: <CheckCircle className="w-6 h-6" /> },
                { value: '99.9%', label: 'System Uptime', icon: <Shield className="w-6 h-6" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-center p-6 rounded-2xl ${
                    backgroundColor === 'dark' || backgroundColor === 'tech'
                      ? 'bg-gray-800/50 border border-gray-700'
                      : 'bg-white border border-gray-200 shadow-lg'
                  }`}
                >
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className={`inline-flex items-center gap-4 px-8 py-4 rounded-2xl ${
            backgroundColor === 'dark' || backgroundColor === 'tech'
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
          }`}>
            <span className="font-bold">Looking for specific tech expertise?</span>
            <TrendingUp className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}