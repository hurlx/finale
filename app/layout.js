import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import LenisWrapper from "@/components/LenisWrapper";
import Navbar from "@/components/Navbar";

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
  icons: {
    icon: "/favicon-new.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased select-none overflow-x-hidden`}
      >
        <div className="fixed inset-40 opacity-60 z-0 pointer-events-none">
  <img
    src="/images/Hight Qulity.png"
    alt="Background Logo"
    className="w-full h-full object-contain object-center"
  />
</div>
        {children}
        <LenisWrapper />
        <Footer />
      </body>
    </html>
  );
}
