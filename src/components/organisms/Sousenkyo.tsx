import Image from 'next/image';
import React from 'react';
import achivements from '@/utils/achivement.json';
import { motion } from 'framer-motion';
import { galleryContainerVariant, galleryVariant } from '@/utils/motion';

const Sousenkyo: React.FC = () => {
  return (
    <section
      className='relative pt-[100px] lg:pt-[100px] mb-10 md:my-20 px-6 lg:px-12'
      id='Sousenkyo'
    >
      <div>
        <h2 className='text-4xl text-white'>SOUSENKYO AND REQUEST HOUR</h2>
        <motion.div
          variants={galleryContainerVariant}
          initial='hidden'
          whileInView='show'
          className='grid grid-cols-1 mt-10 lg:mt-16 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-7 md:gap-y-10'
        >
          {achivements.map((shani) => (
            <motion.div
              variants={galleryVariant}
              className='relative overflow-hidden group hover:rounded-lg'
              key={shani.id}
            >
              <Image
                src={shani.src}
                height={200}
                width={300}
                alt={shani.name}
                priority={false}
                className='object-cover w-full rounded-lg group-hover:transition-transform group-hover:scale-125'
              />
              <div className='absolute inset-0 rounded-lg bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/70 group-hover:to-black/80'></div>
              <div className='absolute bottom-0 inset-x-0 flex flex-col bg-pink group-hover:bg-transparent items-center justify-center rounded-b-lg transition-all group-hover:duration-300 translate-y-[68%] lg:translate-y-[65%] group-hover:translate-y-0 group-hover:inset-y-0'>
                <p className='z-10 py-2 mb-4 text-base font-semibold text-white md:py-0 lg:py-2 md:text-lg lg:text-xl group-hover:mb-0 group-hover:py-0'>
                  {shani.name}
                </p>
                <p className='z-10 py-1 text-lg font-semibold text-white'>Rank: {shani.rank}</p>
                <p className='z-10 py-1 text-lg font-semibold text-white'>Music: {shani.music}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sousenkyo;
