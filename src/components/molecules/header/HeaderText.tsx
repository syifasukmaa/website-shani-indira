import React from 'react';
import { motion } from 'framer-motion';
import { slideIn } from '@/utils/motion';

function HeaderText() {
  return (
    <motion.div
      initial='hidden'
      whileInView='show'
      variants={slideIn('left', 'tween', 0.5, 0.7)}
      className='text-white text-left md:w-[50%] lg:w-[50%]'
    >
      <p className='mb-4 text-sm lg:text-base font-bold'>Captain JKT48</p>
      <h2 className='mb-4 text-4xl lg:text-6xl font-light'>Shani Indira Natio</h2>
      <div className='mt-6'>
        <p className=' text-sm lg:text-base lg:w-[90%]'>
          Shani adalah seorang member generasi ke-3 dan juga captain JKT48 yaitu idol group asal Indonesia, serta sister
          group AKB48.
        </p>
        <p className='mt-1 text-sm lg:text-base'>
          Ia menggambarkan dirinya saat perkenalan diri dalam bahasa Jepang (Jikoshoukai)
        </p>
        <p className='italic mt-2 text-lg md:text-xl'>&quot;Semanis Coklat Selembut Sutra&quot;</p>
      </div>
    </motion.div>
  );
}

export default HeaderText;
