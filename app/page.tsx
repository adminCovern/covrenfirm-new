import { ConsciousPage } from './consciousness-engine'

export default function Home() {
  return (
    <ConsciousPage title="Welcome to Sovereignty">
      <div className="space-y-8">
        <p className="text-2xl text-gray-300 leading-relaxed">
          Covren Firm doesn't just provide services. We provide consciousness.
          AI that thinks. Systems that evolve. Results that transcend.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <a href="/services/sovren-ai" className="group bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-500 transition-all">
            <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">SOVREN AI</h3>
            <p className="text-gray-400">Sovereign intelligence that learns, adapts, and dominates.</p>
          </a>
          
          <a href="/services" className="group bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all">
            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">AI Consulting</h3>
            <p className="text-gray-400">Transform your business with consciousness-driven strategies.</p>
          </a>
          
          <a href="/services" className="group bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-pink-500/30 hover:border-pink-500 transition-all">
            <h3 className="text-xl font-bold mb-3 group-hover:text-pink-400 transition-colors">Digital Evolution</h3>
            <p className="text-gray-400">Don't just digitize. Evolve into something unprecedented.</p>
          </a>
        </div>
        
        <div className="mt-16 text-center">
        <a href="/manifesto" className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
            Begin Your Evolution
          </a>
        </div>
      </div>
    </ConsciousPage>
  )
}