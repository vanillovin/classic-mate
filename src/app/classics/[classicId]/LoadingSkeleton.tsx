"use client";

import React from "react";

export default function LoadingSkeleton() {
	return (
    <div
      className="
        w-full grid place-items-center space-y-6
        before:absolute before:inset-0
        before:-translate-x-full
        before:animate-[shimmer_2s_infinite]
        before:bg-gradient-to-r
        before:from-transparent before:via-gray-100/20 before:to-transparent
        isolate
        before:border-t before:border-rose-100/10
      "
    >
      <div className="w-full flex flex-col items-center space-y-4 rounded-sm">
        <div className="h-5 w-5/12 bg-black/20 rounded-sm"></div>
        <div className="h-3 w-6/12 bg-black/10 rounded-sm"></div>
      </div>
      <div className="w-full flex flex-col gap-y-2 items-center my-4 px-12 rounded-sm">
        <div className="h-3 w-full bg-black/5 rounded-sm"></div>
        <div className="h-3 w-full bg-black/5 rounded-sm"></div>
        <div className="h-3 w-3/5 bg-black/5 rounded-sm"></div>
      </div>
      <div className="p-1 bg-white rounded-sm">
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
            d="M21 8.26c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            className="text-vintage-holiday-red/40"
          />
        </svg>
      </div>
      <div className="w-full flex items-center justify-center gap-x-2 pb-4 rounded-sm">
        <div className="h-5 w-1/12 bg-black/10 rounded-sm"></div>
        <div className="h-5 w-1/12 bg-black/5 rounded-sm"></div>
        <div className="h-5 w-1/12 bg-black/5 rounded-sm"></div>
        <div className="h-5 w-1/12 bg-black/5 rounded-sm"></div>
      </div>
      <div className="w-full h-[300px] sm:h-[600px] sm:px-12 mt-8 bg-black/20 rounded-sm"></div>
      <div className="h-8 w-full flex items-center gap-x-2">
        <div className="h-full w-11/12 bg-white/40 rounded-sm"></div>
        <div className="h-full w-1/12 bg-pantone-california-gold/20 rounded-sm"></div>
      </div>
    </div>
	);
}
