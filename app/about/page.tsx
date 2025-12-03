'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, 
  Rocket, 
  Target, 
  Globe, 
  Award, 
  Zap,
  ChevronRight,
  Star,
  CheckCircle
} from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6"
            >
              <Rocket className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">ABOUT US</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Building the Future with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                AI & Innovation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
            >
              We transform businesses through cutting-edge AI solutions and digital innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Get Started
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-800 font-semibold rounded-lg border border-gray-300 hover:border-blue-500 transition-all"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects', icon: <Rocket className="w-6 h-6" /> },
              { number: '50+', label: 'Experts', icon: <Users className="w-6 h-6" /> },
              { number: '98%', label: 'Satisfaction', icon: <Star className="w-6 h-6" /> },
              { number: '24/7', label: 'Support', icon: <Zap className="w-6 h-6" /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="inline-flex p-3 rounded-lg bg-blue-50 text-blue-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-20" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  {/* Team Image */}
                  <div className="h-96 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Users className="w-20 h-20 text-white mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white">Our Innovative Team</h3>
                      <p className="text-blue-100">Creating tomorrow's technology today</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
                <Target className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">OUR STORY</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-6">From Vision to Reality</h2>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2019 by AI researchers, NeuraForge started with a simple mission: 
                  to make artificial intelligence accessible and impactful for businesses worldwide.
                </p>
                <p>
                  What began as a small team of passionate innovators has grown into a global 
                  technology partner, helping companies transform through intelligent solutions.
                </p>
              </div>
              
              <div className="mt-8 space-y-3">
                {[
                  'AI-Powered Solutions',
                  'Global Team of Experts',
                  'Proven Results',
                  'Client-First Approach'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4"
            >
              <Award className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">OUR PURPOSE</span>
            </motion.div>
            <h2 className="text-3xl font-bold mb-4">What Drives Us</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Our Mission',
                desc: 'To democratize AI and empower businesses with intelligent solutions that drive growth and innovation.',
                icon: <Target className="w-8 h-8" />,
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Our Vision',
                desc: 'To be the world\'s most trusted AI partner, creating technology that enhances human potential.',
                icon: <Globe className="w-8 h-8" />,
                color: 'from-purple-500 to-pink-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${item.color} mb-6`}>
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4"
            >
              <Star className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">OUR VALUES</span>
            </motion.div>
            <h2 className="text-3xl font-bold mb-4">The NeuraForge Way</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Core principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Innovation',
                desc: 'Constantly pushing boundaries to create breakthrough solutions',
                icon: <Zap className="w-6 h-6" />
              },
              {
                title: 'Integrity',
                desc: 'Building trust through transparency and ethical practices',
                icon: <CheckCircle className="w-6 h-6" />
              },
              {
                title: 'Excellence',
                desc: 'Delivering exceptional quality in everything we do',
                icon: <Award className="w-6 h-6" />
              },
              {
                title: 'Collaboration',
                desc: 'Working together to achieve shared success',
                icon: <Users className="w-6 h-6" />
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex p-3 rounded-lg bg-blue-50 text-blue-600 mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4"
            >
              <Rocket className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">OUR JOURNEY</span>
            </motion.div>
            <h2 className="text-3xl font-bold mb-4">Milestones</h2>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 h-1 bg-gray-200 top-8 hidden md:block" />
            
            <div className="grid md:grid-cols-5 gap-8">
              {[
                { year: '2019', title: 'Founded', desc: 'Started with AI research' },
                { year: '2021', title: 'Expanded', desc: 'Global team growth' },
                { year: '2022', title: 'Innovated', desc: 'AI platform launch' },
                { year: '2023', title: 'Scaled', desc: 'Enterprise partnerships' },
                { year: '2024', title: 'Leading', desc: 'Industry recognition' }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <div className="text-white font-bold">{milestone.year}</div>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{milestone.title}</h4>
                  <p className="text-gray-600 text-sm">{milestone.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-4"
          >
            <Users className="w-4 h-4" />
            <span className="text-sm font-semibold">OUR TEAM</span>
          </motion.div>
          
          <h2 className="text-3xl font-bold mb-6">Meet Our Experts</h2>
          
          <p className="text-blue-100 max-w-2xl mx-auto mb-10">
            A diverse team of AI specialists, engineers, and innovators passionate about 
            building the future.
          </p>
          
          {/* Team Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Users className="w-12 h-12 text-white/70" />
              </div>
            ))}
          </div>
          
          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transition-all"
          >
            View Full Team
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
              Join forward-thinking companies who are already leveraging our AI expertise.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all"
            >
              Start Your Project
              <ChevronRight className="w-5 h-5" />
            </Link>
            
            <p className="mt-8 text-gray-500 text-sm">
              Free consultation • No commitment • Expert guidance
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}