import { reverseString, shuffleString, toAlternatingCase, toCamelCase, toCapitalizedCase, toConstantCase, toDotCase, toInverseCase, toKebabCase, toLeetSpeak, toPascalCase, toPathCase, toSentenceCase, toSnakeCase, toTitleCase } from '../src/conversion/string';

describe('String Conversion Functions', () => {
  test('converts string to camelCase', () => {
    expect(toCamelCase('hello-world')).toBe('helloWorld');
    expect(toCamelCase('hello_world')).toBe('helloWorld');
    expect(toCamelCase('hello   world')).toBe('helloWorld');
    expect(toCamelCase('helloWorld')).toBe('helloWorld');
  });

  test('converts string to snake_case', () => {
    expect(toSnakeCase('Hello World!')).toBe('hello_world');
    expect(toSnakeCase('Hello-World')).toBe('hello_world');
  });

  test('converts string to title case', () => {
    expect(toTitleCase('hello-world')).toBe('Hello World');
    expect(toTitleCase('hello_world')).toBe('Hello World');
    expect(toTitleCase('hello   world')).toBe('Hello World');
    expect(toTitleCase('hello-world_world')).toBe('Hello World World');
  });

  test('converts string to PascalCase', () => {
    expect(toPascalCase('hello world')).toBe('HelloWorld');
    expect(toPascalCase('hello-world')).toBe('HelloWorld');
  });

  test('converts string to kebab-case', () => {
    expect(toKebabCase('Hello World!')).toBe('hello-world');
    expect(toKebabCase('Hello_World')).toBe('hello-world');
  });

  test('converts string to Capitalized Case', () => {
    expect(toCapitalizedCase('hello world')).toBe('Hello World');
    expect(toCapitalizedCase('HELLO WORLD')).toBe('Hello World');
  });

  test('converts string to Sentence case', () => {
    expect(toSentenceCase('hello world')).toBe('Hello world');
    expect(toSentenceCase('HeLLo WoRLd')).toBe('Hello world');
    expect(toSentenceCase('HELLO WORLD')).toBe('Hello world');
    expect(toSentenceCase('hello')).toBe('Hello');
    expect(toSentenceCase('')).toBe('');
  });

  test('converts string to CONSTANT_CASE', () => {
    expect(toConstantCase('Hello World')).toBe('HELLO_WORLD');
    expect(toConstantCase('HeLLo WoRLd')).toBe('HELLO_WORLD');
    expect(toConstantCase('hello')).toBe('HELLO');
    expect(toConstantCase('constant_case')).toBe('CONSTANT_CASE');
    expect(toConstantCase('')).toBe('');
  });

  test('converts string to Path Case', () => {
    expect(toPathCase('Hello World')).toBe('hello/world');
    expect(toPathCase('HeLLo WoRLd')).toBe('hello/world');
    expect(toPathCase('hello')).toBe('hello');
    expect(toPathCase('path_case')).toBe('path/case');
    expect(toPathCase('')).toBe('');
  });

  test('converts string to dot.case', () => {
    expect(toDotCase('Hello World')).toBe('hello.world');
    expect(toDotCase('JavaScript is fun')).toBe('javascript.is.fun');
  });

  test('converts string to alternating case', () => {
    expect(toAlternatingCase('hello world')).toBe('hElLo wOrLd');
    expect(toAlternatingCase('JavaScript')).toBe('jAvAsCrIpT');
  });

  test('converts string to inverse case', () => {
    expect(toInverseCase('Hello World')).toBe('hELLO wORLD');
    expect(toInverseCase('JavaScript')).toBe('jAVAsCRIPT');
  });

  test('reverses the string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('JavaScript')).toBe('tpircSavaJ');
  });

  test('converts string to leetspeak', () => {
    expect(toLeetSpeak('hello world')).toBe('h3ll0 w0rld');
    expect(toLeetSpeak('JavaScript is cool')).toBe('j4v45cr1p7 15 c00l');
  });

  test('shuffles the string', () => {
    const originalString = 'hello';
    const shuffledString = shuffleString(originalString);
    expect(shuffledString).not.toBe(originalString);
    expect(shuffledString.length).toBe(originalString.length);
    expect(shuffledString.split('').sort().join('')).toBe(originalString.split('').sort().join(''));
  });
});