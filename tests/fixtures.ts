/** Known-good [number, numeral] pairs shared by both converters' tests. */

export const singleSymbols: [number, string][] = [
  [1, "I"],
  [5, "V"],
  [10, "X"],
  [50, "L"],
  [100, "C"],
  [500, "D"],
  [1000, "M"],
];

export const subtractivePairs: [number, string][] = [
  [4, "IV"],
  [9, "IX"],
  [40, "XL"],
  [90, "XC"],
  [400, "CD"],
  [900, "CM"],
];

export const repeatedSymbols: [number, string][] = [
  [2, "II"],
  [3, "III"],
  [20, "XX"],
  [30, "XXX"],
  [200, "CC"],
  [300, "CCC"],
  [2000, "MM"],
  [3000, "MMM"],
];

export const additiveCombinations: [number, string][] = [
  [6, "VI"],
  [8, "VIII"],
  [11, "XI"],
  [15, "XV"],
  [27, "XXVII"],
  [66, "LXVI"],
  [88, "LXXXVIII"],
  [555, "DLV"],
  [1666, "MDCLXVI"],
];

export const mixedNumerals: [number, string][] = [
  [14, "XIV"],
  [19, "XIX"],
  [44, "XLIV"],
  [49, "XLIX"],
  [99, "XCIX"],
  [444, "CDXLIV"],
  [494, "CDXCIV"],
  [999, "CMXCIX"],
  [1444, "MCDXLIV"],
  [1994, "MCMXCIV"],
  [3888, "MMMDCCCLXXXVIII"],
];

export const notableYears: [number, string][] = [
  [1066, "MLXVI"],
  [1776, "MDCCLXXVI"],
  [1954, "MCMLIV"],
  [1990, "MCMXC"],
  [2000, "MM"],
  [2024, "MMXXIV"],
  [2026, "MMXXVI"],
];

export const boundaries: [number, string][] = [
  [1, "I"],
  [3999, "MMMCMXCIX"],
];

export const allKnownPairs: [number, string][] = [
  ...singleSymbols,
  ...subtractivePairs,
  ...repeatedSymbols,
  ...additiveCombinations,
  ...mixedNumerals,
  ...notableYears,
  ...boundaries,
];
