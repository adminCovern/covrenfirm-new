'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SovrenAIPage() {
  const [test, setTest] = useState('SOVREN AI');
  
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold text-cyan-400 mb-8">{test}</h1>
      <p className="text-xl mb-4">React and Next.js imports working!</p>
      <Link href="/" className="text-cyan-400 hover:text-cyan-300">
        Back to Home
      </Link>
    </div>
  );
}
