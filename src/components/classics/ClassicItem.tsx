'use client';

import Image from 'next/image';
import { type ClassicT } from '@/app/classics/types';
import Link from 'next/link';


function ClassicItem({ classic }: { classic: ClassicT }) {
  return (
    <Link
      href={`/classics/${classic.id}`}
      className='rounded-md shadow-md p-2 flex flex-col hover:shadow-lg justify-between bg-white bg-opacity-90 transition-all hover:bg-amber-400 hover:bg-opacity-20'
    >
      <div>
        <h2 className='font-semibold'>{classic.title}</h2>
        <p className='text-sm my-1'>{classic.description}</p>
        <ul className='flex items-center flex-wrap mb-1'>
          {classic.tags.map((tag: string) => (
            <li key={tag} className='my-1 text-sm rounded-sm p-1 bg-rose-600 text-white mr-1'>
              {tag}
              {/* <Link href={`/classics/${tag}`}>{tag}</Link> */}
            </li>
          ))}
        </ul>
      </div>
      <div className='relative rounded-sm overflow-hidden h-36'>
        <Image
          src={classic.coverImage}
          alt={`${classic.title} cover`}
          fill={true}
        />
      </div>
    </Link>
  )
}

export default ClassicItem