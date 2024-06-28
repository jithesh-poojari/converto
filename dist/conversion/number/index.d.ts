/**
 * Converts a number to a string with commas as thousand separators.
 * @param {number} num - The number to convert.
 * @returns {string} The formatted string.
 * @example
 * ```typescript
 * numberWithCommas(1000); // "1,000"
 * numberWithCommas(1234567890); // "1,234,567,890"
 * ```
 */
export declare function numberWithCommas(num: number): string;
/**
 * Converts a number to its binary representation as a string.
 * @param {number} num - The number to convert.
 * @returns {string} The binary string.
 * @example
 * ```typescript
 * toBinary(10); // "1010"
 * toBinary(255); // "11111111"
 * ```
 */
export declare function toBinary(num: number): string;
/**
 * Converts a number to its hexadecimal representation as a string.
 * @param {number} num - The number to convert.
 * @returns {string} The hexadecimal string.
 * @example
 * ```typescript
 * toHex(255); // "FF"
 * toHex(4095); // "FFF"
 * ```
 */
export declare function toHex(num: number): string;
/**
 * Converts a number to its octal representation as a string.
 * @param {number} num - The number to convert.
 * @returns {string} The octal string.
 * @example
 * ```typescript
 * toOctal(8); // "10"
 * toOctal(64); // "100"
 * ```
 */
export declare function toOctal(num: number): string;
/**
 * Converts a number to a decimal string.
 * @param {number} num - The number to convert.
 * @returns {string} The decimal string.
 * @example
 * ```typescript
 * toDecimal(255); // "255"
 * toDecimal(4095); // "4095"
 * ```
 */
export declare function toDecimal(num: number): string;
/**
 * Converts radians to degrees.
 * @param {number} radians - The angle in radians.
 * @returns {number} The angle in degrees.
 * @example
 * ```typescript
 * toDegrees(Math.PI); // "180"
 * toDegrees(2 * Math.PI); // "360"
 * ```
 */
export declare function toDegrees(radians: number): number;
/**
 * Converts degrees to radians.
 * @param {number} degrees - The angle in degrees.
 * @returns {number} The angle in radians.
 * @example
 * ```typescript
 * toRadians(180); // "3.141592653589793"
 * toRadians(360); // "6.283185307179586"
 * ```
 */
export declare function toRadians(degrees: number): number;
/**
 * Converts a number from one base to another.
 * @param {string} value - The number to convert (as a string).
 * @param {'bin' | 'oct' | 'dec' | 'hex'} fromBase - The base of the input number ("bin", "oct", "dec", "hex").
 * @param {'bin' | 'oct' | 'dec' | 'hex'} toBase - The base to convert the number to ("bin", "oct", "dec", "hex").
 * @returns {string} The converted number as a string.
 * @example
 * ```typescript
 * convertBase("FF", "hex", "dec"); // "255"
 * convertBase("1010", "bin", "dec"); // "10"
 * convertBase("123", "dec", "hex"); // "7B"
 * ```
 */
export declare function convertBase(value: string, fromBase: 'bin' | 'oct' | 'dec' | 'hex', toBase: 'bin' | 'oct' | 'dec' | 'hex'): string;
/**
 * Converts a number to a percentage string with a specified number of decimal places.
 * @param {number} num - The number to convert.
 * @param {number} [decimals=2] - The number of decimal places.
 * @returns {string} The percentage string.
 * @example
 * ```typescript
 * toPercentage(0.1234); // "12.34%"
 * toPercentage(0.1234, 1); // "12.3%"
 * toPercentage(1); // "100.00%"
 * ```
 */
export declare function toPercentage(num: number, decimals?: number): string;
/**
 * Rounds a number to the nearest integer.
 * @param {number} num - The number to round.
 * @returns {number} The rounded integer.
 * @example
 * ```typescript
 * round(5.67); // 6
 * round(5.24); // 5
 * ```
 */
export declare function round(num: number): number;
/**
 * Rounds a number to a specified number of decimal places.
 * @param {number} num - The number to round.
 * @param {number} decimals - The number of decimal places.
 * @returns {number} The rounded number.
 * @example
 * ```typescript
 * roundTo(5.678, 2); // 5.68
 * roundTo(5.1234, 1); // 5.1
 * ```
 */
export declare function roundTo(num: number, decimals: number): number;
//# sourceMappingURL=index.d.ts.map