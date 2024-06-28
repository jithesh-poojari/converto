type LengthUnit = 'm'      // meters
  | 'km'     // kilometers
  | 'cm'     // centimeters
  | 'mm'     // millimeters
  | 'µm'     // micrometers
  | 'nm'     // nanometers
  | 'in'     // inches
  | 'ft'     // feet
  | 'yd'     // yards
  | 'mi'     // miles
  | 'nmi'    // nautical miles
  | 'ly';    // light years

const lengthConversionRates: { [key in LengthUnit]: { [key in LengthUnit]?: number } } = {
  m: { km: 0.001, cm: 100, mm: 1000, 'µm': 1e6, nm: 1e9, in: 39.3701, ft: 3.28084, yd: 1.09361, mi: 0.000621371, nmi: 0.000539957, ly: 1.057e-16 },
  km: { m: 1000, cm: 100000, mm: 1e6, 'µm': 1e9, nm: 1e12, in: 39370.1, ft: 3280.84, yd: 1093.61, mi: 0.621371, nmi: 0.539957, ly: 1.057e-13 },
  cm: { m: 0.01, km: 0.00001, mm: 10, 'µm': 1e4, nm: 1e7, in: 0.393701, ft: 0.0328084, yd: 0.0109361, mi: 0.0000062137, nmi: 0.00000539957, ly: 1.057e-18 },
  mm: { m: 0.001, km: 0.000001, cm: 0.1, 'µm': 1000, nm: 1e6, in: 0.0393701, ft: 0.00328084, yd: 0.00109361, mi: 0.00000062137, nmi: 0.000000539957, ly: 1.057e-19 },
  'µm': { m: 1e-6, km: 1e-9, cm: 0.0001, mm: 0.001, nm: 1000, in: 3.93701e-5, ft: 3.28084e-6, yd: 1.09361e-6, mi: 6.2137e-10, nmi: 5.39957e-10, ly: 1.057e-22 },
  nm: { m: 1e-9, km: 1e-12, cm: 1e-7, mm: 1e-6, 'µm': 0.001, in: 3.93701e-8, ft: 3.28084e-9, yd: 1.09361e-9, mi: 6.2137e-13, nmi: 5.39957e-13, ly: 1.057e-25 },
  in: { m: 0.0254, km: 0.0000254, cm: 2.54, mm: 25.4, 'µm': 25400, nm: 25400000, ft: 0.0833333, yd: 0.0277778, mi: 0.0000157828, nmi: 0.0000137149, ly: 2.68478e-17 },
  ft: { m: 0.3048, km: 0.0003048, cm: 30.48, mm: 304.8, 'µm': 304800, nm: 304800000, in: 12, yd: 0.333333, mi: 0.000189394, nmi: 0.000164579, ly: 3.22174e-16 },
  yd: { m: 0.9144, km: 0.0009144, cm: 91.44, mm: 914.4, 'µm': 914400, nm: 914400000, in: 36, ft: 3, mi: 0.000568182, nmi: 0.000493737, ly: 9.66523e-16 },
  mi: { m: 1609.34, km: 1.60934, cm: 160934, mm: 1609340, 'µm': 1.60934e9, nm: 1.60934e12, in: 63360, ft: 5280, yd: 1760, nmi: 0.868976, ly: 1.70108e-13 },
  nmi: { m: 1852, km: 1.852, cm: 185200, mm: 1852000, 'µm': 1.852e9, nm: 1.852e12, in: 72913.4, ft: 6076.12, yd: 2025.37, mi: 1.15078, ly: 2.25919e-13 },
  ly: { m: 9.461e15, km: 9.461e12, cm: 9.461e17, mm: 9.461e18, 'µm': 9.461e21, nm: 9.461e24, in: 3.725e17, ft: 3.104e16, yd: 1.035e16, mi: 5.87863e12, nmi: 4.41755e12 },
};

/**
 * Converts a value from one length unit to another.
 * 
 * @param {number} value - The value to convert.
 * @param {LengthUnit} from - The unit to convert from.
 * @param {LengthUnit} to - The unit to convert to.
 * @returns {number} - The converted value.
 * @throws Will throw an error if the conversion is not supported.
 * @example
 * ```typescript
 * const km = convertLength(1000, 'm', 'km'); // 1
 * const ft = convertLength(10, 'm', 'ft'); // 32.8084
 * ```
 */
