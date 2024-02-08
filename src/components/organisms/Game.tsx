// Game.tsx
'use client';
import React from 'react';
import useFunArea from '@/store/useFunArea';
import { useQuizStore } from '@/store/useQuizStore';
import { motion } from 'framer-motion';
import { galleryContainerVariant, galleryVariant, slideIn } from '@/utils/motion';
import Button from '../atoms/Button/Button';

const Game = () => {
  const { setIsModalOpen, setIsModalClose, isModalOpen, currentQuotes } = useFunArea();
  const { currentQuestion, showScore, score, questions, handleAnswerOptionClick } = useQuizStore();
  return (
    <section
      className='pt-[100px] mb-10 md:my-20 px-6 lg:px-12'
      id='Fun Area'
    >
      <h2 className='text-white text-4xl case'>Fun Area</h2>
      <div className='mt-4 flex flex-col md:flex-row text-white justify-between z-30'>
        <motion.div
          initial='hidden'
          whileInView='show'
          variants={galleryContainerVariant}
          className='lg:w-1/2 md:w-[60%]'
        >
          <motion.div variants={galleryVariant}>
            <h3 className='font-semibold text-lg'>Qoutes By Shani Indira</h3>
            <p className='mt-4 w-[80%]'>
              Shani mempunyai show yang bernama Kamar Shani, dimana Shani memberikan masukan kepada member lain yang
              sedang curhat kepadanya.
            </p>
            {/* <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='border-lightBlue border-2 hover:bg-lightGrey text-white rounded-md py-2 px-3 mt-4 shadow-md cursor-pointer font-semibold'
              onClick={setIsModalOpen}
            >
              Silahkan Dibaca
            </motion.button> */}
            <Button
              fullWidth={false}
              size='medium'
              onClick={setIsModalOpen}
            >
              Silahkan Dibaca
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`${
              isModalOpen
                ? 'fixed inset-0 z-10 text-white bg-slate-950 bg-opacity-90 w-screen h-screen flex justify-center items-center'
                : 'hidden'
            }`}
          >
            <div className='bg-white rounded shadow-md p-8 z-50 w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] text-black relative'>
              <p className='mt-2'>{currentQuotes}</p>
              {/* <button
                className='bg-black text-white absolute rounded-md top-3 right-2 px-2 hover:bg-slate-600'
                onClick={setIsModalClose}
              >
                X */}
              {/* </button> */}
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
        </motion.div>
        <motion.div
          initial='hidden'
          whileInView='show'
          variants={slideIn('right', 'tween', 0.5, 0.7)}
          className='lg:w-1/2 mt-8 md:mt-0 overflow-hidden'
        >
          <h3 className='font-semibold text-lg'>Quiz About Shani Indira</h3>
          <div className='mt-4 rounded-lg p-[20px] shadow-md flex flex-col lg:flex-row justify-evenly border-2 border-white font-medium'>
            {showScore ? (
              <div className='score-section flex text-lg items-center'>
                You scored {score} out of {questions.length}
              </div>
            ) : (
              <>
                <div className='question-section w-full relative'>
                  <div className='question-count mb-3'>
                    <span className='text-xl'>Question {currentQuestion + 1}</span>/{questions.length}
                  </div>
                  <div className='question-text mb-3 lg:pr-4 text-base'>{questions[currentQuestion]?.questionText}</div>
                </div>
                <div className='answer-section w-full flex flex-col justify-between'>
                  {questions[currentQuestion]?.answerOptions?.map((answerOption, index) => (
                    <Button
                      key={index}
                      size='large'
                      fullWidth={true}
                    >
                      {answerOption.answerText}
                    </Button>
                  ))}
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Game;
// fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-slate-950 bg-opacity-60 z-50 w-screen h-screen flex justify-center items-center
