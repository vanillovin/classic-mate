'use client';

import { type ClassicT } from '@/app/classics/types';
import ClassicItem from './ClassicItem';


function ClassicList({ classics }: { classics: ClassicT[] }) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
      {classics.map(classic =>
        <ClassicItem key={classic.id} classic={classic} />
      )}
    </div>
  )
}

export default ClassicList