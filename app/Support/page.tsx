'use client';

import { useState, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  Clock, 
  User, 
  HelpCircle,
  Send,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Calendar,
  FileText,
  Shield,
  Zap
} from 'lucide-react';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [activeTab, setActiveTab] = useState<'general' | 'technical' | 'billing'>('general');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would send data to your backend here
      console.log('Form submitted:', formData);
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        priority: 'normal'
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const supportChannels = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Detailed technical queries & documentation",
      contact: "support@neuraforge.com",
      response: "Within 24 hours",
      color: "from-blue-500 to-cyan-500",
      action: "mailto:support@neuraforge.com"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      description: "Instant help for urgent issues",
      contact: "Available 9AM-6PM EST",
      response: "Immediate",
      color: "from-green-500 to-emerald-500",
      action: "#live-chat"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Direct conversation with our team",
      contact: "+1 (555) 123-4567",
      response: "Mon-Fri, 9AM-5PM EST",
      color: "from-purple-500 to-pink-500",
      action: "tel:+15551234567"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule Call",
      description: "Book a dedicated support session",
      contact: "cal.com/neuraforge",
      response: "24/7 Booking",
      color: "from-orange-500 to-red-500",
      action: "https://cal.com/neuraforge"
    }
  ];

  const faqs = {
    general: [
      { question: "How do I reset my password?", answer: "Click 'Forgot Password' on the login page or contact support for assistance." },
      { question: "Where can I find documentation?", answer: "Visit our Documentation portal at docs.neuraforge.com for all guides." },
      { question: "Do you offer training sessions?", answer: "Yes! We provide free onboarding and paid advanced training sessions." },
    ],
    technical: [
      { question: "What are your system requirements?", answer: "Our platform works on modern browsers and requires Node.js 16+ for development." },
      { question: "How do I integrate your API?", answer: "Check our API documentation at api.neuraforge.com for integration guides." },
      { question: "Is there a mobile app available?", answer: "Yes! Download our mobile app from the App Store or Google Play." },
    ],
    billing: [
      { question: "Can I upgrade my plan anytime?", answer: "Yes! You can upgrade or downgrade your plan at any time." },
      { question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, and bank transfers." },
      { question: "How do I cancel my subscription?", answer: "You can cancel anytime from your account settings. No cancellation fees." },
    ]
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-blue-900/20 border border-blue-800/30">
            <HelpCircle className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">SUPPORT CENTER</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            How Can We Help You?
          </h1>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Get instant support, browse documentation, or contact our team directly. 
            We're here to ensure your success with NeuraForge.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-300">24/7 Email Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-300">99% Satisfaction Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-300">Avg. Response: 4 hours</span>
            </div>
          </div>
        </motion.div>

        {/* Support Channels Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {supportChannels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <a
                href={channel.action}
                className={`relative bg-gradient-to-br ${channel.color} rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 border border-gray-700`}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  {channel.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                <p className="text-gray-200 text-sm mb-4">{channel.description}</p>
                
                <div className="bg-black/30 rounded-lg p-3 mb-3">
                  <div className="font-medium text-lg">{channel.contact}</div>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                  <Clock className="w-4 h-4" />
                  <span>{channel.response}</span>
                </div>
                
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/80">
                  <span>Click to connect</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - FAQ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              </div>
              
              {/* FAQ Tabs */}
              <div className="flex gap-2 mb-8">
                {(['general', 'technical', 'billing'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-lg font-medium capitalize transition-all ${
                      activeTab === tab
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              {/* FAQ List */}
              <div className="space-y-4">
                {faqs[activeTab].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gray-800/30 rounded-xl p-5 hover:bg-gray-800/50 transition-colors"
                  >
                    <h3 className="font-semibold text-lg mb-2 flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 pl-8">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Quick Resources */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h3 className="text-lg font-semibold mb-4">Quick Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a 
                    href="/docs" 
                    className="bg-gray-800/40 rounded-lg p-4 flex items-center gap-3 hover:bg-gray-800/60 transition-colors group"
                  >
                    <FileText className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-medium">Documentation</div>
                      <div className="text-sm text-gray-400">Guides & tutorials</div>
                    </div>
                  </a>
                  <a 
                    href="/api" 
                    className="bg-gray-800/40 rounded-lg p-4 flex items-center gap-3 hover:bg-gray-800/60 transition-colors group"
                  >
                    <Zap className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-medium">API Reference</div>
                      <div className="text-sm text-gray-400">Integration guides</div>
                    </div>
                  </a>
                  <a 
                    href="/security" 
                    className="bg-gray-800/40 rounded-lg p-4 flex items-center gap-3 hover:bg-gray-800/60 transition-colors group"
                  >
                    <Shield className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-medium">Security</div>
                      <div className="text-sm text-gray-400">Privacy & compliance</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold">Send us a Message</h2>
              </div>
              
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-900/20 border border-green-800/30 rounded-xl p-6 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-300 mb-4">
                    Thank you for reaching out. Our team will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Brief description of your issue"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Priority Level
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="low">Low - General inquiry</option>
                      <option value="normal">Normal - Standard support</option>
                      <option value="high">High - Urgent issue</option>
                      <option value="critical">Critical - System down</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Please describe your issue in detail..."
                    />
                  </div>
                  
                  {submitError && (
                    <div className="flex items-center gap-2 text-red-400 bg-red-900/20 p-3 rounded-lg">
                      <AlertCircle className="w-5 h-5" />
                      <span>{submitError}</span>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-sm text-gray-400 mt-4">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy" className="text-blue-400 hover:text-blue-300">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Support Hours & Service Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <Clock className="w-6 h-6 text-blue-400" />
              Support Hours
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium">9:00 AM - 6:00 PM EST</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium">10:00 AM - 4:00 PM EST</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium">Emergency Support Only</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              System Status
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>All Systems Operational</span>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-400 font-medium">Normal</span>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                Last updated: Just now
              </div>
              <a 
                href="/status" 
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm"
              >
                View detailed status
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-purple-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/docs" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Knowledge Base
                </a>
              </li>
              <li>
                <a href="/community" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Community Forum
                </a>
              </li>
              <li>
                <a href="/video-tutorials" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Video Tutorials
                </a>
              </li>
              <li>
                <a href="/request-feature" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Request a Feature
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-gray-700"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Need Enterprise Support?</h2>
              <p className="text-gray-300">
                Get dedicated account management, 24/7 priority support, and custom SLAs for your business.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="/enterprise"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Enterprise Plans
              </a>
              <a
                href="/demo"
                className="px-6 py-3 bg-gray-800 text-gray-300 font-medium rounded-lg hover:bg-gray-700 transition-colors border border-gray-700"
              >
                Request Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}