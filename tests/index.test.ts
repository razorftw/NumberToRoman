import * as lib from "../src/index";
import { isValidRoman, MAX_ROMAN, numberToRoman, romanToNumber } from "../src/index";

describe("public API", () => {
  it("exposes the named exports", () => {
    expect(typeof lib.numberToRoman).toBe("function");
    expect(typeof lib.romanToNumber).toBe("function");
    expect(typeof lib.isValidRoman).toBe("function");
    expect(lib.MIN_ROMAN).toBe(1);
    expect(lib.MAX_ROMAN).toBe(3999);
  });

  it("keeps the legacy namespace exports working", () => {
    expect(lib.toRoman.default(2024)).toBe("MMXXIV");
    expect(lib.toNumber.default("MMXXIV")).toBe(2024);
  });
});

describe("round trip", () => {
  const allNumbers = Array.from({ length: MAX_ROMAN }, (_, i) => i + 1);

  it("romanToNumber(numberToRoman(n)) === n for every n from 1 to 3999", () => {
    for (const num of allNumbers) {
      expect(romanToNumber(numberToRoman(num))).toBe(num);
    }
  });

  it("every numeral produced by numberToRoman is valid", () => {
    for (const num of allNumbers) {
      expect(isValidRoman(numberToRoman(num))).toBe(true);
    }
  });

  it("numberToRoman(romanToNumber(s)) === s for canonical numerals", () => {
    for (const roman of ["I", "IV", "XLII", "MCMXCIV", "MMMCMXCIX"]) {
      expect(numberToRoman(romanToNumber(roman))).toBe(roman);
    }
  });
});
