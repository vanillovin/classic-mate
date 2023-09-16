"use client";

import React from "react";

export default function LoadingSkeleton() {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
			{Array.from({ length: 16 }).map((_, index) => (
				<div
					key={index}
					className="
            space-y-4 rounded-md p-4 bg-white/40
            relative 
            before:absolute before:inset-0
            before:-translate-x-full
            before:animate-[shimmer_2s_infinite]
            before:bg-gradient-to-r
            before:from-transparent before:via-gray-100/20 before:to-transparent
            isolate
            overflow-hidden
            shadow-xl shadow-black/5
            before:border-t before:border-rose-100/10
          "
				>
					<div className="space-y-2">
						<div className="flex items-center justify-between">
							<div className="h-4 w-3/5 rounded-lg bg-black/10"></div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-5 h-5 sm:w-6 sm:h-6 hover:text-vintage-holiday-red/20"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 8.26c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
									className="text-vintage-holiday-red/20"
								/>
							</svg>
						</div>
						<div className="h-3 w-full rounded-md bg-black/5"></div>
						<div className="h-3 w-full rounded-md bg-black/5"></div>
						<div className="h-3 w-4/5 rounded-md bg-black/5"></div>
						<div className="flex items-center gap-x-2">
							<div className="h-4 w-1/5 rounded-lg bg-vintage-holiday-red/10"></div>
							<div className="h-4 w-1/5 rounded-lg bg-vintage-holiday-red/10"></div>
							<div className="h-4 w-1/5 rounded-lg bg-vintage-holiday-red/10"></div>
						</div>
					</div>
					<div className="h-24 rounded-md bg-pantone-metallic-gold/10"></div>
				</div>
			))}
		</div>
	);
}
