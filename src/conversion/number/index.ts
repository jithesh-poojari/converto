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
 * toBinaryString(10); // "1010"
 * toBinaryString(255); // "11111111"
 * ```
 */
export function toBinaryString(num: number): string {
  return num.toString(2);
}

/**
 * Converts a number to its hexadecimal representation as a string.
 * @param num - The number to convert.
 * @returns The hexadecimal string.
 * @example
 * ```typescript
 * toHexString(255); // "FF"
 * toHexString(4095); // "FFF"
 * ```
 */
export function toHexString(num: number): string {
  return num.toString(16).toUpperCase();
}

/**
 * Converts a number to its octal representation as a string.
 * @param num - The number to convert.
 * @returns The octal string.
 * @example
 * ```typescript
 * toOctalString(8); // "10"
 * toOctalString(64); // "100"
 * ```
 */
export function toOctalString(num: number): string {
  return num.toString(8);
}

/**
 * Converts a number to a percentage string with a specified number of decimal places.
 * @param num - The number to convert.
 * @param decimals - The number of decimal places.
 * @returns The percentage string.
 * @example
 * ```typescript
 * toPercentageString(0.1234); // "12.34%"
 * toPercentageString(0.1234, 1); // "12.3%"
 * toPercentageString(1); // "100.00%"
 * ```
 */
export function toPercentageString(num: number, decimals: number = 2): string {
  return `${(num * 100).toFixed(decimals)}%`;
}
