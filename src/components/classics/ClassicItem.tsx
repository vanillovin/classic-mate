import Image from 'next/image';

import Card from '../ui/Card';
import { Classic } from '@/app/types/classics';

interface Props {
  classic: Classic
}

function ClassicItem({ classic }: Props) {
  return (
    <Card>
      <h1 className='font-medium'>{classic.title}</h1>
      <p>{classic.description}</p>
      <ul className='flex items-center'>
        {classic.tags.map((tag: string) => (
          <li key={tag} className='rounded-sm p-1 bg-rose-600 text-white mr-1'>{tag}</li>
        ))}
      </ul>
      <Image src={classic.coverImage} alt={`${classic.title} cover`} className='w-full' width={400} height={300} />
      {/* <Link href={`classics/${classic.id}`}>더 보기</Link> */}
    </Card>
  )
}

export default ClassicItem