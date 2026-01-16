import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";

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
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-slate-950 text-white`}
      >
        <Navigation />
        <div className="md:pl-64 pb-16 md:pb-0">
          {children}
        </div>
      </body>
    </html>
  );
}
