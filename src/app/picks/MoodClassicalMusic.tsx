'use client';

import React from 'react';
import Link from 'next/link';

function MoodClassicalMusic() {
  return (
    <div className='flex flex-col items-center justify-center gap-y-4 md:px-14'>
      {Object.keys(classicalMusicByMood).map(key => (
        <div
          key={key}
          className={`relative w-full rounded-sm p-4 shadow-md bg-opacity-70 hover:animate-tada
            ${classicalMusicByMood[key].bgColor}
          `}
        >
          <div className='sm:text-lg font-semibold drop-shadow-md'>
            {classicalMusicByMood[key].name}
          </div>
          <ul className='mt-2 px-1 text-sm sm:text-base'>
            {classicalMusicByMood[key].data.map((classic, index) => (
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

const classicalMusicByMood: {
  [key: string]: {
    name: string;
    bgColor: string;
    data: { id: number; composer: string; title: string; }[];
  }
} = {
  romantic: {
    name: '로맨틱한 🌹',
    bgColor: 'bg-rose-400',
    data: [
      { id: 1, composer: 'Pyotr Ilyich Tchaikovsky', title: '로미오와 줄리엣 (Romeo and Juliet)' },
      { id: 2, composer: 'Pyotr Ilyich Tchaikovsky', title: '백조의 호수 (Swan Lake)' },
      { id: 3, composer: 'Ludwig van Beethoven', title: '로망스 제2번 (Romance for Violin and Orchestra No. 2 in F major, Op. 50)' },
    ],
  },
  relaxing: {
    name: '휴식과 편안함을 주는 ☁️',
    bgColor: 'bg-green-200',
    data: [
      { id: 1, composer: 'Frédéric Chopin', title: '녹턴 2번 (Nocturne No. 2)' },
      { id: 2, composer: 'Johann Pachelbel', title: '캐논 (Canon in D)' },
      { id: 3, composer: 'Erik Satie', title: '지상의 천국 (Gymnopédie No. 1)' },
    ],
  },
  energetic: {
    name: '에너지와 활기 넘치는 ⚡️',
    bgColor: 'bg-yellow-200',
    data: [
      { id: 1, composer: 'Wolfgang Amadeus Mozart', title: '피가로의 결혼 서곡 (Overture to The Marriage of Figaro)' },
      { id: 2, composer: 'Ludwig van Beethoven', title: '교향곡 5번 (Symphony No. 5 in C minor, Op. 67)' },
      { id: 3, composer: 'Antonio Vivaldi', title: '사계 중 여름 (Summer from The Four Seasons)' },
    ],
  },
  calm: {
    name: '수면과 명상을 위한 🌙',
    bgColor: 'bg-blue-200',
    data: [
      { id: 1, composer: 'Ludwig van Beethoven', title: '교향곡 6번 (Pastoral Symphony, Op. 68)' },
      { id: 2, composer: 'Johann Sebastian Bach', title: 'G선상의 아리아 (Air on the G String)' },
      { id: 3, composer: 'Wolfgang Amadeus Mozart', title: '피아노 협주곡 21번 C장조 K.467 (Piano Concerto No.21 In C Major K.467)' },
    ],
  },
  mysterious: {
    name: '신비로운 🌌',
    bgColor: 'bg-purple-200',
    data: [
      { id: 1, composer: 'Wolfgang Amadeus Mozart', title: '마법의 피리 (The Magic Flute)' },
      { id: 2, composer: 'Claude Debussy', title: '달빛 (Clair de Lune)' },
      { id: 3, composer: 'Gustav Holst', title: '행성 중 천왕성 (The Planets - Uranus)' },
    ],
  },
  playful: {
    name: '재미있고 유쾌한 😄',
    bgColor: 'bg-orange-300',
    data: [
      { id: 1, composer: 'Gioachino Rossini', title: '윌리엄텔 서곡 (William Tell Overture Final)' },
      { id: 2, composer: 'Antonio Vivaldi', title: '사계 중 봄 (Spring from The Four Seasons)' },
      { id: 3, composer: 'Johannes Brahms', title: '헝가리 협주곡 (Hungarian Dance No. 5)' },
    ],
  },
  passionate: {
    name: '열정적인 🔥',
    bgColor: 'bg-red-400',
    data: [
      { id: 1, composer: 'Johannes Brahms', title: '피아노 협주곡 2번 (Piano Concerto No. 2 in B-flat major, Op. 83)' },
      { id: 2, composer: 'Franz Liszt', title: '사랑의 꿈 (Liebesträume No. 3)' },
      { id: 3, composer: 'Piotr Ilyich Tchaikovsky', title: '백조의 호수 (Scène - Swan Lake)' },
    ],
  },
  serene: {
    name: '고요한 🌿',
    bgColor: 'bg-gray-200',
    data: [
      { id: 1, composer: 'Johann Sebastian Bach', title: '골드베르크 변주곡 (Goldberg Variations)' },
      { id: 2, composer: 'Franz Schubert', title: '아베 마리아 (Ave Maria)' },
      { id: 3, composer: 'Frédéric Chopin', title: '녹턴 9번 (Nocturne No. 9) in B Major, Op. 32, No. 1' },
    ],
  },
  sentimental: {
    name: '감성적인 💕',
    bgColor: 'bg-pink-200',
    data: [
      { id: 1, composer: 'Franz Schubert', title: '미완성 교향곡 (Unfinished Symphony in B minor, D. 759)' },
      { id: 2, composer: 'Ludwig van Beethoven', title: '피아노 소나타 8번 (Piano Sonata No. 8 in C minor, Op. 13 "Pathétique")' },
      { id: 3, composer: 'Sergei Vasilievich Rachmaninoff', title: '피아노 협주곡 2번 (Piano Concerto No. 2 in C minor, Op. 18)' },
    ],
  },
  dreamy: {
    name: '몽환적인 🌟',
    bgColor: 'bg-teal-200',
    data: [
      { id: 1, composer: 'Claude Debussy', title: '목요일의 아침을 위한 왈츠 (Clair de Lune)' },
      { id: 2, composer: 'Maurice Ravel', title: '볼레로 (Boléro)' },
      { id: 3, composer: 'Gustav Holst', title: '행성 (The Planets), 제2악장: 금성 (Venus)' },
    ],
  },
};