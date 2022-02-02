const romanize = require ('./romanize');

test ('Romanize 4 to be VI', () => {
  expect(romanize(4)).toBe('IV');
})

test ('Romanize 5 not to be VI', () => {
  expect(romanize(5)).not.toBe('IV');
})

test ('Romanize 5 equal to V', () => {
  expect(romanize(5)).toEqual('V');
})