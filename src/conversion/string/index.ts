/**
 * Converts a string to camelCase.
 * @param str - The string to convert.
 * @returns The camelCased string.
 */
export function toCamelCase(str: string): string {
  return str.replace(/[\s_-]+(\w)/g, (_, char) => char.toUpperCase());
}

/**
 * Converts a string to snake_case.
 * @param str - The string to convert.
 * @returns The snake_cased string.
 */
export function toSnakeCase(str: string): string {
  return str
    .replace(/[^\w\s]/gi, '')  // Remove non-word characters except spaces
    .replace(/\s+/g, '_')      // Replace spaces with underscores
    .toLowerCase();            // Convert to lowercase
}

/**
 * Converts a sentence to title case.
 * @param sentence - The sentence to convert.
 * @returns The title cased sentence.
 */
export function toTitleCase(sentence: string): string {
  const words = sentence.split(/[\s\-_]+/);

  const titleCaseWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  const titleCaseSentence = titleCaseWords.join(' ');

  return titleCaseSentence;
}
