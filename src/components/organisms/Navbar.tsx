'use client';
import React, { useEffect } from 'react';
import useStore from '@/store/store';
import { BsXLg } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-scroll';
import { shallow } from 'zustand/shallow';
import { motion } from 'framer-motion';
import { navVariants } from '@/utils/motion';

const Navbar = () => {
  const { isNavOpen, colorChange, setIsNavOpen, setColorChange } = useStore(
    (state) => ({
      isNavOpen: state.isNavOpen,
      colorChange: state.colorChange,
      setIsNavOpen: state.setIsNavOpen,
      setColorChange: state.setColorChange,
    }),
    shallow,
  );

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 50) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };

    window.addEventListener('scroll', changeNavbarColor);

    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, [setColorChange]);

  const links = [
    { id: 1, text: 'Home' },
    { id: 7, text: 'Fun fact' },
    { id: 6, text: 'Fun Area' },
    { id: 2, text: 'About' },
    { id: 4, text: 'Sousenkyo' },
    { id: 3, text: 'Songs' },
  ];
  return (
    <motion.div
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      id='navbar'
      className={`${
        colorChange
          ? 'fixed w-full py-3 bg-transparent border-b border-gray-200 backdrop-blur-lg z-50'
          : 'fixed w-full py-3 bg-transparent z-50'
      }`}
    >
      <div className='relative flex items-center justify-between mx-auto px-4 md:px-6 lg:px-8'>
        <h1 className='text-white text-2xl font-semibold'>
          <span className='text-3xl'>S</span>hani <span className='text-3xl'>I</span>ndira
        </h1>
        {isNavOpen ? (
          <button
            className={'absolute block right-5 lg:hidden z-50'}
            onClick={() => setIsNavOpen(false)}
            aria-label='close button'
          >
            <BsXLg className='text-3xl text-black' />
          </button>
        ) : (
          <button
            className={'absolute block right-5 lg:hidden'}
            onClick={() => setIsNavOpen(true)}
            aria-label='menu button'
          >
            <RxHamburgerMenu className='text-3xl font-normal text-white' />
          </button>
        )}
        <div
          className={isNavOpen ? 'absolute w-full lg:right-14 right-0 lg:top-0 -top-3 max-w-[250px]' : 'hidden lg:flex'}
        >
          <nav className='flex flex-col justify-around py-6 bg-white h-[100vh] lg:h-0 border border-gray-200 shadow-xl lg:items-center lg:border-none lg:bg-transparent lg:shadow-none lg:flex-row z-50'>
            {links.map((link) => (
              <Link
                key={link.id}
                activeClass='active'
                smooth={true}
                spy={true}
                to={link.text}
                className={`flex py-2 cursor-pointer text-lg text-black lg:text-white hover:font-bold transition-all ease-in-out duration-300 mx-8 md:mx-4 text-dark200`}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
