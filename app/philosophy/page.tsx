'use client';

import { ConsciousPage } from '../../consciousness-engine';
import { Heart, Users, Zap, Shield, TrendingUp, Brain } from 'lucide-react';

export default function PhilosophyPage() {
  return (
    <ConsciousPage title="Our Philosophy">
      <div className="space-y-16">
        {/* Introduction */}
        <section className="text-center mb-12">
          <Heart className="w-20 h-20 text-red-500 mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-400 to-purple-600 bg-clip-text text-transparent mb-6">
            AI for the Ambitious, Not Just the Giants
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We believe every business owner deserves access to transformative AI technology—not just Fortune 500 companies with unlimited budgets.
          </p>
        </section>

        {/* Core Beliefs */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
            <Users className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Democratizing AI Power</h3>
            <p className="text-gray-300">
              Enterprise-level AI shouldn't require enterprise-level budgets. We're leveling the playing field so SMBs can compete with—and beat—industry giants.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
            <Shield className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Ownership, Not Dependency</h3>
            <p className="text-gray-300">
              Why rent when you can own? We believe in giving you complete control over your AI infrastructure—no monthly ransoms, no usage limits, no data mining.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/30">
            <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Growth Through Innovation</h3>
            <p className="text-gray-300">
              Your business has unique challenges and opportunities. Cookie-cutter AI solutions won't cut it. We build AI that grows with you, learns from you, and amplifies your vision.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/30">
            <Brain className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Intelligence That Compounds</h3>
            <p className="text-gray-300">
              Static AI is expensive stupidity. We create systems that learn from every interaction, getting smarter and more valuable every single day.
            </p>
          </div>
        </section>

        {/* The SMB Promise */}
        <section className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-xl p-12 border border-purple-500/30">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Promise to SMB Owners</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300">
            <p>
              We understand the reality of running a business. Every dollar matters. Every minute counts. Every decision can make or break your quarter.
            </p>
            <p>
              That's why we don't build theoretical AI. We build practical, powerful tools that solve real problems:
            </p>
            <ul className="space-y-3 ml-8">
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <span>Automate the repetitive tasks that steal 40% of your day</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <span>Predict customer needs before they even contact you</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <span>Scale your operations without scaling your headcount</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <span>Compete on intelligence, not budget</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <p className="text-2xl text-gray-300 mb-8">
            Ready to level the playing field?
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all">
            Let's Talk About Your AI Future
          </a>
        </section>
      </div>
    </ConsciousPage>
  );
}