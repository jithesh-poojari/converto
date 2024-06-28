import { convertLength, convertWeight, convertTemperature, convertVolume, convertSpeed, convertArea } from '../src/conversion/unit';

describe('Measure Conversion Functions', () => {
  describe('Length Conversion', () => {
    test('converts meters to kilometers', () => {
      expect(convertLength(1000, 'm', 'km')).toBeCloseTo(1);
    });

    test('converts miles to meters', () => {
      expect(convertLength(1, 'mi', 'm')).toBeCloseTo(1609.34);
    });

    test('throws error for unsupported conversion', () => {
      expect(() => convertLength(1000, 'm', 'unsupported' as any)).toThrow('Conversion from "m" to "unsupported" is not supported.');
    });
  });

  describe('Weight Conversion', () => {
    test('converts grams to kilograms', () => {
      expect(convertWeight(1000, 'g', 'kg')).toBeCloseTo(1);
    });

    test('converts ounces to grams', () => {
      expect(convertWeight(1, 'oz', 'g')).toBeCloseTo(28.3495);
    });

    test('throws error for unsupported conversion', () => {
      expect(() => convertWeight(1000, 'g', 'unsupported' as any)).toThrow('Conversion from "g" to "unsupported" is not supported.');
    });
  });

  describe('Temperature Conversion', () => {
    test('converts Celsius to Fahrenheit', () => {
      expect(convertTemperature(0, 'C', 'F')).toBeCloseTo(32);
    });

    test('converts Fahrenheit to Kelvin', () => {
      expect(convertTemperature(32, 'F', 'K')).toBeCloseTo(273.15);
    });

    test('throws error for unsupported conversion', () => {
      expect(() => convertTemperature(100, 'C', 'unsupported' as any)).toThrow('Conversion from "C" to "unsupported" is not supported.');
    });
  });

  describe('Volume Conversion', () => {
    test('converts milliliters to liters', () => {
      expect(convertVolume(1000, 'ml', 'l')).toBeCloseTo(1);
    });

    test('converts gallons to cubic meters', () => {
      expect(convertVolume(1, 'gal', 'm3')).toBeCloseTo(0.00378541);
    });

    test('throws error for unsupported conversion', () => {
      expect(() => convertVolume(1000, 'ml', 'unsupported' as any)).toThrow('Conversion from "ml" to "unsupported" is not supported.');
    });
  });

  describe('Speed Conversion', () => {
    test('converts meters per second to kilometers per hour', () => {
      expect(convertSpeed(1, 'm/s', 'km/h')).toBeCloseTo(3.6);
    });

    test('converts miles per hour to feet per second', () => {
      expect(convertSpeed(1, 'mi/h', 'ft/s')).toBeCloseTo(1.46667);
    });

    test('throws error for unsupported conversion', () => {
      expect(() => convertSpeed(100, 'm/s', 'unsupported' as any)).toThrow('Conversion from "m/s" to "unsupported" is not supported.');
    });
  });

  describe('Area Conversion', () => {
    test('converts square meters to square kilometers', () => {
      expect(convertArea(1000000, 'm2', 'km2')).toBeCloseTo(1);
    });

    test('converts square feet to square meters', () => {
      expect(convertArea(1000, 'ft2', 'm2')).toBeCloseTo(92.903);
    });

    test('throws error for unsupported conversion', () => {
      expect(() => convertArea(1000, 'm2', 'unsupported' as any)).toThrow('Conversion from "m2" to "unsupported" is not supported.');
    });
  });
});
