'use client';

import Link from 'next/link';
import Image from 'next/image';

import Tags from '@/components/Tags';
import ClassicLikeButton from '@/components/classics/ClassicLikeButton';

function ClassicItem({ classic, likes }: { classic: Classic; likes: ClassicLike[] }) {
  return (
    <Link
      href={`/classics/${classic.id}`}
      className='rounded-md shadow-md p-2 cursor-pointer flex flex-col hover:shadow-lg justify-between bg-white bg-opacity-90 transition-all hover:bg-simple-palette-gold hover:bg-opacity-50'
    >
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-sm sm:text-base font-semibold">{classic.title}</h2>
          <ClassicLikeButton classicId={classic.id} likes={likes} /> 
        </div>
        <p className="text-xs sm:text-sm my-1">
          {classic.description.length > 60 ? `${classic.description.substring(0, 60)}...` : classic.description}
        </p>
        <Tags
          tags={classic.tags}
          className="my-1 text-xs sm:text-sm rounded-sm p-1 bg-vintage-holiday-red text-white"
        />
      </div>
      <div className="relative rounded-sm overflow-hidden h-28 sm:h-36">
        <Image
          src={classic.cover_image ?? ''}
          alt={`${classic.title} cover`}
          fill={true}
        />
      </div>
    </Link>
  );
}

export default ClassicItem;
