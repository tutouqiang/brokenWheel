const getType = (d: any): string => {
  const reg = /(?<=\[object).*(?=])/
  const s = Object.prototype.toString.call(d)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return s.match(reg)[0].trim()
}

const isSameType = (a: any, b: any): boolean => {
  return getType(a) === getType(b)
}

export { getType, isSameType }
