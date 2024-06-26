import { toCamelCase, toSnakeCase } from '../src/conversion/string-conversions';

test('converts string to camelCase', () => {
  expect(toCamelCase('hello-world')).toBe('helloWorld');
});

test('converts string to snake_case', () => {
  expect(toSnakeCase('Hello World!')).toBe('hello_world');
});
