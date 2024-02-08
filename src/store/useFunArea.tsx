import { createWithEqualityFn } from 'zustand/traditional';
import quotes from '@/utils/quotes.json';

interface FunAreaState {
  isModalOpen: boolean;
  currentQuotes: string;
  setIsModalOpen: () => void;
  setIsModalClose: () => void;
  getRandomQuote: () => string;
}

const useFunArea = createWithEqualityFn<FunAreaState>((set) => ({
  isModalOpen: false,
  currentQuotes: '',
  setIsModalOpen: () =>
    set((state) => ({
      isModalOpen: true,
      currentQuotes: state.getRandomQuote(),
    })),
  setIsModalClose: () =>
    set((state) => ({
      isModalOpen: false,
    })),
  getRandomQuote: () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex].quotes;
  },
}));

export default useFunArea;
