import Link from 'next/link';
import Image from 'next/image';
import { Noto_Serif_KR } from 'next/font/google'

import MusicPlayer from '@/components/MusicPlayer';

const notoSerif = Noto_Serif_KR({ subsets: ['latin'], weight: ['400', '700'] })

export default async function HomePage() {
  return (
    <div className="w-full h-full p-4">
      <h2 className={`text-2xl sm:text-4xl my-12 font-bold mx-1 text-center drop-shadow-md ${notoSerif.className}`}>
        Weekend Classic
      </h2>

      <div className='flex items-center justify-center mb-8'>
        <MusicPlayer />
      </div>

      <div className='bg-pantone-dark-navy flex flex-col sm:gap-8 sm:p-8 rounded-sm mb-8 shadow-md'>
        <div className='flex'>
          <div className='w-full h-[500px] relative rounded-sm overflow-hidden shadow-sm mr-4'>
            <Image
              fill
              alt='tchaikovsky'
              className='w-full h-full'
              src='https://as1.ftcdn.net/v2/jpg/00/44/80/14/1000_F_44801423_qaUrUvPpfjSzsDID4dXeDXQfZJMtEefu.jpg'
              />
          </div>

          <div className='flex flex-col items-center justify-center p-4 text-warm-vintage-off-white'>
            <h3 className='text-base sm:text-xl font-medium'>
              Tchaikovsky - Piano Concerto No. 1
            </h3>
            <p className='my-3 text-center'>
              클래식 음악의 대표작 중 하나로, 첫 소절부터 심장을 울리는 강렬한 감정을 전달합니다.
              이 곡은 세 가지 악장으로 구성되어 있으며, 역동적이고 열정적인 멜로디와 아름다운 피아노 연주가 돋보이는 특징을 가지고 있습니다.
              뛰어난 작곡가인 Tchaikovsky의 음악적 재능이 빛나는 작품 중 하나로, 클래식 음악을 사랑하는 이들에게 특별한 감동을 선사합니다.
            </p>
            <Link
              href={`/classics/15`}
              className='px-2 py-1 rounded-sm shadow-sm border border-white border-opacity-40 transition-al'
            >
              더 보기
            </Link>
          </div>
        </div>

        <div className='flex'>
          <div className='flex flex-col items-center justify-center text-center p-4 text-warm-vintage-off-white'>
            <p className='italic'>
              세계적으로 인정받는 피아니스트 조성진은 정교함과 열정으로 가득하며
              각 음표마다 섬세한 손길로 풍부한 아름다움을 빚어냅니다.
              그의 연주에 귀 기울여 특별한 순간을 만끽해보세요.
            </p>
            <Link
              target='_blank'
              className='mt-2 hover:opacity-70 underline'
              href={'https://namu.wiki/w/%EC%A1%B0%EC%84%B1%EC%A7%84(%ED%94%BC%EC%95%84%EB%8B%88%EC%8A%A4%ED%8A%B8)'}
            >
              조성진 피아니스트가 더 궁금하다면!
            </Link>
          </div>

          <div className='w-full h-[350px]'>
            <iframe
              src={`${convertToEmbeddedURL('https://youtu.be/YXL0dkG-Qro')}`}
              allowFullScreen
              className='w-full h-full rounded-sm'
            />
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