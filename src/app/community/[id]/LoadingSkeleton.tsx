"use client";

import React from "react";

export default function LoadingSkeleton() {
	return (
		<div className="w-full flex flex-col sm:flex-row shadow-md bg-gradient-radial from-[#fff] to-[#f4f5f0]">
			<section className="w-full md:w-1/2 h-[350px] md:h-[700px] flex flex-col py-2 p-2 border-r">
				<div
					className="
            flex flex-col h-full
            space-y-4 rounded-md p-4 
            before:absolute before:inset-0
            before:-translate-x-full
            before:animate-[shimmer_2s_infinite]
            before:bg-gradient-to-r
            before:from-transparent before:via-gray-100/20 before:to-transparent
            isolate
            overflow-hidden
            before:border-t before:border-rose-100/10
          "
				>
					<div className="space-y-2">
						<div className="flex items-center gap-x-2">
							<div className="h-3 w-2/12 rounded-md bg-pantone-powder/50"></div>
							<div className="h-3 w-4/12 rounded-md bg-black/5"></div>
						</div>
						<div className="h-3 w-4/5 rounded-md bg-black/10"></div>
					</div>
					<div className="space-y-2 h-full w-full rounded-md bg-white p-4 border-t">
						<div className="h-3 w-5/5 rounded-md bg-black/5"></div>
						<div className="h-3 w-5/5 rounded-md bg-black/5"></div>
						<div className="h-3 w-5/5 rounded-md bg-black/5"></div>
						<div className="h-3 w-4/5 rounded-md bg-black/5"></div>
					</div>
				</div>
			</section>
			<section className="w-full md:w-1/2 h-[350px] md:h-[700px] flex flex-col p-2 gap-y-1 sm:gap-y-2">
				<div
					className="
            space-y-6 rounded-md p-4 
            before:absolute before:inset-0
            before:-translate-x-full
            before:animate-[shimmer_2s_infinite]
            before:bg-gradient-to-r
            before:from-transparent before:via-gray-100/20 before:to-transparent
            isolate
            before:border-t before:border-rose-100/10
          "
				>
					<div className="h-3 w-1/5 rounded-md bg-black/10"></div>
					<div className="flex">
						<div className="h-7 w-10/12 rounded-tl-md rounded-bl-md bg-white"></div>
						<div className="h-7 w-2/12 rounded-tr-md rounded-br-md bg-pantone-powder"></div>
					</div>
					<div>
						<div className="space-y-2 h-full w-full">
							<div className="h-3 w-1/5 rounded-md bg-black/10"></div>
							<div className="h-3 w-3/5 rounded-md bg-black/10"></div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
