'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Search, 
  User, 
  Menu, 
  X, 
  Home,
  Briefcase,
  Rocket,
  MessageSquare,
  Brain,
  Code,
  Palette,
  Globe,
  Zap,
  Database,
  Shield,
  Cloud,
  Smartphone,
  BarChart3,
  Target,
  Layers,
  Cpu,
  ArrowRight,
  Sparkles
} from 'lucide-react';

// Enhanced services data with more categories
const servicesData = {
  aiAndML: {
    title: "AI & Machine Learning",
    icon: <Brain className="w-5 h-5" />,
    color: "from-purple-500 to-pink-500",
    gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
    description: "Intelligent solutions for modern businesses",
    services: [
      { name: "AI Development", href: "/services/ai", icon: <Cpu className="w-4 h-4" />, tag: "Custom AI", desc: "Build custom AI solutions tailored to your needs" },
      { name: "Machine Learning", href: "/services/ml", icon: <Brain className="w-4 h-4" />, tag: "Predictive Models", desc: "Advanced ML models for data-driven insights" },
      { name: "Natural Language", href: "/services/nlp", icon: <MessageSquare className="w-4 h-4" />, tag: "NLP & LLMs", desc: "Language models and text processing" },
      { name: "Computer Vision", href: "/services/vision", icon: <Target className="w-4 h-4" />, tag: "Image Analysis", desc: "Image recognition and analysis systems" },
    ]
  },
  development: {
    title: "Development",
    icon: <Code className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-500",
    gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
    description: "Build powerful digital products",
    services: [
      { name: "Web Development", href: "/services/web", icon: <Globe className="w-4 h-4" />, tag: "React, Next.js", desc: "Modern web applications with cutting-edge tech" },
      { name: "Mobile Apps", href: "/services/mobile", icon: <Smartphone className="w-4 h-4" />, tag: "iOS & Android", desc: "Cross-platform mobile solutions" },
      { name: "Cloud Solutions", href: "/services/cloud", icon: <Cloud className="w-4 h-4" />, tag: "AWS, Azure", desc: "Scalable cloud infrastructure" },
      { name: "DevOps", href: "/services/devops", icon: <Layers className="w-4 h-4" />, tag: "CI/CD", desc: "Streamlined development workflows" },
    ]
  },
  digital: {
    title: "Digital Services",
    icon: <Palette className="w-5 h-5" />,
    color: "from-green-500 to-emerald-500",
    gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
    description: "Enhance your digital presence",
    services: [
      { name: "SEO & Marketing", href: "/services/seo", icon: <BarChart3 className="w-4 h-4" />, tag: "Growth", desc: "Boost your online visibility" },
      { name: "UI/UX Design", href: "/services/design", icon: <Palette className="w-4 h-4" />, tag: "User Experience", desc: "Beautiful and intuitive interfaces" },
      { name: "Data Analytics", href: "/services/analytics", icon: <Database className="w-4 h-4" />, tag: "Insights", desc: "Transform data into decisions" },
      { name: "Automation", href: "/services/automation", icon: <Zap className="w-4 h-4" />, tag: "Efficiency", desc: "Automate repetitive tasks" },
    ]
  },
  security: {
    title: "Security",
    icon: <Shield className="w-5 h-5" />,
    color: "from-red-500 to-orange-500",
    gradient: "bg-gradient-to-br from-red-500 to-orange-500",
    description: "Protect your digital assets",
    services: [
      { name: "Security Audit", href: "/services/security-audit", icon: <Shield className="w-4 h-4" />, tag: "Compliance", desc: "Comprehensive security assessments" },
      { name: "Data Protection", href: "/services/data-protection", icon: <Database className="w-4 h-4" />, tag: "Encryption", desc: "Secure your sensitive data" },
      { name: "Cloud Security", href: "/services/cloud-security", icon: <Cloud className="w-4 h-4" />, tag: "Secure Cloud", desc: "Protected cloud infrastructure" },
      { name: "Monitoring", href: "/services/monitoring", icon: <Target className="w-4 h-4" />, tag: "24/7 Watch", desc: "Real-time threat detection" },
    ]
  }
};

