import { DateFormat } from '../../src/format'

test('DateFormat [timeStamp: null, format: null, defaultReturn: null]  to equal ""', () => {
  expect(DateFormat('')).toBe('')
})

test('DateFormat [timeStamp: 1657610952845, format: null, defaultReturn: null]  to equal "2022:07:12 15:29:12"', () => {
  expect(DateFormat(1657610952845)).toBe('2022:07:12 15:29:12')
})

test('DateFormat [timeStamp: 1657610952845, format: "YY年MM月DD日 H时M分S秒", defaultReturn: null]  to equal "2022年07月12日 15时29分12秒"', () => {
  expect(DateFormat(1657610952845, 'YY年MM月DD日 H时M分S秒')).toBe('2022年07月12日 15时29分12秒')
})
