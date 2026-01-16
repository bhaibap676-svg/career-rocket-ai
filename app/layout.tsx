import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "../src/components/Navigation";
import ErrorBoundary from "../src/components/ErrorBoundary";
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CareerRocket AI",
  description: "AI Resume & Career Suite",
  manifest: "/manifest.json",
  themeColor: "#1e293b",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        </head>
        <body
          className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-slate-950 text-white`}
        >
          <ErrorBoundary>
            <Navigation />
            <div className="md:pl-64 pb-16 md:pb-0">
              {children}
            </div>
          </ErrorBoundary>
        </body>
      </html>
    </ClerkProvider>
  );
}
