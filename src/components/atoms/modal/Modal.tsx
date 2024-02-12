import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button/Button';
import useFunArea from '@/store/useFunArea';

interface ModalProps {
  children: React.ReactNode;
}
const Modal = ({ children }: ModalProps) => {
  const { setIsModalClose } = useFunArea();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${'fixed inset-0 z-10 text-white bg-slate-950 bg-opacity-90 w-screen h-screen flex justify-center items-center'}`}
    >
      <div className='bg-white rounded shadow-md p-8 z-50 w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] text-black relative'>
        {/* <p className='mt-2'>{currentQuotes}</p> */}
        {children}
        <Button
          variants='secondary'
          size='small'
          className='absolute top-3 right-2'
          onClick={setIsModalClose}
        >
          X
        </Button>
      </div>
    </motion.div>
  );
};

export default Modal;
