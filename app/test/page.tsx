'use client';

import React from 'react';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Deployment Test Page</h1>
      <div className="space-y-4">
        <p className="text-green-400">✓ React is working</p>
        <p className="text-green-400">✓ Next.js routing is working</p>
        <p className="text-green-400">✓ Tailwind CSS is working</p>
        <p className="text-cyan-400">Build timestamp: {new Date().toISOString()}</p>
        <div className="p-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg">
          <p>If you can see this gradient, advanced CSS is working</p>
        </div>
      </div>
    </div>
  );
}