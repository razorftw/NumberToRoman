export const MIN_ROMAN = 1;
export const MAX_ROMAN = 3999;

const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
const thousands = ["", "M", "MM", "MMM"];

/**
 * Converts an integer between 1 and 3999 (inclusive) to a Roman numeral.
 *
 * @returns The Roman numeral, or an empty string if the input is not an
 * integer within range.
 */
export const numberToRoman = (num: number): string => {
  if (!Number.isInteger(num) || num < MIN_ROMAN || num > MAX_ROMAN) {
    return "";
  }
  return (
    thousands[Math.floor(num / 1000)] +
    hundreds[Math.floor((num % 1000) / 100)] +
    tens[Math.floor((num % 100) / 10)] +
    ones[num % 10]
  );
};

export default numberToRoman;
