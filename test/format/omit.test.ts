import { OmitFormat } from '../../src/format'

test('OmitFormat [data: "13170027668", argv: [3,8]]  to equal "131****7668"', () => {
  expect(OmitFormat('13170027668', [3, 4, 4], '*')).toBe('131****7668')
})

test('OmitFormat [data: 1657610952845, argv: null, omitString: ""]  to equal "7668"', () => {
  expect(OmitFormat('13170027668', [0, 4, 0])).toBe('7668')
})

test('OmitFormat [data: 1657610952845, argv: [3, 11], omitString: "-"]  to equal "131-"', () => {
  expect(OmitFormat('13170027668', [3, 0, 1], '-')).toBe('131-')
})
