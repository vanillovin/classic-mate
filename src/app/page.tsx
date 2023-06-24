import Image from 'next/image';

import { createServerClient } from '@/utils/supabase-server';
import Link from 'next/link';
import MusicPlayer from '@/components/MusicPlayer';

export default async function HomePage() {
  const supabase = createServerClient();
  const { data: { session } } = await supabase.auth.getSession();
  const { data: classics } = await supabase.from('all_classics').select().limit(4);
  // const { data } = await supabase.from('profiles').select().eq('id', session?.user.id);

  return (
    <div className="bg-white bg-opacity-40 p-4 rounded-sm shadow-sm mt-2 mx-4 mb-4">
      <h2 className='text-xl sm:text-2xl font-semibold mx-1 mb-2 text-yellow-900 border-b border-yellow-900 pr-4 w-fit'>
        오늘의 추천 곡
      </h2>
      <div className='flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-4 gap-x-4 gap-y-8'>
        <div className='col-span-2 p-2 flex items-center justify-center'>
          <MusicPlayer />
        </div>

        <div className='w-full h-[350px] relative rounded-sm overflow-hidden'>
          <Image
            fill
            alt='tchaikovsky'
            className='w-full h-full'
            src='https://t4.ftcdn.net/jpg/02/47/52/01/240_F_247520141_v1hItp6WbbLQwEIZFg9f4J7BbvQo1vVm.jpg'
            />
        </div>

        <div className='flex flex-col items-center justify-center p-2'>
          <h3 className='text-base sm:text-lg font-medium'>Tchaikovsky - Piano Concerto No. 1</h3>
          <p className='my-3 text-center'>
            클래식 음악의 대표작 중 하나로, 첫 소절부터 심장을 울리는 강렬한 감정을 전달합니다.
            이 곡은 세 가지 악장으로 구성되어 있으며, 역동적이고 열정적인 멜로디와 아름다운 피아노 연주가 돋보이는 특징을 가지고 있습니다.
            뛰어난 작곡가인 Tchaikovsky의 음악적 재능이 빛나는 작품 중 하나로, 클래식 음악을 사랑하는 이들에게 특별한 감동을 선사합니다.
          </p>
          <Link
            href={`/classics/81e0d86e-1fa4-4d9d-b4d1-22f33b65a96b`}
            className='px-2 py-1 rounded-sm text-yellow-600 bg-white border border-yellow-600 border-opacity-40 hover:bg-opacity-70 hover:text-yellow-500 transition-all'
          >
            더 보기
          </Link>
        </div>

        <div className='flex flex-col items-center justify-center text-center p-2'>
          <p className='italic'>
            세계적으로 인정받는 피아니스트 조성진은 정교함과 열정으로 가득하며
            각 음표마다 섬세한 손길로 풍부한 아름다움을 빚어냅니다.
            그의 연주에 귀 기울여 특별한 순간을 만끽해보세요.
          </p>
          <Link
            target='_blank'
            className='text-violet-400 mt-2 hover:opacity-70 underline'
            href={'https://namu.wiki/w/%EC%A1%B0%EC%84%B1%EC%A7%84(%ED%94%BC%EC%95%84%EB%8B%88%EC%8A%A4%ED%8A%B8)'}
          >
            조성진 피아니스트가 더 궁금하다면!
          </Link>
        </div>

        <div className='relative w-full h-[350px]'>
          <div className='w-full h-full'>
            <iframe
              src={`${convertToEmbeddedURL('https://youtu.be/YXL0dkG-Qro')}`}
              allowFullScreen
              className='w-full h-full rounded-sm'
            />
          </div>
          {/* <div className='absolute top-0 left-0 bg-white bg-opacity-50 w-full h-full'></div> */}
        </div>

        <div className='col-span-2'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl sm:text-2xl font-semibold mx-1 mb-2 text-yellow-900 border-b border-yellow-900 pr-4 w-fit'>
              인기 클래식
            </h2>
            <Link href='/classics' className='font-medium text-yellow-700 p-1'>
              모든 클래식 보기
            </Link>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-2'>
            {classics?.map(classic => (
              <Link
                key={classic.id}
                href={`/classics/${classic.id}`}
                className='bg-white rounded-sm p-3 flex flex-col hover:bg-yellow-500 hover:bg-opacity-10 transition-all'
              >
                <h3 className='font-semibold'>{classic.title}</h3>
                <p className='mt-1 mb-2 leading-5'>{classic.description.substring(0, 60)}..</p>
                <ul className='flex flex-wrap gap-1'>
                  {classic.tags.map(tag => (
                    <li key={tag} className='px-1 rounded-sm bg-yellow-500 text-white text-sm'>
                      {tag}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function convertToEmbeddedURL(url: string) {
  const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
  const match = url.match(regExp);
  const videoId = match ? match[1] || match[2] : undefined;
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}