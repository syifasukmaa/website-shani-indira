import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideIn } from '@/utils/motion';

function HeaderImage() {
  return (
    <motion.div
      initial='hidden'
      whileInView='show'
      variants={slideIn('down', 'tween', 0.5, 0.7)}
      className='mt-20 md:mt-0'
    >
      <div className='w-[250px] h-[300px] lg:w-[330px] lg:h-[400px] rounded-t-full bg-white relative'>
        <Image
          src='/img/shani-header.png'
          alt='shani indira'
          width={280}
          height={380}
          className='h-[356px] lg:h-[456px] w-full absolute -top-14'
          priority={false}
        />
      </div>
    </motion.div>
  );
}

export default HeaderImage;
