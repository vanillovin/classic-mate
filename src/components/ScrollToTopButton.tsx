"use client";

import React, { useEffect, useRef } from "react";

const ScrollToTopButton = () => {
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const timerId = useRef<number | null>(null);

	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			if (buttonRef.current) {
				buttonRef.current.style.opacity = "1";
				buttonRef.current.style.visibility = "visible";
			}
		} else {
			if (buttonRef.current) {
				buttonRef.current.style.opacity = "0";
				buttonRef.current.style.visibility = "hidden";
			}
		}

		if (timerId.current !== null) {
			clearTimeout(timerId.current);
		}

		timerId.current = window.setTimeout(() => {
			if (buttonRef.current) {
				buttonRef.current.style.opacity = "0";
				buttonRef.current.style.visibility = "hidden";
			}
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

	return (
		<button
			ref={buttonRef}
			onClick={handleScrollToTop}
			aria-label="위로 가기"
			className="fixed z-10 left-1/2 bottom-4 transform -translate-x-1/2 p-3 sm:p-4 rounded-full shadow-inner bg-white/50 hover:bg-white/80 transition-opacity duration-500"
			style={{ opacity: 0 }}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-5 h-5 sm:w-6 sm:h-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
				/>
			</svg>
		</button>
	);
};

export default ScrollToTopButton;
