/**
 * Converts a number to a string with commas as thousand separators.
 * @param num - The number to convert.
 * @returns The formatted string.
 * @example
 * ```typescript
 * numberWithCommas(1000); // "1,000"
 * numberWithCommas(1234567890); // "1,234,567,890"
 * ```
 */
export function numberWithCommas(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Converts a number to its binary representation as a string.
 * @param num - The number to convert.
 * @returns The binary string.
 * @example
 * ```typescript
 * toBinary(10); // "1010"
 * toBinary(255); // "11111111"
 * ```
 */
export function toBinary(num: number): string {
  return num.toString(2);
}

/**
 * Converts a number to its hexadecimal representation as a string.
 * @param num - The number to convert.
 * @returns The hexadecimal string.
 * @example
 * ```typescript
 * toHex(255); // "FF"
 * toHex(4095); // "FFF"
 * ```
 */
export function toHex(num: number): string {
  return num.toString(16).toUpperCase();
}

/**
 * Converts a number to its octal representation as a string.
 * @param num - The number to convert.
 * @returns The octal string.
 * @example
 * ```typescript
 * toOctal(8); // "10"
 * toOctal(64); // "100"
 * ```
 */
export function toOctal(num: number): string {
  return num.toString(8);
}

/**
 * Converts a number to a decimal string.
 * @param num - The number to convert.
 * @returns The decimal string.
 * @example
 * ```typescript
 * toDecimal(255); // "255"
 * toDecimal(4095); // "4095"
 * ```
 */
export function toDecimal(num: number): string {
  return num.toString(10);
}

/**
 * Converts radians to degrees.
 * @param radians - The angle in radians.
 * @returns The angle in degrees.
 * @example
 * ```typescript
 * toDegrees(Math.PI); // "180"
 * toDegrees(2 * Math.PI); // "360"
 * ```
 */
export function toDegrees(radians: number): number {
  return radians * (180 / Math.PI);
}

/**
 * Converts degrees to radians.
 * @param degrees - The angle in degrees.
 * @returns The angle in radians.
 * @example
 * ```typescript
 * toRadians(180); // "3.141592653589793"
 * toRadians(360); // "6.283185307179586"
 * ```
 */
export function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/**
 * Converts a number from one base to another.
 * @param value - The number to convert (as a string).
 * @param fromBase - The base of the input number ("bin", "oct", "dec", "hex").
 * @param toBase - The base to convert the number to ("bin", "oct", "dec", "hex").
 * @returns The converted number as a string.
 * @example
 * ```typescript
 * convertBase("FF", "hex", "dec"); // "255"
 * convertBase("1010", "bin", "dec"); // "10"
 * convertBase("123", "dec", "hex"); // "7B"
 * ```
 */
export function convertBase(value: string, fromBase: 'bin' | 'oct' | 'dec' | 'hex', toBase: 'bin' | 'oct' | 'dec' | 'hex'): string {
  const baseMap: { [key: string]: number } = {
    bin: 2,
    oct: 8,
    dec: 10,
    hex: 16
  };

  const fromBaseNum = baseMap[fromBase];
  const toBaseNum = baseMap[toBase];

  // Convert from the source base to decimal
  const decimalValue = parseInt(value, fromBaseNum);

  // Convert from decimal to the target base
  return decimalValue.toString(toBaseNum).toUpperCase();
}
/**
 * Converts a number to a percentage string with a specified number of decimal places.
 * @param num - The number to convert.
 * @param decimals - The number of decimal places.
 * @returns The percentage string.
 * @example
 * ```typescript
 * toPercentage(0.1234); // "12.34%"
 * toPercentage(0.1234, 1); // "12.3%"
 * toPercentage(1); // "100.00%"
 * ```
 */
export function toPercentage(num: number, decimals: number = 2): string {
  return `${(num * 100).toFixed(decimals)}%`;
}

/**
 * Rounds a number to the nearest integer.
 * @param num - The number to round.
 * @returns The rounded integer.
 * @example
 * ```typescript
 * round(5.67); // 6
 * round(5.24); // 5
 * ```
 */
export function round(num: number): number {
  return Math.round(num);
}

/**
 * Rounds a number to a specified number of decimal places.
 * @param num - The number to round.
 * @param decimals - The number of decimal places.
 * @returns The rounded number.
 * @example
 * ```typescript
 * roundTo(5.678, 2); // 5.68
 * roundTo(5.1234, 1); // 5.1
 * ```
 */
export function roundTo(num: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round(num * factor) / factor;
}
