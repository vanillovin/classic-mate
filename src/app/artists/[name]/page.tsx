import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import Tags from '@/components/Tags';
import { getArtistById } from '../api'
import { createServerClient } from '@/utils/supabase-server';

export default async function ArtistDetailPage({ params }: { params: { name: string }}) {
  const supabase = createServerClient();
  const composer = decodeURIComponent(params.name);
  const data = await getArtistById(composer);
  const { data: classics } = await supabase.from('all_classics').select().eq('composer', composer);

  if (!data) return notFound();
  
  return (
    <div className='p-6 flex flex-col gap-y-6'>
      <section className='flex flex-col sm:flex-row gap-2'>
        <div className='flex items-center justify-center w-full sm:w-[250px] h-[400px] sm:h-[350px] relative overflow-hidden border border-pantone-pale-gold rounded-sm'>
          <Image
            src={data.image}
            alt={`${data.englishName} profile image`}
            fill
            className="w-full h-full rounded-sm"
          />
        </div>
        <div className='flex-1 p-2'>
          <h2 className='text-lg sm:text-2xl font-semibold'>
            {data.englishName} <span className=''>({data.koreanName}, {data.life})</span>
          </h2>
          <p className='mt-2 text-sm sm:text-base whitespace-pre-line'>{data.description}</p>
        </div>
      </section>
      <section>
        <h2 className='text-2xl font-semibold'>작품목록</h2>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2'>
          {classics?.map(classic => (
            <Link
              key={classic.id}
              href={`/classics/${classic.id}`}
              className='rounded-sm p-4 bg-gradient-conic from-pantone-babys-breath to-old-palette-gold hover:to-pantone-metallic-gold transition-all'
            >
              <h3 className='font-semibold'>{classic.title}</h3>
              <p className='text-sm'>
                {classic.description.length > 120 ? `${classic.description.substring(0, 120)}..` : classic.description}
              </p>
              <Tags className='text-sm bg-black text-white px-1 mt-1' tags={classic.tags} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
