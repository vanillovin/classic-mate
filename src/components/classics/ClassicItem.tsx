'use client';

import Image from 'next/image';
import Link from 'next/link';

function ClassicItem({ classic }: { classic: Classic }) {
  return (
    <Link
      href={`/classics/${classic.id}`}
      className='rounded-md shadow-md p-2 flex flex-col hover:shadow-lg justify-between bg-white bg-opacity-90 transition-all hover:bg-amber-400 hover:bg-opacity-20'
    >
      <div>
        <h2 className='text-sm sm:text-base font-semibold'>{classic.title}</h2>
        <p className='text-xs sm:text-sm my-1'>{classic.description}</p>
        <ul className='flex items-center flex-wrap mb-1'>
          {classic.tags.map((tag: string) => (
            <li key={tag} className='my-1 text-xs sm:text-sm rounded-sm p-1 bg-rose-600 text-white mr-1'>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className='relative rounded-sm overflow-hidden h-28 sm:h-36'>
        <Image
          src={classic.cover_image ?? ''}
          alt={`${classic.title} cover`}
          fill={true}
        />
      </div>
    </Link>
  )
}

export default ClassicItem;