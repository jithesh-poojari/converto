import { numberWithCommas, toBinaryString, toHexString, toOctalString, toPercentageString } from "../src/conversion/number"

describe('Number Conversion Functions', () => {
  test('converts number to string with commas', () => {
    expect(numberWithCommas(1000000)).toBe('1,000,000');
  });

  test('converts number to binary string', () => {
    expect(toBinaryString(10)).toBe('1010');
  });

  test('converts number to hexadecimal string', () => {
    expect(toHexString(255)).toBe('FF');
    expect(toHexString(4095)).toBe('FFF');
  });
  
  test('converts number to octal string', () => {
    expect(toOctalString(8)).toBe('10');
    expect(toOctalString(64)).toBe('100');
  });
  
  test('converts number to percentage string', () => {
    expect(toPercentageString(0.1234)).toBe('12.34%');
    expect(toPercentageString(0.1234, 1)).toBe('12.3%');
    expect(toPercentageString(1)).toBe('100.00%');
  });
})