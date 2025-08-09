import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { firebaseStorage } from '@stores/storage/firebase.storage';
import { useWeddingBoundStore } from '@stores/wedding';

interface PersonState {
  firstName: string;
  lastName: string;
  email: string;
}

interface PersonActions {
  setField: <K extends keyof PersonState>(key: K, value: PersonState[K]) => void;
}

const createPersonStore: StateCreator<
  PersonState & PersonActions,
  [['zustand/devtools', never]]
> = set => ({
  firstName: '',
  lastName: '',
  email: '',
  // Generic setter action to update any field by key with a given value.
  // The third argument 'setField' is an action name for devtools tracking.
  setField: (key, value) => set(state => ({ ...state, [key]: value }), false, 'setField'),
});

export const usePersonStore = create<PersonState & PersonActions>()(
  persist(devtools(createPersonStore), {
    name: 'person-storage',
    storage: firebaseStorage,
    // storage: customSessionStorage,
  })
);

// Subscribe to changes in the person store and update the wedding store
usePersonStore.subscribe(nextSate => {
  const { firstName, lastName } = nextSate;
  useWeddingBoundStore.getState().setFirstName(firstName);
  useWeddingBoundStore.getState().setLastName(lastName);
});
