import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideIn } from '@/utils/motion';
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
                  Shani adalah seorang member generasi ke-3 dan juga captain JKT48 yaitu idol group asal Indonesia,
                  serta sister group AKB48.
                </p>
                <p className='mt-1 text-sm lg:text-base'>
                  Ia menggambarkan dirinya saat perkenalan diri dalam bahasa Jepang (Jikoshoukai)
                </p>
                <p className='italic mt-2 text-lg md:text-xl'>&quot;Semanis Coklat Selembut Sutra&quot;</p>
              </div>
            </motion.div>
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
          </div>
        </div>
      </div>
    </>
  );
}