export function convertLength(value: number, from: LengthUnit, to: LengthUnit): number {
  const rate = lengthConversionRates[from][to];
  if (rate === undefined) {
    throw new Error(`Conversion from "${from}" to "${to}" is not supported.`);
  }
  return value * rate;
}

type WeightUnit = 'g'      // grams
  | 'kg'     // kilograms
  | 'lb'     // pounds
  | 'oz'     // ounces
  | 'mg'     // milligrams
  | 'ton'    // metric tons
  | 'ct'     // carats
  | 'stone'  // stones
  | 'gr'     // grains
  | 'dwt'    // pennyweights
  | 't'      // tonnes
  | 'ozt'    // troy ounces
  | 'mton'   // megatons
  | 'cwt'    // hundredweights
  | 'qtr'    // quarters (imperial)
  | 'st'     // short tons (US)
  | 'lb-t'   // long tons (imperial)
  | 'lb-l'   // pounds (livre, historical)
  | 'l-t'    // metric tonnes (quintal, historical)
  | 'l-l';   // libra (historical)

// Define the type for weight conversion rates
type WeightConversionRates = {
  [unit: string]: Partial<{
    g: number;
    kg: number;
    lb: number;
    oz: number;
    mg: number;
    ton: number;
    ct: number;
    stone: number;
    gr: number;
    dwt: number;
    t: number;
    ozt: number;
    mton: number;
    cwt: number;
    qtr: number;
    st: number;
    "lb-t": number;
    "lb-l": number;
    "l-t": number;
    "l-l": number;
  }>;
};

