// Returns the singular or plural form of a word based on the given count
export const pluralize = (count: number, singular: string, plural = singular + 's') => {
  return `${count} ${count === 1 ? singular : plural}`;
};
