const isIBAN = require('./index');

test('should insert a valid iban and return true', () => {
  expect(isIBAN('DE89 3704 0044 0532 0130 00')).toEqual(true);
});

test('should insert a valid iban and return true', () => {
  expect(isIBAN('AT61 1904 3002 3457 3201')).toEqual(true);
});

test('should insert an invalid iban and return false', () => {
  expect(isIBAN('FR14 2004 1010 0505 0001 3')).toEqual(false);
});

test('should insert a valid iban and return true', () => {
  expect(isIBAN('GB82-WEST-1234-5698-7654-32')).toEqual(true);
});

test('should insert a valid iban and return true', () => {
  expect(isIBAN('NL20INGB0001234567')).toEqual(true);
});

test('should insert a value valid without checksum and return true when checksumEnabled equals to false', () => {
  expect(isIBAN('XX00 1234 5678 9012 3456 7890 1234 5678 90', false)).toEqual(true);
});


test('should insert a value valid without checksum and return false when checksumEnabled equals to true', () => {
  expect(isIBAN('XX00 1234 5678 9012 3456 7890 1234 5678 90', true)).toEqual(false);
});

test('should return an error if is not a integer', () => {
  expect(() => {
    isIBAN(89370400440532013000);
  }).toThrow('You should provide a string in the first parameter!');
});
