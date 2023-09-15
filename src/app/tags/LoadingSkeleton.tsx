"use client";

import React from "react"; './TagsSearchForm';

export default function LoadingSkeleton() {
  return (
    <>
      <div className="p-1 space-y-2">
        <div className="h-4 w-2/12 rounded-md bg-black/10"></div>
        <div className="flex flex-wrap items-center">
          {Array.from({ length: 48 }).map((_, index) => (
            <div
              key={index}
              className="
                h-6 sm:h-7 w-12 sm:w-14 rounded-md p-1 mr-1 mb-1 text-sm sm:text-base shadow-sm bg-white/20
                relative 
                before:absolute before:inset-0
                before:-translate-x-full
                before:animate-[shimmer_2s_infinite]
                before:bg-gradient-to-r
                before:from-transparent before:via-gray-100/20 before:to-transparent
                isolate overflow-hidden
                before:border-t before:border-rose-100/20
              "
            >
            </div>
          ))}
          <div className="h-6 sm:h-7 w-16 sm:w-20 rounded-lg p-1 mr-1 mb-1 text-sm sm:text-base bg-black/10"></div>
        </div> 
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 my-6">
        {Array.from({ length: 48 }).map((_, index) => (
          <div
            key={index}
            className="
              space-y-2 rounded-md p-2 sm:p-4 bg-white/20 relative 
              before:absolute before:inset-0
              before:-translate-x-full
              before:animate-[shimmer_2s_infinite]
              before:bg-gradient-to-r
              before:from-transparent before:via-gray-100/20 before:to-transparent
              isolate overflow-hidden
              shadow-xl shadow-black/5
              before:border-t before:border-rose-100/10
            "
          >
            <div className="h-4 w-3/5 rounded-md bg-black/10"></div>
            <div className="flex items-center gap-x-2">
              <div className="h-4 w-1/5 rounded-md bg-watery-4/20"></div>
              <div className="h-4 w-1/5 rounded-md bg-watery-4/20"></div>
              <div className="h-4 w-1/5 rounded-md bg-watery-4/20"></div>
            </div>
          </div>
        ))}
      </div>
    </>
	);
}
