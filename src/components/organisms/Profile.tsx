/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import shaniProfile from '@/utils/shaniPofile.json';
import { motion } from 'framer-motion';
import { slideIn } from '@/utils/motion';

export default function Profile() {
  return (
    <section
      className='pt-[20px] sm:pt-[100px] md:pt-20'
      id='Fun fact'
    >
      <div className='text-center px-6 lg:px-12'>
        <h2 className='text-white text-4xl'>SHANI'S FUN FACT</h2>
        <motion.div
          initial='hidden'
          whileInView='show'
          variants={slideIn('down', 'tween', 0.5, 0.7)}
        >
          <Swiper
            speed={1000}
            spaceBetween={30}
            grabCursor={true}
            slidesPerView={0}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1500: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 4,
              },
              640: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 1,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            navigation={true}
            modules={[Autoplay]}
            loop
            className='mySwiperflexbg-primary px-24 overflow-hidden mt-10 ml-6'
          >
            {shaniProfile.map((shani) => {
              return (
                <SwiperSlide key={shani.id}>
                  <div className='border-4 border-white relative group transform transition-transform duration-500 hover:rotate-y-180'>
                    <div className='absolute inset-0 bg-white w-full h-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-[95%] px-6'>
                      <p className='text-lg font-semibold text-black'>{shani.funcfact}</p>
                      <p className='text-md text-black absolute bottom-3 '>
                        📷 <span className='ml-1'>{shani.imgSrc}</span>
                      </p>
                    </div>
                    <Image
                      src={shani.src}
                      alt={`${shani.name} pict`}
                      width={300}
                      height={300}
                      className='bg-cover object-cover w-full'
                      priority={true}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
