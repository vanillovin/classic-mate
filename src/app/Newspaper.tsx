'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Hahmlet } from 'next/font/google';

import { monthClassics } from './data';
import { getCurrentDateInfo } from '@/utils/dateUtils';
import { convertToEmbeddedURL } from '@/utils/youtubeUtils';

const hahmlet = Hahmlet({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

function Newspaper() {
  const { currentMonth, currentYearMonth } = getCurrentDateInfo();
  
  const { id, composer, title, image, description, videoUrl, point, performar } =
    monthClassics[currentYearMonth];

  return (
    <div className= {`flex flex-col gap-4 sm:gap-8 p-2 sm:p-4 rounded-sm mb-8 shadow-md text-black bg-cherish-natural ${hahmlet.className}`}>
      <div className='border rounded-sm border-cherish-ivory'>
        <div className='h-16 sm:h-20 flex items-center border-t border-b-2 border-cherish-ivory'>
          <div className='h-full border-r px-4 sm:px-8 text-xl drop-shadow-sm sm:text-3xl flex items-center justify-center border-cherish-ivory'>
            𝄞
          </div>
          <div className={`flex-1 font-semibold text-xl sm:text-3xl text-center`}>
            클래식메이트
            <div className='font-normal text-sm sm:text-base'>
              - 이 달의 클래식 -
            </div>
          </div>
          <div className='h-full font-semibold border-l px-2 sm:px-8 flex flex-col items-center justify-center text-sm sm:text-base border-cherish-ivory'>
            <div className='text-base sm:text-lg'>{currentMonth}월호</div>
            <div className='-mt-1 text-pantone-brandy-sniffer'>
              #{currentYearMonth.substring(2, 7).replace('-', '')}
            </div>
          </div>
        </div>
        {/* <div className='border-t -mt-7 mb-5'></div> */}

        <div className='flex flex-col md:flex-row p-4 items-center'>
          <div className='w-full sm:min-w-[350px] h-[500px] relative rounded-sm overflow-hidden shadow-sm'>
            <Image
              fill
              alt={composer}
              className='w-full h-full'
              src={image}
            />
          </div>
          <div className='flex flex-col items-center justify-center pt-6 sm:p-6'>
            <h2 className='text-lg text-center sm:text-2xl font-medium drop-shadow-md'>
              {composer} : {title}
            </h2>
            <p className='my-6 leading-6 whitespace-pre-line'>
              {description}
            </p>
            <Link
              href={`/classics/${id}`}
              className='px-2 py-1 rounded-sm shadow-sm border transition-all border-opacity-50 text-white border-white hover:bg-cherish-apricot'
            >
              더 보기
            </Link>
          </div>
        </div>

        
        <div className='flex flex-col md:flex-row items-center px-4 py-8 border-t border-y my-4 border-cherish-ivory'>
          <div className='w-full md:w-1/2 pb-8 md:p-4'>
            <h3 className='whitespace-pre-line text-lg text-center md:text-start font-medium mb-4  drop-shadow-md text-cherish-fern'>
              {point.title}
            </h3>
            <p className='whitespace-pre-line leading-6'>
              {point.description}
            </p>
          </div>
          <div className='hidden md:block sm:border-r mr-4 h-88 border-cherish-ivory' />
          <div className='w-full md:w-1/2 h-[200px] sm:h-[300px] relative rounded-sm overflow-hidden'>
            <Image
              fill
              alt='sheet'
              className='w-full h-full'
              src='https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
            />
          </div>
        </div>

        <div className='flex flex-col md:flex-row p-4'>
          <div className='md:w-1/2 h-[200px] mobile:h-[350px]'>
            <iframe
              src={`${convertToEmbeddedURL(videoUrl)}`}
              allowFullScreen
              className='w-full h-full rounded-sm'
            />
          </div>
          <div className='md:w-1/2 flex flex-col items-center justify-center py-10 md:p-6'>
            <p className='text-center leading-6'>
              {performar.description}
            </p>
            <Link
              target='_blank'
              className='mt-4 hover:opacity-70 text-sm underline underline-offset-4 text-cherish-fern'
              href={performar.moreLink}
            >
              {performar.name} {performar.instrumentalists}가 더 궁금하다면!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newspaper;