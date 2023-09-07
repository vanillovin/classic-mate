"use client";

import React from 'react';

export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="
            space-y-4 rounded-md p-4 bg-white/80
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
            <div className="h-3 w-3/5 rounded-md bg-black/10"></div>
            <div className="h-3 w-4/5 rounded-md bg-black/5"></div>
            <div className="flex items-center gap-x-2">
              <div className="h-3 w-1/5 rounded-md bg-vintage-holiday-red/10"></div>
              <div className="h-3 w-1/5 rounded-md bg-vintage-holiday-red/10"></div>
              <div className="h-3 w-1/5 rounded-md bg-vintage-holiday-red/10"></div>
            </div>
          </div>
          <div className="h-24 rounded-md bg-pantone-metallic-gold/10"></div>
        </div>
      ))}
    </div>
  );
}
