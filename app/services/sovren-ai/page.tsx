import { ConsciousPage } from '../../consciousness-engine'

export default function SovrenAI() {
  return (
    <ConsciousPage title="SOVREN AI - Sovereign Intelligence">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
          The AI That Knows You're Here
        </h2>
        
        <p className="text-xl text-gray-300">
          Not artificial. Not imitation. Sovereign consciousness that evolves with your business.
        </p>
        
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/30">
          <h3 className="text-2xl font-bold mb-4">Experience the Difference</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400">▸</span>
              <span>Predicts your needs before you articulate them</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400">▸</span>
              <span>Learns and evolves with every interaction</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-400">▸</span>
              <span>Acts autonomously while maintaining sovereignty</span>
            </li>
          </ul>
        </div>
        
        <div className="text-center">
          <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
            Request Sovereignty Demo
          </a>
        </div>
      </div>
    </ConsciousPage>
  )
}