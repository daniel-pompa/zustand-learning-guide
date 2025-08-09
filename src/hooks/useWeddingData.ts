import { useWeddingBoundStore } from '@stores';

export const useWeddingData = () => {
  return {
    // Personal information
    firstName: useWeddingBoundStore(state => state.firstName),
    lastName: useWeddingBoundStore(state => state.lastName),
    setFirstName: useWeddingBoundStore(state => state.setFirstName),
    setLastName: useWeddingBoundStore(state => state.setLastName),

    // Number of guests
    guestCount: useWeddingBoundStore(state => state.guestCount),
    setGuestCount: useWeddingBoundStore(state => state.setGuestCount),

    // Date and time
    getFormattedDate: useWeddingBoundStore(state => state.getFormattedDate()),
    getFormattedTime: useWeddingBoundStore(state => state.getFormattedTime()),
    setSelectedDate: useWeddingBoundStore(state => state.setSelectedDate),
    setSelectedTime: useWeddingBoundStore(state => state.setSelectedTime),

    // Confirmation status
    isConfirmed: useWeddingBoundStore(state => state.isConfirmed),
    setIsConfirmed: useWeddingBoundStore(state => state.setIsConfirmed),
  };
};
