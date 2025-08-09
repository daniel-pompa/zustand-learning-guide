import { StateCreator, StoreMutatorIdentifier } from 'zustand';

/**
 * Type definition for the logger middleware with generic support for Zustand store mutators.
 * This enables integration with other middleware.
 */
type Logger = <
  T,
  Mps extends [StoreMutatorIdentifier, unknown][] = [],
  Mcs extends [StoreMutatorIdentifier, unknown][] = []
>(
  f: StateCreator<T, Mps, Mcs>,
  name?: string
) => StateCreator<T, Mps, Mcs>;

/**
 * Simple implementation of logger middleware for Zustand without other middleware compatibility.
 * This will be cast to the more flexible type.
 */
type LoggerImpl = <T>(
  f: StateCreator<T, [], []>,
  name?: string
) => StateCreator<T, [], []>;

/**
 * Basic implementation of the logger middleware.
 * Logs state after every `set` or `setState` call.
 */
const loggerImpl: LoggerImpl = (f, name) => (set, get, store) => {
  // Wrap Zustand's `set` to log state after mutation
  const loggedSet: typeof set = (...a) => {
    set(...(a as Parameters<typeof set>));
    console.log(...(name ? [`${name}:`] : []), get());
  };

  // Also wrap `setState` in the store to log state when set directly
  const setState = store.setState;
  store.setState = (...a) => {
    setState(...(a as Parameters<typeof setState>));
    console.log(...(name ? [`${name}:`] : []), store.getState());
  };

  // Return the original store logic using the wrapped `set`
  return f(loggedSet, get, store);
};

export const logger = loggerImpl as unknown as Logger;
