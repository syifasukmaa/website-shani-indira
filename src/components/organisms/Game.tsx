// Game.tsx
'use client';
import React from 'react';
import QoutesGallery from '../molecules/game/QoutesGallery';
import QuizGallery from '../molecules/game/QuizGallery';

const Game: React.FC = () => {
  return (
    <section
      className='pt-[100px] mb-10 md:my-20 px-6 lg:px-12'
      id='Fun Area'
    >
      <h2 className='text-4xl text-white case'>Fun Area</h2>
      <div className='z-30 flex flex-col justify-between mt-4 text-white md:flex-row'>
        <QoutesGallery />
        <QuizGallery />
      </div>
    </section>
  );
};

export default Game;
