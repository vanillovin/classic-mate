import { DM_Serif_Display } from 'next/font/google';

import ClassicQuiz from './ClassicQuiz';
import RealtimeMessages from './realtime-messages';
import MusicPlayer from './MusicPlayer';
import Newspaper from './Newspaper';
import { createServerClient } from '@/utils/supabase-server';

const dmSerifDisplay = DM_Serif_Display({ subsets: ['latin'], weight: ['400'] });

export default async function HomePage() {
  const supabase = createServerClient();
  const { data: messages } = await supabase.from('messages').select();

  return (
    <div className="w-full h-full px-3 sm:px-6 pt-3 sm:pt-6 pb-24">
      <ClassicQuiz />

      <div className='mt-12'>
        <RealtimeMessages messages={messages ?? []} />
      </div>

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