import numberToRoman, { MAX_ROMAN, MIN_ROMAN } from "../src/NumberToRoman";
import {
  additiveCombinations,
  boundaries,
  mixedNumerals,
  notableYears,
  repeatedSymbols,
  singleSymbols,
  subtractivePairs,
} from "./fixtures";

describe("numberToRoman", () => {
  describe("valid input", () => {
    it.each(singleSymbols)("converts %i to %s (single symbol)", (num, roman) => {
      expect(numberToRoman(num)).toBe(roman);
    });

    it.each(subtractivePairs)("converts %i to %s (subtractive pair)", (num, roman) => {
      expect(numberToRoman(num)).toBe(roman);
    });

    it.each(repeatedSymbols)("converts %i to %s (repeated symbol)", (num, roman) => {
      expect(numberToRoman(num)).toBe(roman);
    });

    it.each(additiveCombinations)("converts %i to %s (additive)", (num, roman) => {
      expect(numberToRoman(num)).toBe(roman);
    });

    it.each(mixedNumerals)("converts %i to %s (mixed)", (num, roman) => {
      expect(numberToRoman(num)).toBe(roman);
    });

    it.each(notableYears)("converts the year %i to %s", (num, roman) => {
      expect(numberToRoman(num)).toBe(roman);
    });
  });

  describe("range boundaries", () => {
    it("exposes the supported range as 1–3999", () => {
      expect(MIN_ROMAN).toBe(1);
      expect(MAX_ROMAN).toBe(3999);
    });

    it.each(boundaries)("converts boundary value %i to %s", (num, roman) => {
      expect(numberToRoman(num)).toBe(roman);
    });

    it.each([0, -1, -3999, 4000, 10_000, Number.MAX_SAFE_INTEGER])(
      "returns an empty string for out-of-range value %p",
      (num) => {
        expect(numberToRoman(num)).toBe("");
      },
    );
  });

  describe("invalid input", () => {
    it.each([0.5, 2.5, 3998.9, -0.1])(
      "returns an empty string for non-integer %p",
      (num) => {
        expect(numberToRoman(num)).toBe("");
      },
    );

    it.each([NaN, Infinity, -Infinity])(
      "returns an empty string for %p",
      (num) => {
        expect(numberToRoman(num)).toBe("");
      },
    );

    it.each([["10"], [null], [undefined], [{}], [[5]], [true]])(
      "returns an empty string for non-number input %p",
      (value) => {
        expect(numberToRoman(value as unknown as number)).toBe("");
      },
    );
  });

  describe("properties across the full range", () => {
    const allNumbers = Array.from({ length: MAX_ROMAN }, (_, i) => i + 1);

    it("produces a unique numeral for every value", () => {
      const numerals = allNumbers.map(numberToRoman);
      expect(new Set(numerals).size).toBe(MAX_ROMAN);
    });

    it("only ever uses the symbols I, V, X, L, C, D and M", () => {
      for (const num of allNumbers) {
        expect(numberToRoman(num)).toMatch(/^[IVXLCDM]+$/);
      }
    });

    it("never repeats a symbol more than three times in a row", () => {
      for (const num of allNumbers) {
        expect(numberToRoman(num)).not.toMatch(/(.)\1{3}/);
      }
    });

    it("never repeats V, L or D", () => {
      for (const num of allNumbers) {
        expect(numberToRoman(num)).not.toMatch(/V.*V|L.*L|D.*D/);
      }
    });
  });
});
