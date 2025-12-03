'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import ServiceCard, { Service } from './ServiceCard';
import { ChevronLeft, ChevronRight, Sparkles, Grid3x3, List, ChevronsRight, Zap } from 'lucide-react';

interface ServicesCarouselProps {
  services: Service[];
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'compact' | 'featured';
  showNavigation?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showViewToggle?: boolean;
  showProgress?: boolean;
}

export default function ServicesCarousel({ 
  services,
  title = "Our Services",
  subtitle = "Explore our comprehensive range of cutting-edge solutions designed to transform your business",
  variant = 'default',
  showNavigation = true,
  autoPlay = true,
  autoPlayInterval = 5000,
  showViewToggle = true,
  showProgress = true
}: ServicesCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGridView, setIsGridView] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const progressSpring = useSpring(currentIndex, {
    stiffness: 100,
    damping: 20,
  });
  
  const progress = useTransform(progressSpring, (value) => {
    return (value / (services.length - 1)) * 100;
  });

  // Handle auto-play
  useEffect(() => {
    if (!autoPlay || isHovering || isDragging || !hasMounted || isGridView) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, isHovering, isDragging, hasMounted, isGridView, autoPlayInterval]);

  // Set mounted state
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Animation variants - simplified to avoid TypeScript issues
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  // Use a simpler approach for item variants
  const getItemAnimation = (index: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.5, 
      delay: index * 0.1,
      ease: "easeOut" as const // Use string literal with const assertion
    }
  });

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    
    const container = carouselRef.current;
    const items = container.children;
    if (index >= items.length) return;
    
    const item = items[index] as HTMLElement;
    const itemLeft = item.offsetLeft;
    const itemWidth = item.offsetWidth;
    const containerWidth = container.offsetWidth;
    
    const scrollPosition = itemLeft - (containerWidth / 2) + (itemWidth / 2);
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
    
    setCurrentIndex(index);
    progressSpring.set(index);
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % services.length;
    scrollToIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    scrollToIndex(prevIndex);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
    setDragDistance(0);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const distance = clientX - dragStartX;
    setDragDistance(distance);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    
    const threshold = 50;
    if (dragDistance > threshold) {
      prevSlide();
    } else if (dragDistance < -threshold) {
      nextSlide();
    }
    
    setIsDragging(false);
    setDragDistance(0);
  };

  const getCardVariant = () => {
    if (variant === 'featured') return 'featured';
    if (isGridView) return 'compact';
    if (variant === 'compact') return 'compact';
    return 'default';
  };

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 via-transparent to-purple-50/20 pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Premium Services
            <ChevronsRight className="w-4 h-4" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            {showViewToggle && (
              <div className="flex items-center gap-2 bg-white rounded-xl border border-gray-200 p-1">
                <button
                  onClick={() => setIsGridView(false)}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                    !isGridView 
                      ? 'bg-blue-500 text-white shadow-md' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <List className="w-4 h-4" />
                  <span className="hidden sm:inline">List</span>
                </button>
                <button
                  onClick={() => setIsGridView(true)}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                    isGridView 
                      ? 'bg-blue-500 text-white shadow-md' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Grid3x3 className="w-4 h-4" />
                  <span className="hidden sm:inline">Grid</span>
                </button>
              </div>
            )}

            {showProgress && !isGridView && (
              <div className="flex items-center gap-3 ml-4">
                <div className="text-sm font-medium text-gray-600">
                  <span className="text-2xl font-bold text-blue-600">{currentIndex + 1}</span>
                  <span className="mx-1">/</span>
                  <span>{services.length}</span>
                </div>
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    style={{ width: `${progress}%` }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  />
                </div>
              </div>
            )}
          </div>

          {showNavigation && !isGridView && (
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all shadow-sm hover:shadow-md"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all shadow-sm hover:shadow-md"
                aria-label="Next service"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Carousel/Grid Content */}
        <AnimatePresence mode="wait">
          {isGridView ? (
            <motion.div
              key="grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "easeOut" as const 
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <ServiceCard 
                    service={service} 
                    variant={getCardVariant()}
                    index={index}
                    animated={true}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="carousel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Left gradient fade */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              
              {/* Right gradient fade */}
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              {/* Carousel Container */}
              <div
                ref={carouselRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-4 -mx-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: { 
                        duration: 0.3, 
                        delay: index * 0.05,
                        ease: "easeOut" as const 
                      }
                    }}
                    whileHover={{ scale: 1.02 }}
                    className={`flex-none transition-transform duration-300 ${
                      index === currentIndex ? 'scale-105' : ''
                    }`}
                    style={{ width: variant === 'featured' ? '400px' : '320px' }}
                    onClick={() => scrollToIndex(index)}
                  >
                    <ServiceCard 
                      service={service} 
                      variant={getCardVariant()}
                      index={index}
                      animated={true}
                      className={index === currentIndex ? 'ring-2 ring-blue-500 ring-opacity-30' : ''}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Drag indicator */}
              {isDragging && (
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium z-20"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {dragDistance > 0 ? 'Swipe right ←' : 'Swipe left →'}
                </motion.div>
              )}

              {/* Auto-play indicator */}
              {autoPlay && hasMounted && (
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm text-gray-500">
                  <Zap className="w-4 h-4 text-blue-500 animate-pulse" />
                  Auto-scroll
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Dots */}
        {showNavigation && !isGridView && (
          <div className="flex justify-center items-center gap-2 mt-12">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg">
            <span className="text-white font-semibold">
              Need a custom solution? Let's discuss your project
            </span>
            <button className="px-6 py-2 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-md">
              Get Quote
            </button>
          </div>
        </motion.div>
      </div>

      {/* Custom scrollbar hide */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}