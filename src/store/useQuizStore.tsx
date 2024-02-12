import { createWithEqualityFn } from 'zustand/traditional';
import question from '@/utils/quiz.json';

interface AnswerOption {
  answerText: string;
  isCorrect: boolean;
}

interface Question {
  questionText: string;
  answerOptions: AnswerOption[];
}

interface QuizStore {
  currentQuestion: number;
  showScore: boolean;
  score: number;
  questions: Question[];
  handleAnswerOptionClick: (isCorrect: boolean) => void;
}
export const useQuizStore = createWithEqualityFn<QuizStore>((set) => ({
  currentQuestion: 0,
  showScore: false,
  score: 0,
  questions: question,

  handleAnswerOptionClick: (isCorrect) => {
    set((state) => {
      const nextQuestion = state.currentQuestion + 1;

      if (isCorrect && nextQuestion < state.questions.length) {
        return { score: state.score + 1, currentQuestion: nextQuestion };
      }
      if (isCorrect && nextQuestion === state.questions.length) {
        return { score: state.score + 1, showScore: true };
      }
      if (nextQuestion === state.questions.length) {
        return { showScore: true };
      }
      return { currentQuestion: nextQuestion };
    });
  },
}));
