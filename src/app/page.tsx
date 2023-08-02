import { DM_Serif_Display } from 'next/font/google';

import ClassicQuiz from './ClassicQuiz';
import MusicPlayer from './MusicPlayer';
import Newspaper from './Newspaper';

const dmSerifDisplay = DM_Serif_Display({ subsets: ['latin'], weight: ['400'] });

export default async function HomePage() {
  return (
    <div className="w-full h-full px-3 sm:px-6 pt-3 sm:pt-6 pb-24">
      <ClassicQuiz />

      <h2 className={`mt-12 text-3xl sm:text-4xl mx-1 text-center drop-shadow-md text-pantone-dark-navy 
        ${dmSerifDisplay.className}
      `}>
        Month Classic
      </h2>

      <div className='flex items-center justify-center my-10'>
        <MusicPlayer />
      </div>

      <Newspaper />
    </div>
  );
}