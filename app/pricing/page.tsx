'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      monthly: 29,
      yearly: 290,
      features: [
        'Basic AI analysis',
        'Email support',
        'Limited API credits',
        'Community access',
      ],
    },
    {
      name: 'Pro',
      monthly: 99,
      yearly: 990,
      features: [
        'Advanced AI analytics',
        'Priority support',
        'Unlimited API credits',
        'Automation suite',
      ],
      highlight: true,
    },
    {
      name: 'Enterprise',
      monthly: 399,
      yearly: 3990,
      features: [
        'Custom AI model training',
        '24/7 support',
        'Dedicated engineers',
        'On-prem or cloud deployment',
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-[#030914] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center"
        >
          Pricing Plans
        </motion.h1>

        <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
          Scale your business with intelligent AI-driven solutions. Choose the plan that fits your ambition.
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setYearly(!yearly)}
            className="bg-black/40 border border-gray-700 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            Billed {yearly ? 'Yearly (Save 2 months)' : 'Monthly'}
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-xl border ${
                plan.highlight ? 'border-primary bg-primary/10 shadow-xl' : 'border-gray-800 bg-[#0a162b]'
              } p-8 space-y-6`}
            >
              <h3 className="text-3xl font-semibold">{plan.name}</h3>

              <p className="text-5xl font-bold">
                ${yearly ? plan.yearly : plan.monthly}
                <span className="text-gray-400 text-xl font-normal">
                  /{yearly ? 'yr' : 'mo'}
                </span>
              </p>

              <ul className="space-y-3 pt-4">
                {plan.features.map((feature, idx) => (
                  <li className="flex items-center gap-3" key={idx}>
                    <Check size={20} className="text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-primary text-black rounded-md font-semibold hover:scale-105 transition-transform">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
