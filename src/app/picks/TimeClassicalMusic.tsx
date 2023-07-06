'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
    
function TimeClassicalMusic() {
  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime >= 0 && currentTime < 5) {
      setTimeOfDay('dawn');
    } else if (currentTime >= 5 && currentTime < 12) {
      setTimeOfDay('morning');
    } else if (currentTime >= 12 && currentTime < 17) {
      setTimeOfDay('afternoon');
    } else if (currentTime >= 17 && currentTime < 20) {
      setTimeOfDay('evening');
    } else {
      setTimeOfDay('night');
    }
  }, []);

  return (
    <table className='w-full border border-black bg-white rounded-sm shadow-md'>
      <tbody>
        {Object.keys(classicsByTime).map(key => (
          <tr
            key={key}
            className='border-b border-black last:border-0 text-sm sm:text-base'
          >
            <th className={`border-r border-black p-1 sm:p-3
              ${key === timeOfDay && 'bg-pantone-brandy-sniffer text-pantone-sun-kiss'}
            `}>
              {key}
            </th>
            {classicsByTime[key].map(classic => (
              <td
                key={classic.id}
                className={`px-1 py-2 sm:px-4 sm:py-0 leading-4
                  ${key === timeOfDay && 'bg-pantone-brandy-sniffer text-pantone-sun-kiss'}
                `}
              >
                <Link
                  href={`/classics/${classic.id}`}
                  className='hover:underline'
                >
                  {classic.title}
                </Link>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TimeClassicalMusic;

const classicsByTime: {
  [key: string]: { id: number; title: string; }[];
} = {
  'dawn': [
    { id: 39, title: '에릭 사티 짐노페디 No.1' },
    { id: 42, title: '드뷔시 아라베스크' },
    { id: 45, title: '라벨 물의 유희' },
  ],
  'morning': [
    { id: 41, title: "비발디 사계 중 '봄'" },
    { id: 43, title: '모차르트 볼로도스, 터키행진곡' },
    { id: 46, title: '쇼팽 폴로네이즈 영웅' },
  ],
  'afternoon': [
    { id: 47, title: '쇼팽 스케르초 2번' },
    { id: 48, title: '슈베르트 악흥의 순간 3번' },
    { id: 49, title: '차이코프스키 - 백조의 호수' },
  ],
  'evening': [
    { id: 50, title: '리스트 사랑의 꿈' },
    { id: 44, title: '쇼팽 녹턴 9번' },
    { id: 17, title: '라흐마니노프 피아노 협주곡 2번' },
  ],
  'night': [
    { id: 40, title: '드뷔시 달빛' },
    { id: 51, title: '슈베르트 아베 마리아' },
    { id: 52, title: '베토벤 비창 2악장' },
  ],
};