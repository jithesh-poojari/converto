import { toCamelCase, toSnakeCase, toTitleCase } from '../src/conversion/string';

test('converts string to camelCase', () => {
  expect(toCamelCase('hello-world')).toBe('helloWorld');
  expect(toCamelCase('hello_world')).toBe('helloWorld');
  expect(toCamelCase('hello   world')).toBe('helloWorld');
  expect(toCamelCase('helloWorld')).toBe('helloWorld');
});

test('converts string to snake_case', () => {
  expect(toSnakeCase('Hello World!')).toBe('hello_world');
  expect(toSnakeCase('HelloWorld')).toBe('helloworld');
  expect(toSnakeCase('hello   world')).toBe('hello_world');
  expect(toSnakeCase('helloWorld')).toBe('helloworld');
});

test('converts sentence to title case', () => {
  expect(toTitleCase('hello-world')).toBe('Hello World');
  expect(toTitleCase('hello_world')).toBe('Hello World');
  expect(toTitleCase('hello   world')).toBe('Hello World');
  expect(toTitleCase('hello-world_world')).toBe('Hello World World');
});
