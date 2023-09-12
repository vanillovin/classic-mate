"use client";

import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		isVisible ? (
			<button
				onClick={handleScrollToTop}
				className="fixed bottom-4 right-4 p-2 rounded-full shadow-inner bg-white/40 hover:bg-white/60"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-4 h-4 sm:w-6 sm:h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
					/>
				</svg>
			</button>
		) : null
	);
};

export default ScrollToTopButton;