// Define the weight conversion rates object
const weightConversionRates: WeightConversionRates = {
  g: {
    kg: 0.001, lb: 0.00220462, oz: 0.035274, mg: 1000,
    ton: 0.000001, ct: 5, stone: 0.000157473, gr: 15.4324,
    dwt: 0.64301493, t: 1e-6, ozt: 3.21507466e-5,
    mton: 1e-9, cwt: 0.0000196841, qtr: 0.0000393682,
    st: 0.000157473, "lb-t": 0.0000022046, "lb-l": 0.0022046,
    "l-t": 0.000001, "l-l": 1,
  },
  kg: {
    g: 1000, lb: 2.20462, oz: 35.274, mg: 1000000,
    ton: 0.001, ct: 5000, stone: 0.157473, gr: 15432.3584,
    dwt: 643.01493, t: 0.001, ozt: 32.1507466,
    mton: 0.000001, cwt: 0.0196841315, qtr: 0.039368263,
    st: 0.157473, "lb-t": 0.00220462, "lb-l": 2.20462,
    "l-t": 0.001, "l-l": 1000,
  },
  lb: {
    g: 453.592, kg: 0.453592, oz: 16, mg: 453592,
    ton: 0.000453592, ct: 2267.96185, stone: 0.0714286,
    gr: 7000, dwt: 291.666667, t: 0.000453592, ozt: 14.5833333,
    mton: 0.000000454, cwt: 0.00892857143, qtr: 0.0178571429,
    st: 0.0714286, "lb-t": 0.0001, "lb-l": 1,
    "l-t": 0.000453592, "l-l": 453.592,
  },
  oz: {
    g: 28.3495, kg: 0.0283495, lb: 0.0625, mg: 28349.5,
    ton: 0.00003125, ct: 141.748, stone: 0.00446429,
    gr: 437.5, dwt: 18.2291667, t: 0.0000283495, ozt: 1,
    mton: 2.83495e-8, cwt: 0.00551000383, qtr: 0.0110200077,
    st: 0.00446429, "lb-t": 6.25e-5, "lb-l": 0.0625,
    "l-t": 2.83495e-5, "l-l": 28.3495,
  },
  mg: {
    g: 0.001, kg: 0.000001, lb: 0.0000022046, oz: 0.000035274,
    ton: 1e-9, ct: 0.005, stone: 1.57473e-7, gr: 0.0154324,
    dwt: 6.43015e-7, t: 1e-9, ozt: 3.21507e-8,
    mton: 1e-12, cwt: 1.96841e-8, qtr: 3.93682e-8,
    st: 1.57473e-7, "lb-t": 2.2046e-9, "lb-l": 2.2046e-6,
    "l-t": 1e-9, "l-l": 0.001,
  },
  ton: {
    g: 1e+6, kg: 1000, lb: 2204.62, oz: 35274,
    mg: 1e+9, ct: 5e+6, stone: 157.473, gr: 1.54324e+6,
    dwt: 6.43015e+7, t: 1, ozt: 3.21507e+7,
    mton: 0.001, cwt: 1968.41, qtr: 3936.82,
    st: 157.473, "lb-t": 2204.62, "lb-l": 2.20462e+6,
    "l-t": 1000, "l-l": 1e+6,
  },
  ct: {
    g: 0.2, kg: 0.0002, lb: 0.000440925, oz: 0.00705479,
    mg: 200, ton: 0.0000002, stone: 0.00003125,
    gr: 3.08647, dwt: 0.1286, t: 2e-7, ozt: 0.005,
    mton: 2e-10, cwt: 0.0000396843, qtr: 0.0000793686,
    st: 0.00003125, "lb-t": 0.000000440925, "lb-l": 0.000440925,
    "l-t": 0.0000002, "l-l": 0.2,
  },
  stone: {
    g: 6350.29, kg: 6.35029, lb: 14, oz: 224,
    mg: 6350290, ton: 0.00635029, ct: 32000,
    gr: 98000, dwt: 4032, t: 0.00635029, ozt: 204.1162,
    mton: 6.35029e-6, cwt: 12.5, qtr: 25,
    st: 1, "lb-t": 0.014, "lb-l": 14,
    "l-t": 0.00635029, "l-l": 6350.29,
  },
  gr: {
    g: 0.0647989, kg: 6.47989e-5, lb: 0.000142857, oz: 0.00228571,
    mg: 64.7989, ton: 6.47989e-8, ct: 0.323994,
    stone: 0.0000102041, dwt: 0.0416667, t: 6.47989e-8, ozt: 0.00321507,
    mton: 6.47989e-11, cwt: 6.47989e-5, qtr: 0.000129598,
    st: 0.0000102041, "lb-t": 1.42857e-7, "lb-l": 0.000142857,
    "l-t": 6.47989e-8, "l-l": 0.0647989,
  },
  dwt: {
    g: 1.55517, kg: 0.00155517, lb: 0.00342857, oz: 0.0548571,
    mg: 1555.17, ton: 0.00000155517, ct: 7.77699,
    stone: 0.000393757, gr: 24, t: 0.00155517, ozt: 49.614,
    mton: 1.55517e-9, cwt: 0.00306108, qtr: 0.00612216,
    st: 0.000393757, "lb-t": 0.00548214, "lb-l": 0.00342857,
    "l-t": 0.00155517, "l-l": 1555.17,
  },
  t: {
    g: 1e+9, kg: 1e+6, lb: 2204620, oz: 35274000,
    mg: 1e+12, ton: 1000, ct: 5e+9, stone: 15747300,
    gr: 1.54324e+7, dwt: 6.43015e+10, ozt: 3.21507e+10,
    mton: 1, cwt: 1968410, qtr: 3936820,
    st: 15747300, "lb-t": 2204620, "lb-l": 2.20462e+9,
    "l-t": 1000, "l-l": 1e+9,
  },
  ozt: {
    g: 31.1035, kg: 0.0311035, lb: 0.0685714, oz: 1.09714,
    mg: 31103.5, ton: 0.0000311035, ct: 155.517, stone: 0.0049335,
    gr: 480, dwt: 20, t: 0.0000311035,
    mton: 3.11035e-8, cwt: 0.0610689, qtr: 0.122138,
    st: 0.0049335, "lb-t": 6.85714e-5, "lb-l": 0.0685714,
    "l-t": 3.11035e-5, "l-l": 31.1035,
  },
  mton: {
    g: 1e+12, kg: 1e+9, lb: 2204620000, oz: 3.5274e+10,
    mg: 1e+15, ton: 1000, ct: 5e+12, stone: 1.57473e+8,
    gr: 1.54324e+9, dwt: 6.43015e+12, ozt: 3.21507e+12,
    cwt: 1.96841e+9, qtr: 3.93682e+9,
    st: 1.57473e+8, "lb-t": 2204620000, "lb-l": 2.20462e+12,
    "l-t": 1000000, "l-l": 1e+12,
  },
  cwt: {
    g: 50802.3, kg: 50.8023, lb: 112, oz: 1792,
    mg: 50802300, ton: 0.0508023, ct: 254011.5, stone: 8,
    gr: 78400, dwt: 32399.2, t: 0.0508023, ozt: 1600,
    mton: 5.08023e-5, qtr: 2,
    st: 8, "lb-t": 0.112, "lb-l": 112,
    "l-t": 0.0508023, "l-l": 50802.3,
  },
  qtr: {
    g: 25401.2, kg: 25.4012, lb: 56, oz: 896,
    mg: 25401200, ton: 0.0254012, ct: 127005.75, stone: 4,
    gr: 39200, dwt: 16199.6, t: 0.0254012, ozt: 800,
    mton: 2.54012e-5, cwt: 0.5,
    st: 4, "lb-t": 0.056, "lb-l": 56,
    "l-t": 0.0254012, "l-l": 25401.2,
  },
  st: {
    g: 6350.29, kg: 6.35029, lb: 14, oz: 224,
    mg: 6350290, ton: 0.00635029, ct: 32000, stone: 0.0714286,
    gr: 98000, dwt: 4032, t: 0.00635029, ozt: 204.1162,
    mton: 6.35029e-6, cwt: 12.5, qtr: 25,
    "lb-t": 0.014, "lb-l": 14,
    "l-t": 0.00635029, "l-l": 6350.29,
  },
  "lb-t": {
    g: 453592, kg: 453.592, lb: 1000, oz: 16000,
    mg: 4.53592e+8, ton: 0.453592, ct: 2.26796e+6,
    stone: 71.4286, gr: 7000000, dwt: 291666.667,
    t: 0.000453592, ozt: 14583.3333,
    mton: 4.53592e-7, cwt: 8.92857143, qtr: 17.8571429,
    st: 71.4286, "lb-l": 1000,
    "l-t": 0.000453592, "l-l": 453.592,
  },
  "lb-l": {
    g: 453.592, kg: 0.453592, lb: 1, oz: 16,
    mg: 453592, ton: 0.000453592, ct: 2267.96185,
    stone: 0.0714286, gr: 7000, dwt: 291.666667,
    t: 0.000453592, ozt: 14.5833333,
    mton: 4.53592e-7, cwt: 0.00892857143, qtr: 0.0178571429,
    st: 0.0714286, "lb-t": 0.001,
    "l-t": 0.000453592, "l-l": 1,
  },
  "l-t": {
    g: 1000000, kg: 1000, lb: 2204.62, oz: 35274,
    mg: 1e+9, ton: 0.001, ct: 5e+6, stone: 157.473,
    gr: 1.54324e+6, dwt: 6.43015e+7, t: 1, ozt: 3.21507e+7,
    mton: 0.000001, cwt: 1968.41, qtr: 3936.82,
    st: 157.473, "lb-t": 2204.62, "lb-l": 2.20462e+6,
    "l-l": 1000000,
  },
  "l-l": {
    g: 1, kg: 0.001, lb: 0.00220462, oz: 0.035274,
    mg: 1000, ton: 0.000001, ct: 5, stone: 0.000157473,
    gr: 15.4324, dwt: 0.64301493, t: 1e-6, ozt: 3.21507466e-5,
    mton: 1e-9, cwt: 0.0000196841, qtr: 0.0000393682,
    st: 0.000157473, "lb-t": 0.0000022046, "lb-l": 0.0022046,
    "l-t": 0.000001,
  },
};

