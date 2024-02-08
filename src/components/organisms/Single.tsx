import Image from 'next/image';
import React from 'react';
import singles from '@/utils/singleParticipant.json';
import { SlCalender } from 'react-icons/sl';
import { FaCrown } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { galleryContainerVariant, galleryVariant, hoverVariant } from '@/utils/motion';

export default function Single() {
  return (
    <section
      className='pt-[100px] lg:pt-[100px] mb-10 md:my-20 px-6 lg:px-12'
      id='Songs'
    >
      <h2 className='text-white text-4xl'>SINGLE PARTICIPATION</h2>
      <motion.div
        variants={galleryContainerVariant}
        initial='hidden'
        whileInView='show'
        className='mt-10 lg:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10 '
      >
        {singles.map((single) => (
          <motion.div
            variants={galleryVariant}
            whileHover={{ translateY: -10, transition: { duration: 0.1, ease: 'easeOut' } }}
            className='rounded overflow-hidden group hover:shadow-2xl shadow-white transition duration-300'
            key={single.id}
          >
            <a
              href={single.link}
              target='_blank'
            >
              <Image
                src={single.img}
                height={1000}
                width={1000}
                alt='shani1'
                priority={true}
                className=''
              />
            </a>
            <div className='py-4 text-left'>
              <div className='font-normal text-lg text-white hover:underline hover:text-pink'>
                <a
                  href={single.link}
                  target='_blank'
                >
                  {single.title}
                </a>
              </div>
            </div>
            <div className='pb-2 flex'>
              <div className=' flex bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-pink mr-2 mb-2'>
                <SlCalender className='text-pink font-bold' /> <span className='ml-2'>{single.year}</span>
              </div>
              <div
                className={`${
                  single.position === '' ? 'hidden' : 'block'
                } flex bg-gray-200 rounded-full capitalize px-3 py-1 text-sm font-semibold text-pink mb-2`}
              >
                <FaCrown className='text-pink font-bold text-sm' /> <span className='ml-1'>{single.position}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
