'use client';

import { useState } from 'react';

export default function EditorPage() {
  const [content, setContent] = useState('');

  const handleExport = () => {
    // TODO: Implement PDF export
    alert('PDF export feature coming soon!');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold font-montserrat">Resume Editor</h1>
          <button
            onClick={handleExport}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold min-h-[44px]"
          >
            📄 Export PDF
          </button>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg backdrop-blur-sm bg-opacity-50 border border-slate-700">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing your resume here..."
            className="w-full h-96 p-4 bg-slate-700 border border-slate-600 rounded text-white resize-none"
          />
        </div>
      </div>
    </div>
  );
}