const navLinks = [
  { title: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
  { title: 'Services', href: '/services', icon: <Brain className="w-4 h-4" /> },
  { title: 'Projects', href: '/projects', icon: <Briefcase className="w-4 h-4" /> },
  { title: 'About', href: '/about', icon: <Rocket className="w-4 h-4" /> },
  { title: 'Contact', href: '/contact', icon: <MessageSquare className="w-4 h-4" /> },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLHeadElement>(null);

  // Handle scroll effect for hide/show
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY;
    const isAtTop = currentScrollY < 100;
    
    setIsScrolled(currentScrollY > 20);
    
    if (isAtTop) {
      setHeaderVisible(true);
    } else if (isScrollingDown && currentScrollY > 100) {
      setHeaderVisible(false);
      setIsServicesOpen(false); // Close dropdown when hiding header
    } else if (!isScrollingDown) {
      setHeaderVisible(true);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  // Handle scroll effect
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      setSearchQuery('');
    }
  };

  // Enhanced Services Dropdown Component
  const ServicesDropdown = () => {
    // Calculate dropdown position based on button position
    const [dropdownStyle, setDropdownStyle] = useState({});
    
    useEffect(() => {
      if (servicesButtonRef.current && isServicesOpen) {
        const buttonRect = servicesButtonRef.current.getBoundingClientRect();
        const dropdownWidth = 900;
        
        // Calculate if dropdown would overflow on the right
        const rightSpace = window.innerWidth - buttonRect.left;
        const leftSpace = buttonRect.right;
        
        let leftPosition = buttonRect.left - (dropdownWidth / 2) + (buttonRect.width / 2);
        
        // Adjust if dropdown goes off screen
        if (leftPosition < 20) {
          leftPosition = 20;
        } else if (leftPosition + dropdownWidth > window.innerWidth - 20) {
          leftPosition = window.innerWidth - dropdownWidth - 20;
        }
        
        setDropdownStyle({
          left: `${leftPosition}px`,
          top: `${buttonRect.bottom + 10}px`,
          width: `${dropdownWidth}px`,
          maxWidth: 'calc(100vw - 40px)'
        });
      }
    }, [isServicesOpen]);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 25 }}
        className="fixed bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
        style={dropdownStyle}
      >
        <div className="p-6">
          {/* Header with gradient */}
          <div className="mb-6 relative overflow-hidden rounded-xl p-4 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <Brain className="w-full h-full text-blue-500" />
            </div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Services</h3>
              </div>
              <p className="text-gray-600 max-w-2xl">Complete digital solutions tailored to accelerate your business growth and innovation</p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(servicesData).map(([key, category]) => (
              <div
                key={key}
                className="relative group"
                onMouseEnter={() => setHoveredCategory(key)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Category Card */}
                <div className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  hoveredCategory === key 
                    ? 'border-blue-200 bg-white shadow-lg scale-[1.02]' 
                    : 'border-transparent bg-gray-50 hover:bg-white'
                }`}>
                  {/* Category Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`p-2.5 rounded-lg ${category.gradient} shadow-md`}>
                      <div className="text-white">{category.icon}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-gray-900 text-lg">{category.title}</h4>
                        <ArrowRight className={`w-4 h-4 text-gray-400 transition-transform ${
                          hoveredCategory === key ? 'translate-x-1 text-blue-500' : ''
                        }`} />
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="space-y-2">
                    {category.services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-start justify-between p-3 rounded-lg hover:bg-blue-50 group/item transition-all duration-200 border border-transparent hover:border-blue-100"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 rounded-md bg-white border border-gray-200 group-hover/item:bg-blue-100 group-hover/item:border-blue-200 transition-colors mt-0.5">
                            {service.icon}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 group-hover/item:text-blue-700 transition-colors flex items-center gap-2">
                              {service.name}
                              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                                {service.tag}
                              </span>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">{service.desc}</div>
                          </div>
                        </div>
                        <ChevronDown className="w-4 h-4 -rotate-90 text-gray-400 group-hover/item:text-blue-500 transition-colors flex-shrink-0 mt-1" />
                      </Link>
                    ))}
                  </div>

                  {/* View All Link */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Link
                      href={`/services/${key}`}
                      onClick={() => setIsServicesOpen(false)}
                      className="inline-flex items-center gap-2 text-sm font-medium group/link"
                    >
                      <span className="text-blue-600 group-hover/link:text-blue-700">
                        Explore all {category.title.toLowerCase()} services
                      </span>
                      <ArrowRight className="w-4 h-4 text-blue-500 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-white border border-blue-100">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Need a custom solution?</h4>
                  <p className="text-sm text-gray-600">Our experts can build exactly what you need</p>
                </div>
              </div>
              <Link
                href="/contact"
                onClick={() => setIsServicesOpen(false)}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105 active:scale-95 shadow-md"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // Mobile Services Dropdown
  const MobileServicesDropdown = () => (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <div className="py-4 space-y-4">
        {Object.entries(servicesData).map(([key, category]) => (
          <div key={key} className="space-y-2">
            {/* Category Header */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-200">
              <div className={`p-2 rounded-lg ${category.gradient}`}>
                {category.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{category.title}</h4>
                <p className="text-xs text-gray-500">{category.description}</p>
              </div>
            </div>

            {/* Services List */}
            <div className="space-y-2 pl-4">
              {category.services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
                >
                  <div className="p-1.5 rounded bg-gray-100">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{service.name}</div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-gray-500">{service.tag}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500 truncate">{service.desc}</span>
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 -rotate-90 text-gray-400" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: 0 }}
        animate={{ y: headerVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
            : 'bg-white/90 backdrop-blur-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-md">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                  NeuraForge
                </span>
                <span className="text-xs text-gray-500 font-medium">AI Solutions</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.href} className="relative" ref={link.title === 'Services' ? dropdownRef : null}>
                  {link.title === 'Services' ? (
                    <>
                      <button
                        ref={servicesButtonRef}
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-600 rounded-xl hover:bg-gray-50 transition-all duration-200 group relative"
                      >
                        <div className="flex items-center gap-2">
                          {link.icon}
                          <span>{link.title}</span>
                        </div>
                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180 text-blue-500' : 'text-gray-400'
                        }`} />
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                      </button>

                      <AnimatePresence>
                        {isServicesOpen && (
                          <div
                            className="fixed inset-0 z-40"
                            onMouseLeave={() => setIsServicesOpen(false)}
                            style={{ pointerEvents: 'none' }}
                          >
                            <div style={{ pointerEvents: 'auto' }}>
                              <ServicesDropdown />
                            </div>
                          </div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-600 rounded-xl hover:bg-gray-50 transition-all duration-200 group relative"
                    >
                      {link.icon}
                      <span>{link.title}</span>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Section */}
            <div className="hidden lg:flex items-center gap-3">
              <form onSubmit={handleSearch} className="relative">
                <div className="flex items-center px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 hover:border-blue-300 transition-colors duration-200">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search services, docs..."
                    className="ml-2 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500 w-40 focus:w-48 transition-all"
                  />
                  <kbd className="hidden md:inline-flex ml-2 px-1.5 py-0.5 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-300 rounded">⌘K</kbd>
                </div>
              </form>

              <Link
                href="/contact"
                className="group relative px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Quote
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors relative"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
              {isMenuOpen && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl opacity-10"></div>
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl overflow-y-auto"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-md">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-lg text-gray-900">NeuraForge</span>
                      <span className="text-xs text-gray-500 font-medium">AI Solutions</span>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-1 flex-1">
                  {navLinks.map((link) => (
                    <div key={link.href} className="border-b border-gray-100 last:border-0">
                      {link.title === 'Services' ? (
                        <div>
                          <button
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className="flex items-center justify-between w-full py-4 text-gray-900 font-semibold hover:text-blue-600 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-1.5 rounded-lg bg-gray-100">
                                {link.icon}
                              </div>
                              <span>{link.title}</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                              isServicesOpen ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          <AnimatePresence>
                            {isServicesOpen && <MobileServicesDropdown />}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-3 py-4 text-gray-900 font-semibold hover:text-blue-600 transition-colors group"
                        >
                          <div className="p-1.5 rounded-lg bg-gray-100 group-hover:bg-blue-100 transition-colors">
                            {link.icon}
                          </div>
                          <span>{link.title}</span>
                          <ArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Search and CTA */}
                <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                  <form onSubmit={handleSearch} className="relative">
                    <div className="flex items-center px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-200">
                      <Search className="w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="ml-2 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500 flex-1"
                      />
                    </div>
                  </form>

                  <div className="space-y-3">
                    <Link
                      href="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl text-center hover:shadow-lg transition-all active:scale-95"
                    >
                      Get Free Consultation
                    </Link>
                    <Link
                      href="/projects"
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full py-2.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl text-center hover:border-blue-500 hover:text-blue-600 transition-colors"
                    >
                      View Our Work
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}