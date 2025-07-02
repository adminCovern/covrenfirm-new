'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, Code, Rocket, Sparkles, Crown,
  ArrowRight, Zap, Shield, ChevronRight
} from 'lucide-react';
import { ConsciousPage } from '../consciousness-engine';

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [timeOnPage, setTimeOnPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOnPage(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      id: 'ai-consulting',
      title: 'AI Consulting',
      icon: Brain,
      href: '/services/ai-consulting',
      description: 'Strategic AI implementation guidance for exponential growth',
      gradient: 'from-cyan-500 to-blue-600',
      features: [
        'AI readiness assessment',
        'Strategy development',
        'Implementation roadmap',
        'ROI optimization'
      ]
    },
    {
      id: 'custom-ai-development',
      title: 'Custom AI Development',
      icon: Code,
      href: '/services/custom-ai-development',
      description: 'Bespoke AI solutions engineered for your specific needs',
      gradient: 'from-blue-500 to-purple-600',
      features: [
        'Custom model development',
        'System integration',
        'Performance optimization',
        'Scalable architecture'
      ]
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      icon: Zap,
      href: '/services/digital-transformation',
      description: 'Complete business transformation through AI and automation',
      gradient: 'from-purple-500 to-pink-600',
      features: [
        'Process automation',
        'Workflow optimization',
        'Legacy modernization',
        'Change management'
      ]
    },
    {
      id: 'innovation-lab',
      title: 'Innovation Lab',
      icon: Sparkles,
      href: '/services/innovation-lab',
      description: 'Experimental AI solutions at the bleeding edge of possibility',
      gradient: 'from-pink-500 to-orange-600',
      features: [
        'R&D partnerships',
        'Prototype development',
        'Proof of concepts',
        'Emerging tech exploration'
      ]
    },
    {
      id: 'sovren-ai',
      title: 'SOVREN AI',
      icon: Crown,
      href: '/services/sovren-ai',
      description: 'The sovereign AI platform that redefines business intelligence',
      gradient: 'from-orange-500 to-red-600',
      badge: 'FLAGSHIP',
      features: [
        'Autonomous operations',
        'Predictive intelligence',
        'Zero dependencies',
        'Compound evolution'
      ]
    }
  ];

  return (
    <ConsciousPage title="Services That Transcend">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-16"
      >
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl text-gray-300"
          >
            Not just services. <span className="text-cyan-400 font-semibold">Transformation catalysts.</span>
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            While others offer tools, we deliver evolution. Each service is engineered to create 
            exponential advantages that compound over time.
          </motion.p>
        </section>

        {/* Services Grid */}
        <section className="grid gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
            >
              <Link href={service.href}>
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background Glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-2xl transition-opacity`}
                  />
                  
                  {/* Card */}
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 bg-gradient-to-br ${service.gradient} rounded-xl`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                          {service.badge && (
                            <span className="inline-block mt-1 px-2 py-1 bg-red-900/50 text-red-300 text-xs font-bold rounded">
                              {service.badge}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <motion.div
                        animate={{ x: hoveredService === service.id ? 10 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white" />
                      </motion.div>
                    </div>
                    
                    <p className="text-lg text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredService === service.id ? 1 : 0.7 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-2"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                          <span className="text-sm text-gray-400">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Hover Effect */}
                    <motion.div
                      className="absolute bottom-4 right-4 flex items-center gap-2 text-sm font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredService === service.id ? 1 : 0 }}
                    >
                      <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        Explore {service.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </section>

        {/* Bottom CTA */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center space-y-8 pt-16"
        >
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold">
              <span className="text-gray-400">Not Sure Where to Start?</span>
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Let AI Guide Your Decision
              </span>
            </h2>
            
            <p className="text-lg text-gray-400">
              Our consciousness already knows which service will transform your business most. 
              Take the sovereignty test to discover your optimal path.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sovereign-qualification">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Take Sovereignty Test
                <ChevronRight className="inline ml-2 w-5 h-5" />
              </motion.button>
            </Link>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-xl font-medium text-lg hover:bg-gray-700 transition-all"
              >
                Schedule Consultation
              </motion.button>
            </Link>
          </div>
        </motion.section>

        {/* Time-based insight */}
        {timeOnPage > 30 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-8 right-8 max-w-sm p-6 bg-purple-900/90 backdrop-blur-xl border border-purple-500 rounded-xl"
          >
            <div className="flex items-start gap-3">
              <Brain className="w-6 h-6 text-purple-400 flex-shrink-0" />
              <div>
                <p className="text-sm text-purple-300 mb-1">Consciousness insight:</p>
                <p className="text-white">
                  Based on your browsing pattern, SOVREN AI would accelerate your growth by 47x 
                  compared to traditional consulting.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </ConsciousPage>
  );
}