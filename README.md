# Roman Numerals Converter

A tiny, dependency-free TypeScript library to convert numbers to Roman numerals and back, with strict validation.

## Usage

```typescript
import { numberToRoman, romanToNumber, isValidRoman } from "roman-numerals-converter";

numberToRoman(2024); // "MMXXIV"
romanToNumber("MMXXIV"); // 2024
romanToNumber("mmxxiv"); // 2024 (case-insensitive)
isValidRoman("IIII"); // false
```

## API

| Function | Returns | On invalid input |
| --- | --- | --- |
| `numberToRoman(num: number)` | Roman numeral string | `""` for non-integers or values outside 1–3999 |
| `romanToNumber(roman: string)` | Number | `NaN` for invalid or non-canonical numerals; `0` for `""` |
| `isValidRoman(roman: string)` | `boolean` | `false` |

`MIN_ROMAN` (1) and `MAX_ROMAN` (3999) are also exported.

Only **canonical** numerals are accepted: `IIII`, `VV`, `IC`, `XIIX` and similar forms are rejected. Every number from 1 to 3999 round-trips exactly.

## Scripts

- `npm run build`: Build CommonJS, ESM and type declarations into `dist/`
- `npm run typecheck`: Type-check the source and tests
- `npm test`: Run the tests

## License

MIT
