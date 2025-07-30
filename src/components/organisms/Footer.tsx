import React from 'react';
import { TiSocialInstagram, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti';
import { RiTiktokLine } from 'react-icons/ri';

const Footer: React.FC = () => {
  type FooterProps = {
    id: number;
    link: string;
    icon: React.ReactElement;
  };

  const sosmeds: FooterProps[] = [
    {
      id: 1,
      link: 'https://www.instagram.com/_shanindira/',
      icon: <TiSocialInstagram />,
    },
    { id: 2, link: 'https://x.com/_shanindira', icon: <TiSocialTwitter /> },
    { id: 3, link: 'https://www.tiktok.com/shaniindira', icon: <RiTiktokLine /> },
    { id: 4, link: 'https://www.youtube.com/@shanindiraofficial', icon: <TiSocialYoutube /> },
  ];
  return (
    <footer>
      <div className='flex justify-center bg-white py-8 text-3xl *:px-4'>
        {sosmeds.map((sosmed) => (
          <a
            key={sosmed.id}
            target='_blank'
            href={sosmed.link}
            aria-label={sosmed.link}
          >
            {sosmed.icon}
          </a>
        ))}
      </div>
      <div className='flex flex-col items-center justify-center py-6 bg-slate-300'>
        <p className='font-medium'>This Website is created using 💖</p>
        <p className='mt-1'>
          © 2024
          <a
            href=''
            className='font-semibold'
          >
            Syifasukma
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
