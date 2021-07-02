/**
 * PriceFormat // 价格格式化
 */

const defaultOption = {
  spacerMark: ','
}
const PriceFormat = (params: string, option?: {}):string => {
  const options = Object.assign(defaultOption, option)
  const isFloat = params.indexOf('.')
  const arr = params.split('.')[0].split('').reverse()
  const data:any = []

  arr.forEach((item, index) => {
    if(index && index < arr.length && index % 3 === 0) {
      data.push(options.spacerMark)
    }
    data.push(item)
  })

  return data.reverse().join('') + (isFloat !== -1 ? params.slice(isFloat) : '' )
}

export default PriceFormat
