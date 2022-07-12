import { getType, isSameType } from '../../src/utils/type'

// getType
test('getType {} to equal object', () => {
  expect(getType({})).toBe('Object')
})

test('getType "abc123_!~" to equal object', () => {
  expect(getType('abc123_!~')).toBe('String')
})

const s = Symbol('1')
test(`getType Symbol to equal Symbol`, () => {
  expect(getType(s)).toBe('Symbol')
})

// isSameType
test(`isSameType a: object b: array  to equal false`, () => {
  expect(isSameType({}, [])).toBe(false)
})

test(`isSameType a: set b: set  to equal true`, () => {
  expect(isSameType(new Set(), new Set())).toBe(true)
})
