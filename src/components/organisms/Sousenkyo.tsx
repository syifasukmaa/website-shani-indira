import Image from 'next/image';
import React from 'react';
import achivements from '@/utils/achivement.json';
import { motion } from 'framer-motion';
import { galleryContainerVariant, galleryVariant } from '@/utils/motion';

export default function Sousenkyo() {
  return (
    <section
      className='relative pt-[100px] lg:pt-[100px] mb-10 md:my-20 px-6 lg:px-12'
      id='Sousenkyo'
    >
      <div>
        <h2 className='text-white text-4xl'>SOUSENKYO AND REQUEST HOUR</h2>
        <motion.div
          variants={galleryContainerVariant}
          initial='hidden'
          whileInView='show'
          className='mt-10 lg:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-7 md:gap-y-10'
        >
          {achivements.map((shani) => (
            <motion.div
              variants={galleryVariant}
              className='relative group overflow-hidden hover:rounded-lg'
              key={shani.id}
            >
              <Image
                src={shani.src}
                height={1000}
                width={1000}
                alt={shani.name}
                priority={true}
                className='rounded-lg group-hover:transition-transform group-hover:scale-125'
              />
              <div className='absolute bg-gradient-to-b from-transparent via-transparent to-black rounded-lg inset-0 group-hover:from-black/80 group-hover:via-black/70 group-hover:to-black/80'></div>
              <div className='absolute bottom-0 inset-x-0 flex flex-col bg-pink group-hover:bg-transparent items-center justify-center rounded-b-lg transition-all group-hover:duration-300 translate-y-[68%] lg:translate-y-[65%] group-hover:translate-y-0 group-hover:inset-y-0'>
                <p className='text-white py-2 md:py-0 lg:py-2 font-semibold text-base md:text-lg lg:text-xl mb-4 z-10 group-hover:mb-0 group-hover:py-0'>
                  {shani.name}
                </p>
                <p className='text-white py-1 font-semibold text-lg z-10'>Rank: {shani.rank}</p>
                <p className='text-white py-1 font-semibold text-lg z-10'>Music: {shani.music}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
