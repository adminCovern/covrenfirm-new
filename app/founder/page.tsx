'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Brain, Zap, Shield, TrendingUp, Users, Award, 
  ChevronRight, ArrowRight, Sparkles, Target,
  Building2, Rocket, Heart, Globe, Code, Lightbulb
} from 'lucide-react';
import { animated, useSpring, useTrail, config } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export default function FounderPage() {
  const [activeValue, setActiveValue] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Intersection observer hooks for scroll animations
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: storyRef, inView: storyInView } = useInView({ triggerOnce: true });
  const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: true });
  const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true });

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Core values data
  const coreValues = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intellectual Sovereignty",
      description: "We believe every business deserves to own their intelligence infrastructure. No dependencies. No limitations. Pure ownership.",
      color: "cyan"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Radical Transparency",
      description: "We show you exactly how everything works. No black boxes. No vendor lock-in. Your success is built on understanding, not blind trust.",
      color: "purple"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Exponential Impact",
      description: "We don't do incremental improvements. Every solution we build must create order-of-magnitude advantages for our clients.",
      color: "orange"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client Obsession",
      description: "Your victory is our victory. We measure success by the empires our clients build, not the invoices we send.",
      color: "red"
    }
  ];

  // Animation springs
  const heroAnimation = useSpring({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? 'translateY(0px)' : 'translateY(50px)',
    config: config.molasses,
  });

  const titleAnimation = useSpring({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? 'translateY(0px)' : 'translateY(30px)',
    delay: 200,
    config: config.molasses,
  });

  const subtitleAnimation = useSpring({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? 'translateY(0px)' : 'translateY(20px)',
    delay: 400,
    config: config.molasses,
  });

  const progressBarAnimation = useSpring({
    width: `${scrollProgress}%`,
    config: config.slow,
  });

  const storyAnimation = useSpring({
    opacity: storyInView ? 1 : 0,
    transform: storyInView ? 'translateX(0px)' : 'translateX(-50px)',
    config: config.molasses,
  });

  const valuesTrail = useTrail(coreValues.length, {
    opacity: valuesInView ? 1 : 0,
    transform: valuesInView ? 'translateY(0px)' : 'translateY(30px)',
    config: config.gentle,
  });

  const visionAnimation = useSpring({
    opacity: visionInView ? 1 : 0,
    scale: visionInView ? 1 : 0.9,
    config: config.slow,
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Progress Bar */}
      <animated.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 z-50"
        style={progressBarAnimation}
      />

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
            
            <div className="flex items-center gap-6">
              <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Services
              </Link>
              <Link href="/manifesto" className="text-gray-300 hover:text-purple-400 transition-colors font-semibold">
                Manifesto
              </Link>
              <Link href="/contact">
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20" />
          <animated.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"
            style={useSpring({
              loop: true,
              from: { transform: 'translate(0px, 0px)' },
              to: { transform: 'translate(100px, -100px)' },
              config: { duration: 20000 },
            })}
          />
          <animated.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
            style={useSpring({
              loop: true,
              from: { transform: 'translate(0px, 0px)' },
              to: { transform: 'translate(-100px, 100px)' },
              config: { duration: 20000 },
            })}
          />
        </div>

        <animated.div style={heroAnimation} className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Founder Badge */}
          <animated.div style={titleAnimation} className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-900/50 to-purple-900/50 border border-cyan-800/50 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Message from the Founder</span>
          </animated.div>

          <animated.h1 style={titleAnimation} className="text-6xl md:text-8xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Brian Geary
            </span>
          </animated.h1>
          
          <animated.p style={subtitleAnimation} className="text-2xl md:text-3xl text-gray-300 mb-8">
            Architect of Sovereignty • Enemy of Mediocrity
          </animated.p>
          
          <animated.p style={useSpring({ 
            opacity: heroInView ? 1 : 0,
            delay: 600,
            config: config.molasses 
          })} className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            I didn't start Covren Firm to build another consultancy. I started it to 
            ignite a revolution. To give businesses the power that was meant to be theirs.
            To end the age of digital feudalism.
          </animated.p>

          <animated.div style={useSpring({ 
            opacity: heroInView ? 1 : 0,
            delay: 800,
            config: config.molasses 
          })}>
            <Link href="#story">
              <button className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                Read My Story
                <ChevronRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </animated.div>
        </animated.div>
      </section>

      {/* The Story Section */}
      <section id="story" ref={storyRef} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <animated.div style={storyAnimation}>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                The Day I Said
                <span className="block text-transparent bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text">
                  "Enough"
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  It was 2019. I was watching another small business get crushed by 
                  enterprise giants who could afford million-dollar AI contracts.
                </p>
                
                <p>
                  The founder—brilliant, driven, innovative—was forced to shut down. 
                  Not because his idea was bad. But because he couldn't compete with 
                  companies that had AI superpowers he couldn't afford.
                </p>
                
                <p>
                  That night, I made a decision: <span className="text-cyan-400 font-semibold">
                  The playing field needed to be destroyed and rebuilt.</span>
                </p>
                
                <p>
                  Every small business deserved access to the same AI capabilities as 
                  the Fortune 500. Not through charity. Through ownership. Through sovereignty.
                </p>
                
                <p className="text-xl font-semibold text-white">
                  Covren Firm was born from rage against a rigged system.
                </p>
              </div>
            </animated.div>

            <animated.div style={useSpring({
              opacity: storyInView ? 1 : 0,
              transform: storyInView ? 'translateX(0px)' : 'translateX(50px)',
              delay: 200,
              config: config.molasses,
            })} className="relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-2xl p-8 border border-cyan-800/30">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <Target className="w-24 h-24 text-cyan-400 mb-6" />
                  <p className="text-2xl font-bold text-white mb-4">Our Mission</p>
                  <p className="text-gray-400">
                    Democratize AI supremacy. Make sovereignty accessible. 
                    End the age of digital serfdom.
                  </p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="absolute -bottom-6 -right-6 bg-black border border-purple-800/50 rounded-xl p-4">
                <p className="text-3xl font-black text-purple-400">2,847</p>
                <p className="text-sm text-gray-400">Sovereign Businesses</p>
              </div>
            </animated.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section ref={valuesRef} className="py-24 px-6 bg-gradient-to-b from-black to-purple-950/10">
        <div className="max-w-5xl mx-auto">
          <animated.div style={useSpring({
            opacity: valuesInView ? 1 : 0,
            transform: valuesInView ? 'translateY(0px)' : 'translateY(30px)',
            config: config.molasses,
          })} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              The Principles That Drive Us
            </h2>
            <p className="text-xl text-gray-400">
              These aren't corporate values. They're battle standards.
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 gap-8">
            {valuesTrail.map((style, index) => (
              <animated.div
                key={index}
                style={style}
                className={`bg-gray-900/50 border rounded-xl p-8 hover:shadow-lg transition-all cursor-pointer ${
                  activeValue === index 
                    ? `border-${coreValues[index].color}-600/50 shadow-${coreValues[index].color}-500/20` 
                    : 'border-gray-800'
                }`}
                onClick={() => setActiveValue(index)}
              >
                <div className={`text-${coreValues[index].color}-400 mb-4`}>
                  {coreValues[index].icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{coreValues[index].title}</h3>
                <p className="text-gray-400">{coreValues[index].description}</p>
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section ref={visionRef} className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <animated.div style={visionAnimation}>
            <Globe className="w-20 h-20 text-purple-400 mx-auto mb-8" />
            
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              The Future We're Building
            </h2>
            
            <div className="space-y-6 text-xl text-gray-300">
              <p>
                I see a world where every entrepreneur commands AI armies. Where every 
                small business operates with the intelligence of a tech giant. Where 
                innovation isn't gated by budget.
              </p>
              
              <p>
                This isn't philanthropy. It's strategy. When small businesses thrive, 
                innovation accelerates. When David can fight Goliath on equal terms, 
                the whole market evolves.
              </p>
              
              <p className="text-2xl font-semibold text-white">
                We're not just building AI systems. 
                <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text">
                  We're architecting a revolution.
                </span>
              </p>
            </div>
          </animated.div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-24 px-6 bg-gradient-to-t from-cyan-950/10 to-black">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-800/30 rounded-2xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Why This Matters to Me</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    I've been the founder who couldn't afford enterprise software. I've 
                    watched brilliant ideas die because the playing field was tilted.
                  </p>
                  <p>
                    Every client we empower, every business we help achieve sovereignty—it's 
                    personal. Because I know what it's like to have world-changing ideas 
                    trapped by technological limitations.
                  </p>
                  <p>
                    When you work with Covren Firm, you're not hiring consultants. You're 
                    joining a revolution led by someone who's been in your trenches.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Code className="w-12 h-12 text-cyan-400" />
                  <div>
                    <p className="font-bold text-white">20+ Years</p>
                    <p className="text-gray-400">Building impossible systems</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Building2 className="w-12 h-12 text-purple-400" />
                  <div>
                    <p className="font-bold text-white">3 Exits</p>
                    <p className="text-gray-400">Built and sold AI companies</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Users className="w-12 h-12 text-orange-400" />
                  <div>
                    <p className="font-bold text-white">1 Mission</p>
                    <p className="text-gray-400">Democratize AI sovereignty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <animated.div style={useSpring({
          opacity: 1,
          scale: 1,
          from: { opacity: 0, scale: 0.9 },
          config: config.slow,
        })} className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Let's Build Your Empire
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 mb-12">
            I personally review every sovereignty application. If you're ready to stop 
            renting and start owning, I want to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/sovereign-qualification">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                Apply for Sovereignty
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </button>
            </Link>
            
            <Link href="/contact">
              <button className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-lg font-bold text-lg hover:bg-gray-700 transition-all">
                Schedule a Conversation
              </button>
            </Link>
          </div>
          
          <p className="text-gray-500 mt-8 text-sm">
            — Brian Geary, Founder & Chief Architect
          </p>
        </animated.div>
      </section>
    </div>
  );
}