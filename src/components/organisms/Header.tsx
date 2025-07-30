import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideIn } from '@/utils/motion';
import HeaderImage from '../molecules/header/HeaderImage';
import HeaderText from '../molecules/header/HeaderText';
const Header: React.FC = () => {
  return (
    <>
      <div
        id='Home'
        className='relative z-10 p-12 text-center bg-center bg-no-repeat bg-cover'
        style={{ backgroundImage: "url('/img/header.webp')", height: '100vh' }}
      >
        <div className='absolute bottom-0 left-0 right-0 w-full h-full px-8 bg-fixed top-20 md:top-10 lg:top-0 md:px-12 lg:px-28'>
          <div className='flex flex-col items-center h-full md:flex-row md:justify-between'>
            <HeaderText />
            <HeaderImage />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
