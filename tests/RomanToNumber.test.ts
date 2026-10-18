import romanToNumber, { isValidRoman } from "../src/RomanToNumber";
import {
  additiveCombinations,
  allKnownPairs,
  boundaries,
  mixedNumerals,
  notableYears,
  repeatedSymbols,
  singleSymbols,
  subtractivePairs,
} from "./fixtures";

const invalidCharacters = ["ABC", "123", "MCMXCVII!", "X Y", "IVX-", "Ⅻ"];

const nonCanonicalNumerals = [
  // Too many repetitions
  "IIII",
  "XXXX",
  "CCCC",
  "MMMM",
  // V, L and D can never repeat
  "VV",
  "LL",
  "DD",
  // Invalid subtractive pairs
  "IL",
  "IC",
  "ID",
  "IM",
  "VX",
  "VL",
  "XD",
  "XM",
  "LC",
  "LD",
  "DM",
  // Malformed subtractive sequences
  "IIV",
  "IIX",
  "XIIX",
  "XXC",
  "CCM",
  "IXIX",
  "IXI",
  "IVI",
  "XCX",
  "CMC",
  // Non-standard alternatives to canonical forms
  "VIV", // 9 → IX
  "LXL", // 90 → XC
  "DCD", // 900 → CM
  "IIIIII",
  // Symbols out of descending order
  "VM",
  "IVX",
  "XCM",
];

describe("romanToNumber", () => {
  describe("valid input", () => {
    it.each(singleSymbols)("converts %i from %s (single symbol)", (num, roman) => {
      expect(romanToNumber(roman)).toBe(num);
    });

    it.each(subtractivePairs)("converts %i from %s (subtractive pair)", (num, roman) => {
      expect(romanToNumber(roman)).toBe(num);
    });

    it.each(repeatedSymbols)("converts %i from %s (repeated symbol)", (num, roman) => {
      expect(romanToNumber(roman)).toBe(num);
    });

    it.each(additiveCombinations)("converts %i from %s (additive)", (num, roman) => {
      expect(romanToNumber(roman)).toBe(num);
    });

    it.each(mixedNumerals)("converts %i from %s (mixed)", (num, roman) => {
      expect(romanToNumber(roman)).toBe(num);
    });

    it.each(notableYears)("converts the year %i from %s", (num, roman) => {
      expect(romanToNumber(roman)).toBe(num);
    });

    it.each(boundaries)("converts boundary value %i from %s", (num, roman) => {
      expect(romanToNumber(roman)).toBe(num);
    });
  });

  describe("case handling", () => {
    it.each([
      ["mmxxiv", 2024],
      ["MmXxIv", 2024],
      ["mcmxciv", 1994],
      ["iv", 4],
    ])("accepts %s as %i", (roman, num) => {
      expect(romanToNumber(roman)).toBe(num);
    });
  });

  describe("invalid input", () => {
    it("returns 0 for an empty string", () => {
      expect(romanToNumber("")).toBe(0);
    });

    it.each(invalidCharacters)("returns NaN for invalid characters in %p", (roman) => {
      expect(romanToNumber(roman)).toBeNaN();
    });

    it.each([" IV", "IV ", "I V", "\tX\n"])("returns NaN for whitespace in %p", (roman) => {
      expect(romanToNumber(roman)).toBeNaN();
    });

    it.each(nonCanonicalNumerals)("returns NaN for non-canonical numeral %p", (roman) => {
      expect(romanToNumber(roman)).toBeNaN();
    });

    it.each([[4], [null], [undefined], [{}], [["IV"]]])(
      "returns NaN for non-string input %p",
      (value) => {
        expect(romanToNumber(value as unknown as string)).toBeNaN();
      },
    );
  });
});

describe("isValidRoman", () => {
  it.each(allKnownPairs.map(([, roman]) => roman))("accepts %s", (roman) => {
    expect(isValidRoman(roman)).toBe(true);
  });

  it("accepts lowercase numerals", () => {
    expect(isValidRoman("mmxxiv")).toBe(true);
  });

  it.each(["", ...invalidCharacters, ...nonCanonicalNumerals])("rejects %p", (roman) => {
    expect(isValidRoman(roman)).toBe(false);
  });

  it.each([[4], [null], [undefined]])("rejects non-string input %p", (value) => {
    expect(isValidRoman(value as unknown as string)).toBe(false);
  });
});
