import { services } from '@/utils/data';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';

interface ServicePageProps {
  params: { slug: string };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return notFound();

  return (
    <main className="min-h-screen py-24 bg-[#040b17]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-white mb-4">{service.title}</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {service.description}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mt-16 bg-[#0a162b]/60 border border-gray-800 rounded-2xl p-10 backdrop-blur-lg shadow-xl"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            What We Offer
          </h2>

          <ul className="space-y-4 text-gray-300 text-[15px] leading-relaxed">
            <li>⚡ Tailored solutions designed for your business needs</li>
            <li>🚀 Proven architectures, scalability, and deployment pipelines</li>
            <li>🎯 Transparent strategies backed by measurable KPIs</li>
            <li>🤝 End-to-end engineering support and onboarding</li>
          </ul>

          <button
            className="mt-10 px-8 py-3 rounded-lg bg-primary hover:bg-primary/80 transition text-black font-semibold"
          >
            Book a Consultation →
          </button>
        </motion.div>

      </div>
    </main>
  );
}
