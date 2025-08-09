/**
 * Sets the year, month, and day of a base date using values parsed from a date string.
 *
 * @param baseDate - The original Date object to update.
 * @param dateString - A string in 'YYYY-MM-DD' format.
 * @returns A new Date object with updated year, month, and day.
 */
export function setDatePartsFromString(baseDate: Date, dateString: string): Date {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const newDate = new Date(baseDate);
  newDate.setFullYear(year);
  newDate.setMonth(month);
  newDate.setDate(day);

  return newDate;
}

/**
 * Sets the hours and minutes of a base date using values parsed from a time string.
 *
 * @param baseDate - The original Date object to update.
 * @param timeString - A string in 'HH:mm' format.
 * @returns A new Date object with updated hours and minutes.
 */
export function setTimePartsFromString(baseDate: Date, timeString: string): Date {
  // Splits the time string into hours and minutes, and converts them to numbers
  const [hours, minutes] = timeString.split(':').map(Number);

  const newDate = new Date(baseDate);
  newDate.setHours(hours);
  newDate.setMinutes(minutes);

  return newDate;
}

/**
 * Ensures the given value is a valid Date object.
 * If it's a valid Date, returns it.
 * If it's a string that can be parsed to Date, parses and returns it.
 * Otherwise, returns the fallback date (default: now).
 */
export function ensureDate(date: unknown, fallback = new Date()): Date {
  if (date instanceof Date && !isNaN(date.getTime())) {
    return date;
  }
  if (typeof date === 'string') {
    const parsed = new Date(date);
    if (!isNaN(parsed.getTime())) return parsed;
  }
  return fallback;
}
