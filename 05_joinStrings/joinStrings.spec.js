const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Max', () => {
    expect(values.firstName).toEqual('Max');
  });
  test('lastName is Moreland', () => {
    expect(values.lastName).toEqual('Moreland');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 1998', () => {
    expect(values.birthYear).toEqual(1998);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Max Moreland and I am 27 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Carlos Stevenson', () => {
    expect(values.fullName).toEqual('Max Moreland');
  });
  test('age is 18', () => {
    expect(values.age).toEqual(27);
  });
});
