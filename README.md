# CareerRocket AI

A high-performance, responsive AI Resume & Career Suite that works perfectly on Desktop, Android, and iOS.

## Features

- 📱 **Cross-Platform PWA** - Install as app on Android/iOS, works in all browsers
- 🎨 **Responsive Design** - Multi-column desktop, single-column mobile
- 📄 **File Upload** - Support for PDF/DOCX resume uploads
- 📷 **Camera Scan** - Scan physical resumes with phone camera
- 🤖 **AI Analysis** - Get AI-powered suggestions for resume optimization
- ✏️ **Resume Editor** - Live editing with preview
- 📋 **PDF Export** - Generate clean, print-ready PDFs
- 💳 **Subscription Plans** - Basic, Pro, and Enterprise tiers
- 💰 **Razorpay Integration** - Secure Indian payment processing
- 🔐 **Authentication** - Secure user management with Clerk
- 🌙 **Dark Theme** - Glassmorphism UI with high-contrast typography
- 🚀 **Zero Friction** - No app store downloads needed

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **PWA**: next-pwa
- **Auth**: Clerk
- **PDF**: jsPDF
- **Language**: TypeScript

## Getting Started

1. **Clone & Install**
   ```bash
   cd career-rocket-ai
   npm install
   ```

2. **Environment Setup**
   Create `.env.local` with your API keys:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret
   OPENAI_API_KEY=your_openai_key
   NEXT_PUBLIC_RAZORPAY_KEY=your_razorpay_key
   RAZORPAY_SECRET_KEY=your_razorpay_secret_key
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Deployment Checklist

### Pre-Deployment Setup
- [ ] Get Clerk account and API keys (clerk.com)
- [ ] Get OpenAI API key (platform.openai.com)
- [ ] Get Razorpay account and API keys (razorpay.com)
- [ ] Test all API integrations locally
- [ ] Verify PWA functionality on mobile devices

### Vercel Deployment (Recommended)
1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - CareerRocket AI"
   git branch -M main
   git remote add origin https://github.com/yourusername/career-rocket-ai.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to vercel.com and sign up/login
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   In Vercel dashboard → Project Settings → Environment Variables:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
   CLERK_SECRET_KEY=sk_live_...
   OPENAI_API_KEY=sk-...
   NEXT_PUBLIC_RAZORPAY_KEY=rzp_live_...
   RAZORPAY_SECRET_KEY=sk_live_...
   ```

4. **Deploy**
   - Vercel will automatically build and deploy
   - Get your production URL (e.g., `career-rocket-ai.vercel.app`)

### Manual Deployment
```bash
npm run build
npm start
# App runs on http://localhost:3000
```

### Post-Deployment Testing
- [ ] Test PWA installation on Android/iOS
- [ ] Verify Razorpay payment flow
- [ ] Test OpenAI API responses
- [ ] Check responsive design on multiple devices
- [ ] Validate Clerk authentication

The app includes PWA manifest and service worker for offline functionality.

## Business Model

- **Zero Friction**: Users install via browser, no app stores
- **Universal Reach**: Works on any device with a browser
- **Subscription Ready**: Built for Stripe/Razorpay integration
- **Cost Effective**: Single codebase for all platforms

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with PWA meta
│   ├── page.tsx        # Home dashboard
│   ├── upload/         # File upload page
│   ├── editor/         # Resume editor
│   └── ai/             # AI suggestions
├── components/
│   └── Navigation.tsx  # Adaptive navigation
└── globals.css         # Tailwind config
```

## License

MIT License - Ready for your ₹1 Lakh goal! 🚀
