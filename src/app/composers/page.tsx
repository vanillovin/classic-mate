import type { Metadata } from 'next';
import { Hahmlet } from 'next/font/google';

import { getComposers } from './api';
import ComposerList from './ComposerList';
import { siteConfig } from '@/config/site';

const mont = Hahmlet({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = siteConfig.metaData['composers'];

export default async function ComposersPage() {
  const composers = await getComposers();

  return (
    <section className='px-6 pt-12 pb-24 -mt-2 sm:-mt-4 w-full h-full bg-pantone-babys-breath'>
      <h1 className={`flex flex-col items-center text-2xl sm:text-4xl drop-shadow-md mb-16 ${mont.className}`}>
        시간을 넘어선 음악: <span>클래식 음악의 명장들</span>
      </h1>
      <ComposerList composers={composers} />
    </section>
  );
}
