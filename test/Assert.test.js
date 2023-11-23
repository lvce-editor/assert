import * as Assert from '../src/parts/Assert/Assert.js'

test('boolean - error', () => {
  expect(() => Assert.boolean(undefined)).toThrow(
    new Error(`expected value to be of type boolean`),
  )
})
