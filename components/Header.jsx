"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedTitle1 from "./AnimatedTitle1";

const slides = [
	{
		image: "/images/8.jpg",
		title: "تصاميم تُكمل إطلالتك",
	},
	{
		image: "/images/7.jpg",
		title: "أناقة تُرافقك أينما كنت",
	},
	{
		image: "/images/6.jpg",
		title: "اختر حقيبتك المفضلة",
	},
];

const Header = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const imageRef = useRef(null);
	const textRef = useRef(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		// Animate text fade-up
		gsap.fromTo(
			textRef.current,
			{ y: 40, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
		);
	}, [currentSlide]);

	return (
		<div id="hero" className="flex justify-center items-center h-screen ">
			<div className="sm:w-full sm:h-[90%] max-sm:w-full max-sm:h-full flex items-center justify-center overflow-hidden">
				<div className="relative w-full h-full max-h-[100vh] max-w-[100vw] overflow-hidden rounded-xl">
					{/* Background Image */}
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

					{/* Text Overlay */}
					
				</div><div className="absolute inset-0 z-10 flex items-center justify-center text-center px-6">
						<h1
							ref={textRef}
							dir="rtl"
							className="text-black font-bold"
						>
							<AnimatedTitle1 title={slides[currentSlide].title} isArabic />
						</h1>
					</div>
			</div>
		</div>
	);
};

export default Header;
