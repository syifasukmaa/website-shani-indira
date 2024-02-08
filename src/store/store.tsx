import { createWithEqualityFn } from 'zustand/traditional';

interface StoreState {
  isNavOpen: boolean;
  colorChange: boolean;
  isActive: boolean;
  setIsNavOpen: (isOpen: boolean) => void;
  setColorChange: (change: boolean) => void;
  setActive: (active: boolean) => void;
}

const useStore = createWithEqualityFn<StoreState>((set) => ({
  isNavOpen: false,
  colorChange: false,
  isActive: false,
  setIsNavOpen: (isOpen) =>
    set((state) => ({
      isNavOpen: isOpen,
    })),
  setColorChange: (change) => set((state) => ({ colorChange: change })),
  setActive: (active) => set((state) => ({ isActive: active })),
}));

export default useStore;
