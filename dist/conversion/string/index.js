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
 * @param str - The string to convert.
 * @returns The camelCased string.
 */
function toCamelCase(str) {
    return str.replace(/[\s_-]+(\w)/g, function (_, char) { return char.toUpperCase(); });
}
/**
 * Converts a string to snake_case.
 * Example:
 * ```typescript
 * const snakeCased = toSnakeCase('Hello World!'); // Returns 'hello_world'
 * ```
 * @param str - The string to convert.
 * @returns The snake_cased string.
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
 * @param str - The string to convert.
 * @returns The PascalCased string.
 */
function toPascalCase(str) {
    return str.replace(/(\w)(\w*)/g, function (_, firstChar, restChars) {
        return firstChar.toUpperCase() + restChars.toLowerCase();
    }).replace(/[\s_-]/g, '');
}
/**
 * Converts a string to kebab-case.
 * Example:
 * ```typescript
 * const kebabCased = toKebabCase('Hello World!'); // Returns 'hello-world'
 * ```
 * @param str - The string to convert.
 * @returns The kebab-cased string.
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
 * @param str - The string to convert.
 * @returns The Capitalized Case string.
 */
function toCapitalizedCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)\S/g, function (char) { return char.toUpperCase(); });
}
/**
 * Converts a sentence to title case.
 * Example:
 * ```typescript
 * const titleCased = toTitleCase('hello-world'); // Returns 'Hello World'
 * ```
 * @param sentence - The sentence to convert.
 * @returns The title cased sentence.
 */
function toTitleCase(sentence) {
    var words = sentence.split(/[\s\-_]+/);
    var titleCaseWords = words.map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    var titleCaseSentence = titleCaseWords.join(' ');
    return titleCaseSentence;
}
/**
 * Converts a string to Sentence case (capitalize the first letter of the first word).
 * Example:
 * ```typescript
 * const sentenceCased = toSentenceCase('hello world'); // Returns 'Hello world'
 * ```
 * @param str - The string to convert.
 * @returns The Sentence cased string.
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
 * @param str - The string to convert.
 * @returns The CONSTANT_CASE string.
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
 * @param str - The string to convert.
 * @returns The Path cased string.
 */
function toPathCase(str) {
    return str.replace(/[^\w\s]/gi, ' ') // Remove non-word characters except spaces
        .replace(/[\s+_]/g, '/') // Replace spaces with slashes
        .toLowerCase(); // Convert to lowercase
}
/**
 * Converts a string to dot.case.
 * @param str - The string to convert.
 * @returns The dot.cased string.
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
 * @param str - The string to convert.
 * @returns The alternating cased string.
 * @example
 * toAlternatingCase('hello world'); // 'hElLo WoRlD'
 */
function toAlternatingCase(str) {
    return str.split('').map(function (char, index) {
        if (char === ' ')
            return ' ';
        return index % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
    }).join('');
}
/**
 * Converts a string to inverse case.
 * @param str - The string to convert.
 * @returns The inverse cased string.
 * @example
 * toInverseCase('Hello World'); // 'hELLO wORLD'
 */
function toInverseCase(str) {
    return str.split('').map(function (char) {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join('');
}
/**
 * Reverses the characters in a string.
 * @param str - The string to reverse.
 * @returns The reversed string.
 * @example
 * reverseString('hello world'); // 'dlrow olleh'
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}
/**
 * Converts a string to leetspeak (1337speak).
 * @param str - The string to convert.
 * @returns The leetspeak string.
 * @example
 * toLeetSpeak('hello world'); // 'h3ll0 w0rld'
 */
function toLeetSpeak(str) {
    var leetMap = {
        'a': '4', 'e': '3', 'i': '1', 'o': '0', 't': '7', 's': '5', 'b': '8', 'g': '9'
    };
    return str.split('').map(function (char) {
        var lowerChar = char.toLowerCase();
        return leetMap[lowerChar] || lowerChar;
    }).join('');
}
/**
 * Shuffles the characters in a string.
 * @param str - The string to shuffle.
 * @returns The shuffled string.
 * @example
 * shuffleString('hello'); // 'olelh'
 */
function shuffleString(str) {
    var _a;
    var arr = str.split('');
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
    }
    return arr.join('');
}
