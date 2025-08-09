/* Logs messages only in development mode */
export const devLog = (...args: unknown[]) => {
  if (import.meta.env.DEV) {
    console.log('[DEV]', ...args);
  }
};

/* Logs warnings only in development mode*/
export const devWarn = (...args: unknown[]) => {
  if (import.meta.env.DEV) {
    console.warn('[DEV WARNING]', ...args);
  }
};

/* Logs errors only in development mode */
export const devError = (...args: unknown[]) => {
  if (import.meta.env.DEV) {
    console.error('[DEV ERROR]', ...args);
  }
};