/**
 * Converts a value from one weight unit to another.
 * 
 * @param {number} value - The value to convert.
 * @param {WeightUnit} from - The unit to convert from.
 * @param {WeightUnit} to - The unit to convert to.
 * @returns {number} - The converted value.
 * @throws Will throw an error if the conversion is not supported.
 * @example
 * ```typescript
 * const kg = convertWeight(1000, 'g', 'kg'); // 1
 * const lb = convertWeight(5, 'kg', 'lb'); // 11.0231
 * ```
 */
export function convertWeight(value: number, from: WeightUnit, to: WeightUnit): number {
  const rate = weightConversionRates[from][to];
  if (rate === undefined) {
    throw new Error(`Conversion from "${from}" to "${to}" is not supported.`);
  }
  return value * rate;
}

type TemperatureUnit = 'C' | 'F' | 'K'; // Celsius, Fahrenheit, Kelvin

const temperatureConversionFunctions: {
  [key in TemperatureUnit]: { [key in TemperatureUnit]?: (value: number) => number }
} = {
  C: { F: value => value * 9 / 5 + 32, K: value => value + 273.15 }, // Celsius to Fahrenheit and Kelvin
  F: { C: value => (value - 32) * 5 / 9, K: value => (value - 32) * 5 / 9 + 273.15 }, // Fahrenheit to Celsius and Kelvin
  K: { C: value => value - 273.15, F: value => (value - 273.15) * 9 / 5 + 32 }, // Kelvin to Celsius and Fahrenheit
};

