import dynamic from 'next/dynamic';
import { DM_Serif_Display } from 'next/font/google';

const ClassicQuiz = dynamic(import('./ClassicQuiz'));
const DailyQuote = dynamic(import('./DailyQuote'));
const MusicPlayer = dynamic(import('./MusicPlayer'));
const Newspaper = dynamic(import('./Newspaper'));
const PopularClassics = dynamic(import('./PopularClassics'));
import { createServerClient } from '@/utils/supabase-server';

const dmSerifDisplay = DM_Serif_Display({ subsets: ['latin'], weight: ['400'] });

export default async function HomePage() {
  const supabase = createServerClient();
  const { data: classicsByLikeCount } = await supabase
    .from('all_classics')
    .select('*')
    .order('like_count', { ascending: false })
    .range(0, 15);
  
  return (
    <div className="w-full h-full px-3 sm:px-6 pt-3 sm:pt-6 pb-24">
      <ClassicQuiz />

      <div className='my-12'>
        <h2 className={`text-2xl sm:text-3xl text-center font-medium drop-shadow-md`}>
          오늘의 한 문장
        </h2>
        <DailyQuote />
      </div>

      <h2 className={`text-3xl sm:text-4xl text-center drop-shadow-md text-pantone-dark-navy 
        ${dmSerifDisplay.className}
      `}>
        Month Classical Music
      </h2>

      <div className='flex items-center justify-center my-10'>
        <MusicPlayer />
      </div>

      <Newspaper />

      <div className='my-12'>
        <h2 className={`text-2xl sm:text-3xl text-center font-medium drop-shadow-md`}>
          클메 TOP16
        </h2>
        <PopularClassics classicsByLikeCount={classicsByLikeCount ?? []} />
      </div>
    </div>
  );
}