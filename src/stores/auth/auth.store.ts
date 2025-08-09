import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface User {
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

// Zustand store creator
const createAuthStore: StateCreator<AuthState> = set => ({
  user: null,
  isAuthenticated: false,

  login: (email, password) => {
    // Simulated login logic
    if (email === 'john.doe@example.com' && password === '123456') {
      set(() => ({
        user: { email },
        isAuthenticated: true,
      }));
      return true;
    }
    return false;
  },

  logout: () => {
    set(() => ({
      user: null,
      isAuthenticated: false,
    }));
  },
});

// Create the store with devtools and persistence middleware
export const useAuthStore = create<AuthState>()(
  devtools(
    persist(createAuthStore, {
      name: 'auth-storage',
    })
  )
);
