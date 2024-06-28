"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberWithCommas = numberWithCommas;
exports.toBinary = toBinary;
exports.toHex = toHex;
exports.toOctal = toOctal;
exports.toDecimal = toDecimal;
exports.toDegrees = toDegrees;
exports.toRadians = toRadians;
exports.convertBase = convertBase;
exports.toPercentage = toPercentage;
exports.round = round;
exports.roundTo = roundTo;
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
function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
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
function toBinary(num) {
    return num.toString(2);
}
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
function toHex(num) {
    return num.toString(16).toUpperCase();
}
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
function toOctal(num) {
    return num.toString(8);
}
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
function toDecimal(num) {
    return num.toString(10);
}
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
function toDegrees(radians) {
    return radians * (180 / Math.PI);
}
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
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
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
function convertBase(value, fromBase, toBase) {
    const baseMap = {
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
function toPercentage(num, decimals = 2) {
    return `${(num * 100).toFixed(decimals)}%`;
}
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
function round(num) {
    return Math.round(num);
}
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
function roundTo(num, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
}
