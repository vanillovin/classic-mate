'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { type Composer, composers } from '../composers/api';

function ComposerClassicalMusic() {
  const [index, setIndex] = useState(0);
  const [isSmSize, setIsSmSize] = useState<boolean | null>(null);
  const [data, setData] = useState<Composer[] | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmSize(window.innerWidth <= 800);
    };
    // 초기 렌더링 시 크기 확인
    handleResize();
    // 윈도우 리사이즈 이벤트 구독
    window.addEventListener('resize', handleResize);
    // 컴포넌트 언마운트 시 이벤트 구독 해제
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  useEffect(() => {
    if (isSmSize) setIndex(0);
  }, [isSmSize]);

  // isSmSize 값이 변경될 때마다 data 변수를 업데이트
  useEffect(() => {
    const updatedData = isSmSize
      ? [composers[index]]
      : composers.slice(index * 4, index * 4 + 4);
    setData(updatedData);
  }, [isSmSize, index]);

  function handlePrevIndex() {
    setIndex(prevIndex =>
      isSmSize
        ? prevIndex === 0 ? composers.length - 1 : prevIndex - 1
        : prevIndex === 0 ? 3 : prevIndex - 1
    );
  }
  
  function handleNextIndex() {
    setIndex(prevIndex =>
      isSmSize
        ? prevIndex === composers.length - 1 ? 0 : prevIndex + 1
        : prevIndex === 3 ? 0 : prevIndex + 1
    );
  }
  
  return (
    <div className='flex items-center justify-center'>
      <Button type='prev' onClick={handlePrevIndex} />
      <div className='flex items-center justify-center sm:gap-4 flex-1 my-0 '>
        {data?.map(composer => (
          <div
            key={composer.id}
            className='group relative p-2 bg-white shadow-md border border-black rounded-sm w-56 h-72 flex flex-col items-center justify-center'
          >
            <div className='w-40 h-52 relative overflow-hidden rounded-sm'>
              <Image
                fill
                alt={`${composer.englishName} profile image`}
                src={composer.image}
                className='w-full h-full'
              />
            </div>
            <div className='mt-3 -mb-3 flex flex-col items-center justify-center text-center font-medium'>
              <span className='leading-4'>{composer.englishName}</span>
              <span className='text-sm font-normal'>({composer.life})</span>
            </div>
            <div className='absolute top-0 left-0 p-4 hidden group-hover:flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50 w-full h-full'>
              {composer.shortDesc}
              <Link
                href={`/composers/${encodeURIComponent(composer.englishName)}`}
                className='border border-white rounded-sm px-1 hover:bg-white hover:text-black transition-all mt-2'
              >
                더 보기
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Button type='next' onClick={handleNextIndex} />
    </div>
  );
}
 
export default ComposerClassicalMusic;

function Button({ type, onClick }: {
  type: 'prev' | 'next',
  onClick: () => void;
}) {
  return (
    <button
      className='flex items-center justify-center w-10 h-10 text-xl font-semibold p-2 mr-2 rounded-full hover:bg-white hover:opacity-80'
      onClick={onClick}
    >
      {type === 'prev' ? '←' : '→'}
    </button>
  );
}