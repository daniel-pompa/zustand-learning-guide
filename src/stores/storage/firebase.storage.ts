import axios from 'axios';
import { createJSONStorage, StateStorage } from 'zustand/middleware';
import { devError, devLog, devWarn } from '@utils';

const firebaseUrl = import.meta.env.VITE_FIREBASE_URL;

// Map to hold AbortControllers for each key separately
// This prevents aborting unrelated concurrent getItem requests
const abortControllers = new Map<string, AbortController>();

/**
 * Performs a GET request with an AbortController that cancels any previous request for the same key (`name`)
 *
 * @param url - The full URL to fetch
 * @param name - The key identifying the resource, used for abort management and logging
 * @returns The fetched data as a JSON string or null if not found or aborted
 */
const fetchWithAbort = async (url: string, name: string): Promise<string | null> => {
  // Abort any ongoing request for this key before starting a new one
  if (abortControllers.has(name)) {
    abortControllers.get(name)!.abort();
  }

  const controller = new AbortController();

  abortControllers.set(name, controller);

  try {
    devLog(`Fetching ${name} from Firebase...`);

    const { data } = await axios.get(url, { signal: controller.signal });

    if (!data) {
      devLog(`${name} not found on Firebase`);
      return null;
    }

    devLog(`${name} successfully fetched from Firebase`);
    return JSON.stringify(data);
  } catch (error) {
    if (axios.isCancel(error)) {
      devWarn(`Firebase getItem(${name}) request cancelled`);
      return null;
    }
    devError(`Failed to fetch ${name} from Firebase`, error);
    return null;
  } finally {
    // Remove the controller once the request finishes or is aborted to prevent memory leaks
    abortControllers.delete(name);
  }
};

const firebaseStorageBackend: StateStorage = {
  // Retrieves the stored data for a given key, with fetch cancellation support
  getItem: async (name: string): Promise<string | null> => {
    return fetchWithAbort(`${firebaseUrl}/${name}.json`, name);
  },

  // Saves the data under the given key. Expects a JSON string
  setItem: async (name: string, value: string): Promise<void> => {
    try {
      await axios.put(`${firebaseUrl}/${name}.json`, JSON.parse(value));
      devLog(`Saved ${name} to Firebase`);
    } catch (error) {
      devError(`Failed to save ${name} to Firebase`, error);
      throw new Error(`Error saving data to Firebase`);
    }
  },

  // Removes the data stored under the given key
  removeItem: async (name: string): Promise<void> => {
    try {
      await axios.delete(`${firebaseUrl}/${name}.json`);
      devLog(`Deleted ${name} from Firebase`);
    } catch (error) {
      devError(`Failed to delete ${name} from Firebase`, error);
      throw new Error(`Error deleting data from Firebase`);
    }
  },
};

// Wrap the backend in a JSON serializer to comply with Zustand persist storage interface.
export const firebaseStorage = createJSONStorage(() => firebaseStorageBackend);
