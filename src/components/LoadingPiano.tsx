'use client';

import React from 'react'

function LoadingPiano() {
  return (
    <div className="w-full h-full mt-20 sm:mt-40 flex items-center justify-center">
      <div className="relative flex">
        <div className="w-8 sm:w-10 h-20 sm:h-24 bg-white bg-opacity-70 border-r border-gray-100 animate-animate-piano-delay-1"></div>
        <div className="z-10 absolute w-5 sm:w-7 h-10 sm:h-14 bg-black bg-opacity-70 border-r border-gray-100 top-0 left-6 sm:left-7 animate-animate-piano-delay-2"></div>
        <div
          className="w-8 sm:w-10 h-20 sm:h-24 bg-white bg-opacity-70 border-r border-gray-100 animate-animate-piano-delay-3 flex items-end justify-center pb-1"
        >
          {/* L */}
        </div>
        <div className="z-10 absolute w-5 sm:w-7 h-10 sm:h-14 bg-black bg-opacity-70 border-r border-gray-100 top-0 left-14 sm:left-left-17 animate-animate-piano-delay-4"></div>
        <div 
          className="w-8 sm:w-10 h-20 sm:h-24 bg-white bg-opacity-70 border-r border-gray-100 animate-animate-piano-delay-5 flex items-end justify-center pb-1"
        >
          {/* O */}
        </div>
        <div 
          className="w-8 sm:w-10 h-20 sm:h-24 bg-white bg-opacity-70 border-r border-gray-100 animate-animate-piano-delay-6 flex items-end justify-center pb-1"
        >
          {/* A */}
        </div>
        <div 
          className="w-8 sm:w-10 h-20 sm:h-24 bg-white bg-opacity-70 border-r border-gray-100 animate-animate-piano-delay-7 flex items-end justify-center pb-1"
        >
          {/* D */}
        </div>
        <div className="z-10 absolute w-5 sm:w-7 h-10 sm:h-14 bg-black bg-opacity-70 border-r border-gray-100 top-0 left-left-30 sm:left-left-37 animate-animate-piano-delay-8"></div>
        <div 
          className="w-8 sm:w-10 h-20 sm:h-24 bg-white bg-opacity-70 border-r border-gray-100 animate-animate-piano-delay-9 flex items-end justify-center pb-1"
        >
          {/* I */}
        </div>
        <div className="z-10 absolute w-5 sm:w-7 h-10 sm:h-14 bg-black bg-opacity-70 border-r border-gray-100 top-0 left-left-38 sm:left-left-47 animate-animate-piano-delay-10"></div>
        <div 
          className="w-8 sm:w-10 h-20 sm:h-24 bg-white bg-opacity-70 border-r border-gray-100 animate-animate-piano-delay-11 flex items-end justify-center pb-1"
        >
          {/* N */}
        </div>
        <div className="z-10 absolute w-5 sm:w-7 h-10 sm:h-14 bg-black bg-opacity-70 border-r border-gray-100 top-0 left-left-46 sm:left-left-57 animate-animate-piano-delay-12"></div>
        <div 
          className="w-8 sm:w-10 h-20 sm:h-24 bg-white bg-opacity-70 border-r border-gray-100 animate-animate-piano-delay-13 flex items-end justify-center pb-1"
        >
          {/* G */}
        </div>
        <div className="z-10 absolute w-5 sm:w-7 h-10 sm:h-14 bg-black bg-opacity-70 border-r border-gray-100 top-0 left-left-62 sm:left-left-81 animate-animate-piano-delay-14"></div>
        <div className="w-8 sm:w-10 h-20 sm:h-24 bg-white bg-opacity-70 animate-animate-piano-delay-15"></div>
      </div>
    </div>
  );
}

export default LoadingPiano