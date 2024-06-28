type LengthUnit = 'm' | 'km' | 'cm' | 'mm' | 'µm' | 'nm' | 'in' | 'ft' | 'yd' | 'mi' | 'nmi' | 'ly';
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
export declare function convertLength(value: number, from: LengthUnit, to: LengthUnit): number;
type WeightUnit = 'g' | 'kg' | 'lb' | 'oz' | 'mg' | 'ton' | 'ct' | 'stone' | 'gr' | 'dwt' | 't' | 'ozt' | 'mton' | 'cwt' | 'qtr' | 'st' | 'lb-t' | 'lb-l' | 'l-t' | 'l-l';
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
export declare function convertWeight(value: number, from: WeightUnit, to: WeightUnit): number;
type TemperatureUnit = 'C' | 'F' | 'K';
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
export declare function convertTemperature(value: number, from: TemperatureUnit, to: TemperatureUnit): number;
type VolumeUnit = 'ml' | 'cl' | 'dl' | 'l' | 'kl' | 'm3' | 'mm3' | 'cm3' | 'dm3' | 'hm3' | 'km3' | 'in3' | 'ft3' | 'yd3' | 'gal' | 'qt' | 'pt' | 'cup' | 'fl-oz' | 'tbsp' | 'tsp';
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
export declare function convertVolume(value: number, from: VolumeUnit, to: VolumeUnit): number;
type SpeedUnit = 'm/s' | 'km/h' | 'mi/h' | 'ft/s' | 'kn';
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
export declare function convertSpeed(value: number, from: SpeedUnit, to: SpeedUnit): number;
type AreaUnit = 'm2' | 'km2' | 'cm2' | 'mm2' | 'in2' | 'ft2' | 'mi2' | 'ac' | 'ha';
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
export declare function convertArea(value: number, from: AreaUnit, to: AreaUnit): number;
export {};
//# sourceMappingURL=index.d.ts.map