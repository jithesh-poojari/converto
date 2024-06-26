import { numberWithCommas, toBinaryString } from "../src/conversion/number-conversions"

test('converts number to string with commas', () => {
  expect(numberWithCommas(1000000)).toBe('1,000,000');
});

test('converts number to binary string', () => {
  expect(toBinaryString(10)).toBe('1010');
});
