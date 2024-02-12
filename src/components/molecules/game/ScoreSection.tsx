import React from 'react';
import Image from 'next/image';
import { useQuizStore } from '@/store/useQuizStore';

const ScoreSection = () => {
  const { score, questions } = useQuizStore((state) => ({
    score: state.score,
    questions: state.questions,
  }));

  const totalQuestion = questions.length;
  return (
    <>
      <div className='score-section flex flex-col text-lg items-center'>
        <p className='mb-2'>
          You scored {score} out of {totalQuestion}
        </p>
        {score === totalQuestion ? (
          <div className='flex flex-col justify-center items-center'>
            <p>Yeay selamat!!! </p>
            <Image
              src='/img/shani13.jpg'
              height={500}
              width={500}
              alt='shani image'
              priority={true}
              className='w-[40%] mt-3 rounded-lg'
            />
          </div>
        ) : (
          <div className='flex flex-col justify-center items-center'>
            <p>Masih ada yang salah😔</p>
            <Image
              src='/img/shani14.jpg'
              height={500}
              width={500}
              alt='shani image'
              priority={true}
              className='w-[40%] mt-3 rounded-lg'
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ScoreSection;
