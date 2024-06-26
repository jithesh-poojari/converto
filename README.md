# Converto

Converto is a lightweight TypeScript library for various conversion utilities.

## Installation

```sh
npm install converto
```

## Usage

```typescript
import { toCamelCase, toSnakeCase } from 'converto/dist/conversions/stringConversions';
import { numberWithCommas, toBinaryString } from 'converto/dist/conversions/numberConversions';

console.log(toCamelCase('hello-world')); // 'helloWorld'
console.log(toSnakeCase('Hello World!')); // 'hello_world'
console.log(numberWithCommas(1000000)); // '1,000,000'
console.log(toBinaryString(10)); // '1010'
```

## API

### String Conversions

#### `toCamelCase(str: string): string`

Converts a string to camelCase.

##### Parameters:
- `str`: The string to convert.

##### Returns:
- The camelCased string.

#### `toSnakeCase(str: string): string`

Converts a string to snake_case.

##### Parameters:
- `str`: The string to convert.

##### Returns:
- The snake_cased string.

### Number Conversions

#### `numberWithCommas(num: number): string`

Converts a number to a string with commas as thousand separators.

##### Parameters:
- `num`: The number to convert.

##### Returns:
- The formatted string.

#### `toBinaryString(num: number): string`

Converts a number to its binary representation as a string.

##### Parameters:
- `num`: The number to convert.

##### Returns:
- The binary string.