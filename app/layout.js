import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import LenisWrapper from "@/components/LenisWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RiZe",
  description: "Discover stylish and high-quality bags crafted with care. Perfect for daily use, travel, or gifts — designed to suit every personality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased select-none`}>
        <div className="absolute inset-40 max-sm:inset-20 opacity-60 z-0 pointer-events-none">
          <img
            src="/images/Hight Qulity.png"
            alt="Background Logo"
            className="w-full h-full object-contain object-center"
          />
        </div>

        <main className="relative z-10">
          {children}
          <Footer />
        </main>

        <LenisWrapper />
      </body>
    </html>
  );
}
