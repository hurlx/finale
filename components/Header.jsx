'use client';

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import AnimatedTitle1 from "./AnimatedTitle1";

const slides = [
  { image: "/images/8.jpg", title: "تصاميم تُكمل إطلالتك" },
  { image: "/images/7.jpg", title: "أناقة تُرافقك أينما كنت" },
  { image: "/images/6.jpg", title: "اختر حقيبتك المفضلة" },
];

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );
  }, [currentSlide]);

  const handleClick = () => {
    setLoading(true);
    router.push('/Bag');
  };

  return (
    <div id="hero" className="flex justify-center items-center h-screen">
      <div className="sm:w-full sm:h-[90%] max-sm:w-full max-sm:h-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full max-h-[100vh] max-w-[100vw] overflow-hidden rounded-xl">
          <div className="absolute inset-0 z-0">
            {slides.map((slide, index) => (
              <img
                key={index}
                ref={index === currentSlide ? imageRef : null}
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 gap-6">
            <h1
              ref={textRef}
              dir="rtl"
              className="text-4xl font-bold text-black drop-shadow-lg whitespace-nowrap"
            >
              <AnimatedTitle1 title={slides[currentSlide].title} isArabic />
            </h1>

            <button
              onClick={handleClick}
              disabled={loading}
              className={`relative px-8 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold tracking-wide overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-400/50 ${
                loading ? "cursor-not-allowed opacity-70" : ""
              }`}
              aria-label="Shop Now"
            >
              <span className="absolute top-0 left-[-50%] w-[50%] h-full bg-gradient-to-r from-white/40 to-transparent blur-md opacity-0 pointer-events-none transition-opacity duration-500 hover:opacity-80 animate-shine"></span>
              <span className="relative z-10">
                {loading ? "جارٍ التحميل..." : "تسوقي الآن"}
              </span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        .animate-shine {
          animation-play-state: paused;
          animation: shine 2s linear infinite;
        }
        button:hover .animate-shine {
          animation-play-state: running;
        }
      `}</style>
    </div>
  );
};

export default Header;
