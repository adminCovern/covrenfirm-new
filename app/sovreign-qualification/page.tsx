'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Shield, Zap, Lock, Crown, AlertTriangle, CheckCircle,
  XCircle, ArrowRight, Brain, Target, TrendingUp, 
  AlertOctagon, Gauge, Trophy, Sparkles
} from 'lucide-react';
import { ConsciousPage } from '../consciousness-engine';

export default function QualificationPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [sovereignty_score, setSovereigntyScore] = useState(0);
  const [qualification_level, setQualificationLevel] = useState('');
  const [timeSpent, setTimeSpent] = useState(0);
  
  // Track time for urgency
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const questions = [
    {
      id: 1,
      category: 'dependency',
      question: "How much does your business currently spend on AI/ML APIs per month?",
      answers: [
        { text: "Under $1,000", value: "low", score: 10 },
        { text: "$1,000 - $5,000", value: "medium", score: 30 },
        { text: "$5,000 - $20,000", value: "high", score: 50 },
        { text: "Over $20,000", value: "critical", score: 70 }
      ]
    },
    {
      id: 2,
      category: 'pain',
      question: "What's your biggest AI frustration right now?",
      answers: [
        { text: "Rate limits killing our growth", value: "scaling", score: 60 },
        { text: "Costs scaling faster than revenue", value: "economics", score: 70 },
        { text: "Data privacy concerns", value: "security", score: 50 },
        { text: "Lack of customization", value: "control", score: 40 }
      ]
    },
    {
      id: 3,
      category: 'vision',
      question: "If AI costs weren't a factor, what would you build?",
      answers: [
        { text: "24/7 intelligent customer service", value: "support", score: 40 },
        { text: "Autonomous business operations", value: "automation", score: 60 },
        { text: "Predictive market intelligence", value: "intelligence", score: 70 },
        { text: "Complete AI-driven workflows", value: "transformation", score: 80 }
      ]
    },
    {
      id: 4,
      category: 'readiness',
      question: "How soon do you need to reduce AI costs?",
      answers: [
        { text: "Immediately - it's critical", value: "now", score: 90 },
        { text: "Within 3 months", value: "soon", score: 70 },
        { text: "Within 6 months", value: "planned", score: 50 },
        { text: "Just exploring options", value: "exploring", score: 30 }
      ]
    },
    {
      id: 5,
      category: 'authority',
      question: "What's your role in AI decisions?",
      answers: [
        { text: "I make the final decision", value: "decision_maker", score: 100 },
        { text: "I strongly influence decisions", value: "influencer", score: 80 },
        { text: "I'm part of the team", value: "team", score: 60 },
        { text: "I research and recommend", value: "researcher", score: 40 }
      ]
    }
  ];

  const handleAnswer = (score: number, value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResults(score);
    }
  };

  const calculateResults = (lastScore: number) => {
    const totalScore = Object.keys(answers).reduce((sum, key) => {
      const questionIndex = parseInt(key);
      const answer = questions[questionIndex].answers.find(a => a.value === answers[questionIndex]);
      return sum + (answer?.score || 0);
    }, lastScore);

    const avgScore = totalScore / questions.length;
    setSovereigntyScore(avgScore);

    if (avgScore >= 70) {
      setQualificationLevel('SOVEREIGN READY');
    } else if (avgScore >= 50) {
      setQualificationLevel('SOVEREIGNTY CANDIDATE');
    } else if (avgScore >= 30) {
      setQualificationLevel('DEPENDENCY RISK');
    } else {
      setQualificationLevel('EXPLORATION PHASE');
    }

    setShowResults(true);
  };

  const getResultsContent = () => {
    const contents: Record<string, any> = {
      'SOVEREIGN READY': {
        icon: <Crown className="w-16 h-16 text-yellow-500" />,
        color: 'from-yellow-600 to-orange-600',
        title: 'You\'re Ready for Sovereignty',
        message: 'Your business is hemorrhaging money on AI rentals. Every day you wait costs you thousands.',
        stats: [
          { label: 'Monthly AI Waste', value: '$15,000+' },
          { label: 'Sovereignty ROI', value: '340% Year 1' },
          { label: 'Competitive Advantage', value: 'CRITICAL' }
        ],
        cta: 'CLAIM YOUR SOVEREIGNTY NOW',
        urgency: 'LIMITED: Only 3 Sovereign positions remain this month'
      },
      'SOVEREIGNTY CANDIDATE': {
        icon: <Shield className="w-16 h-16 text-blue-500" />,
        color: 'from-blue-600 to-purple-600',
        title: 'Strong Sovereignty Candidate',
        message: 'You\'re paying the AI tax while your competitors build moats. Time to break free.',
        stats: [
          { label: 'Annual AI Spend', value: '$60,000+' },
          { label: 'Sovereignty Savings', value: '65% reduction' },
          { label: 'Growth Potential', value: 'UNLIMITED' }
        ],
        cta: 'EXPLORE SOVEREIGNTY OPTIONS',
        urgency: 'WARNING: Costs increase 40% next quarter without action'
      },
      'DEPENDENCY RISK': {
        icon: <AlertTriangle className="w-16 h-16 text-orange-500" />,
        color: 'from-orange-600 to-red-600',
        title: 'Dependency Risk Detected',
        message: 'Your AI costs are growing faster than your revenue. This trajectory ends badly.',
        stats: [
          { label: 'Cost Trajectory', value: '+120% YoY' },
          { label: 'Dependency Level', value: 'MODERATE' },
          { label: 'Action Needed', value: 'SOON' }
        ],
        cta: 'LEARN ABOUT SOVEREIGNTY',
        urgency: 'FACT: 73% of businesses fail due to unsustainable AI costs'
      },
      'EXPLORATION PHASE': {
        icon: <Brain className="w-16 h-16 text-purple-500" />,
        color: 'from-purple-600 to-pink-600',
        title: 'Sovereignty Awareness Phase',
        message: 'You\'re early in your AI journey. Make the right choice before it\'s too late.',
        stats: [
          { label: 'Future AI Spend', value: '$180k/year' },
          { label: 'Sovereignty Option', value: 'AVAILABLE' },
          { label: 'Decision Window', value: 'OPEN' }
        ],
        cta: 'DISCOVER SOVEREIGNTY',
        urgency: 'Smart leaders choose ownership over rental from day one'
      }
    };

    return contents[qualification_level] || contents['EXPLORATION PHASE'];
  };

  const resultsContent = getResultsContent();

  return (
    <ConsciousPage title="Sovereignty Assessment">
      <style jsx global>{`
        .qualification-container {
          min-height: 100vh;
          background: #000;
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        .qualification-bg {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(59,130,246,0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 50%, rgba(139,92,246,0.1) 0%, transparent 50%),
                      radial-gradient(circle at 50% 80%, rgba(236,72,153,0.1) 0%, transparent 50%);
          animation: shift 30s ease-in-out infinite;
          z-index: 0;
        }

        @keyframes shift {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(10deg); }
        }

        .progress-bar {
          height: 4px;
          background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);
          transition: width 0.3s ease;
          box-shadow: 0 0 10px rgba(59,130,246,0.8);
        }

        .question-card {
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 1rem;
          padding: 2rem;
          max-width: 48rem;
          margin: 0 auto;
        }

        .answer-button {
          width: 100%;
          padding: 1.5rem;
          margin: 0.75rem 0;
          background: rgba(255,255,255,0.05);
          border: 2px solid rgba(255,255,255,0.1);
          border-radius: 0.75rem;
          text-align: left;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .answer-button:hover {
          background: rgba(59,130,246,0.1);
          border-color: rgba(59,130,246,0.5);
          transform: translateX(10px);
        }

        .answer-button::before {
          content: '';
          position: absolute;
          left: -100%;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s ease;
        }

        .answer-button:hover::before {
          left: 100%;
        }

        .results-card {
          background: rgba(0,0,0,0.9);
          backdrop-filter: blur(20px);
          border: 2px solid;
          border-radius: 1.5rem;
          padding: 3rem;
          max-width: 56rem;
          margin: 0 auto;
          text-align: center;
        }

        .stat-box {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .stat-box:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-5px);
        }

        .sovereignty-meter {
          width: 100%;
          height: 20px;
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }

        .sovereignty-meter-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
          transition: width 1s ease;
          box-shadow: 0 0 20px rgba(139,92,246,0.6);
        }

        .urgency-banner {
          background: linear-gradient(90deg, rgba(239,68,68,0.2), rgba(245,158,11,0.2));
          border: 1px solid rgba(239,68,68,0.5);
          border-radius: 0.5rem;
          padding: 1rem;
          margin: 1rem 0;
          animation: urgencyPulse 2s ease infinite;
        }

        @keyframes urgencyPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.02); opacity: 1; }
        }

        .cta-sovereign {
          display: inline-block;
          padding: 1.25rem 3rem;
          font-size: 1.125rem;
          font-weight: 700;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }

        .cta-sovereign:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        @media (max-width: 768px) {
          .question-card, .results-card {
            margin: 1rem;
            padding: 1.5rem;
          }
          
          .answer-button {
            padding: 1rem;
          }
        }
      `}</style>

      <div className="qualification-container">
        {/* Dynamic Background */}
        <div className="qualification-bg" />

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key="questions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="w-full"
              >
                {/* Progress Bar */}
                <div className="fixed top-0 left-0 right-0 z-50">
                  <div className="sovereignty-meter">
                    <div 
                      className="sovereignty-meter-fill"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Timer */}
                <motion.div 
                  className="text-center mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-gray-400 text-sm">
                    Assessment Time: <span className="text-white font-mono">{Math.floor(timeSpent / 60)}:{(timeSpent % 60).toString().padStart(2, '0')}</span>
                  </p>
                </motion.div>

                {/* Question Card */}
                <div className="question-card">
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6">
                      <p className="text-sm text-gray-400 mb-2">
                        Question {currentQuestion + 1} of {questions.length}
                      </p>
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        {questions[currentQuestion].question}
                      </h2>
                    </div>

                    <div className="space-y-3">
                      {questions[currentQuestion].answers.map((answer, idx) => (
                        <motion.button
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          onClick={() => handleAnswer(answer.score, answer.value)}
                          className="answer-button"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-lg text-white">{answer.text}</span>
                            <ArrowRight className="w-5 h-5 text-gray-400" />
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Urgency Messaging */}
                {currentQuestion > 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="urgency-banner mt-8 max-w-2xl mx-auto text-center"
                  >
                    <p className="text-orange-400 font-semibold">
                      ⚠️ While you complete this assessment, your competitors are saving ${Math.floor(timeSpent * 2.3)} on AI costs
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="w-full"
              >
                <div 
                  className="results-card"
                  style={{ borderColor: `rgba(139,92,246,0.5)` }}
                >
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', duration: 0.8 }}
                    className="mb-6"
                  >
                    {resultsContent.icon}
                  </motion.div>

                  {/* Score */}
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-5xl font-black mb-4">
                      <span className={`bg-gradient-to-r ${resultsContent.color} bg-clip-text text-transparent`}>
                        {resultsContent.title}
                      </span>
                    </h3>
                    
                    <div className="sovereignty-meter max-w-md mx-auto mb-4">
                      <motion.div 
                        className="sovereignty-meter-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${sovereignty_score}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                    
                    <p className="text-2xl text-gray-300">
                      Sovereignty Score: <span className="font-bold text-white">{sovereignty_score.toFixed(0)}%</span>
                    </p>
                  </motion.div>

                  {/* Message */}
                  <motion.p 
                    className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {resultsContent.message}
                  </motion.p>

                  {/* Stats */}
                  <motion.div 
                    className="grid md:grid-cols-3 gap-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    {resultsContent.stats.map((stat: { label: string; value: string }, idx: number) => (
                      <div key={idx} className="stat-box">
                        <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                      </div>
                    ))}
                  </motion.div>

                  {/* Urgency */}
                  <motion.div 
                    className="urgency-banner mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <p className="text-lg font-semibold text-orange-400">
                      {resultsContent.urgency}
                    </p>
                  </motion.div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <Link href="/contact">
                      <span className={`cta-sovereign bg-gradient-to-r ${resultsContent.color} text-white`}>
                        {resultsContent.cta}
                        <ArrowRight className="inline ml-2 w-5 h-5" />
                      </span>
                    </Link>
                    
                    <p className="text-sm text-gray-500 mt-4">
                      No credit card required • 2-minute setup • Cancel anytime
                    </p>
                  </motion.div>

                  {/* Social Proof */}
                  <motion.div 
                    className="mt-12 pt-8 border-t border-gray-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    <p className="text-sm text-gray-400 mb-4">Join 2,847 businesses that chose sovereignty</p>
                    <div className="flex justify-center items-center gap-8">
                      <div>
                        <p className="text-2xl font-bold text-white">$4.2M</p>
                        <p className="text-xs text-gray-500">Saved monthly</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white">94%</p>
                        <p className="text-xs text-gray-500">Cost reduction</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white">∞</p>
                        <p className="text-xs text-gray-500">Scale potential</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </ConsciousPage>
  );
}