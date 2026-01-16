'use client';

import { useState } from 'react';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    // TODO: Implement file upload logic
    setTimeout(() => {
      setUploading(false);
      alert('File uploaded successfully!');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 font-montserrat">Upload Resume</h1>
        
        <div className="bg-slate-800 p-8 rounded-lg backdrop-blur-sm bg-opacity-50 border border-slate-700">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">📄</div>
            <h2 className="text-xl font-semibold mb-2">Upload Your Resume</h2>
            <p className="text-slate-400">Supported formats: PDF, DOCX (max 10MB)</p>
          </div>

          <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center mb-6">
            <input
              type="file"
              accept=".pdf,.docx"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="text-slate-400 mb-2">Click to browse or drag and drop</div>
              {file && <div className="text-blue-400 font-semibold">{file.name}</div>}
            </label>
          </div>

          <button
            onClick={handleUpload}
            disabled={!file || uploading}
            className={`w-full py-3 rounded-lg text-lg font-semibold min-h-[44px] ${
              file && !uploading
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
            }`}
          >
            {uploading ? 'Uploading...' : 'Upload Resume'}
          </button>
        </div>
      </div>
    </div>
  );
}
