"use client";

import React from "react";

export default function LoadingSkeleton() {
	return (
		<div className="grid md:grid-cols-2 gap-2 md:gap-4 shadow-sm sm:shadow-none">
			{Array.from({ length: 16 }).map((_, index) => (
				<div
					key={index}
					className="
            rounded-sm p-4 h-20 bg-pantone-latte/80
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
					<div className="w-full h-full flex flex-col justify-center space-y-3">
						<div className="h-3 w-3/5 rounded-md bg-black/5"></div>
						<div className="h-3 w-4/5 rounded-md bg-black/10"></div>
					</div>
				</div>
			))}
		</div>
	);
}
