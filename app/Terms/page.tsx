'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  AlertCircle, 
  CheckCircle, 
  ChevronDown,
  BookOpen,
  UserCheck,
  Scale,
  Lock,
  Globe,
  Calendar,
  Mail
} from 'lucide-react';

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState<string | null>('acceptance');
  const [acceptedSections, setAcceptedSections] = useState<Set<string>>(new Set());

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  const toggleAcceptSection = (sectionId: string) => {
    setAcceptedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const acceptAllTerms = () => {
    const allIds = termsSections.map(section => section.id);
    setAcceptedSections(new Set(allIds));
  };

  const termsSections = [
    {
      id: 'acceptance',
      icon: <CheckCircle className="w-6 h-6" />,
      title: "1. Acceptance of Terms",
      summary: "By accessing or using NeuraForge services, you agree to be bound by these Terms & Conditions.",
      content: (
        <div className="space-y-4">
          <p>
            Welcome to NeuraForge. By accessing our website, applications, or services (collectively, "Services"), 
            you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions, 
            including our Privacy Policy and any additional terms that may apply.
          </p>
          <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-800/30">
            <h4 className="font-semibold text-blue-400 mb-2">Key Points:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>You must be at least 18 years old to use our Services</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>If you are using Services on behalf of an organization, you represent you have authority to bind that organization</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>These terms may be updated periodically, and continued use constitutes acceptance</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'services',
      icon: <Globe className="w-6 h-6" />,
      title: "2. Use of Services",
      summary: "You agree to use our services only for lawful purposes in accordance with all applicable laws.",
      content: (
        <div className="space-y-4">
          <p>
            You are granted a limited, non-exclusive, non-transferable license to access and use our Services 
            for their intended purposes. Your use of our Services must comply with all applicable local, state, 
            national, and international laws and regulations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-900/20 p-4 rounded-lg border border-green-800/30">
              <h4 className="font-semibold text-green-400 mb-2">Permitted Uses</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <span>Business and commercial purposes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <span>Personal and educational use</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <span>Integration with authorized third-party services</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-900/20 p-4 rounded-lg border border-red-800/30">
              <h4 className="font-semibold text-red-400 mb-2">Prohibited Uses</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 mt-0.5" />
                  <span>Illegal activities or fraudulent purposes</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 mt-0.5" />
                  <span>Attempting to disrupt or compromise system security</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 mt-0.5" />
                  <span>Spamming, phishing, or distributing malware</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'intellectual',
      icon: <BookOpen className="w-6 h-6" />,
      title: "3. Intellectual Property",
      summary: "All content, logos, and trademarks are owned by NeuraForge and protected by intellectual property laws.",
      content: (
        <div className="space-y-4">
          <p>
            All intellectual property rights in the Services, including but not limited to copyrights, patents, 
            trademarks, trade secrets, and proprietary information, are owned by NeuraForge or its licensors. 
            No rights are granted to you other than as expressly set forth in these Terms.
          </p>
          
          <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-800/30">
            <h4 className="font-semibold text-purple-400 mb-2">Protected Assets Include:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div className="bg-gray-800/40 p-3 rounded text-center">
                <div className="font-medium mb-1">Logo & Brand</div>
                <div className="text-gray-400">Trademark protected</div>
              </div>
              <div className="bg-gray-800/40 p-3 rounded text-center">
                <div className="font-medium mb-1">Source Code</div>
                <div className="text-gray-400">Copyright protected</div>
              </div>
              <div className="bg-gray-800/40 p-3 rounded text-center">
                <div className="font-medium mb-1">Design & UI</div>
                <div className="text-gray-400">Design patents</div>
              </div>
              <div className="bg-gray-800/40 p-3 rounded text-center">
                <div className="font-medium mb-1">Documentation</div>
                <div className="text-gray-400">Copyright protected</div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-800/30">
            <h4 className="font-semibold text-yellow-400 mb-2">Your Content</h4>
            <p className="text-sm text-gray-300">
              You retain ownership of any content you submit to our Services. By submitting content, 
              you grant us a worldwide, non-exclusive license to use, modify, and display that content 
              solely for providing and improving our Services.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'privacy',
      icon: <Shield className="w-6 h-6" />,
      title: "4. Privacy and Data Protection",
      summary: "We collect and process personal data in accordance with our Privacy Policy.",
      content: (
        <div className="space-y-4">
          <p>
            Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect 
            your personal information. By using our Services, you consent to our collection and use of 
            your data as described in the Privacy Policy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-400 mb-2">Data Collection</h4>
              <ul className="space-y-1 text-sm">
                <li>• Account information</li>
                <li>• Usage analytics</li>
                <li>• Technical data</li>
                <li>• Communication data</li>
              </ul>
            </div>
            
            <div className="bg-green-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-green-400 mb-2">Your Rights</h4>
              <ul className="space-y-1 text-sm">
                <li>• Access your data</li>
                <li>• Request correction</li>
                <li>• Data portability</li>
                <li>• Request deletion</li>
              </ul>
            </div>
            
            <div className="bg-purple-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-400 mb-2">Compliance</h4>
              <ul className="space-y-1 text-sm">
                <li>• GDPR compliant</li>
                <li>• CCPA compliant</li>
                <li>• Industry standards</li>
                <li>• Regular audits</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="/privacy-policy" 
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
            >
              <Shield className="w-4 h-4" />
              Read our full Privacy Policy
            </a>
          </div>
        </div>
      )
    },
    {
      id: 'liability',
      icon: <Scale className="w-6 h-6" />,
      title: "5. Limitation of Liability",
      summary: "NeuraForge is not liable for any direct, indirect, or consequential damages.",
      content: (
        <div className="space-y-4">
          <p>
            To the maximum extent permitted by law, NeuraForge and its affiliates shall not be liable for 
            any indirect, incidental, special, consequential, or punitive damages, or any loss of profits 
            or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, 
            or other intangible losses.
          </p>
          
          <div className="bg-red-900/20 p-4 rounded-lg border border-red-800/30">
            <h4 className="font-semibold text-red-400 mb-2">Important Disclaimers</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Service Availability:</strong> We do not guarantee uninterrupted or error-free operation of Services.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Third-Party Services:</strong> We are not responsible for third-party services, links, or content.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Maximum Liability:</strong> Our total liability shall not exceed the amount paid by you for Services in the past 12 months.
                </span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-800/40 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-2">Your Responsibilities</h4>
            <p className="text-sm text-gray-300">
              You are responsible for maintaining the confidentiality of your account credentials, 
              ensuring compliance with these Terms, and for all activities that occur under your account.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'termination',
      icon: <Lock className="w-6 h-6" />,
      title: "6. Termination & Suspension",
      summary: "We reserve the right to terminate or suspend access to our Services at our discretion.",
      content: (
        <div className="space-y-4">
          <p>
            We may terminate or suspend your access to our Services immediately, without prior notice or liability, 
            for any reason, including if you breach these Terms. Upon termination, your right to use the Services 
            will immediately cease.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-yellow-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-400 mb-2">User Termination Rights</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400 mt-0.5" />
                  <span>You may stop using our Services at any time</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400 mt-0.5" />
                  <span>Contact support to request account deletion</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400 mt-0.5" />
                  <span>30-day data retention period after termination</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-red-400 mb-2">Our Termination Rights</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 mt-0.5" />
                  <span>Violation of Terms or applicable laws</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 mt-0.5" />
                  <span>Security or fraud concerns</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 mt-0.5" />
                  <span>Extended account inactivity (12+ months)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'governing',
      icon: <Globe className="w-6 h-6" />,
      title: "7. Governing Law & Disputes",
      summary: "These Terms are governed by the laws of Delaware, United States.",
      content: (
        <div className="space-y-4">
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, 
            United States, without regard to its conflict of law provisions. Any disputes arising from these 
            Terms or your use of our Services shall be resolved in the state or federal courts located in Delaware.
          </p>
          
          <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-800/30">
            <h4 className="font-semibold text-blue-400 mb-2">Dispute Resolution Process</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">1. Informal Negotiation</span>
                <span className="text-blue-400">30 days</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">2. Mediation</span>
                <span className="text-blue-400">Optional</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">3. Binding Arbitration</span>
                <span className="text-blue-400">Required</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">4. Court Proceedings</span>
                <span className="text-blue-400">Last resort</span>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-gray-400">
            <p>
              We encourage you to contact us first if you have any concerns about our Services. 
              Most issues can be resolved quickly through direct communication.
            </p>
          </div>
        </div>
      )
    }
  ];

  const lastUpdated = "December 1, 2023";
  const effectiveDate = "January 1, 2024";

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
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
            <FileText className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">TERMS & CONDITIONS</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-6">
            Please read these terms carefully before using NeuraForge services. 
            By accessing our services, you agree to be bound by these terms.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg">
              <Calendar className="w-4 h-4 text-gray-400" />
              <div className="text-sm">
                <span className="text-gray-400">Effective: </span>
                <span className="font-medium">{effectiveDate}</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg">
              <Calendar className="w-4 h-4 text-gray-400" />
              <div className="text-sm">
                <span className="text-gray-400">Last Updated: </span>
                <span className="font-medium">{lastUpdated}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Acceptance Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-green-400" />
                Terms Acceptance
              </h3>
              <p className="text-gray-400 text-sm">
                Track your progress through our terms and conditions
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">
                  {acceptedSections.size}/{termsSections.length}
                </div>
                <div className="text-sm text-gray-400">Sections Accepted</div>
              </div>
              
              <button
                onClick={acceptAllTerms}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Accept All Terms
              </button>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(acceptedSections.size / termsSections.length) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              />
            </div>
            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span>0%</span>
              <span>{Math.round((acceptedSections.size / termsSections.length) * 100)}% Complete</span>
              <span>100%</span>
            </div>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-4 mb-12">
          {termsSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-all"
            >
              <div className="w-full">
                {/* Section Header */}
                <div 
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 flex justify-between items-start gap-4 hover:bg-gray-800/10 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center text-blue-400">
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-xl font-semibold text-white">
                          {section.title}
                        </h2>
                        {acceptedSections.has(section.id) && (
                          <span className="px-2 py-1 bg-green-900/30 text-green-400 text-xs font-medium rounded-full border border-green-800">
                            Accepted
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300">
                        {section.summary}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-3">
                    <motion.div
                      animate={{ rotate: activeSection === section.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-300" />
                    </motion.div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleAcceptSection(section.id);
                      }}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        acceptedSections.has(section.id)
                          ? 'bg-green-600/20 text-green-400 border border-green-800'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {acceptedSections.has(section.id) ? '✓ Accepted' : 'Accept'}
                    </button>
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
                        <div className="text-gray-300 space-y-4">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Acceptance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-gray-700 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Ready to Continue?</h2>
              <p className="text-gray-300">
                By accepting these terms, you acknowledge that you have read, understood, 
                and agree to be bound by the NeuraForge Terms & Conditions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={acceptAllTerms}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Accept All & Continue
              </button>
              <a
                href="/contact"
                className="px-6 py-3 bg-gray-800 text-gray-300 font-medium rounded-lg hover:bg-gray-700 transition-colors text-center border border-gray-700"
              >
                Questions? Contact Us
              </a>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-gray-400"
        >
          <p>
            These Terms & Conditions constitute the entire agreement between you and NeuraForge regarding 
            your use of our Services. If any provision is found to be unenforceable, the remaining provisions 
            will remain in full force and effect.
          </p>
          <p className="mt-4">
            For any questions regarding these terms, please contact us at{' '}
            <a href="mailto:legal@neuraforge.com" className="text-blue-400 hover:text-blue-300">
              legal@neuraforge.com
            </a>
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} NeuraForge. All rights reserved.
          </p>
        </motion.div>
      </div>
    </main>
  );
}