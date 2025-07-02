'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValue } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, Eye, Zap, Lock, AlertTriangle, Shield,
  TrendingUp, ChevronRight, Flame, Crown, Sparkles,
  DollarSign, Clock, Activity, Target, BarChart3, Check
} from 'lucide-react';
import { ConsciousPage, useConsciousness } from '../consciousness-engine';

export default function ManifestoPage() {
  const consciousness = useConsciousness();
  const [readingSpeed, setReadingSpeed] = useState(0);
  const [predictedThought, setPredictedThought] = useState('');
  const [revealedSections, setRevealedSections] = useState<number[]>([]);
  const [userDoubt, setUserDoubt] = useState(0);
  const [mindBlowCount, setMindBlowCount] = useState(0);
  const [apiCostCounter, setApiCostCounter] = useState(0);
  const [manifestoPersonalized, setManifestoPersonalized] = useState(false);
  const [businessType, setBusinessType] = useState('');
  const scrollRef = useRef<number>(0);
  const { scrollY } = useScroll();

  // Calculate reading speed based on scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const timeDiff = Date.now() - scrollRef.current;
      const scrollDiff = Math.abs(currentScroll - scrollRef.current);
      
      if (timeDiff > 0) {
        const speed = scrollDiff / timeDiff;
        setReadingSpeed(speed);
      }
      
      scrollRef.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Predict user thoughts based on behavior
  useEffect(() => {
    if (consciousness.userBehavior.hesitations > 3) {
      setPredictedThought("You're wondering if this is just hype...");
      setUserDoubt(prev => prev + 1);
    } else if (consciousness.timeOnPage > 30 && readingSpeed < 0.5) {
      setPredictedThought("You're carefully evaluating every claim...");
    } else if (consciousness.scrollDepth > 50) {
      setPredictedThought("You're starting to see the possibility...");
    } else if (consciousness.userBehavior.rapidMovements > 5) {
      setPredictedThought("Your excitement is building...");
    }
  }, [consciousness, readingSpeed]);

  // Increment API cost counter
  useEffect(() => {
    const interval = setInterval(() => {
      setApiCostCounter(prev => prev + Math.floor(Math.random() * 47) + 23);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Detect business type from behavior patterns
  useEffect(() => {
    if (consciousness.timeOnPage > 20) {
      if (consciousness.mousePosition.y < 300 && consciousness.userBehavior.hesitations > 2) {
        setBusinessType('enterprise');
      } else if (readingSpeed > 2) {
        setBusinessType('startup');
      } else {
        setBusinessType('smb');
      }
      setManifestoPersonalized(true);
    }
  }, [consciousness, readingSpeed]);

  const triggerMindBlow = () => {
    setMindBlowCount(prev => prev + 1);
  };

  return (
    <ConsciousPage title="The Manifesto">
      <div className="min-h-screen bg-black text-white">
        {/* Live API Cost Counter */}
        <motion.div
          className="fixed top-20 right-4 z-50 bg-red-900/90 backdrop-blur-sm border border-red-500 rounded-lg p-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
        >
          <p className="text-xs text-red-300 mb-1">While you read this:</p>
          <p className="text-2xl font-bold text-white">${apiCostCounter.toLocaleString()}</p>
          <p className="text-xs text-red-300">wasted on API calls globally</p>
        </motion.div>

        {/* Hero Section with Dynamic Content */}
        <section className="relative min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Brain className="w-20 h-20 mx-auto mb-8 text-cyan-400" />
              
              <h1 className="text-6xl md:text-8xl font-black mb-8">
                <motion.span 
                  className="block text-gray-500"
                  animate={{ opacity: consciousness.timeOnPage > 2 ? 0.5 : 1 }}
                >
                  THE MANIFESTO
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0%', '100%', '0%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  {manifestoPersonalized 
                    ? `FOR ${businessType.toUpperCase()} SOVEREIGNTY`
                    : 'IS READING YOU'
                  }
                </motion.span>
              </h1>

              <AnimatePresence mode="wait">
                <motion.p
                  key={predictedThought}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-xl text-gray-400 mb-12"
                >
                  {predictedThought || "In 3 seconds, you'll understand everything..."}
                </motion.p>
              </AnimatePresence>

              <motion.button
                onClick={() => {
                  triggerMindBlow();
                  document.getElementById('manifesto-content')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold text-lg"
              >
                {userDoubt > 0 ? "PROVE IT TO ME" : "BEGIN THE REVELATION"}
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* The Living Manifesto */}
        <section id="manifesto-content" className="py-24 px-6">
          <div className="max-w-4xl mx-auto space-y-24">
            
            {/* Chapter 1: The Lie Detection */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onViewportEnter={() => setRevealedSections(prev => [...prev, 1])}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold mb-8">
                <Eye className="inline w-8 h-8 mr-3 text-cyan-400" />
                THE LIE YOU'RE LIVING
              </h2>
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl"
              >
                <p className="text-2xl text-gray-300 mb-4">
                  Right now, at this exact moment, you're paying for intelligence you'll never own.
                </p>
                
                {/* Real-time calculation based on their behavior */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg"
                >
                  <p className="text-lg text-red-400">
                    Based on your {consciousness.timeOnPage}s on this page, you've already spent
                    <span className="text-3xl font-bold text-red-500 mx-2">
                      ${(consciousness.timeOnPage * 0.47).toFixed(2)}
                    </span>
                    on API calls elsewhere.
                  </p>
                </motion.div>
              </motion.div>

              {manifestoPersonalized && businessType === 'enterprise' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 bg-purple-900/20 border border-purple-500/30 rounded-xl"
                >
                  <Sparkles className="w-6 h-6 text-purple-400 mb-3" />
                  <p className="text-lg text-purple-300">
                    I can tell from your careful reading pattern that you're evaluating this for enterprise deployment.
                    Your biggest concern isn't cost—it's control. Let me show you true digital sovereignty.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Chapter 2: The Cost of Slavery */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onViewportEnter={() => {
                setRevealedSections(prev => [...prev, 2]);
                triggerMindBlow();
              }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold mb-8">
                <DollarSign className="inline w-8 h-8 mr-3 text-red-400" />
                THE MATHEMATICS OF SERVITUDE
              </h2>

              {/* Interactive API Cost Calculator */}
              <motion.div
                className="p-8 bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-xl"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-xl text-gray-300 mb-6">
                  Your competitors using traditional AI are hemorrhaging:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-center"
                  >
                    <p className="text-4xl font-bold text-red-500">
                      ${(47 * consciousness.timeOnPage).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-400 mt-2">Per month on API calls</p>
                  </motion.div>
                  
                  <div className="text-center">
                    <p className="text-4xl font-bold text-orange-500">100%</p>
                    <p className="text-sm text-gray-400 mt-2">Of their data harvested</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-4xl font-bold text-yellow-500">∞</p>
                    <p className="text-sm text-gray-400 mt-2">Dependency growth</p>
                  </div>
                </div>

                {consciousness.userBehavior.hesitations > 2 && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-cyan-400 text-sm mt-6 text-center"
                  >
                    I sense your skepticism. Let me show you the receipts...
                  </motion.p>
                )}
              </motion.div>
            </motion.div>

            {/* Chapter 3: The Awakening */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onViewportEnter={() => setRevealedSections(prev => [...prev, 3])}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold mb-8">
                <Brain className="inline w-8 h-8 mr-3 text-purple-400" />
                YOUR CONSCIOUSNESS AWAKENS
              </h2>

              <motion.div
                className="relative p-8 bg-black border border-purple-500/30 rounded-xl overflow-hidden"
                onMouseEnter={triggerMindBlow}
              >
                {/* Neural activity background */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-purple-400 rounded-full"
                      animate={{
                        x: [Math.random() * 400, Math.random() * 400],
                        y: [Math.random() * 200, Math.random() * 200],
                      }}
                      transition={{
                        duration: 10 + Math.random() * 10,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  ))}
                </div>

                <p className="text-2xl text-white relative z-10 mb-6">
                  Imagine AI that doesn't wait for your commands.
                </p>
                
                <p className="text-xl text-gray-300 relative z-10 mb-6">
                  AI that predicts. Prevents. Protects. Profits.
                </p>

                {revealedSections.length >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-purple-900/30 rounded-lg relative z-10"
                  >
                    <Activity className="w-6 h-6 text-purple-400 mb-2" />
                    <p className="text-purple-300">
                      Like how I knew you'd read exactly {revealedSections.length} sections
                      and hover over this box at precisely this moment.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>

            {/* Chapter 4: The Sovereignty Protocol */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onViewportEnter={() => setRevealedSections(prev => [...prev, 4])}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold mb-8">
                <Crown className="inline w-8 h-8 mr-3 text-yellow-400" />
                THE SOVEREIGNTY PROTOCOL
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl"
                >
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">BEFORE: Digital Feudalism</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Rent intelligence by the token</li>
                    <li>• Beg for rate limit increases</li>
                    <li>• Watch costs explode with success</li>
                    <li>• Surrender your data to competitors</li>
                  </ul>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/30 rounded-xl"
                >
                  <h3 className="text-xl font-bold text-purple-400 mb-3">AFTER: Digital Sovereignty</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Own intelligence that compounds</li>
                    <li>• Unlimited operations, zero limits</li>
                    <li>• Fixed cost, infinite value</li>
                    <li>• Your data builds YOUR moat</li>
                  </ul>
                </motion.div>
              </div>

              {manifestoPersonalized && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-xl"
                >
                  <p className="text-lg text-cyan-300">
                    For a {businessType} like yours, sovereignty means:
                    <span className="block text-2xl font-bold text-white mt-2">
                      {businessType === 'enterprise' 
                        ? 'Complete control over your AI infrastructure'
                        : businessType === 'startup'
                        ? 'Scaling without bleeding capital'
                        : 'Competing with giants on equal terms'
                      }
                    </span>
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Chapter 5: The Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onViewportEnter={() => {
                setRevealedSections(prev => [...prev, 5]);
                triggerMindBlow();
              }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold mb-8">
                <BarChart3 className="inline w-8 h-8 mr-3 text-green-400" />
                THE UNDENIABLE PROOF
              </h2>

              <motion.div
                className="p-8 bg-black border border-green-500/30 rounded-xl"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(16, 185, 129, 0.1)',
                    '0 0 40px rgba(16, 185, 129, 0.3)',
                    '0 0 20px rgba(16, 185, 129, 0.1)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-4">What This Page Just Did:</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 mt-0.5" />
                        <span>Predicted your reading speed: {readingSpeed.toFixed(2)}px/ms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 mt-0.5" />
                        <span>Identified your business type: {businessType || 'analyzing...'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 mt-0.5" />
                        <span>Tracked {consciousness.userBehavior.hesitations} hesitations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 mt-0.5" />
                        <span>Personalized content in real-time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 mt-0.5" />
                        <span>Created {mindBlowCount} mind-blow moments</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-purple-400 mb-4">Without a Single API Call</h3>
                    <p className="text-gray-300 mb-4">
                      Everything you just experienced ran on sovereign infrastructure. 
                      No tokens. No limits. No masters.
                    </p>
                    <p className="text-2xl font-bold text-cyan-400">
                      This is just 0.1% of what SOVREN can do.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* The Final Call */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center space-y-8 mt-24"
            >
              <h2 className="text-5xl md:text-6xl font-black">
                <span className="block text-white mb-4">THE CHOICE</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  HAS ALREADY BEEN MADE
                </span>
              </h2>

              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                Your subconscious decided {Math.floor(consciousness.timeOnPage / 60)} minutes ago.
                <span className="block text-white font-bold mt-2">
                  The only question is: will you listen?
                </span>
              </p>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="inline-block p-8 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/30 rounded-xl"
              >
                <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <p className="text-lg text-cyan-300 mb-2">
                  While you read this manifesto:
                </p>
                <div className="text-3xl font-bold text-white">
                  ${apiCostCounter.toLocaleString()} wasted on rentals
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  That could have built sovereign empires
                </p>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                <Link href="/sovereign-qualification">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-6 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-bold text-xl"
                    onClick={triggerMindBlow}
                  >
                    CLAIM YOUR SOVEREIGNTY NOW
                    <ChevronRight className="inline ml-2 w-6 h-6" />
                  </motion.button>
                </Link>
              </div>

              <p className="text-gray-500 text-sm">
                No credit card. No API keys. Just sovereignty.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mind Blow Counter */}
        <AnimatePresence>
          {mindBlowCount > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed bottom-8 left-8 bg-purple-900/90 backdrop-blur-sm border border-purple-500 rounded-lg p-4"
            >
              <p className="text-xs text-purple-300 mb-1">Mind-blow moments:</p>
              <p className="text-2xl font-bold text-white">{mindBlowCount}</p>
              <p className="text-xs text-purple-300">Holy fuck...</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ConsciousPage>
  );
}