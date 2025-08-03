import numberToRoman from "../src/NumbertoRoman";

describe("numberToRoman", () => {
  it("converts 2024 to MMXXIV", () => {
    expect(numberToRoman(2024)).toBe("MMXXIV");
  });

  it("converts 4 to IV", () => {
    expect(numberToRoman(4)).toBe("IV");
  });

  it("converts 1 to I", () => {
    expect(numberToRoman(1)).toBe("I");
  });

  it("converts 3999 to MMMCMXCIX (largest valid Roman numeral)", () => {
    expect(numberToRoman(3999)).toBe("MMMCMXCIX");
  });

  it("converts numbers with repeated numerals: 3 to III, 22 to XXII, 300 to CCC", () => {
    expect(numberToRoman(3)).toBe("III");
    expect(numberToRoman(22)).toBe("XXII");
    expect(numberToRoman(300)).toBe("CCC");
  });

  it("handles subtractive notation: 9 to IX, 40 to XL, 90 to XC, 400 to CD, 900 to CM", () => {
    expect(numberToRoman(9)).toBe("IX");
    expect(numberToRoman(40)).toBe("XL");
    expect(numberToRoman(90)).toBe("XC");
    expect(numberToRoman(400)).toBe("CD");
    expect(numberToRoman(900)).toBe("CM");
  });

  it("returns empty string for 0 and negative numbers", () => {
    expect(numberToRoman(0)).toBe("");
    expect(numberToRoman(-1)).toBe("");
  });

  it("returns empty string for numbers greater than 3999", () => {
    expect(numberToRoman(4000)).toBe("");
    expect(numberToRoman(10000)).toBe("");
  });

  it("returns empty string for non-integer input", () => {
    expect(numberToRoman(2.5)).toBe("");
    expect(numberToRoman(NaN)).toBe("");
  });
});
