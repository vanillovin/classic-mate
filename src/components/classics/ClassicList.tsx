import type { Classic } from '@/app/types/classics';
import ClassicItem from './ClassicItem';

interface Props {
  classics: Classic[];
}

function ClassicList({ classics }: Props) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 p-4'>
      {classics.map(classic =>
        <ClassicItem key={classic.id} classic={classic} />
      )}
    </div>
  )
}

export default ClassicList