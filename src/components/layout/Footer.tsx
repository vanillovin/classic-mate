import Link from 'next/link';

import { type SiteConfig, siteConfig } from '@/config/site';

function Footer() {
  return (
    <footer
      className="sticky top-[100vh] p-8 text-center text-white bg-pantone-metallic-gold"
    >
      <p>
        {Object.keys(siteConfig.links).map((key, index) => (
          <>
            <Link
              key={index}
              target="_blank"
              href={siteConfig.links[key as keyof SiteConfig['links']]}
              className=''
            >
              {key}
            </Link>
            {index < Object.values(siteConfig.links).length - 1 && <span className='mx-1'>|</span>}
          </>
        ))}
      </p>
      <p>© 2023 classic-mate.vercel.app</p>
      <p>Powered By Next.js Hosted By Vercel.</p>
      <hr className='my-2 border-pantone-babys-breath' />
      <p>Made with 🤍 by ming</p>
    </footer>
  );
}

export default Footer;