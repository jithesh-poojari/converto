"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCamelCase = toCamelCase;
exports.toSnakeCase = toSnakeCase;
exports.toPascalCase = toPascalCase;
exports.toKebabCase = toKebabCase;
exports.toCapitalizedCase = toCapitalizedCase;
exports.toTitleCase = toTitleCase;
exports.toSentenceCase = toSentenceCase;
exports.toConstantCase = toConstantCase;
exports.toPathCase = toPathCase;
exports.toDotCase = toDotCase;
exports.toAlternatingCase = toAlternatingCase;
exports.toInverseCase = toInverseCase;
exports.reverseString = reverseString;
exports.toLeetSpeak = toLeetSpeak;
exports.shuffleString = shuffleString;
/**
 * Converts a string to camelCase.
 * Example:
 * ```typescript
 * const camelCased = toCamelCase('hello_world'); // Returns 'helloWorld'
 * ```
 * @param {string} str - The string to convert.
 * @returns {string} The camelCased string.
 */
function toCamelCase(str) {
    return str.replace(/[\s_-]+(\w)/g, (_, char) => char.toUpperCase());
}
/**
 * Converts a string to snake_case.
 * Example:
 * ```typescript
 * const snakeCased = toSnakeCase('Hello World!'); // Returns 'hello_world'
 * ```
 * @param {string} str - The string to convert.
 * @returns {string} The snake_cased string.
 */
function toSnakeCase(str) {
    return str
        .replace(/[^\w\s]/gi, ' ').trim() // Remove non-word characters except spaces and underscores
        .replace(/[\s+-]/g, '_') // Replace spaces with underscores
        .toLowerCase(); // Convert to lowercase
}
/**
 * Converts a string to PascalCase.
 * Example:
 * ```typescript
 * const pascalCased = toPascalCase('hello-world'); // Returns 'HelloWorld'
 * ```
 * @param {string} str - The string to convert.
 * @returns {string} The PascalCased string.
 */
function toPascalCase(str) {
    return str.replace(/[\s_\-]+(\w)/g, (_, char) => char.toUpperCase())
        .replace(/^(\w)/, (_, char) => char.toUpperCase())
        .replace(/[\s_\-]+/g, '');
}
/**
 * Converts a string to kebab-case.
 * Example:
 * ```typescript
 * const kebabCased = toKebabCase('Hello World!'); // Returns 'hello-world'
 * ```
 * @param {string} str - The string to convert.
 * @returns {string} The kebab-cased string.
 */
function toKebabCase(str) {
    return str
        .replace(/[^\w\s]/gi, ' ').trim() // Remove non-word characters except spaces and underscores
        .replace(/[\s+_]/g, '-') // Replace spaces with hyphens
        .toLowerCase(); // Convert to lowercase
}
/**
 * Converts a string to Capitalized Case.
 * Example:
 * ```typescript
 * const capitalized = toCapitalizedCase('hello world'); // Returns 'Hello World'
 * ```
 * @param {string} str - The string to convert.
 * @returns {string} The Capitalized Case string.
 */
function toCapitalizedCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)\S/g, char => char.toUpperCase());
}
/**
 * Converts a sentence to title case.
 * Example:
 * ```typescript
 * const titleCased = toTitleCase('hello-world'); // Returns 'Hello World'
 * ```
 * @param {string} sentence - The sentence to convert.
 * @returns {string} The title cased sentence.
 */
function toTitleCase(sentence) {
    const words = sentence.split(/[\s\-_]+/);
    const titleCaseWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    const titleCaseSentence = titleCaseWords.join(' ');
    return titleCaseSentence;
}
/**
 * Converts a string to Sentence case (capitalize the first letter of the first word).
 * Example:
 * ```typescript
 * const sentenceCased = toSentenceCase('hello world'); // Returns 'Hello world'
 * ```
 * @param {string} str - The string to convert.
 * @returns {string} The Sentence cased string.
 */
function toSentenceCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
/**
 * Converts a string to CONSTANT_CASE (uppercase letters with underscores).
 * Example:
 * ```typescript
 * const constantCased = toConstantCase('Hello World'); // Returns 'HELLO_WORLD'
 * ```
 * @param {string} str - The string to convert.
 * @returns {string} The CONSTANT_CASE string.
 */
function toConstantCase(str) {
    return str.replace(/[^\w\s]/gi, ' ') // Remove non-word characters except spaces
        .replace(/\s+/g, '_') // Replace spaces with underscores
        .toUpperCase(); // Convert to uppercase
}
/**
 * Converts a string to Path Case (lowercase letters with slashes).
 * Example:
 * ```typescript
 * const pathCased = toPathCase('Hello World'); // Returns 'hello/world'
 * ```
 * @param {string} str - The string to convert.
 * @returns {string} The Path cased string.
 */
function toPathCase(str) {
    return str.replace(/[^\w\s]/gi, ' ') // Remove non-word characters except spaces
        .replace(/[\s+_]/g, '/') // Replace spaces with slashes
        .toLowerCase(); // Convert to lowercase
}
/**
 * Converts a string to dot.case.
 * @param {string} str - The string to convert.
 * @returns {string} The dot.cased string.
 * @example
 * toDotCase('hello world'); // 'hello.world'
 */
function toDotCase(str) {
    return str
        .replace(/[^\w\s]/gi, ' ').trim() // Remove non-word characters except spaces
        .replace(/\s+/g, '.') // Replace spaces with dots
        .toLowerCase(); // Convert to lowercase
}
/**
 * Converts a string to alternating case.
 * @param {string} str - The string to convert.
 * @returns {string} The alternating cased string.
 * @example
 * toAlternatingCase('hello world'); // 'hElLo WoRlD'
 */
function toAlternatingCase(str) {
    return str.split('').map((char, index) => {
        if (char === ' ')
            return ' ';
        return index % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
    }).join('');
}
/**
 * Converts a string to inverse case.
 * @param {string} str - The string to convert.
 * @returns {string} The inverse cased string.
 * @example
 * toInverseCase('Hello World'); // 'hELLO wORLD'
 */
function toInverseCase(str) {
    return str.split('').map(char => {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join('');
}
/**
 * Reverses the characters in a string.
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
 * @example
 * reverseString('hello world'); // 'dlrow olleh'
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}
/**
 * Converts a string to leetspeak (1337speak).
 * @param {string} str - The string to convert.
 * @returns {string} The leetspeak string.
 * @example
 * toLeetSpeak('hello world'); // 'h3ll0 w0rld'
 */
function toLeetSpeak(str) {
    const leetMap = {
        'a': '4', 'e': '3', 'i': '1', 'o': '0', 't': '7', 's': '5', 'b': '8', 'g': '9'
    };
    return str.split('').map(char => {
        const lowerChar = char.toLowerCase();
        return leetMap[lowerChar] || lowerChar;
    }).join('');
}
/**
 * Shuffles the characters in a string.
 * @param {string} str - The string to shuffle.
 * @returns {string} The shuffled string.
 * @example
 * shuffleString('hello'); // 'olelh'
 */
function shuffleString(str) {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}
