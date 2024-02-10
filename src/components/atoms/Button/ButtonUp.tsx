'use client';
import React, { useCallback } from 'react';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import useStore from '@/store/store';
import { shallow } from 'zustand/shallow';

export default function ButtonUp() {
  // const [colorChange, setColorChange] = useState(true);
  const { isActive, setActive } = useStore(
    (state) => ({
      isActive: state.isActive,
      setActive: state.setActive,
    }),
    shallow,
  );

  const handleToTop = useCallback(() => {
    if (window.scrollY <= 50) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [setActive]);

  useEffect(() => {
    window.addEventListener('scroll', handleToTop);
    return () => {
      window.removeEventListener('scroll', handleToTop);
    };
  }, [handleToTop]);

  return (
    <Link
      to='Home'
      spy={true}
      smooth={true}
      className={`${
        isActive ? 'hidden' : 'flex'
      } fixed w-[12%] md:w-[8%] lg:w-[4%] p-3 cursor-pointer border-2 border-transparent hover:bg-lightGrey mx-auto bottom-10 right-6 lg:right-12 rounded-full bg-white z-40`}
    >
      <Image
        src='/img/up.svg'
        width={300}
        height={500}
        priority={false}
        alt='image up'
      />
    </Link>
  );
}
