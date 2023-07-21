'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { type SiteConfig, siteConfig } from '@/config/site';

function Footer() {
  const pathname = usePathname();

  const bgColor = pathname.includes('picks') ? 'bg-pantone-brandy-sniffer' : 'bg-pantone-metallic-gold';

  return (
    <footer
      className={`sticky top-[100vh] p-4 sm:p-8 text-center text-sm sm:text-base text-white ${bgColor}`}
    >
      <div className='flex items-center justify-center'>
        {Object.keys(siteConfig.links).map((key, index) => (
          <p key={index}>
            <Link
              target="_blank"
              href={siteConfig.links[key as keyof SiteConfig['links']]}
              className='hover:underline'
            >
              {key}
            </Link>
            {index < Object.values(siteConfig.links).length - 1 && <span className='mx-1'>|</span>}
          </p>
        ))}
      </div>
      <p>© 2023 classic-mate.vercel.app</p>
      <p>Powered By Next.js Hosted By Vercel.</p>
      <hr className='my-4 mx-auto border-pantone-babys-breath' />
      <p>Made with 🤍 by ming</p>
    </footer>
  );
}

export default Footer;