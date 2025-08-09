import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createPersonSlice, PersonSlice } from './person.slice';
import { createGuestSlice, GuestSlice } from './guest.slice';
import { createDateSlice, DateSlice } from './date.slice';
import { createConfirmationSlice, ConfirmationSlice } from './confirmation.slice';
import { ensureDate } from '@utils';

// Combine all slice types into one global store state type
type BoundState = PersonSlice & GuestSlice & DateSlice & ConfirmationSlice;

// Create the global Zustand store using slices and middleware
export const useWeddingBoundStore = create<BoundState>()(
  devtools(
    persist(
      // Combine all slice creators into a single store definition
      (...a) => ({
        ...createPersonSlice(...a),
        ...createGuestSlice(...a),
        ...createDateSlice(...a),
        ...createConfirmationSlice(...a),
      }),
      {
        name: 'wedding-storage',
        merge: (persisted: unknown, current: BoundState): BoundState => {
          // Custom merge logic to combine persisted state with current state
          const typedPersisted = persisted as Partial<BoundState>;

          return {
            ...current,
            ...typedPersisted,
            // Ensure the persisted selectedDate is a valid Date object
            selectedDate: ensureDate(typedPersisted.selectedDate, current.selectedDate),
          };
        },
      }
    )
  )
);
