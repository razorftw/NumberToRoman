const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
const thousands = ["", "M", "MM", "MMM"];

export default (num: number): string => (
  thousands[Math.floor(num / 1000)] +
  hundreds[Math.floor((num % 1000) / 100)] +
  tens[Math.floor((num % 100) / 10)] +
  ones[Math.floor(num % 10)]
);