/**
 * Converts a temperature value from one unit to another.
 * 
 * @param {number} value - The temperature value to convert.
 * @param {TemperatureUnit} from - The unit to convert from.
 * @param {TemperatureUnit} to - The unit to convert to.
 * @returns {number} - The converted temperature value.
 * @throws Will throw an error if the conversion is not supported.
 * @example
 * ```typescript
 * const F = convertTemperature(0, 'C', 'F'); // 32
 * const K = convertTemperature(100, 'C', 'K'); // 373.15
 * ```
 */
export function convertTemperature(value: number, from: TemperatureUnit, to: TemperatureUnit): number {
  const conversionFunction = temperatureConversionFunctions[from][to];
  if (conversionFunction === undefined) {
    throw new Error(`Conversion from "${from}" to "${to}" is not supported.`);
  }
  return conversionFunction(value);
}

type VolumeUnit = 'ml'      // milliliter
  | 'cl'     // centiliter
  | 'dl'     // deciliter
  | 'l'      // liter
  | 'kl'     // kiloliter
  | 'm3'     // cubic meter
  | 'mm3'    // cubic millimeter
  | 'cm3'    // cubic centimeter
  | 'dm3'    // cubic decimeter
  | 'hm3'    // cubic hectometer
  | 'km3'    // cubic kilometer
  | 'in3'    // cubic inch
  | 'ft3'    // cubic foot
  | 'yd3'    // cubic yard
  | 'gal'    // gallon
  | 'qt'     // quart
  | 'pt'     // pint
  | 'cup'    // cup
  | 'fl-oz'  // fluid ounce
  | 'tbsp'   // tablespoon
  | 'tsp';   // teaspoon

