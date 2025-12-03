'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle, MessageCircle, Clock, Users, CheckCircle } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    category: "Services",
    question: "What services does NeuraForge provide?",
    answer: "NeuraForge offers comprehensive digital solutions including custom web & mobile app development, AI & machine learning solutions, SEO & digital marketing strategy, and intelligent automation systems.",
  },
  {
    id: 2,
    category: "Pricing",
    question: "How can I request a quote for my project?",
    answer: "You can request a quote through our Contact page form, schedule a consultation call, or email us directly at hello@neuraforge.com. We respond within 24 hours with a detailed estimate.",
  },
  {
    id: 3,
    category: "Support",
    question: "Do you offer support after project completion?",
    answer: "Yes! We provide three support tiers: Basic (30-day bug fixes), Standard (6-month maintenance), and Premium (ongoing support with quarterly updates).",
  },
  {
    id: 4,
    category: "Technology",
    question: "Can NeuraForge handle AI and deep learning projects?",
    answer: "Absolutely. Our team specializes in machine learning, deep learning, NLP, computer vision, and custom AI integration for businesses of all sizes.",
  },
  {
    id: 5,
    category: "Process",
    question: "What is the estimated project timeline?",
    answer: "Timelines vary: MVP (4-8 weeks), Mid-scale (2-4 months), Enterprise (4-6+ months). We provide a detailed roadmap after the discovery phase.",
  },
  {
    id: 6,
    category: "Technology",
    question: "What technologies do you specialize in?",
    answer: "We work with React, Next.js, Node.js, Python, TensorFlow, React Native, PostgreSQL, AWS, and other modern technologies.",
  },
  {
    id: 7,
    category: "Pricing",
    question: "What is your pricing model?",
    answer: "We offer flexible pricing: Fixed Price, Time & Material, Dedicated Team, or Milestone-based payments. All quotes include transparent breakdowns.",
  },
  {
    id: 8,
    category: "Process",
    question: "How does the onboarding process work?",
    answer: "Our onboarding includes: 1) Discovery Call 2) Strategy Session 3) Proposal & Roadmap 4) Kickoff Meeting. We ensure complete alignment before starting.",
  },
];

const categories = ["All", "Services", "Pricing", "Support", "Technology", "Process"];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredFAQs, setFilteredFAQs] = useState<FAQItem[]>(faqData);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter FAQs based on category and search query
  useEffect(() => {
    let filtered = faqData;
    
    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item => 
        item.question.toLowerCase().includes(query) || 
        item.answer.toLowerCase().includes(query)
      );
    }
    
    setFilteredFAQs(filtered);
    
    // Auto-open first FAQ if none is open
    if (filtered.length > 0 && !filtered.some(item => item.id === openIndex)) {
      setOpenIndex(filtered[0].id);
    }
  }, [selectedCategory, searchQuery, openIndex]);

  const toggleFAQ = (id: number) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const clearFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const stats = [
    { icon: <HelpCircle className="w-5 h-5" />, value: faqData.length.toString(), label: "FAQs" },
    { icon: <Clock className="w-5 h-5" />, value: "24h", label: "Avg. Response" },
    { icon: <Users className="w-5 h-5" />, value: "100%", label: "Satisfaction" },
    { icon: <CheckCircle className="w-5 h-5" />, value: "50+", label: "Projects" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services, pricing, and processes.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700"
            >
              <div className="flex justify-center mb-2 text-blue-400">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                ×
              </button>
            )}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
            {(selectedCategory !== "All" || searchQuery) && (
              <button
                onClick={clearFilters}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-700 text-gray-300 hover:bg-gray-600 transition-all"
              >
                Clear Filters
              </button>
            )}
          </div>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-all"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full text-left p-6 flex justify-between items-start gap-4 hover:bg-gray-800/20 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-blue-900/30 text-blue-400 text-xs font-medium rounded-full border border-blue-800">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.question}
                    </h3>
                    
                    <AnimatePresence>
                      {openIndex === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-2 border-t border-gray-700">
                            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: openIndex === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-300" />
                  </motion.div>
                </button>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 bg-gray-800/30 rounded-xl border border-gray-700"
            >
              <Search className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
              <p className="text-gray-400 mb-4">
                No FAQs match your search "{searchQuery}" in {selectedCategory} category
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-gray-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-6 h-6 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">Still need help?</h2>
                </div>
                <p className="text-gray-300">
                  Can't find the answer you're looking for? Our support team is here to help.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Contact Support
                </a>
                <a
                  href="/schedule"
                  className="px-6 py-3 bg-gray-800 text-gray-300 font-medium rounded-lg hover:bg-gray-700 transition-colors text-center border border-gray-700"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8"
        >
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="font-medium">Tip:</span>
            <span>Click on any question to expand the answer. Use the search bar to find specific topics.</span>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default FAQPage;