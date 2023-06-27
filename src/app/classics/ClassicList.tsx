'use client';

import ClassicItem from './ClassicItem';

function ClassicList({ classics, likes }: {
  classics: Classic[];
  likes: ClassicLike[];
}) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4'>
      {classics?.map(classic =>
        <ClassicItem key={classic.id} classic={classic} likes={likes} />
      )}
    </div>
  );
}

export default ClassicList;