const volumeConversionRates: { [key in VolumeUnit]: { [key in VolumeUnit]?: number } } = {
  ml: { cl: 0.1, dl: 0.01, l: 0.001, kl: 0.000001, m3: 0.000001, mm3: 1000, cm3: 1, dm3: 0.001, hm3: 0.000000001, km3: 0.000000000001, in3: 0.0610237, ft3: 0.0000353147, yd3: 0.00000130795, gal: 0.000264172, qt: 0.00105669, pt: 0.00211338, cup: 0.00416667, 'fl-oz': 0.033814, tbsp: 0.067628, tsp: 0.202884 },
  cl: { ml: 10, dl: 0.1, l: 0.01, kl: 0.00001, m3: 0.00001, mm3: 10000, cm3: 10, dm3: 0.01, hm3: 0.00000001, km3: 0.00000000001, in3: 0.610237, ft3: 0.00353147, yd3: 0.000130795, gal: 0.0264172, qt: 0.105669, pt: 0.211338, cup: 0.416667, 'fl-oz': 3.3814, tbsp: 6.7628, tsp: 20.2884 },
  dl: { ml: 100, cl: 10, l: 0.1, kl: 0.0001, m3: 0.0001, mm3: 100000, cm3: 100, dm3: 0.1, hm3: 0.0000001, km3: 0.0000000001, in3: 6.10237, ft3: 0.0353147, yd3: 0.00130795, gal: 0.264172, qt: 1.05669, pt: 2.11338, cup: 4.16667, 'fl-oz': 33.814, tbsp: 67.628, tsp: 202.884 },
  l: { ml: 1000, cl: 100, dl: 10, kl: 0.001, m3: 0.001, mm3: 1000000, cm3: 1000, dm3: 1, hm3: 0.000001, km3: 0.000000001, in3: 61.0237, ft3: 0.0353147, yd3: 0.00130795, gal: 0.264172, qt: 1.05669, pt: 2.11338, cup: 4.16667, 'fl-oz': 33.814, tbsp: 67.628, tsp: 202.884 },
  kl: { ml: 1000000, cl: 100000, dl: 10000, l: 1000, m3: 1, mm3: 1000000000, cm3: 1000000, dm3: 1000, hm3: 0.001, km3: 0.000001, in3: 61023.7, ft3: 35.3147, yd3: 1.30795, gal: 264.172, qt: 1056.69, pt: 2113.38, cup: 4166.67, 'fl-oz': 33814, tbsp: 67628, tsp: 202884 },
  m3: { ml: 1000000, cl: 100000, dl: 10000, l: 1000, kl: 1, mm3: 1000000000, cm3: 1000000, dm3: 1000, hm3: 0.001, km3: 0.000001, in3: 61023.7, ft3: 35.3147, yd3: 1.30795, gal: 264.172, qt: 1056.69, pt: 2113.38, cup: 4166.67, 'fl-oz': 33814, tbsp: 67628, tsp: 202884 },
  mm3: { ml: 0.001, cl: 0.0001, dl: 0.00001, l: 0.000001, kl: 0.000000001, m3: 0.000000001, cm3: 0.001, dm3: 0.000001, hm3: 0.000000000001, km3: 0.000000000000001, in3: 0.0000610237, ft3: 0.0000000353147, yd3: 0.00000000130795, gal: 0.000000264172, qt: 0.00000105669, pt: 0.00000211338, cup: 0.00000416667, 'fl-oz': 0.000033814, tbsp: 0.000067628, tsp: 0.000202884 },
  cm3: { ml: 1, cl: 0.1, dl: 0.01, l: 0.001, kl: 0.000001, m3: 0.000001, mm3: 1000, dm3: 0.001, hm3: 0.000000001, km3: 0.000000000001, in3: 0.0610237, ft3: 0.0000353147, yd3: 0.00000130795, gal: 0.000264172, qt: 0.00105669, pt: 0.00211338, cup: 0.00416667, 'fl-oz': 0.033814, tbsp: 0.067628, tsp: 0.202884 },
  dm3: { ml: 1000, cl: 100, dl: 10, l: 1, kl: 0.001, m3: 0.001, mm3: 1000000, cm3: 1000, hm3: 0.000001, km3: 0.000000001, in3: 61.0237, ft3: 0.0353147, yd3: 0.00130795, gal: 0.264172, qt: 1.05669, pt: 2.11338, cup: 4.16667, 'fl-oz': 33.814, tbsp: 67.628, tsp: 202.884 },
  hm3: { ml: 1000000000, cl: 100000000, dl: 10000000, l: 1000000, kl: 1000, m3: 1000, mm3: 1000000000000, cm3: 1000000000, dm3: 1000000, km3: 0.001, in3: 61023700, ft3: 35314.7, yd3: 1307.95, gal: 264172, qt: 1056690, pt: 2113380, cup: 4166670, 'fl-oz': 338140, tbsp: 676280, tsp: 2028840 },
  km3: { ml: 1000000000000, cl: 100000000000, dl: 10000000000, l: 1000000000, kl: 1000000, m3: 1000000, mm3: 1000000000000000, cm3: 1000000000000, dm3: 1000000000, hm3: 1000, in3: 61023700000, ft3: 353147, yd3: 13079500, gal: 2641720000, qt: 10566900000, pt: 21133800000, cup: 41666700000, 'fl-oz': 338140000, tbsp: 676280000, tsp: 2028840000 },
  in3: { ml: 16.3871, cl: 1.63871, dl: 0.163871, l: 0.0163871, kl: 0.0000163871, m3: 0.0000163871, mm3: 16387.1, cm3: 16.3871, dm3: 0.0163871, hm3: 0.0000000163871, km3: 0.0000000000163871, ft3: 0.000578704, yd3: 0.0000214335, gal: 0.004329, qt: 0.017316, pt: 0.034632, cup: 0.0682794, 'fl-oz': 0.554113, tbsp: 1.10823, tsp: 3.32469 },
  ft3: { ml: 28316.8, cl: 2831.68, dl: 283.168, l: 28.3168, kl: 0.0283168, m3: 0.0283168, mm3: 28316800, cm3: 28316.8, dm3: 28.3168, hm3: 0.0000283168, km3: 0.0000000283168, in3: 1728, yd3: 0.037037, gal: 7.48052, qt: 29.9221, pt: 59.8442, cup: 118.294, 'fl-oz': 957.506, tbsp: 1915.01, tsp: 5745.03 },
  yd3: { ml: 764554.857, cl: 76455.4857, dl: 7645.54857, l: 764.554857, kl: 0.764554857, m3: 0.764554857, mm3: 764554857, cm3: 764554.857, dm3: 764.554857, hm3: 0.000764554857, km3: 0.000000764554857, in3: 46656, ft3: 27, gal: 201.974, qt: 807.896, pt: 1615.79, cup: 3178.87, 'fl-oz': 25852.7, tbsp: 51705.5, tsp: 155116 },
  gal: { ml: 3785.41, cl: 378.541, dl: 37.8541, l: 3.78541, kl: 0.00378541, m3: 0.00378541, mm3: 3785410, cm3: 3785.41, dm3: 3.78541, hm3: 0.00000378541, km3: 0.00000000378541, in3: 231, ft3: 0.133681, yd3: 0.00495113, qt: 4, pt: 8, cup: 15.7725, 'fl-oz': 128, tbsp: 256, tsp: 768 },
  qt: { ml: 946.353, cl: 94.6353, dl: 9.46353, l: 0.946353, kl: 0.000946353, m3: 0.000946353, mm3: 946353, cm3: 946.353, dm3: 0.946353, hm3: 0.000000946353, km3: 0.000000000946353, in3: 57.75, ft3: 0.0334201, yd3: 0.0012378, gal: 0.25, pt: 2, cup: 3.94314, 'fl-oz': 31.5, tbsp: 63, tsp: 189 },
  pt: { ml: 473.176, cl: 47.3176, dl: 4.73176, l: 0.473176, kl: 0.000473176, m3: 0.000473176, mm3: 473176, cm3: 473.176, dm3: 0.473176, hm3: 0.000000473176, km3: 0.000000000473176, in3: 28.875, ft3: 0.0167101, yd3: 0.000618891, gal: 0.125, qt: 0.5, cup: 1.97157, 'fl-oz': 16, tbsp: 32, tsp: 96 },
  cup: { ml: 240, cl: 24, dl: 2.4, l: 0.24, kl: 0.00024, m3: 0.00024, mm3: 240000, cm3: 240, dm3: 0.24, hm3: 0.00000024, km3: 0.00000000024, in3: 14.4375, ft3: 0.00835503, yd3: 0.000309353, gal: 0.0625, qt: 0.25, pt: 0.50721, 'fl-oz': 8, tbsp: 16, tsp: 48 },
  'fl-oz': { ml: 29.5735, cl: 2.95735, dl: 0.295735, l: 0.0295735, kl: 0.0000295735, m3: 0.0000295735, mm3: 29573.5, cm3: 29.5735, dm3: 0.0295735, hm3: 0.0000000295735, km3: 0.0000000000295735, in3: 1.80469, ft3: 0.00104438, yd3: 0.0000386807, gal: 0.0078125, qt: 0.03125, pt: 0.0625, cup: 0.125, tbsp: 2, tsp: 6 },
  tbsp: { ml: 14.7868, cl: 1.47868, dl: 0.147868, l: 0.0147868, kl: 0.0000147868, m3: 0.0000147868, mm3: 14786.8, cm3: 14.7868, dm3: 0.0147868, hm3: 0.0000000147868, km3: 0.0000000000147868, in3: 0.902344, ft3: 0.00052219, yd3: 0.0000193368, gal: 0.00390625, qt: 0.015625, pt: 0.03125, cup: 0.0625, 'fl-oz': 0.5, tsp: 3 },
  tsp: { ml: 4.92892, cl: 0.492892, dl: 0.0492892, l: 0.00492892, kl: 0.00000492892, m3: 0.00000492892, mm3: 4928.92, cm3: 4.92892, dm3: 0.00492892, hm3: 0.00000000492892, km3: 0.00000000000492892, in3: 0.300781, ft3: 0.000173611, yd3: 0.0000064307, gal: 0.00130208, qt: 0.00520833, pt: 0.0104167, cup: 0.0208333, 'fl-oz': 0.166667, tbsp: 0.333333 },
};

