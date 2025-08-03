import romanToNumber from "../src/RomanToNumber";

describe("romanToNumber", () => {
  it("converts MMXXIV to 2024", () => {
    expect(romanToNumber("MMXXIV")).toBe(2024);
  });

  it("converts IV to 4", () => {
    expect(romanToNumber("IV")).toBe(4);
  });

  it("converts I to 1", () => {
    expect(romanToNumber("I")).toBe(1);
  });

  it("converts empty string to 0", () => {
    expect(romanToNumber("")).toBe(0);
  });

  it("converts MMMCMXCIX to 3999 (largest valid Roman numeral)", () => {
    expect(romanToNumber("MMMCMXCIX")).toBe(3999);
  });

  it("handles subtractive notation: IX = 9, XL = 40, XC = 90, CD = 400, CM = 900", () => {
    expect(romanToNumber("IX")).toBe(9);
    expect(romanToNumber("XL")).toBe(40);
    expect(romanToNumber("XC")).toBe(90);
    expect(romanToNumber("CD")).toBe(400);
    expect(romanToNumber("CM")).toBe(900);
  });

  it("converts numbers with repeated numerals: III = 3, XXII = 22, CCC = 300", () => {
    expect(romanToNumber("III")).toBe(3);
    expect(romanToNumber("XXII")).toBe(22);
    expect(romanToNumber("CCC")).toBe(300);
  });

  it("returns NaN for invalid characters", () => {
    expect(romanToNumber("ABC")).toBeNaN();
    expect(romanToNumber("123")).toBeNaN();
    expect(romanToNumber("MCMXCVII!")).toBeNaN();
  });

  it("returns NaN for invalid Roman numeral order", () => {
    expect(romanToNumber("IIV")).toBeNaN();
    expect(romanToNumber("VX")).toBeNaN();
    expect(romanToNumber("IC")).toBeNaN();
  });
});
