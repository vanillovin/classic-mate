import React from 'react';
import Link from 'next/link';

type ClassicListProps = {
  classics: Classic[];
  selectedTags: string[];
};

function ClassicList({ classics, selectedTags }: ClassicListProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 my-6">
      {classics?.map(classic =>
        <Link
          href={`/classics/${classic.id}`}
          key={classic.id}
          className="border border-white rounded-sm p-1 sm:p-2 bg-white bg-opacity-60 hover:bg-opacity-90 transition-all"
        >
          <p className="font-medium text-sm sm:text-base">{classic.title}</p>
          <ul className='flex flex-wrap mt-1'>
            {classic.tags.map(tag =>
              <li
                key={tag}
                className={`border border-gray-100 px-1 rounded-sm mr-1 mb-1 text-xs sm:text-sm
                  ${selectedTags.includes(tag) ? 'bg-violet-400 text-white' : 'bg-white text-black'}
                `}
              >{tag}</li>
            )}
          </ul>
        </Link>
      )}
    </div>
  );
}

export default ClassicList;