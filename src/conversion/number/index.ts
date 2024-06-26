/**
 * Converts a number to a string with commas as thousand separators.
 * @param num - The number to convert.
 * @returns The formatted string.
 */
export function numberWithCommas(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Converts a number to its binary representation as a string.
 * @param num - The number to convert.
 * @returns The binary string.
 */
export function toBinaryString(num: number): string {
  return num.toString(2);
}
