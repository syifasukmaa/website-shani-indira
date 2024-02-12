import { useQuizStore } from '@/store/useQuizStore';
import React from 'react';
import { shallow } from 'zustand/shallow';
import { motion } from 'framer-motion';
import { slideIn } from '@/utils/motion';
import QuizQuestion from './QuizQuestion';
import ScoreSection from './ScoreSection';

const QuizGallery = () => {
  const { showScore } = useQuizStore(
    (state) => ({
      showScore: state.showScore,
    }),
    shallow,
  );

  return (
    <motion.div
      initial='hidden'
      whileInView='show'
      variants={slideIn('right', 'tween', 0.5, 0.7)}
      className='lg:w-1/2 mt-8 md:mt-0 overflow-hidden'
    >
      <h3 className='font-semibold text-lg'>Quiz About Shani Indira</h3>
      <div className='mt-4 rounded-lg p-[20px] shadow-md flex flex-col lg:flex-row justify-evenly border-2 border-white font-medium'>
        {showScore ? <ScoreSection /> : <QuizQuestion />}
      </div>
    </motion.div>
  );
};

export default QuizGallery;
