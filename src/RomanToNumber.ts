const romanNumeralMap: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export default (romanNumeral: string) => {
  if (typeof romanNumeral !== "string" || romanNumeral.length === 0) return 0;
  // Validate characters
  if (!/^[IVXLCDM]+$/.test(romanNumeral)) return NaN;

  // Validate order (basic check: no invalid subtractive pairs)
  const invalidPairs = [
    "IIV",
    "VX",
    "IC",
    "IL",
    "ID",
    "IM",
    "XD",
    "XM",
    "LC",
    "LD",
    "LM",
    "DM",
  ];
  for (const pair of invalidPairs) {
    if (romanNumeral.includes(pair)) return NaN;
  }

  let total = 0;
  let prev = 0;
  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const value = romanNumeralMap[romanNumeral[i]];
    if (value < prev) {
      total -= value;
    } else {
      total += value;
      prev = value;
    }
  }
  return total;
};
