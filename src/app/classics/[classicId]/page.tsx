import Link from 'next/link';
import { getClassicById } from './api';
import notFound from './not-found';

function convertToEmbeddedURL(url: string) {
  const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
  const match = url.match(regExp);
  const videoId = match ? match[1] || match[2] : undefined;
  if (videoId) return `https://www.youtube.com/embed/${videoId}`;
  return url;
}
    
async function ClassicDetailPage({ params }: { params: { classicId: string }}) {
  const classic = await getClassicById(parseInt(params.classicId));
  
  if (!classic) return notFound();

  return (
    <section className='w-full h-screen flex flex-col items-center p-4'>
      <h1 className='text-xl sm:text-2xl font-semibold'>{classic.title}</h1>
      <p className='text-sm sm:text-base my-4'>{classic.description}</p>
      <ul className='flex'>
        태그 :
        {classic.tags.map(tag =>
          <li
            key={tag}
            className='border-b-2 border-white rounded-sm mx-1 text-sm sm:text-base'
          >
            <Link href={`/tags/${tag}`}>
              {tag}
            </Link>
          </li>
        )}
      </ul>
      <div className='w-full h-[300px] sm:h-[600px] sm:px-12 my-4'>
        <iframe
          src={`${convertToEmbeddedURL(classic.videoUrl)}`}
          allowFullScreen
          className='w-full h-full rounded-md'
          ></iframe>
      </div>
    </section>
  )
}

export default ClassicDetailPage;
