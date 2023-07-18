'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Gowun_Batang } from 'next/font/google';

const gowunBatang = Gowun_Batang({ subsets: ['latin'], weight: ['400', '700'] });

type MonthClassic = {
  id: number;
  composer: string;
  title: string;
  image: string;
  description: string;
  point: {
    title: string;
    description: string;
  };
  performar: {
    name: string;
    description: string;
    instrumentalists: string;
    moreLink: string;
  };
};

function Newspaper() {
  const currentDate = new Date().toISOString();
  const currentYearMonth = `${currentDate.split('-')[0]}-${currentDate.split('-')[1]}`;
  
  const { id, composer, title, image, description, point, performar } =
    monthClassics[currentYearMonth];

  return (
    <div className= {`bg-warm-vintage-granite flex flex-col gap-4 sm:gap-8 p-2 sm:p-4 rounded-sm mb-8 shadow-md  ${gowunBatang.className}`}>
      <div className='border border-warm-vintage-off-white rounded-sm'>
        <div className='h-16 sm:h-20 flex items-center border-t border-b-2 border-warm-vintage-off-white'>
          <div className='h-full border-r px-4 sm:px-8 text-xl sm:text-3xl flex items-center justify-center'>
            𝄞
          </div>
          <div className={`flex-1 font-semibold text-xl sm:text-3xl text-center`}>
            클래식메이트
            <div className='font-normal text-sm sm:text-base'>- 이 달의 클래식 -</div>
          </div>
          <div className='h-full font-semibold border-l px-2 sm:px-8 flex flex-col items-center justify-center text-sm sm:text-base'>
            <div className='text-base sm:text-lg'>7월호</div>
            <div className='-mt-1 text-vintage-holiday-red'>#2307</div>
          </div>
        </div>
        {/* <div className='border-t -mt-7 mb-5'></div> */}

        <div className='flex flex-col md:flex-row p-4'>
          <div className='w-full sm:min-w-[300px] h-[500px] relative rounded-sm overflow-hidden shadow-sm'>
            <Image
              fill
              alt='tchaikovsky'
              className='w-full h-full'
              src={image}
            />
          </div>
          <div className='flex flex-col items-center justify-center pt-6 sm:p-6'>
            <h2 className='text-lg sm:text-2xl font-medium drop-shadow-md text-vintage-holiday-cyan'>
              {composer} : {title}
            </h2>
            <p className='my-6 font-light leading-6 whitespace-pre-line'>
              {description}
            </p>
            <Link
              href={`/classics/${id}`}
              className='px-2 py-1 rounded-sm shadow-sm border border-white border-opacity-40 hover:bg-warm-vintage-dusty-mint transition-all'
            >
              더 보기
            </Link>
          </div>
        </div>

        
        <div className='border-t mt-4'></div>
        <div className='flex flex-col md:flex-row items-center px-4 py-8'>
          <div className='w-full sm:w-1/2 pb-4 sm:p-4'>
            <h3 className='whitespace-pre-line text-lg text-center md:text-start font-medium mb-4 text-vintage-holiday-brown drop-shadow-md'>
              {point.title}
            </h3>
            <p className='whitespace-pre-line font-light leading-6'>
              {point.description}
            </p>
          </div>
          <div className='hidden sm:block sm:border-r mr-4 h-84'></div>
          <div className='w-full sm:w-1/2 h-[200px] sm:h-[300px] relative overflow-hidden'>
            <Image
              fill
              alt=''
              className='w-full h-full'
              src='https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
            />
          </div>
        </div>
        <div className='border-t mb-4'></div>

        <div className='flex flex-col md:flex-row p-4'>
          <div className='sm:w-1/2 h-[200px] mobile:h-[350px]'>
            <iframe
              src={`${convertToEmbeddedURL('https://youtu.be/YXL0dkG-Qro')}`}
              allowFullScreen
              className='w-full h-full rounded-sm'
            />
          </div>
          <div className='sm:w-1/2 flex flex-col items-center justify-center py-6 sm:p-6'>
            <p className='font-light leading-6'>
              {performar.description}
            </p>
            <Link
              target='_blank'
              className='mt-4 hover:opacity-70 underline underline-offset-4 text-vintage-holiday-brown'
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

function convertToEmbeddedURL(url: string) {
  const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
  const match = url.match(regExp);
  const videoId = match ? match[1] || match[2] : undefined;
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}

const monthClassics: { [key: string]: MonthClassic } = {
  '2023-07': {
    id: 15,
    composer: '차이코프스키',
    title: '피아노 협주곡 1번',
    image: 'https://as1.ftcdn.net/v2/jpg/00/44/80/14/1000_F_44801423_qaUrUvPpfjSzsDID4dXeDXQfZJMtEefu.jpg',
    description: `Tchaikovsky의 "Piano Concerto No. 1"은 19세기 말에 작곡된 클래식 음악 중 하나로, 유명한 클래식 피아노 협주곡 중 하나입니다. 이 곡은 작곡가 Pyotr Ilyich Tchaikovsky가 1874년에 작곡했으며, 현재까지 많은 연주자들과 오케스트라에 의해 연주되고 사랑받고 있습니다.

  작품의 시대 배경은 로맨틱 시대로, 감성적이고 열정적인 음악이 특징입니다. 이 곡은 3악장으로 구성되어 있으며, 첫 번째 악장은 점점 강렬해지는 현악기와 피아노의 대립을 통해 시작됩니다. 두 번째 악장은 서정적이고 아름다운 선율로 피아노가 주도하는 부분입니다. 마지막 악장은 화려하고 역동적인 연주로 마무리되며, 기교적인 피아노 연주와 오케스트라의 화려한 연주가 조화를 이룹니다.

  "Piano Concerto No. 1"은 Tchaikovsky의 피아노 음악 중 가장 인기 있는 작품 중 하나로 꼽히며, 클래식 음악을 사랑하는 사람들에게는 익숙하고 사랑받는 곡입니다. 이 곡은 그의 재능과 예술적 표현력을 최대한 발휘한 작품 중 하나로 평가받고 있으며, 클래식 음악의 명곡 중 하나로 인정받고 있습니다.`,
    point: {
      title: '곡 구성과 감상 포인트',
      description: `1악장: "마에스토소(Maestoso)" - 강렬하고 역동적인 악장, 대립적인 피아노와 현악기의 연주로 화려함을 느낄 수 있습니다.
  2악장: "안단테 세음플리체(Andante semplice)" - 서정적이고 아름다운 선율, 우아하고 부드러운 연주로 아름다움을 느낄 수 있습니다.
  3악장: "알레그로 콘 후코(Allegro con fuoco)" - 화려하고 역동적인 연주, 피아노와 오케스트라의 조화로 흥겨움을 느낄 수 있습니다.

  이렇게 'Piano Concerto No. 1'은 각 악장마다 강렬함, 아름다움, 화려함과 흥겨움을 전달합니다.`,
    },
    performar: {
      name: '조성진',
      description: `조성진 피아니스트는 음악을 통해 감정과 이야기를 표현하는 예술가입니다. 그의 연주는 강렬하면서도 섬세한 터치로 음악의 깊은 감성을 전달합니다. 그의 손끝에서 피아노의 음색이 만들어지며, 그 소리는 청중들을 감동시킵니다.

  조성진 피아니스트는 뛰어난 기교와 기술적 솜씨를 가지고 있으며, 그것을 통해 다양한 음악 작품을 완벽하게 해석합니다. 그의 연주는 듣는 이들에게 여러 감정을 일깨워주고, 그 속에서 아름다움과 감동을 찾을 수 있습니다.`,
      instrumentalists: '피아니스트',
      moreLink: 'https://namu.wiki/w/%EC%A1%B0%EC%84%B1%EC%A7%84(%ED%94%BC%EC%95%84%EB%8B%88%EC%8A%A4%ED%8A%B8)',
    },
  },
  '2023-08': {
    id: 0,
    composer: '',
    title: '',
    image: '',
    description: ``,
    point: {
      title: '',
      description: ``,
    },
    performar: {
      name: '',
      description:``,
      instrumentalists: '',
      moreLink: '',
    },
  },
  '2023-09': {
    id: 0,
    composer: '',
    title: '',
    image: '',
    description: ``,
    point: {
      title: '',
      description: ``,
    },
    performar: {
      name: '',
      description:``,
      instrumentalists: '',
      moreLink: '',
    },
  },
};