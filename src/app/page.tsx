import Link from 'next/link';
import { DM_Serif_Display } from 'next/font/google';

import ClassicQuiz from './ClassicQuiz';
import MusicPlayer from './MusicPlayer';
import Newspaper from './Newspaper';
import { createServerClient } from '@/utils/supabase-server';
import Image from 'next/image';

const dmSerifDisplay = DM_Serif_Display({ subsets: ['latin'], weight: ['400'] });

export default async function HomePage() {
  const supabase = createServerClient();
  const { data: classicsByLikeCount } = await supabase
    .from('all_classics')
    .select('*')
    .order('like_count', { ascending: false })
    .range(0, 16);
  
  return (
    <div className="w-full h-full px-3 sm:px-6 pt-3 sm:pt-6 pb-24">
      <ClassicQuiz />

      <h2 className={`mt-12 text-3xl sm:text-4xl mx-1 text-center drop-shadow-md text-pantone-dark-navy 
        ${dmSerifDisplay.className}
      `}>
        Month Classical Music
      </h2>

      <div className='flex items-center justify-center my-10'>
        <MusicPlayer />
      </div>

      <Newspaper />

      <div className='my-10'>
        <h2 className={`mt-12 text-3xl sm:text-4xl text-center font-extralight text-pantone-dark-navy`}>
          클메 TOP16
        </h2>
        <div className="carousel w-full mt-4">
          <div id="slide1" className="carousel-item relative w-full">
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 p-0 md:px-8'>
              {classicsByLikeCount?.slice(0, 4).map((classic, index) => (
                <Link 
                  key={index}
                  href={`/classics/${classic.id}`} 
                  className='rounded-sm p-2 flex flex-col gap-y-2 justify-between shadow-sm bg-white'
                >
                  <div className='flex flex-col items-center gap-y-1'>
                    <p className={`text-2xl sm:text-3xl font-semibold text-pantone-pale-gold ${dmSerifDisplay.className}`}>
                      - {index + 1} -
                    </p>
                    <p className='font-semibold text-sm md:text-base text-center'>
                      {classic.title}
                    </p>
                    <p className='text-xs md:text-sm'>
                      {classic.description.substring(0, 65)}...
                    </p>
                  </div>
                  <div className='w-full h-[150px] relative rounded-sm overflow-hidden'>
                    <Image
                      fill
                      alt={'composer'}
                      src={classic.cover_image}
                      className='w-full h-full'
                    />
                  </div>
                </Link>
              ))}
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-0 md:left-2 right-0 md:right-2 top-1/2">
              <a href="#slide4" className="btn btn-circle shadow-md">❮</a> 
              <a href="#slide2" className="btn btn-circle shadow-md">❯</a>
            </div>
          </div> 
          <div id="slide2" className="carousel-item relative w-full">
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 p-0 md:px-8'>
              {classicsByLikeCount?.slice(4, 8).map((classic, index) => (
                <Link 
                  key={index}
                  href={`/classics/${classic.id}`} 
                  className='rounded-sm p-2 flex flex-col gap-y-2 justify-between shadow-sm bg-white'
                >
                  <div className='flex flex-col items-center gap-y-1'>
                    <p className={`text-2xl font-semibold text-pantone-pale-gold ${dmSerifDisplay.className}`}>
                      - {index + 5} -
                    </p>
                    <p className='font-semibold text-sm md:text-base text-center'>
                      {classic.title}
                    </p>
                    <p className='text-xs md:text-sm'>
                      {classic.description.substring(0, 65)}...
                    </p>
                  </div>
                  <div className='w-full h-[150px] relative rounded-sm overflow-hidden'>
                    <Image
                      fill
                      alt={'composer'}
                      src={classic.cover_image}
                      className='w-full h-full'
                    />
                  </div>
                </Link>
              ))}
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-0 md:left-2 right-0 md:right-2 top-1/2">
              <a href="#slide1" className="btn btn-circle shadow-md">❮</a> 
              <a href="#slide3" className="btn btn-circle shadow-md">❯</a>
            </div>
          </div> 
          <div id="slide3" className="carousel-item relative w-full">
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 p-0 md:px-8'>
              {classicsByLikeCount?.slice(8, 12).map((classic, index) => (
                <Link 
                  key={index}
                  href={`/classics/${classic.id}`} 
                  className='rounded-sm p-2 flex flex-col gap-y-2 justify-between shadow-sm bg-white'
                >
                  <div className='flex flex-col items-center gap-y-1'>
                    <p className={`text-2xl font-semibold text-pantone-pale-gold ${dmSerifDisplay.className}`}>
                      - {index + 9} -
                    </p>
                    <p className='font-semibold text-sm md:text-base text-center'>
                      {classic.title}
                    </p>
                    <p className='text-xs md:text-sm'>
                      {classic.description.substring(0, 65)}...
                    </p>
                  </div>
                  <div className='w-full h-[150px] relative rounded-sm overflow-hidden'>
                    <Image
                      fill
                      alt={'composer'}
                      src={classic.cover_image}
                      className='w-full h-full'
                    />
                  </div>
                </Link>
              ))}
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-0 md:left-2 right-0 md:right-2 top-1/2">
              <a href="#slide2" className="btn btn-circle shadow-md">❮</a> 
              <a href="#slide4" className="btn btn-circle shadow-md">❯</a>
            </div>
          </div> 
          <div id="slide4" className="carousel-item relative w-full">
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 p-0 md:px-8'>
              {classicsByLikeCount?.slice(12, 16).map((classic, index) => (
                <Link 
                  key={index}
                  href={`/classics/${classic.id}`} 
                  className='rounded-sm p-2 flex flex-col gap-y-2 justify-between shadow-sm bg-white'
                >
                  <div className='flex flex-col items-center gap-y-1'>
                    <p className={`text-2xl font-semibold text-pantone-pale-gold ${dmSerifDisplay.className}`}>
                      - {index + 13} -
                    </p>
                    <p className='font-semibold text-sm md:text-base text-center'>
                      {classic.title}
                    </p>
                    <p className='text-xs md:text-sm'>
                      {classic.description.substring(0, 65)}...
                    </p>
                  </div>
                 <div className='w-full h-[150px] relative rounded-sm overflow-hidden'>
                    <Image
                      fill
                      alt={'composer'}
                      src={classic.cover_image}
                      className='w-full h-full'
                    />
                  </div>
                </Link>
              ))}
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-0 md:left-2 right-0 md:right-2 top-1/2">
              <a href="#slide3" className="btn btn-circle shadow-md">❮</a> 
              <a href="#slide1" className="btn btn-circle shadow-md">❯</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}