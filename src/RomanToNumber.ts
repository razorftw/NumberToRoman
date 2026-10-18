const romanNumeralMap: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// Matches only canonical (standard-form) numerals from I to MMMCMXCIX.
const canonicalRoman =
  /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

/**
 * Checks whether a string is a canonical Roman numeral between 1 and 3999.
 * Matching is case-insensitive.
 */
export const isValidRoman = (romanNumeral: string): boolean =>
  typeof romanNumeral === "string" &&
  romanNumeral.length > 0 &&
  canonicalRoman.test(romanNumeral.toUpperCase());

/**
 * Converts a Roman numeral to a number. Matching is case-insensitive.
 *
 * @returns The numeric value, `0` for an empty string, or `NaN` if the input
 * is not a canonical Roman numeral (e.g. `"IIII"`, `"VX"`, `"ABC"`).
 */
export const romanToNumber = (romanNumeral: string): number => {
  if (typeof romanNumeral !== "string") return NaN;
  if (romanNumeral.length === 0) return 0;
  if (!isValidRoman(romanNumeral)) return NaN;

  const numeral = romanNumeral.toUpperCase();
  let total = 0;
  let prev = 0;
  for (let i = numeral.length - 1; i >= 0; i--) {
    const value = romanNumeralMap[numeral[i]];
    if (value < prev) {
      total -= value;
    } else {
      total += value;
      prev = value;
    }
  }
  return total;
};

export default romanToNumber;
