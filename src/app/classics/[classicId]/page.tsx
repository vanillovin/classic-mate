import Link from 'next/link';
import notFound from './not-found';
import supabase from '@/lib/supabase/client';

export type ClassicResponse = Awaited<ReturnType<typeof getClassicById>>;
export type ClassicResponseSuccess = ClassicResponse['data'];
export type ClassicResponseError = ClassicResponse['error'];
 
export async function getClassicById(id: string) {
  return await supabase.from('allClassics').select().eq('id', id);
}

function convertToEmbeddedURL(url: string) {
  const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
  const match = url.match(regExp);
  const videoId = match ? match[1] || match[2] : undefined;
  if (videoId) return `https://www.youtube.com/embed/${videoId}`;
  return url;
}

export default async function ClassicDetailPage({ params }: { params: { classicId: string } }) {
  const { data, error } = await getClassicById(params.classicId);
  const classic = data?.[0];
  if (!classic) return notFound();

  return (
    <section className='w-full h-screen flex flex-col items-center p-4'>
      <h1 className='text-xl sm:text-2xl font-semibold'>{classic.title}</h1>
      <ul className='flex items-center text-sm sm:text-base'>
        <li className='mr-1 text-sm sm:text-base'>{classic.composer} ·</li>
        <li className='mr-1 text-sm sm:text-base'>{classic.genre} ·</li>
        <li className='text-sm sm:text-base'>{classic.year}</li>
      </ul>
      <p className='text-center text-sm sm:text-base my-4'>{classic.description}</p>
      <ul className='flex'>
        <li className='font-medium'>태그 :</li>
        {classic.tags.map(tag =>
          <li
            key={tag}
            className='border-b-2 border-white rounded-sm mx-1 text-sm sm:text-base hover:text-white transition-all'
          >
            <Link href={`/tags?${tag}`}>
              {tag}
            </Link>
          </li>
        )}
      </ul>
      <div className='w-full h-[300px] sm:h-[600px] sm:px-12 mt-8'>
        <iframe
          src={`${convertToEmbeddedURL(classic?.videoUrl ?? '')}`}
          allowFullScreen
          className='w-full h-full rounded-md'
          ></iframe>
      </div>
    </section>
  )
}