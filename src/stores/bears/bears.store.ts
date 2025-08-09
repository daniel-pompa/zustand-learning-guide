import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Bear, BearType } from '@interfaces';
import { sampleBears } from '@data';

// Defines how much each bear type increments or decrements the counter
const bearStepMap: Record<BearType, number> = {
  black: 1, // Black bears increment/decrement by 1
  polar: 2, // Polar bears increment/decrement by 2
  panda: 3, // Panda bears increment/decrement by 3
};

interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  bears: Bear[];

  totalBears: () => number; // Returns total from individual counters
  changeBearCount: (type: BearType, direction: 'increment' | 'decrement') => void;
  resetBearCount: (type: BearType) => void;
  addBear: (name: string, type: BearType) => void;
  removeBears: () => void;
}

export const useBearStore = create<BearState>()(
  persist(
    (set, get) => ({
      blackBears: 0,
      polarBears: 0,
      pandaBears: 0,

      bears: [],

      // Returns the total count by summing each type-specific counter
      totalBears: () => {
        return get().blackBears + get().polarBears + get().pandaBears;
      },

      // Increments or decrements a specific bear counter
      changeBearCount: (type, direction) =>
        set(state => {
          const step = bearStepMap[type];
          const key = `${type}Bears` as keyof BearState;
          const current = state[key] as number;
          const delta = direction === 'increment' ? step : -step;

          return {
            [key]: Math.max(0, current + delta), // Prevents negative values
          } as Partial<BearState>;
        }),
      resetBearCount: type =>
        set(state => {
          const filteredBears = state.bears.filter(b => b.type !== type);
          return {
            bears: filteredBears,
            [`${type}Bears`]: 0,
          } as Partial<BearState>;
        }),

      // Adds a new bear and increments its type-specific counter
      addBear: (name, type) =>
        set(state => {
          const newId =
            state.bears.length > 0 ? Math.max(...state.bears.map(b => b.id)) + 1 : 1;
          const key = `${type}Bears` as keyof BearState;
          return {
            bears: [...state.bears, { id: newId, name, type }],
            [key]: (state[key] as number) + 1,
          };
        }),

      // Clears all bears and resets all counters
      removeBears: () =>
        set(() => ({
          bears: [],
          blackBears: 0,
          polarBears: 0,
          pandaBears: 0,
        })),
    }),
    {
      name: 'bear-store', // Storage key for persistence
      onRehydrateStorage: () => state => {
        // Runs on hydration to restore initial state if empty
        if (state && (!state.bears || state.bears.length === 0)) {
          const initialBears = sampleBears;
          const black = initialBears.filter(b => b.type === 'black').length;
          const polar = initialBears.filter(b => b.type === 'polar').length;
          const panda = initialBears.filter(b => b.type === 'panda').length;

          // Preload initial sample bears and set their counts
          state.bears = initialBears;
          state.blackBears = black;
          state.polarBears = polar;
          state.pandaBears = panda;
        }
      },
    }
  )
);
