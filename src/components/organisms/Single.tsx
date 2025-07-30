import Image from 'next/image';
import React from 'react';
import singles from '@/utils/singleParticipant.json';
import { SlCalender } from 'react-icons/sl';
import { FaCrown } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { galleryContainerVariant, galleryVariant, hoverVariant } from '@/utils/motion';

const Single: React.FC = () => {
  return (
    <section
      className='pt-[100px] lg:pt-[100px] mb-10 md:my-20 px-6 lg:px-12'
      id='Songs'
    >
      <h2 className='text-4xl text-white'>SINGLE PARTICIPATION</h2>
      <motion.div
        variants={galleryContainerVariant}
        initial='hidden'
        whileInView='show'
        className='grid grid-cols-2 mt-10 lg:mt-16 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10 '
      >
        {singles.map((single) => (
          <motion.div
            variants={galleryVariant}
            whileHover={{ translateY: -10, transition: { duration: 0.1, ease: 'easeOut' } }}
            className='overflow-hidden transition duration-300 rounded group hover:shadow-2xl shadow-white'
            key={single.id}
          >
            <a
              href={single.link}
              target='_blank'
            >
              <Image
                src={single.img}
                height={300}
                width={300}
                alt='shani1'
                priority={false}
              />
            </a>
            <div className='py-4 text-left'>
              <div className='text-lg font-normal text-white hover:underline hover:text-pink'>
                <a
                  href={single.link}
                  target='_blank'
                >
                  {single.title}
                </a>
              </div>
            </div>
            <div className='flex pb-2'>
              <div className='flex px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-gray-200 rounded-full text-pink'>
                <SlCalender className='hidden font-bold text-pink md:block' />{' '}
                <span className='md:ml-2'>{single.year}</span>
              </div>
              <div
                className={`${
                  single.position === '' ? 'hidden' : 'block'
                } flex bg-gray-200 rounded-full capitalize px-3 py-1 text-sm font-semibold text-pink mb-2 `}
              >
                <FaCrown className='mt-[2px] text-pink font-bold text-sm' />{' '}
                <span className='ml-1'>{single.position}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Single;
