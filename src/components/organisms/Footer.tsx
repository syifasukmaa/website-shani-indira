import React from 'react';
import { TiSocialInstagram, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti';
import { RiTiktokLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { slideIn } from '@/utils/motion';

export default function Footer() {
  const sosmeds = [
    {
      id: 1,
      link: 'https://www.instagram.com/jkt48shani/',
      icon: <TiSocialInstagram />,
    },
    { id: 2, link: 'https://twitter.com/N_ShaniJKT48', icon: <TiSocialTwitter /> },
    { id: 3, link: 'https://www.tiktok.com/@shanijkt48', icon: <RiTiktokLine /> },
    { id: 4, link: 'https://www.youtube.com/@GreShanTV', icon: <TiSocialYoutube /> },
  ];
  return (
    <motion.footer
      variants={slideIn('up', 'tween', 0.5, 1)}
      initial='hidden'
      whileInView='show'
    >
      <div className='flex justify-center bg-white py-8 text-3xl *:px-4'>
        {sosmeds.map((sosmed) => (
          <a
            key={sosmed.id}
            target='_blank'
            href={sosmed.link}
          >
            {sosmed.icon}
          </a>
        ))}
      </div>
      <div className='bg-slate-300 flex justify-center flex-col items-center py-6'>
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
    </motion.footer>
  );
}
