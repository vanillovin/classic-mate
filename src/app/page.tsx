import { DM_Serif_Display } from 'next/font/google'

import ClassicQuiz from './ClassicQuiz';
import Newspaper from '@/components/Newspaper';
import MusicPlayer from '@/components/MusicPlayer';

const dmSerifDisplay = DM_Serif_Display({ subsets: ['latin'], weight: ['400'] });

export default async function HomePage() {
  return (
    <div className="w-full h-full p-3 sm:p-6">
      <ClassicQuiz />

      <h2 className={`text-3xl sm:text-4xl mt-12 my-6 font-bold mx-1 text-center drop-shadow-md text-pantone-dark-navy 
        ${dmSerifDisplay.className}
      `}>
        Month Classic
      </h2>

      <div className='flex items-center justify-center mb-8'>
        <MusicPlayer />
      </div>

      <Newspaper />
    </div>
  );
}