'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Brain, Calendar, TrendingUp, Users, Rocket, Star } from 'lucide-react'

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Brain className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Covren Firm
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Our Story
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-400"
          >
            From vision to revolution: How we're redefining what AI means for business.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {[
              {
                year: "2023",
                title: "The Realization",
                description: "Discovered that 99% of businesses were being held hostage by AI rental models.",
                icon: <Brain className="w-6 h-6" />
              },
              {
                year: "2024",
                title: "The Solution",
                description: "Developed SOVREN AI - the first truly sovereign AI platform for businesses.",
                icon: <Rocket className="w-6 h-6" />
              },
              {
                year: "2025",
                title: "The Revolution",
                description: "Empowering businesses worldwide to own their AI destiny.",
                icon: <Star className="w-6 h-6" />
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                    {event.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-cyan-400 mb-2">{event.year}</div>
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}