/**
 * Converts a value from one volume unit to another.
 * 
 * @param {number} value - The value to convert.
 * @param {VolumeUnit} from - The unit to convert from.
 * @param {VolumeUnit} to - The unit to convert to.
 * @returns {number} - The converted value.
 * @throws Will throw an error if the conversion is not supported.
 * @example
 * ```typescript
 * const l = convertVolume(1000, 'ml', 'l'); // 1
 * const ft3 = convertVolume(10, 'm3', 'ft3'); // 353.147
 * ```
 */
export function convertVolume(value: number, from: VolumeUnit, to: VolumeUnit): number {
  const rate = volumeConversionRates[from][to];
  if (rate === undefined) {
    throw new Error(`Conversion from "${from}" to "${to}" is not supported.`);
  }
  return value * rate;
}

type SpeedUnit = 'm/s' | 'km/h' | 'mi/h' | 'ft/s' | 'kn';

const speedConversionRates: { [key in SpeedUnit]: { [key in SpeedUnit]?: number } } = {
  'm/s': { 'km/h': 3.6, 'mi/h': 2.23694, 'ft/s': 3.28084, 'kn': 1.94384 },
  'km/h': { 'm/s': 0.277778, 'mi/h': 0.621371, 'ft/s': 0.911344, 'kn': 0.539957 },
  'mi/h': { 'm/s': 0.44704, 'km/h': 1.60934, 'ft/s': 1.46667, 'kn': 0.868976 },
  'ft/s': { 'm/s': 0.3048, 'km/h': 1.09728, 'mi/h': 0.681818, 'kn': 0.592484 },
  'kn': { 'm/s': 0.514444, 'km/h': 1.852, 'mi/h': 1.15078, 'ft/s': 1.68781 },
};

