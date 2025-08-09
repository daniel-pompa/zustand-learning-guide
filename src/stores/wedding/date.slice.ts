import { StateCreator } from 'zustand';
import { ensureDate, setDatePartsFromString, setTimePartsFromString } from '@utils';

export interface DateSlice {
  selectedDate: Date;

  getFormattedDate: () => string;
  getFormattedTime: () => string;
  setSelectedDate: (dateSrting: string) => void;
  setSelectedTime: (timeString: string) => void;
}

export const createDateSlice: StateCreator<DateSlice> = (set, get) => ({
  selectedDate: new Date(),

  getFormattedDate: () => {
    const date = ensureDate(get().selectedDate);
    return date.toISOString().split('T')[0];
  },
  getFormattedTime: () => {
    const date = ensureDate(get().selectedDate);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  },
  setSelectedDate: (dateString: string) =>
    set(state => ({
      selectedDate: setDatePartsFromString(state.selectedDate, dateString),
    })),
  setSelectedTime: (timeString: string) =>
    set(state => ({
      selectedDate: setTimePartsFromString(state.selectedDate, timeString),
    })),
});
