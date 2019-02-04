import { randomizeName } from './rouletteFunctions';

test('Randomize never should be null', () => {
  const mockMath = Object.create(global.Math);
  const oldMath = global.Math;
  mockMath.random = () => 0.7;
  global.Math = mockMath;

  expect(randomizeName([{ name: 'NAME1' }, { name: 'NAME2' }])).toBe('NAME2');

  global.Math = oldMath;
});
