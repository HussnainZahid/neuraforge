'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Cookie, 
  FileText, 
  Users, 
  Bell, 
  ChevronDown,
  CheckCircle,
  AlertCircle,
  Mail
} from 'lucide-react';

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [cookieConsent, setCookieConsent] = useState<'all' | 'essential' | 'custom'>('essential');

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleCookieConsent = (type: 'all' | 'essential' | 'custom') => {
    setCookieConsent(type);
    // In a real app, you would save this preference to localStorage or send to backend
    console.log(`Cookie consent set to: ${type}`);
  };

  const privacySections = [
    {
      id: 'introduction',
      icon: <FileText className="w-6 h-6" />,
      title: "1. Introduction",
      content: "At NeuraForge, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you interact with our services, website, and applications.",
      expandedContent: "We believe in transparency and want you to understand our data practices. This policy applies to all services offered by NeuraForge and explains your rights regarding your personal information. By using our services, you agree to the terms outlined in this policy."
    },
    {
      id: 'collection',
      icon: <Users className="w-6 h-6" />,
      title: "2. Information We Collect",
      content: "We collect information that you provide directly, such as name, email, contact details, and project requirements. We also automatically collect usage data, device information, and cookies.",
      expandedContent: (
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/30 p-4 rounded-lg">
              <h4 className="font-semibold text-primary-light mb-2">Personal Information</h4>
              <ul className="text-sm space-y-1">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Name & Contact details</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Email address</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Company information</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Payment information</li>
              </ul>
            </div>
            <div className="bg-gray-800/30 p-4 rounded-lg">
              <h4 className="font-semibold text-primary-light mb-2">Automated Collection</h4>
              <ul className="text-sm space-y-1">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Usage analytics</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Device information</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Cookies & tracking data</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> IP addresses</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-400">We only collect information necessary to provide our services and enhance your experience.</p>
        </div>
      )
    },
    {
      id: 'usage',
      icon: <Eye className="w-6 h-6" />,
      title: "3. How We Use Your Information",
      content: "Your information helps us deliver services, improve user experience, communicate updates, and ensure legal compliance.",
      expandedContent: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-blue-400">Primary Purposes</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Providing and maintaining our services</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Processing transactions and payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Customer support and communication</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-purple-400">Secondary Purposes</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Service improvement and development</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Marketing and promotional communications (with consent)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Legal compliance and fraud prevention</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-400 italic">We never sell your personal information to third parties.</p>
        </div>
      )
    },
    {
      id: 'sharing',
      icon: <Users className="w-6 h-6" />,
      title: "4. Information Sharing & Disclosure",
      content: "We only share information with trusted partners for operational purposes or when required by law.",
      expandedContent: (
        <div className="space-y-4">
          <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-800/30">
            <h4 className="font-semibold text-blue-400 mb-2">When We Share Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div className="bg-gray-800/40 p-3 rounded">
                <div className="font-medium mb-1">Service Providers</div>
                <div className="text-gray-400">Trusted partners who assist in delivering our services</div>
              </div>
              <div className="bg-gray-800/40 p-3 rounded">
                <div className="font-medium mb-1">Legal Requirements</div>
                <div className="text-gray-400">When required by law or to protect our rights</div>
              </div>
              <div className="bg-gray-800/40 p-3 rounded">
                <div className="font-medium mb-1">Business Transfers</div>
                <div className="text-gray-400">In connection with mergers or acquisitions</div>
              </div>
            </div>
          </div>
          <div className="bg-red-900/10 p-4 rounded-lg border border-red-800/20">
            <h4 className="font-semibold text-red-400 mb-2">When We Don't Share</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400" />
                We never sell your personal data to advertisers or data brokers
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400" />
                We don't share sensitive information without explicit consent
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400" />
                We minimize data sharing to only what's necessary
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'security',
      icon: <Lock className="w-6 h-6" />,
      title: "5. Data Security",
      content: "We implement industry-standard security measures including encryption, access controls, and regular security audits.",
      expandedContent: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-800/40 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">256-bit</div>
              <div className="text-sm text-gray-300">SSL Encryption</div>
            </div>
            <div className="bg-gray-800/40 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">24/7</div>
              <div className="text-sm text-gray-300">Monitoring</div>
            </div>
            <div className="bg-gray-800/40 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">GDPR</div>
              <div className="text-sm text-gray-300">Compliant</div>
            </div>
            <div className="bg-gray-800/40 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">ISO 27001</div>
              <div className="text-sm text-gray-300">Certified</div>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-green-400">Security Measures</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                End-to-end encryption for all sensitive data
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Regular security audits and penetration testing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Multi-factor authentication for employee access
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Data anonymization where possible
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'cookies',
      icon: <Cookie className="w-6 h-6" />,
      title: "6. Cookies & Tracking Technologies",
      content: "We use cookies and similar technologies to enhance user experience, analyze usage, and support marketing efforts.",
      expandedContent: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-400 mb-2">Essential Cookies</h4>
              <p className="text-sm text-gray-300">Required for basic site functionality and security</p>
            </div>
            <div className="bg-purple-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-400 mb-2">Analytics Cookies</h4>
              <p className="text-sm text-gray-300">Help us understand how visitors interact with our site</p>
            </div>
            <div className="bg-green-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-green-400 mb-2">Preference Cookies</h4>
              <p className="text-sm text-gray-300">Remember your settings and preferences</p>
            </div>
          </div>
          <div className="bg-gray-800/30 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-2">Cookie Management</h4>
            <p className="text-sm text-gray-300 mb-3">
              You can control cookies through your browser settings. Most browsers allow you to refuse cookies or delete existing ones.
            </p>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => handleCookieConsent('all')}
                className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                  cookieConsent === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-600/50 text-blue-200 hover:bg-blue-600'
                }`}
              >
                Accept All Cookies
              </button>
              <button 
                onClick={() => handleCookieConsent('essential')}
                className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                  cookieConsent === 'essential' 
                    ? 'bg-gray-700 text-white' 
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                }`}
              >
                Essential Only
              </button>
              <button 
                onClick={() => handleCookieConsent('custom')}
                className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                  cookieConsent === 'custom' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-purple-600/50 text-purple-200 hover:bg-purple-600'
                }`}
              >
                Customize Settings
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'rights',
      icon: <Shield className="w-6 h-6" />,
      title: "7. Your Rights & Choices",
      content: "You have rights regarding your personal data, including access, correction, deletion, and data portability.",
      expandedContent: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-400">Your Rights</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  Right to access your personal data
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  Right to correct inaccurate data
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  Right to delete your data (with limitations)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  Right to data portability
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  Right to object to processing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  Right to withdraw consent
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-green-400">How to Exercise Rights</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Email us at privacy@neuraforge.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Use our Data Request Form on the Support page</span>
                </li>
                <li className="flex items-start gap-2">
                  <Bell className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Contact your account manager directly</span>
                </li>
              </ul>
              <div className="bg-gray-800/40 p-3 rounded text-sm">
                <p className="text-gray-300">
                  We respond to all legitimate requests within 30 days. Verification of identity may be required.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'changes',
      icon: <Bell className="w-6 h-6" />,
      title: "8. Changes to This Policy",
      content: "We may update this Privacy Policy periodically. We'll notify you of significant changes through email or site notifications.",
      expandedContent: (
        <div className="space-y-4">
          <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-800/30">
            <h4 className="font-semibold text-yellow-400 mb-2">Update Notification</h4>
            <p className="text-sm text-gray-300">
              When we make significant changes to this policy, we will:
            </p>
            <ul className="space-y-2 mt-2 text-sm">
              <li className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-yellow-400" />
                Send email notifications to registered users
              </li>
              <li className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-yellow-400" />
                Post a notice on our website for 30 days
              </li>
              <li className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-yellow-400" />
                Update the "Last Updated" date at the bottom of this page
              </li>
            </ul>
          </div>
          <div className="text-sm text-gray-400">
            <p>
              We encourage you to review this policy periodically. Continued use of our services after changes
              constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>
      )
    }
  ];

  const lastUpdated = "December 1, 2023";

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-blue-900/20 border border-blue-800/30">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">PRIVACY POLICY</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Privacy & Data Protection
          </h1>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-6">
            Your privacy is our priority. This policy explains how NeuraForge collects, uses, and protects your personal information.
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg">
            <span className="text-sm text-gray-400">Last Updated:</span>
            <span className="text-sm font-medium text-white">{lastUpdated}</span>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: "Data Protection", value: "GDPR Compliant" },
            { label: "Encryption", value: "256-bit SSL" },
            { label: "Response Time", value: "< 30 days" },
            { label: "No Data Selling", value: "Guaranteed" }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700"
            >
              <div className="text-lg font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Privacy Policy Sections */}
        <div className="space-y-4 mb-12">
          {privacySections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-gray-800/20 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-all"
            >
              <div className="w-full">
                {/* Section Header - Now a div instead of button to avoid nesting */}
                <div 
                  onClick={() => toggleSection(section.id)}
                  className="w-full text-left p-6 flex justify-between items-start gap-4 hover:bg-gray-800/10 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center text-blue-400">
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-white mb-2">
                        {section.title}
                      </h2>
                      <p className="text-gray-300">
                        {section.content}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{ rotate: activeSection === section.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-300" />
                    </motion.div>
                  </div>
                </div>
                
                {/* Expanded Content */}
                {activeSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-gray-700">
                        <div className="text-gray-300">
                          {section.expandedContent}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-gray-700"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Questions About Privacy?</h2>
              </div>
              <p className="text-gray-300 max-w-2xl">
                If you have any questions about this Privacy Policy or how we handle your data,
                please don't hesitate to reach out to our Data Protection Officer.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-center flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </a>
              <a
                href="/support"
                className="px-6 py-3 bg-gray-800 text-gray-300 font-medium rounded-lg hover:bg-gray-700 transition-colors text-center border border-gray-700"
              >
                Support Center
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-gray-800"
        >
          <div className="text-center text-sm text-gray-400">
            <p>
              This Privacy Policy is effective as of {lastUpdated}. NeuraForge is committed to 
              protecting your privacy and complying with global data protection regulations 
              including GDPR, CCPA, and other applicable laws.
            </p>
            <p className="mt-2">
              © {new Date().getFullYear()} NeuraForge. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}