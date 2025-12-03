'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Chatbot for E-Commerce',
    description:
      'Built a conversational AI that increased conversions by 41% through intelligent product recommendations.',
    tech: ['Next.js', 'OpenAI API', 'TailwindCSS'],
    image: '/projects/ai-chatbot.jpg',
  },
  {
    title: 'Automation for Logistics',
    description:
      'Reduced operational workload by 68% with automated scheduling and real-time route optimization.',
    tech: ['Python', 'FastAPI', 'AWS'],
    image: '/projects/logistics.jpg',
  },
  {
    title: 'SEO Intelligence Platform',
    description:
      'Developed an AI-based SEO engine that monitors competitors and delivers actionable rankings insights.',
    tech: ['React', 'Node.js', 'AI Models'],
    image: '/projects/seo-platform.jpg',
  },
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-[#030914] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Header */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center"
        >
          Case Studies & Projects
        </motion.h1>

        <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
          Explore how our AI-driven solutions are reshaping industries and solving real-world problems.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#0a162b] border border-gray-800 rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>

                <p className="text-gray-400 text-sm">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 border border-primary text-primary text-xs rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <button className="mt-4 bg-primary text-black px-4 py-2 w-full rounded-md font-semibold hover:scale-105 transition-transform">
                  View Project →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
