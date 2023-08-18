'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { classicsByTime } from './data';
    
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