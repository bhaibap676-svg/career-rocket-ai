'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 font-montserrat bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            AI Resume & Career Suite
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Transform your career with AI-powered resume optimization, smart suggestions, and professional templates. Get hired faster with intelligent career tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/upload"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold min-h-[44px] transition-colors"
            >
              🚀 Start Optimizing
            </Link>
            <Link
              href="/ai"
              className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg text-lg font-semibold min-h-[44px] transition-colors"
            >
              🤖 Try AI Analysis
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800 p-6 rounded-lg backdrop-blur-sm bg-opacity-50 border border-slate-700 text-center">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-xl font-semibold mb-2">Smart Resume Editor</h3>
            <p className="text-slate-400">Live editing with AI suggestions and professional templates</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg backdrop-blur-sm bg-opacity-50 border border-slate-700 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">AI Job Matching</h3>
            <p className="text-slate-400">Get personalized suggestions based on job descriptions</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg backdrop-blur-sm bg-opacity-50 border border-slate-700 text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">PWA Ready</h3>
            <p className="text-slate-400">Install as app on any device - works offline</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Career?</h2>
          <p className="text-slate-300 mb-6">Join thousands using AI to land their dream jobs</p>
          <Link
            href="/subscription"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold min-h-[44px] transition-colors"
          >
            💎 Upgrade to Pro
          </Link>
        </div>
      </div>
    </div>
  );
}
