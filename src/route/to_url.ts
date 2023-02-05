// export interface HandleRouterType {
//   params: object
// }

// // add params to Browser Address Bar
// const paramsToUrl = (object: HandleRouterType): string => {
//   // const currentUrl = window.location.origin + window.location.pathname
//   const currentParams = window.location.search.split('?')[1]
//   const params = typeof currentParams === 'string' ? paramsToObject(currentParams) : {}
//   const newParams = Object.assign(params, object.params)
//   // history.replaceState('', '', `${currentUrl}?${urlParams}`)
//   return objectToParams(newParams)
// }

// // url params to object
// const paramsToObject = (str: string): object => {
//   const a = str.split('&')
//   const obj: any = {}
//   a.forEach((item) => {
//     const c = item.split('=')
//     obj[c[0]] = c[1]
//   })
//   return obj
// }

// url params to url string
const objectToUrlParams = (obj: Record<string, string>, delimiter?: string): string => {
  const tempArray = []
  for (const item in obj) {
    if (item) {
      tempArray.push(`${item}${delimiter || '='}${obj[item]}`)
    }
  }
  return `${tempArray.join('&')}`
}

export default objectToUrlParams