/**
 * Converts a value from one speed unit to another.
 * 
 * @param {number} value - The value to convert.
 * @param {SpeedUnit} from - The unit to convert from.
 * @param {SpeedUnit} to - The unit to convert to.
 * @returns {number} - The converted value.
 * @throws Will throw an error if the conversion is not supported.
 * @example
 * ```typescript
 * const kmh = convertSpeed(10, 'm/s', 'km/h'); // 36
 * const mph = convertSpeed(50, 'km/h', 'mi/h'); // 31.0686
 * ```
 */
export function convertSpeed(value: number, from: SpeedUnit, to: SpeedUnit): number {
  const rate = speedConversionRates[from][to];
  if (rate === undefined) {
    throw new Error(`Conversion from "${from}" to "${to}" is not supported.`);
  }
  return value * rate;
}

type AreaUnit =
  | 'm2'    // square meter
  | 'km2'   // square kilometer
  | 'cm2'   // square centimeter
  | 'mm2'   // square millimeter
  | 'in2'   // square inch
  | 'ft2'   // square foot
  | 'mi2'   // square mile
  | 'ac'    // acre
  | 'ha';   // hectare

const areaConversionRates: { [key in AreaUnit]: { [key in AreaUnit]?: number } } = {
  m2: { km2: 0.000001, cm2: 10000, mm2: 1000000, in2: 1550, ft2: 10.7639, mi2: 0.000000386102, ac: 0.000247105, ha: 0.0001 },
  km2: { m2: 1000000, cm2: 10000000000, mm2: 1000000000000, in2: 1550000000, ft2: 10763900, mi2: 0.386102, ac: 247.105, ha: 100 },
  cm2: { m2: 0.0001, km2: 0.0000000001, mm2: 100, in2: 0.155, ft2: 0.00107639, mi2: 0.0000000000386102, ac: 0.000000247105, ha: 0.0000001 },
  mm2: { m2: 0.000001, km2: 0.000000000001, cm2: 0.01, in2: 0.00155, ft2: 0.0000107639, mi2: 0.000000000000386102, ac: 0.000000000247105, ha: 0.0000000001 },
  in2: { m2: 0.00064516, km2: 0.00000000064516, cm2: 6.4516, mm2: 645.16, ft2: 0.00694444, mi2: 0.000000000249097, ac: 0.000159, ha: 0.0000645 },
  ft2: { m2: 0.092903, km2: 0.000000092903, cm2: 929.03, mm2: 92903, in2: 144, mi2: 0.0000000358701, ac: 0.0000229568, ha: 0.0000092903 },
  mi2: { m2: 2589990, km2: 2.58999, cm2: 25899900000, mm2: 2589990000000, in2: 4014489600, ft2: 27878400, ac: 640, ha: 258.999 },
  ac: { m2: 4046.86, km2: 0.00404686, cm2: 40468600, mm2: 4046860000, in2: 6272640, ft2: 43560, mi2: 0.0015625, ha: 0.404686 },
  ha: { m2: 10000, km2: 0.01, cm2: 100000000, mm2: 10000000000, in2: 15500031, ft2: 107639, mi2: 0.00386102, ac: 2.47105 },
};


/**
 * Converts a value from one area unit to another.
 * 
 * @param {number} value - The value to convert.
 * @param {AreaUnit} from - The unit to convert from.
 * @param {AreaUnit} to - The unit to convert to.
 * @returns {number} - The converted value.
 * @throws Will throw an error if the conversion is not supported.
 * @example
 * ```typescript
 * const km2 = convertArea(1000, 'm2', 'km2'); // 0.001
 * const ft2 = convertArea(50, 'm2', 'ft2'); // 538.196
 * ```
 */
export function convertArea(value: number, from: AreaUnit, to: AreaUnit): number {
  const rate = areaConversionRates[from][to];
  if (rate === undefined) {
    throw new Error(`Conversion from "${from}" to "${to}" is not supported.`);
  }
  return value * rate;
}
