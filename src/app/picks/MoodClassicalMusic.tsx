'use client';

import React from 'react';
import Link from 'next/link';

import { classicalMusicByMood } from './data';

function MoodClassicalMusic() {
  const classicalMusicByMoodMap = new Map(Object.entries(classicalMusicByMood));

  return (
    <div className='flex flex-col items-center justify-center gap-y-4 md:px-14'>
      {[...classicalMusicByMoodMap].map(([key, value]) => (
        <div
          key={key}
          className={`relative w-full rounded-sm p-4 shadow-md bg-opacity-70 hover:animate-tada
            ${value.bgColor}
          `}
        >
          <div className='sm:text-lg font-semibold drop-shadow-md'>
            {value.name}
          </div>
          <ul className='mt-2 px-1 text-sm sm:text-base'>
            {value.data.map((classic, index) => (
              <li
                key={index}
                className='pb-1 last:pb-0 text-pantone-dark-navy'
              >
                <Link href={`/artists/${classic.composer}`} className='font-medium hover:underline'>
                  {classic.composer}
                </Link>
                <span className='mx-1'>|</span>
                <Link href={`/classics/${classic.id}`} className='font-medium hover:underline'>
                  {classic.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default MoodClassicalMusic;
