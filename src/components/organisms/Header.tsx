import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideIn } from '@/utils/motion';
import HeaderImage from '../molecules/header/HeaderImage';
import HeaderText from '../molecules/header/HeaderText';
export default function Header() {
  return (
    <>
      <div
        id='Home'
        className='relative bg-cover bg-center bg-no-repeat p-12 text-center z-10'
        style={{ backgroundImage: "url('/img/header.webp')", height: '100vh' }}
      >
        <div className='absolute bottom-0 left-0 right-0 top-20 md:top-10 lg:top-0 h-full w-full bg-fixed px-8 md:px-12 lg:px-28'>
          <div className='flex flex-col md:flex-row h-full items-center md:justify-between'>
            <HeaderText />
            <HeaderImage />
          </div>
        </div>
      </div>
    </>
  );
}
