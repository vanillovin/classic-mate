import Link from 'next/link';

import Comments from './Comments';
import notFound from './not-found';
import { createServerClient } from '@/utils/supabase-server';
import ClassicLikeButton from '@/components/classics/ClassicLikeButton';

export default async function ClassicDetailPage({ params }: { params: { classicId: string } }) {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: classics } = await supabase
    .from('all_classics')
    .select('*, classic_likes (classic_id)')
    .eq('id', params.classicId);
  const { data: comments } = await supabase
    .from('classic_comments')
    .select('*')
    .eq('classic_id', params.classicId)
    .order('created_at', { ascending: false });
  const { data: likes } = await supabase
    .from('classic_likes')
    .select()
    .eq('user_id', user?.id);

  const classic = classics?.[0];

  if (!classic) return notFound();

  return (
    <section className='w-full flex flex-col items-center p-4'>
      <h1 className='text-xl sm:text-2xl font-semibold'>{classic.title}</h1>
      <ul className='flex items-center text-sm sm:text-base'>
        <li className='mr-1 text-sm sm:text-base'>{classic.composer} ·</li>
        <li className='mr-1 text-sm sm:text-base'>{classic.genre} ·</li>
        <li className='text-sm sm:text-base'>{classic.year}</li>
      </ul>
      <p className='text-center text-sm sm:text-base my-4 sm:px-12'>{classic.description}</p>
      <ClassicLikeButton
        classicId={classic.id}
        likes={likes ?? []}
        name={String(classic.classic_likes.length)}
        className='rounded-sm bg-white p-1 mb-4 hover:bg-opacity-70 transition-all'
      />
      <ul className='flex'>
        <li className='font-medium'>태그 :</li>
        {classic.tags.map(tag =>
          <li
            key={tag}
            className='border-b-2 border-white rounded-sm mx-1 text-sm sm:text-base hover:text-white transition-all'
          >
            <Link href={`/tags?`}>
              {tag}
            </Link>
          </li>
        )}
      </ul>
      <div className='w-full h-[300px] sm:h-[600px] sm:px-12 mt-8'>
        <iframe
          src={`${convertToEmbeddedURL(classic.video_url ?? '')}`}
          allowFullScreen
          className='w-full h-full rounded-md'
        ></iframe>
      </div>
      <Comments classicId={params.classicId} comments={comments ?? []} />
    </section>
  );
}

function convertToEmbeddedURL(url: string) {
  const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
  const match = url.match(regExp);
  const videoId = match ? match[1] || match[2] : undefined;
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}