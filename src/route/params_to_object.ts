// url params to object
const paramsToObject = (str: string): object => {
  const a = str.split('&')
  const obj: any = {}
  a.forEach((item) => {
    const c = item.split('=')
    obj[c[0]] = c[1]
  })
  return obj
}

// query url params output Object
const urlParamsToObject = (): object => {
  const currentParams = window.location.search.split('?')[1]
  return typeof currentParams === 'string' ? paramsToObject(currentParams) : {}
}

export default urlParamsToObject
