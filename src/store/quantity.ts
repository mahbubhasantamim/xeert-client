import { create } from "zustand";

type CounterType = {
  count: number;
  onchange: (by: number) => void;
  increment: () => void;
  decrement: () => void;
};

export const useQuantityStore = create<CounterType>((set) => ({
  count: 1,

  onchange: (by) => set((state) => ({ count: (state.count = by) })),

  increment: () => set((state) => ({ count: state.count + 1 })),

  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
