/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import 'swiper/css';
import shaniProfile from '@/utils/shaniPofile.json';
import { motion } from 'framer-motion';
import { slideIn } from '@/utils/motion';
import MySwiper from '../molecules/MySwipper';

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
          <MySwiper
            data={shaniProfile}
            className='mt-10 ml-6'
            isFuncFact={true}
          />
        </motion.div>
      </div>
    </section>
  );
}
