# Converto

Converto is a lightweight TypeScript library for various conversion utilities.

## Installation

```sh
npm install converto
```

## Usage

You can import the functions in two ways: directly from the main package or from specific modules.

### Import from the main package:

```typescript
import { toCamelCase, numberWithCommas } from 'converto';

console.log(toCamelCase('hello-world')); // 'helloWorld'
console.log(numberWithCommas(1000000)); // '1,000,000'
```

### Import from specific modules:

```typescript
import { toCamelCase } from 'converto/string';
import { numberWithCommas } from 'converto/number';

console.log(toCamelCase('hello-world')); // 'helloWorld'
console.log(numberWithCommas(1000000)); // '1,000,000'
```

## API

### String Conversions

#### `toCamelCase`
Converts a string to camelCase.

#### `toSnakeCase`
Converts a string to snake_case.

#### `toPascalCase`
Converts a string to PascalCase.

#### `toKebabCase`
Converts a string to kebab-case.

#### `toCapitalizedCase`
Converts a string to Capitalized Case.

### Number Conversions

#### `numberWithCommas`
Converts a number to a string with commas as thousand separators.

#### `toBinaryString`
Converts a number to its binary representation as a string.

#### `toHexString`
Converts a number to its hexadecimal representation as a string.

#### `toOctalString`
Converts a number to its octal representation as a string.

#### `toPercentageString`
Converts a number to a percentage string with a specified number of decimal places.