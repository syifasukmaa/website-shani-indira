'use client';
import React from 'react';
import 'swiper/css';
import { motion } from 'framer-motion';
import { slideIn } from '@/utils/motion';
import MySwiper from '../molecules/MySwipper';
import photos from '@/utils/shaniAbout.json';

const About: React.FC = () => {
  return (
    <section
      className='pt-[100px] mb-10 md:my-20 px-6 lg:px-12'
      id='About'
    >
      <h2 className='text-4xl text-white case'>ABOUT SHANI</h2>
      <div className='flex flex-col items-center mt-10 lg:flex-row lg:mt-16'>
        <motion.div
          initial='hidden'
          whileInView='show'
          variants={slideIn('left', 'tween', 0.5, 0.7)}
          className='w-full lg:w-2/5'
        >
          <MySwiper data={photos} />
        </motion.div>
        <motion.div
          initial='hidden'
          whileInView='show'
          variants={slideIn('down', 'tween', 0.5, 0.7)}
          className='w-full mt-4 text-white lg:ml-14 lg:w-3/4 lg:mt-0'
        >
          <p className='leading-7 text-justify'>
            Shani Indira Natio (シャニ) lahir di Kebumen pada 5 oktober 1998. 10 tahun perjalanannya bersama JKT48,
            Shani telah merasakan berbagai macam posisi baik itu di depan, di tengah, maupun di belakang. Perjalanan
            panjangnya mencerminkan passion dan dedikasinya, menjadikannya sosok yang dihormati dan berpengaruh di
            antara teman segenarasi dan adik-adik generasinya.
          </p>
          <p className='mt-4 leading-7 text-justify'>
            Shani berhasil mencuri hati para penggemar dengan penampilannya yang memukau dan menarik. Pada Desember
            2021, ia diangkat sebagai kapten JKT48 dan pada 2 Juli 2023, Shani memutuskan untuk segera lulus dari JKT48
            untuk melanjutkan perjalanannya diluar JKT48.
          </p>
          <p className='mt-4 leading-7 text-justify'>Terima kasih Shani🤍 </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
