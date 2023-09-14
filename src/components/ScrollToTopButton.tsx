"use client";

import React, { useEffect, useRef, useState } from "react";

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);
	const timerId = useRef<number | null>(null);

	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}

		if (timerId.current !== null) {
			clearTimeout(timerId.current);
		}

		timerId.current = window.setTimeout(() => {
			setIsVisible(false);
		}, 2000);
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

	return isVisible ? (
		<button
			onClick={handleScrollToTop}
			aria-label="위로 가기"
			className="fixed left-1/2 bottom-4 transform -translate-x-1/2 p-2 sm:p-4 rounded-full shadow-inner bg-white/40 hover:bg-white/60"
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
	) : null;
};

export default ScrollToTopButton;
