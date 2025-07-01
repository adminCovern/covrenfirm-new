'use client';

import { ConsciousPage } from '../consciousness-engine';
import { FileText, TrendingUp, Clock, DollarSign, Users, Zap, ArrowRight } from 'lucide-react';

export default function CaseStudiesPage() {
  return (
    <ConsciousPage title="Success Stories">
      <div className="space-y-16">
        {/* Introduction */}
        <section className="text-center mb-12">
          <FileText className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent mb-6">
            Real Results for Real Businesses
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how SMBs are using AI sovereignty to compete, scale, and dominate their markets.
          </p>
        </section>

        {/* Case Study Format Notice */}
        <div className="bg-yellow-900/20 border border-yellow-600/50 rounded-xl p-6 max-w-3xl mx-auto">
          <p className="text-yellow-300 text-sm">
            <strong>Note:</strong> Client details are anonymized to protect competitive advantages. Results are typical of our engagement model but individual outcomes vary based on implementation and market factors.
          </p>
        </div>

        {/* Case Studies */}
        <section className="space-y-12">
          {/* Case Study 1 */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/30">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Regional E-commerce Retailer</h3>
                <p className="text-gray-400">Industry: Retail | Size: 45 employees | Challenge: Competing with Amazon</p>
              </div>
              <div className="text-green-400 font-bold text-2xl">+340% ROI</div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-3">The Challenge</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Losing 30% of customers to larger competitors</li>
                  <li>• Customer service team overwhelmed (8-hour response times)</li>
                  <li>• Inventory management causing stockouts and overstock</li>
                  <li>• Marketing spend yielding diminishing returns</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-white mb-3">The Solution</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Deployed sovereign AI for predictive inventory management</li>
                  <li>• Implemented 24/7 AI customer service (human-quality)</li>
                  <li>• Created personalized shopping experiences for each visitor</li>
                  <li>• Built predictive analytics for demand forecasting</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-black/30 rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-4">Results After 6 Months</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <DollarSign className="w-8 h-8 text-green-400 mb-2" />
                  <p className="text-2xl font-bold text-white">47%</p>
                  <p className="text-sm text-gray-400">Revenue Increase</p>
                </div>
                <div>
                  <Clock className="w-8 h-8 text-blue-400 mb-2" />
                  <p className="text-2xl font-bold text-white">3 min</p>
                  <p className="text-sm text-gray-400">Avg Response Time</p>
                </div>
                <div>
                  <TrendingUp className="w-8 h-8 text-purple-400 mb-2" />
                  <p className="text-2xl font-bold text-white">92%</p>
                  <p className="text-sm text-gray-400">Inventory Accuracy</p>
                </div>
                <div>
                  <Users className="w-8 h-8 text-pink-400 mb-2" />
                  <p className="text-2xl font-bold text-white">4.8★</p>
                  <p className="text-sm text-gray-400">Customer Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">B2B Manufacturing Company</h3>
                <p className="text-gray-400">Industry: Manufacturing | Size: 120 employees | Challenge: Manual processes</p>
              </div>
              <div className="text-blue-400 font-bold text-2xl">82% Cost Reduction</div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-3">The Challenge</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Quote generation taking 2-3 days per request</li>
                  <li>• Sales team spending 60% of time on admin tasks</li>
                  <li>• Losing deals due to slow response times</li>
                  <li>• No visibility into sales pipeline or forecasting</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-white mb-3">The Solution</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Built AI-powered instant quote generation system</li>
                  <li>• Automated entire sales workflow end-to-end</li>
                  <li>• Implemented predictive lead scoring</li>
                  <li>• Created real-time business intelligence dashboard</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-black/30 rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-4">Results After 90 Days</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <Zap className="w-8 h-8 text-yellow-400 mb-2" />
                  <p className="text-2xl font-bold text-white">15 min</p>
                  <p className="text-sm text-gray-400">Quote Generation</p>
                </div>
                <div>
                  <TrendingUp className="w-8 h-8 text-green-400 mb-2" />
                  <p className="text-2xl font-bold text-white">3.2x</p>
                  <p className="text-sm text-gray-400">Sales Velocity</p>
                </div>
                <div>
                  <Users className="w-8 h-8 text-blue-400 mb-2" />
                  <p className="text-2xl font-bold text-white">73%</p>
                  <p className="text-sm text-gray-400">More Leads Closed</p>
                </div>
                <div>
                  <DollarSign className="w-8 h-8 text-purple-400 mb-2" />
                  <p className="text-2xl font-bold text-white">$2.4M</p>
                  <p className="text-sm text-gray-400">New Revenue</p>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Professional Services Firm</h3>
                <p className="text-gray-400">Industry: Consulting | Size: 25 employees | Challenge: Scaling expertise</p>
              </div>
              <div className="text-purple-400 font-bold text-2xl">5x Capacity</div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-3">The Challenge</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Senior consultants bottlenecked with routine tasks</li>
                  <li>• Knowledge trapped in individual experts</li>
                  <li>• Inconsistent service delivery quality</li>
                  <li>• Unable to scale without expensive hires</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-white mb-3">The Solution</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Created AI knowledge base from expert insights</li>
                  <li>• Built AI consultant assistant for junior staff</li>
                  <li>• Automated report generation and analysis</li>
                  <li>• Implemented quality assurance AI system</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-black/30 rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-4">Results After 4 Months</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <Users className="w-8 h-8 text-purple-400 mb-2" />
                  <p className="text-2xl font-bold text-white">5x</p>
                  <p className="text-sm text-gray-400">Client Capacity</p>
                </div>
                <div>
                  <Clock className="w-8 h-8 text-pink-400 mb-2" />
                  <p className="text-2xl font-bold text-white">70%</p>
                  <p className="text-sm text-gray-400">Time Saved</p>
                </div>
                <div>
                  <TrendingUp className="w-8 h-8 text-blue-400 mb-2" />
                  <p className="text-2xl font-bold text-white">98%</p>
                  <p className="text-sm text-gray-400">Quality Score</p>
                </div>
                <div>
                  <DollarSign className="w-8 h-8 text-green-400 mb-2" />
                  <p className="text-2xl font-bold text-white">$1.8M</p>
                  <p className="text-sm text-gray-400">Cost Avoided</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Outcomes */}
        <section className="bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-12 border border-green-500/30">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Common Outcomes Across All Clients</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Immediate Impact (0-30 days)</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ 50-80% reduction in repetitive tasks</li>
                <li>✓ 24/7 intelligent automation activated</li>
                <li>✓ Real-time insights from existing data</li>
                <li>✓ Immediate cost savings visible</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Long-term Transformation (3-6 months)</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ 3-5x productivity improvements</li>
                <li>✓ New revenue streams identified and captured</li>
                <li>✓ Competitive advantages solidified</li>
                <li>✓ AI system continuously improving</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <p className="text-2xl text-gray-300 mb-8">
            Ready to become our next success story?
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all">
            Start Your Transformation
            <ArrowRight className="inline ml-2 w-5 h-5" />
          </a>
        </section>
      </div>
    </ConsciousPage>
  );
}