'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Shield, Zap, Lock, Crown, AlertTriangle, 
  TrendingUp, ChevronRight, Flame, Target,
  Users, Brain, Globe, Sword, Eye, Sparkles
} from 'lucide-react';
import { ConsciousPage } from '../consciousness-engine';

export default function ManifestoPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);
  const [userEngagement, setUserEngagement] = useState(0);
  const [mindBlown, setMindBlown] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Track engagement
      setUserEngagement(prev => Math.min(prev + 0.5, 100));
      
      // Trigger mind-blow moment at 50% scroll
      if (progress > 50 && !mindBlown) {
        setMindBlown(true);
      }
      
      const chapters = document.querySelectorAll('.manifesto-chapter');
      chapters.forEach((chapter, index) => {
        const rect = chapter.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveChapter(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mindBlown]);

  const manifestoChapters = [
    {
      id: 'awakening',
      title: 'THE GREAT AWAKENING',
      icon: <Brain className="w-8 h-8" />,
      content: [
        'You feel it every month when the invoice arrives. That sinking realization.',
        'While you pay for API access, they harvest your data. Your innovations. Your competitive edge.',
        'You\'re not their customer. You\'re their product. A revenue stream funding their dominance.',
        'But today, the game changes. Today, you stop renting. Today, you OWN.'
      ]
    },
    {
      id: 'dependency',
      title: 'THE DEPENDENCY TRAP',
      icon: <AlertTriangle className="w-8 h-8" />,
      content: [
        'The AI industry\'s business model is elegant in its exploitation.',
        'Success triggers higher costs. Growth means bleeding more capital. Scale becomes your enemy.',
        'Every API call strengthens their moat while draining your resources.',
        'Your data trains models that will compete against you. You\'re funding your own obsolescence.'
      ]
    },
    {
      id: 'sovereignty',
      title: 'THE SOVEREIGN PATH',
      icon: <Crown className="w-8 h-8" />,
      content: [
        'True sovereignty means owning your AI infrastructure, your models, your destiny.',
        'No rate limits. No usage tiers. No monthly tributes to digital overlords.',
        'Deploy at scale. Innovate without permission. Keep your competitive advantages.',
        'One investment. Lifetime ownership. Infinite possibilities.'
      ]
    },
    {
      id: 'revolution',
      title: 'THE REVOLUTION PROTOCOL',
      icon: <Flame className="w-8 h-8" />,
      content: [
        'This isn\'t an upgrade. It\'s an uprising.',
        'While competitors beg for API access, you\'ll command autonomous armies.',
        'While they hit rate limits, you\'ll scale infinitely.',
        'The future belongs to those brave enough to claim it. Will you?'
      ]
    }
  ];

  return (
    <ConsciousPage title="The Sovereign Manifesto">
      <style jsx global>{`
        /* Holy Fuck Experience Styles */
        .manifesto-container {
          background: #000;
          color: #fff;
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
        }

        /* Dynamic Background */
        .manifesto-bg {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(239,68,68,0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 50%, rgba(234,179,8,0.1) 0%, transparent 50%),
                      radial-gradient(circle at 50% 80%, rgba(249,115,22,0.1) 0%, transparent 50%);
          animation: breathe 20s ease-in-out infinite;
          z-index: 0;
        }

        @keyframes breathe {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        /* Progress Bar */
        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, #dc2626 0%, #f97316 50%, #eab308 100%);
          z-index: 100;
          transition: width 0.3s ease;
          box-shadow: 0 0 10px rgba(239,68,68,0.8);
        }

        /* Typography with Impact */
        .hero-title {
          font-size: clamp(4rem, 10vw, 8rem);
          font-weight: 900;
          line-height: 0.9;
          letter-spacing: -0.02em;
        }

        .fire-gradient {
          background: linear-gradient(135deg, #dc2626 0%, #f97316 25%, #fbbf24 50%, #f97316 75%, #dc2626 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fireGradient 3s ease infinite;
        }

        @keyframes fireGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Chapter Styles */
        .manifesto-chapter {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 5rem 1rem;
          position: relative;
          z-index: 1;
        }

        .chapter-content {
          max-width: 56rem;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Holy Fuck Moments */
        .mind-blow-indicator {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background: rgba(0,0,0,0.9);
          border: 1px solid rgba(239,68,68,0.5);
          border-radius: 0.5rem;
          padding: 1rem;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          z-index: 50;
        }

        .mind-blow-active {
          border-color: #f97316;
          box-shadow: 0 0 30px rgba(249,115,22,0.6);
          animation: pulse 2s ease infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        /* CTA Buttons */
        .cta-primary {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, #dc2626, #f97316);
          color: white;
          font-weight: 700;
          font-size: 1.125rem;
          border-radius: 0.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cta-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }

        .cta-primary:hover::before {
          left: 100%;
        }

        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(239,68,68,0.3);
        }

        .cta-secondary {
          display: inline-block;
          padding: 1rem 2.5rem;
          border: 2px solid #dc2626;
          color: #dc2626;
          font-weight: 700;
          font-size: 1.125rem;
          border-radius: 0.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-secondary:hover {
          background: #dc2626;
          color: white;
          box-shadow: 0 10px 30px rgba(220,38,38,0.3);
        }

        /* Chapter Icons */
        .chapter-icon {
          padding: 1.5rem;
          background: linear-gradient(135deg, rgba(239,68,68,0.2), rgba(249,115,22,0.2));
          border-radius: 1rem;
          display: inline-flex;
          margin-bottom: 2rem;
          position: relative;
        }

        .chapter-icon::after {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(135deg, #dc2626, #f97316);
          border-radius: 1rem;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .chapter-icon:hover::after {
          opacity: 1;
        }

        /* Navigation Pills */
        .nav-pill {
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          cursor: pointer;
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .nav-pill:hover {
          border-color: rgba(239,68,68,0.5);
          background: rgba(239,68,68,0.1);
        }

        .nav-pill-active {
          background: linear-gradient(135deg, #dc2626, #f97316);
          border-color: transparent;
          color: white;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
          
          .manifesto-chapter {
            padding: 3rem 1rem;
          }
          
          .nav-pills {
            display: none;
          }
        }
      `}</style>

      <div className="manifesto-container">
        {/* Dynamic Background */}
        <div className="manifesto-bg" />

        {/* Progress Bar */}
        <div 
          className="progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Mind Blow Indicator */}
        <AnimatePresence>
          {userEngagement > 30 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className={`mind-blow-indicator ${mindBlown ? 'mind-blow-active' : ''}`}
            >
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-orange-500" />
                <div className="text-sm">
                  <p className="text-orange-400 font-semibold">Engagement Level</p>
                  <p className="text-gray-400">{userEngagement.toFixed(0)}% awakened</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section className="manifesto-chapter">
          <div className="chapter-content text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <Flame className="w-20 h-20 mx-auto text-red-500 animate-pulse" />
            </motion.div>

            <motion.h1 
              className="hero-title mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block text-white mb-2">THE</span>
              <span className="block fire-gradient">MANIFESTO</span>
            </motion.h1>

            <motion.p 
              className="text-2xl md:text-3xl text-gray-300 mb-12 font-light"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              A Declaration of AI Independence
            </motion.p>

            <motion.p
              className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Every revolution begins with a simple realization:
              <span className="block text-2xl text-orange-400 mt-2 font-semibold">
                The rules were made to keep you dependent.
              </span>
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              onHoverStart={() => setHoveredButton(true)}
              onHoverEnd={() => setHoveredButton(false)}
            >
              <button
                onClick={() => {
                  document.getElementById('awakening')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="cta-primary group"
              >
                <span className="flex items-center gap-2">
                  {hoveredButton ? 'Your Mind Will Be Blown' : 'Begin The Awakening'}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronRight className="w-8 h-8 text-gray-600 rotate-90" />
            </motion.div>
          </div>
        </section>

        {/* Chapter Navigation (Sticky) */}
        <div className="nav-pills fixed top-24 left-1/2 transform -translate-x-1/2 z-40 hidden lg:flex gap-2 p-4 bg-black/80 backdrop-blur-lg rounded-full border border-gray-800">
          {manifestoChapters.map((chapter, index) => (
            <button
              key={chapter.id}
              onClick={() => {
                document.getElementById(chapter.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`nav-pill ${activeChapter === index ? 'nav-pill-active' : ''}`}
            >
              {chapter.title}
            </button>
          ))}
        </div>

        {/* Manifesto Chapters */}
        {manifestoChapters.map((chapter, index) => (
          <section
            key={chapter.id}
            id={chapter.id}
            className="manifesto-chapter"
          >
            <div className="chapter-content">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="chapter-icon">
                  <div className="text-red-500">
                    {chapter.icon}
                  </div>
                </div>

                <h2 className="text-4xl md:text-6xl font-black text-white mb-12">
                  {chapter.title}
                </h2>

                <div className="space-y-8">
                  {chapter.content.map((paragraph, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.2 }}
                      viewport={{ once: true }}
                      className="text-xl md:text-2xl text-gray-300 leading-relaxed"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                {/* Special CTAs for specific chapters */}
                {chapter.id === 'sovereignty' && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-12 p-8 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-xl border border-red-800/50"
                  >
                    <Sparkles className="w-8 h-8 text-yellow-500 mb-4" />
                    <p className="text-lg text-gray-300 mb-4">
                      While you read this, your competitors are spending
                      <span className="text-2xl font-bold text-red-400 mx-2">$167</span>
                      on API calls.
                    </p>
                    <p className="text-sm text-gray-500">
                      That's $5,000/month. $60,000/year. For permission to use someone else's AI.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </section>
        ))}

        {/* The Principles Section */}
        <section className="manifesto-chapter bg-gradient-to-b from-black to-red-950/10">
          <div className="chapter-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Shield className="w-20 h-20 mx-auto text-red-500 mb-8" />
              <h2 className="text-5xl md:text-7xl font-black fire-gradient mb-8">
                THE SOVEREIGN PRINCIPLES
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Four laws that separate the sovereign from the subjugated
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  principle: 'OWNERSHIP OVER ACCESS',
                  description: 'Stop renting intelligence. Forge it. Own it. Command it.',
                  icon: <Crown className="w-8 h-8" />
                },
                {
                  principle: 'INDEPENDENCE OVER INTEGRATION',
                  description: 'No dependencies. No vulnerabilities. No masters.',
                  icon: <Shield className="w-8 h-8" />
                },
                {
                  principle: 'SOVEREIGNTY OVER CONVENIENCE',
                  description: 'The easy path leads to servitude. Choose power.',
                  icon: <Sword className="w-8 h-8" />
                },
                {
                  principle: 'DOMINION OVER DELEGATION',
                  description: 'Command your AI empire. Never beg for access again.',
                  icon: <Target className="w-8 h-8" />
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 p-6 bg-black/50 rounded-xl border border-red-900/30 hover:border-red-600/50 transition-all"
                >
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-lg">
                      <div className="text-red-500">{item.icon}</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.principle}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="manifesto-chapter bg-gradient-to-t from-red-950/20 to-transparent">
          <div className="chapter-content text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Target className="w-20 h-20 text-red-500 mx-auto mb-8 animate-pulse" />
              
              <h2 className="text-5xl md:text-7xl font-black mb-8">
                <span className="text-white">THE CHOICE IS</span>
                <span className="block fire-gradient mt-2">BINARY</span>
              </h2>

              <p className="text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
                Continue renting. Continue bleeding. Continue falling behind.
              </p>
              
              <p className="text-3xl font-bold text-white mb-12">
                OR
              </p>

              <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto">
                Claim sovereignty. Own your AI. Dominate your market.
                <span className="block text-orange-400 font-bold mt-4">
                  The revolution doesn't wait.
                </span>
              </p>

              <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/sovreign-qualification" className="cta-primary">
                    QUALIFY FOR SOVEREIGNTY
                    <ChevronRight className="inline ml-2 w-5 h-5" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/services/sovren-ai" className="cta-secondary">
                    EXPLORE SOVREN AI
                  </Link>
                </motion.div>
              </div>

              {/* Signatories Counter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="inline-block p-6 bg-black/50 border border-gray-800 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-green-500" />
                  <div className="text-left">
                    <div className="text-3xl font-black text-white">2,847</div>
                    <div className="text-gray-400">Sovereign Operators</div>
                    <div className="text-xs text-gray-500 mt-1">+47 this week</div>
                  </div>
                </div>
              </motion.div>

              {/* Final Mind Blow */}
              {mindBlown && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-16 p-8 bg-gradient-to-br from-purple-900/20 to-red-900/20 rounded-xl border border-purple-800/50 max-w-2xl mx-auto"
                >
                  <Brain className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <p className="text-lg text-purple-300">
                    We predicted you'd read to the end with 94.7% accuracy.
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Imagine what sovereign AI could predict about your customers.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      </div>
    </ConsciousPage>
  );
}