'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnimatedHeaderProps {
  title: string;
  subtitle?: string;
  highlightWords?: string[];
  variant?: 'default' | 'gradient' | 'split' | 'minimal' | 'hero';
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  animationType?: 'fade' | 'slide' | 'stagger' | 'reveal' | 'typewriter';
  withUnderline?: boolean;
  className?: string;
}

export default function AnimatedHeader({ 
  title, 
  subtitle, 
  highlightWords = [],
  variant = 'default',
  align = 'center',
  size = 'lg',
  animationType = 'slide',
  withUnderline = false,
  className = ''
}: AnimatedHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);

  const sizeClasses = {
    sm: 'text-3xl md:text-4xl',
    md: 'text-4xl md:text-5xl',
    lg: 'text-5xl md:text-6xl',
    xl: 'text-6xl md:text-7xl',
    '2xl': 'text-7xl md:text-8xl'
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Split title into words for staggered animations
  const words = title.split(' ');

  // Render title based on animation type
  const renderTitle = () => {
    switch (animationType) {
      case 'typewriter':
        return (
          <motion.div
            className="relative inline-block"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          >
            <h1 className={`${sizeClasses[size]} font-bold relative overflow-hidden inline-block`}>
              {title}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0" />
            </h1>
          </motion.div>
        );

      case 'stagger':
        return (
          <div className="flex flex-wrap justify-center gap-x-2">
            {words.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: wordIndex * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
                className={`inline-block ${highlightWords.includes(word) ? 
                  'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' : 
                  ''}`}
              >
                {word}
              </motion.span>
            ))}
          </div>
        );

      case 'reveal':
        return (
          <div className="relative overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              viewport={{ once: true }}
              className={`${sizeClasses[size]} font-bold relative`}
            >
              {title}
            </motion.h1>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ x: '-100%' }}
              whileInView={{ x: '100%' }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
              viewport={{ once: true }}
            />
          </div>
        );

      default:
        return (
          <motion.h1
            initial={animationType === 'slide' ? { opacity: 0, y: 40 } : { opacity: 0 }}
            whileInView={animationType === 'slide' ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className={`${sizeClasses[size]} font-bold`}
          >
            {title.split(' ').map((word, index) => (
              <span
                key={index}
                className={highlightWords.includes(word) ? 
                  'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent' : 
                  ''}
              >
                {word}{' '}
              </span>
            ))}
          </motion.h1>
        );
    }
  };

  return (
    <div className={`${alignClasses[align]} ${className} mb-12 md:mb-16`}>
      {/* Title Container */}
      <div className="relative inline-block">
        {renderTitle()}
        
        {/* Animated underline */}
        {withUnderline && (
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mt-4"
          />
        )}

        {/* Decorative elements */}
        {variant === 'hero' && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.2, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ once: true }}
              className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500 rounded-full blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.2, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-4 w-10 h-10 bg-purple-500 rounded-full blur-xl"
            />
          </>
        )}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className={`mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed ${
            align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'
          }`}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative line */}
      {variant === 'split' && (
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-8 max-w-2xl mx-auto"
        />
      )}
    </div>
  );
}