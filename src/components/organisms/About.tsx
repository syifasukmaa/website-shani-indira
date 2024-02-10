'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import shani1 from '@/../../public/img/shani10.jpg';
import shani2 from '@/../../public/img/shani9.jpg';
import shani3 from '@/../../public/img/shani12.jpg';
import { motion } from 'framer-motion';
import { slideIn } from '@/utils/motion';

const photos = [
  {
    id: 1,
    src: shani1,
  },
  {
    id: 2,
    src: shani2,
  },
  {
    id: 3,
    src: shani3,
  },
];
export default function About() {
  return (
    <section
      className='pt-[100px] mb-10 md:my-20 px-6 lg:px-12'
      id='About'
    >
      <h2 className='text-white text-4xl case'>ABOUT SHANI</h2>
      <div className='flex flex-col lg:flex-row mt-10 lg:mt-16 items-center'>
        <motion.div
          initial='hidden'
          whileInView='show'
          variants={slideIn('left', 'tween', 0.5, 0.7)}
          className='lg:w-2/5 w-full'
        >
          <Swiper
            speed={1500}
            spaceBetween={5}
            grabCursor={false}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay]}
            loop
            className='mySwiperflex bg-primary px-24 overflow-hidden'
          >
            {photos.map((shani) => {
              return (
                <SwiperSlide key={shani.id}>
                  <div>
                    <Image
                      src={shani.src}
                      alt={`${shani.src} pict`}
                      width={250}
                      height={300}
                      className='bg-cover object-cover w-full'
                      priority={false}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
        <motion.div
          initial='hidden'
          whileInView='show'
          variants={slideIn('down', 'tween', 0.5, 0.7)}
          className='text-white lg:ml-14 lg:w-3/4 mt-4 lg:mt-0 w-full'
        >
          <p className='text-justify leading-7'>
            Shani Indira Natio (シャニ) lahir di Kebumen pada 5 oktober 1998. 10 tahun perjalanannya bersama JKT48,
            Shani telah merasakan berbagai macam posisi baik itu di depan, di tengah, maupun di belakang. Perjalanan
            panjangnya mencerminkan passion dan dedikasinya, menjadikannya sosok yang dihormati dan berpengaruh di
            antara teman segenarasi dan adik-adik generasinya.
          </p>
          <p className='text-justify leading-7 mt-4'>
            Shani berhasil mencuri hati para penggemar dengan penampilannya yang memukau dan menarik. Pada Desember
            2021, ia diangkat sebagai kapten JKT48 dan pada 2 Juli 2023, Shani memutuskan untuk segera lulus dari JKT48
            untuk melanjutkan perjalanannya diluar JKT48.
          </p>
          <p className='text-justify leading-7 mt-4'>Terima kasih Shani🤍 </p>
        </motion.div>
      </div>
    </section>
  );
}
