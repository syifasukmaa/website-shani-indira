import Button from '@/components/atoms/Button/Button';
import { useQuizStore } from '@/store/useQuizStore';
import React from 'react';
import { shallow } from 'zustand/shallow';

const QuizQuestion = () => {
  const { currentQuestion, questions, handleAnswerOptionClick } = useQuizStore(
    (state) => ({
      currentQuestion: state.currentQuestion,
      questions: state.questions,
      handleAnswerOptionClick: state.handleAnswerOptionClick,
    }),
    shallow,
  );

  return (
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
            onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
          >
            {answerOption.answerText}
          </Button>
        ))}
      </div>
    </>
  );
};

export default QuizQuestion;
