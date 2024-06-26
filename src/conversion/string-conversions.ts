/**
 * Converts a string to camelCase.
 * @param str - The string to convert.
 * @returns The camelCased string.
 */
export function toCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, g => g[1].toUpperCase());
}

/**
 * Converts a string to snake_case.
 * @param str - The string to convert.
 * @returns The snake_cased string.
 */
export function toSnakeCase(str: string): string {
  return str
    .replace(/\W+/g, '_')
    .replace(/(^_+|_+$)/g, '')
    .toLowerCase();
}
