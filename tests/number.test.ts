import { convertBase, numberWithCommas, toBinary, toHex, toOctal, toDecimal, toDegrees, toRadians, toPercentage, round, roundTo } from "../src/conversion/number";

describe('Number Conversion Functions', () => {
  test('converts number to string with commas', () => {
    expect(numberWithCommas(1000)).toBe('1,000');
    expect(numberWithCommas(1234567890)).toBe('1,234,567,890');
    expect(numberWithCommas(123)).toBe('123');
    expect(numberWithCommas(0)).toBe('0');
    expect(numberWithCommas(-1000)).toBe('-1,000');
  });

  test('converts number to binary string', () => {
    expect(toBinary(10)).toBe('1010');
    expect(toBinary(255)).toBe('11111111');
    expect(toBinary(0)).toBe('0');
  });

  test('converts number to hexadecimal string', () => {
    expect(toHex(255)).toBe('FF');
    expect(toHex(4095)).toBe('FFF');
    expect(toHex(0)).toBe('0');
  });

  test('converts number to octal string', () => {
    expect(toOctal(8)).toBe('10');
    expect(toOctal(64)).toBe('100');
    expect(toOctal(0)).toBe('0');
  });

  test('converts number to decimal string', () => {
    expect(toDecimal(255)).toBe('255');
    expect(toDecimal(4095)).toBe('4095');
    expect(toDecimal(0)).toBe('0');
  });

  test('converts radians to degrees', () => {
    expect(toDegrees(Math.PI)).toBeCloseTo(180);
    expect(toDegrees(2 * Math.PI)).toBeCloseTo(360);
    expect(toDegrees(0)).toBe(0);
  });

  test('converts degrees to radians', () => {
    expect(toRadians(180)).toBeCloseTo(Math.PI);
    expect(toRadians(360)).toBeCloseTo(2 * Math.PI);
    expect(toRadians(0)).toBe(0);
  });

  test('converts number from one base to another', () => {
    expect(convertBase("FF", "hex", "dec")).toBe('255');
    expect(convertBase("1010", "bin", "dec")).toBe('10');
    expect(convertBase("123", "dec", "hex")).toBe('7B');
    expect(convertBase("10", "bin", "oct")).toBe('2');
  });

  test('converts number to percentage string', () => {
    expect(toPercentage(0.1234)).toBe('12.34%');
    expect(toPercentage(0.1234, 1)).toBe('12.3%');
    expect(toPercentage(1)).toBe('100.00%');
    expect(toPercentage(0)).toBe('0.00%');
  });

  test('rounds number to the nearest integer', () => {
    expect(round(5.67)).toBe(6);
    expect(round(5.24)).toBe(5);
    expect(round(0)).toBe(0);
    expect(round(-5.5)).toBe(-5);
  });

  test('rounds number to a specified number of decimal places', () => {
    expect(roundTo(5.678, 2)).toBeCloseTo(5.68);
    expect(roundTo(5.1234, 1)).toBeCloseTo(5.1);
    expect(roundTo(0, 2)).toBe(0);
    expect(roundTo(-1.2345, 3)).toBeCloseTo(-1.235);
  });

});
