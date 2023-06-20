'use client';

import ClassicList from './ClassicList';
import { useState } from 'react';
import ClassicSearchForm from './ClassicSearchForm';

function ClassicsContainer({ classics, likes }: {
  classics: Classic[];
  likes: ClassicLike[];
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const filterdClassics = classics.filter(classic =>
    classic?.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const results = searchQuery ? filterdClassics : classics;

  return (
    <div className='p-4'>
      <ClassicSearchForm
        value={searchQuery}
        onClick={() => setSearchQuery('')}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
        placeholder='클래식 제목 검색하기'
      />
      <ClassicList classics={results} likes={likes} />    
    </div>
  )
}

export default ClassicsContainer;