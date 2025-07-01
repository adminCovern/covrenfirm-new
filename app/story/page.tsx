'use client';

import { ConsciousPage } from '../../consciousness-engine';
import { BookOpen, Lightbulb, Rocket, Target, Award, Users } from 'lucide-react';

export default function StoryPage() {
  return (
    <ConsciousPage title="Our Story">
      <div className="space-y-16">
        {/* Hero */}
        <section className="text-center mb-12">
          <BookOpen className="w-20 h-20 text-blue-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
            Born from Frustration, Built for Freedom
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The story of how we decided to stop accepting the status quo and start building the future SMBs deserve.
          </p>
        </section>

        {/* The Journey */}
        <section className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Chapter 1 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">The Breaking Point</h3>
                <p className="text-gray-300 mb-4">
                  We watched too many brilliant SMB owners struggle with the same problem: They knew AI could transform their business, but every solution was either:
                </p>
                <ul className="space-y-2 text-gray-400 ml-6">
                  <li>• Too expensive ($10k+/month for basic functionality)</li>
                  <li>• Too complex (requiring dedicated IT teams)</li>
                  <li>• Too limiting (cookie-cutter solutions that didn't fit)</li>
                  <li>• Too dependent (monthly API fees that scaled with success)</li>
                </ul>
              </div>
            </div>

            {/* Chapter 2 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">The Realization</h3>
                <p className="text-gray-300">
                  The AI industry wasn't built for small and medium businesses—it was built to extract value from them. Every "solution" created new dependencies, new monthly bills, new limitations. We realized that true AI sovereignty meant ownership, not access.
                </p>
              </div>
            </div>

            {/* Chapter 3 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">The Mission</h3>
                <p className="text-gray-300">
                  We founded Covren Firm with a simple but radical mission: Give SMBs the same AI superpowers as billion-dollar corporations—but at a fraction of the cost and without the dependencies. Not through cheaper subscriptions, but through actual ownership.
                </p>
              </div>
            </div>

            {/* Chapter 4 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Today & Tomorrow</h3>
                <p className="text-gray-300">
                  We're not just building AI solutions—we're building a movement. A future where every ambitious business owner has access to intelligence that compounds, infrastructure they own, and capabilities that evolve. Where David doesn't just compete with Goliath—David wins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-12 border border-blue-500/30">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What Drives Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">SMB-First Thinking</h3>
              <p className="text-gray-300">
                Every decision starts with "How does this help SMB owners win?"
              </p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Excellence Without Elitism</h3>
              <p className="text-gray-300">
                Enterprise-grade quality shouldn't require enterprise budgets.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Partnership, Not Vendor</h3>
              <p className="text-gray-300">
                Your success is our success. We grow when you grow.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <p className="text-2xl text-gray-300 mb-8">
            Ready to write the next chapter together?
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all">
            Join the AI Revolution
          </a>
        </section>
      </div>
    </ConsciousPage>
  );
}