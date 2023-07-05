import { Hahmlet } from 'next/font/google';

import { getArtists } from './api';
import ArtistList from './ArtistList';

const mont = Hahmlet({ subsets: ['latin'], weight: ['400'] });

export default async function ArtistPage() {
  const artists = await getArtists();

  return (
    <section className='px-6 py-12 -mt-2 sm:-mt-4 w-full h-full bg-pantone-babys-breath'>
      <h1 className={`flex flex-col items-center text-2xl sm:text-4xl drop-shadow-md mb-16 ${mont.className}`}>
        시간을 넘어선 음악: <span>클래식 음악의 명장들</span>
      </h1>
      <ArtistList artists={artists} />
    </section>
  );
}
