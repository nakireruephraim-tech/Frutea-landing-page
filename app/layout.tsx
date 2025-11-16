import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frutea - Natural Fruit-Infused Teas for Mindful Living",
  description: "Natural fruit-infused teas crafted to nurture your wellbeing and celebrate moments of rest. Slow down, sip mindfully.",
  keywords: "fruit tea, natural tea, wellness, mindful living, herbal tea",
  openGraph: {
    title: "Frutea - Natural Fruit-Infused Teas",
    description: "Natural fruit-infused teas crafted to nurture your wellbeing",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
