interface HandleRouterType {
  params: object
}

// add params to Browser Address Bar
const addParamsToUrl = (object: HandleRouterType): void => {
  const currentUrl = window.location.origin + window.location.pathname
  const currentParams = window.location.search.split('?')[1]
  const params = typeof currentParams === 'string' ? paramsToObject(currentParams) : {}
  const newParams = Object.assign(params, object.params)
  const urlParams = objectToParams(newParams)
  history.replaceState('', '', `${currentUrl}?${urlParams}`)
}

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

// params to url string
const objectToParams = (obj: any): string => {
  const tempArray = []
  for (const item in obj) {
    if (item) {
      tempArray.push(`${item}=${obj[item]}`)
    }
  }
  return `${tempArray.join('&')}`
}

// query url params output Object
const urlParamsToObject = () => {
  const currentParams = window.location.search.split('?')[1]
  return typeof currentParams === 'string' ? paramsToObject(currentParams) : {}
}

export default {
  addParamsToUrl,
  urlParamsToObject,
}
