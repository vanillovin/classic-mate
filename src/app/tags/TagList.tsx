"use client";

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

type TagListProps = {
  tags: string[];
  selectedTags: string[];
};

function TagList({ tags, selectedTags }: TagListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const handleTagClick = (tagName: string) => {
    const encodedTagName = encodeURIComponent(tagName);
    const params = new URLSearchParams(searchParams.toString());
    let nextTagIndex = 1;
    while (params.has(`tag${nextTagIndex}`) && nextTagIndex <= 3) {
      nextTagIndex++;
    }

    const existingTagIndex = Array.from(params.keys())
      .find((key) => key.startsWith('tag') && params.get(key) === encodedTagName);

    if (existingTagIndex) {
      params.delete(existingTagIndex);
    } else if (nextTagIndex <= 3) {
      params.set(`tag${nextTagIndex}`, encodedTagName);
    }

    const newSearchParams = params.toString();

    router.push(`tags?${newSearchParams}`);
  };

  return (
    <details open>
      <summary className='sm:text-lg font-semibold'>모든 태그</summary>
      <div className="flex flex-wrap items-center">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`rounded-sm p-1 mr-1 mb-1 text-sm sm:text-base
              ${selectedTags.includes(tag) ? 'bg-violet-400 text-white' : 'bg-white hover:bg-violet-100'}
            `}
          >
            {tag}
          </button>
        ))}
        <button
          onClick={() => router.push('/tags')}
          className="bg-rose-400 text-white rounded-sm p-1 mr-1 mb-1 hover:bg-rose-300 text-sm sm:text-base"
        >
          태그 지우기
        </button>
      </div>
    </details>
  );
}

export default TagList;