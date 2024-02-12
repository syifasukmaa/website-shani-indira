// Game.tsx
'use client';
import React from 'react';
import QoutesGallery from '../molecules/game/QoutesGallery';
import QuizGallery from '../molecules/game/QuizGallery';

const Game = () => {
  return (
    <section
      className='pt-[100px] mb-10 md:my-20 px-6 lg:px-12'
      id='Fun Area'
    >
      <h2 className='text-white text-4xl case'>Fun Area</h2>
      <div className='mt-4 flex flex-col md:flex-row text-white justify-between z-30'>
        <QoutesGallery />
        <QuizGallery />
      </div>
    </section>
  );
};

export default Game;
