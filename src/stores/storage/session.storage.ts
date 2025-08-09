import { createJSONStorage, StateStorage } from 'zustand/middleware';

// Wrapper for using sessionStorage with Zustand's `persist` middleware
const sessionStorageBackend: StateStorage = {
  getItem: (name: string): string | null => {
    return sessionStorage.getItem(name);
  },
  setItem: (name: string, value: string): void => {
    sessionStorage.setItem(name, value);
  },
  removeItem: (name: string): void => {
    sessionStorage.removeItem(name);
  },
};

// Export a JSON-compatible storage wrapper
export const customSessionStorage = createJSONStorage(() => sessionStorageBackend);
