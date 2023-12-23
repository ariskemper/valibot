import { describe, expect, test } from 'vitest';
import { iban } from './iban.ts';

describe('iban', () => {
  test('should pass only valid IBAN', () => {
    const validate = iban();

    const value1 = 'AT483200000012345864';
    expect(validate._parse(value1).output).toBe(value1);
    const value2 = 'BE71096123456769';
    expect(validate._parse(value2).output).toBe(value2);
    const value3 = 'BG18RZBB91550123456789';
    expect(validate._parse(value3).output).toBe(value3);
    const value4 = 'HR1723600001101234565';
    expect(validate._parse(value4).output).toBe(value4);
    const value5 = 'HR1723600001101234565';
    expect(validate._parse(value5).output).toBe(value5);
    const value6 = 'CY21002001950000357001234567';
    expect(validate._parse(value6).output).toBe(value6);
    const value7 = 'CZ5508000000001234567899';
    expect(validate._parse(value7).output).toBe(value7);
    const value8 = 'DK9520000123456789';
    expect(validate._parse(value8).output).toBe(value8);
    const value9 = 'EE471000001020145685';
    expect(validate._parse(value9).output).toBe(value9);
    const value10 = 'FI1410093000123458';
    expect(validate._parse(value10).output).toBe(value10);
    const value11 = 'FR7630006000011234567890189';
    expect(validate._parse(value11).output).toBe(value11);
    const value12 = 'DE75512108001245126199';
    expect(validate._parse(value12).output).toBe(value12);
    const value13 = 'GR9608100010000001234567890';
    expect(validate._parse(value13).output).toBe(value13);
    const value14 = 'HU93116000060000000012345676';
    expect(validate._parse(value14).output).toBe(value14);
    const value15 = 'IE64IRCE92050112345678';
    expect(validate._parse(value15).output).toBe(value15);
    const value16 = 'IT60X0542811101000000123456';
    expect(validate._parse(value16).output).toBe(value16);
    const value17 = 'LV97HABA0012345678910';
    expect(validate._parse(value17).output).toBe(value17);
    const value18 = 'LT601010012345678901';
    expect(validate._parse(value18).output).toBe(value18);
    const value19 = 'LU120010001234567891';
    expect(validate._parse(value19).output).toBe(value19);
    const value20 = 'MT31MALT01100000000000000000123';
    expect(validate._parse(value20).output).toBe(value20);
    const value21 = 'PL10105000997603123456789123';
    expect(validate._parse(value21).output).toBe(value21);
    const value22 = 'PT50002700000001234567833';
    expect(validate._parse(value22).output).toBe(value22);
    const value23 = 'RO09BCYP0000001234567890';
    expect(validate._parse(value23).output).toBe(value23);
    const value24 = 'SK8975000000000012345671';
    expect(validate._parse(value24).output).toBe(value24);
    const value25 = 'SI56192001234567892';
    expect(validate._parse(value25).output).toBe(value25);
    const value26 = 'ES7921000813610123456789';
    expect(validate._parse(value26).output).toBe(value26);
    const value27 = 'SE7280000810340009783242';
    expect(validate._parse(value27).output).toBe(value27);
    const value28 = 'NL02ABNA0123456789';
    expect(validate._parse(value28).output).toBe(value28);
    const value29 = 'SI56101000057903854';
    expect(validate._parse(value29).output).toBe(value29);
  });

  test('should reject invalid IBAN', () => {
    const validate = iban();

    expect(validate._parse('').issues).toBeTruthy();
    expect(validate._parse('GB82WEST12345698').issues).toBeTruthy();
    expect(validate._parse('DE8937040044053201300').issues).toBeTruthy();
    expect(validate._parse('GB82 WEST 1234 5698 7654 32').issues).toBeTruthy();
    expect(validate._parse('XX82WEST12345698765432').issues).toBeTruthy();
    expect(validate._parse('GB82TEST12345698765432').issues).toBeTruthy();
    expect(validate._parse('FR7630006000011234567890289').issues).toBeTruthy();
    expect(validate._parse('abcdefghij1234567890').issues).toBeTruthy();
    expect(validate._parse('GB82!EST12345698765432').issues).toBeTruthy();
    expect(validate._parse('GB82!NL91ABNA0417164300').issues).toBeTruthy();
    expect(validate._parse('GB12 3456 7890 1234 5678 90').issues).toBeTruthy();

    expect(validate._parse('XX22YYY1234567890123').issues).toBeTruthy();
    expect(validate._parse('FR14 2004 1010 0505 0001 3').issues).toBeTruthy();
    expect(validate._parse('FR7630006000011234567890189@').issues).toBeTruthy();
    expect(
      validate._parse('FR7630006000011234567890189😅').issues
    ).toBeTruthy();
    expect(
      validate._parse('FR763000600001123456!!🤨7890189@').issues
    ).toBeTruthy();
  });

  test('should return custom error message', () => {
    const error = 'Value is invalid IBAN!';
    const validate = iban(error);
    expect(validate._parse('test').issues?.[0].message).toBe(error);
  });
});
