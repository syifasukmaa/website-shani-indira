import React from 'react';
import { motion } from 'framer-motion';
import { galleryContainerVariant, galleryVariant } from '@/utils/motion';
import Button from '@/components/atoms/Button/Button';
import useFunArea from '@/store/useFunArea';
import Modal from '@/components/atoms/modal/Modal';

function QoutesGallery() {
  const { isModalOpen, setIsModalOpen, currentQoutes } = useFunArea((state) => ({
    isModalOpen: state.isModalOpen,
    setIsModalOpen: state.setIsModalOpen,
    currentQoutes: state.currentQuotes,
  }));
  return (
    <motion.div
      initial='hidden'
      whileInView='show'
      variants={galleryContainerVariant}
      className='lg:w-1/2 md:w-[60%]'
    >
      <motion.div variants={galleryVariant}>
        <h3 className='font-semibold text-lg'>Qoutes By Shani Indira</h3>
        <p className='mt-4 w-[80%]'>
          Shani mempunyai show yang bernama Kamar Shani, dimana Shani memberikan masukan kepada member lain yang sedang
          curhat kepadanya.
        </p>
        <Button
          fullWidth={false}
          size='medium'
          onClick={setIsModalOpen}
        >
          Silahkan Dibaca
        </Button>
      </motion.div>
      {isModalOpen ? (
        <Modal>
          <p className='mt-2'>{currentQoutes}</p>
        </Modal>
      ) : null}
    </motion.div>
  );
}

export default QoutesGallery;
