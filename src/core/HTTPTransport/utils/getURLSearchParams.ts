export function getURLSearchParams (searchParamsObject: Record<string, any>): URLSearchParams {
  const urlSearchParams = new URLSearchParams()

  const searchParamsKeys = Object.keys(searchParamsObject)

  searchParamsKeys.forEach((key) => {
    const param = searchParamsObject[key]

    urlSearchParams.append(key, JSON.stringify(param))
  })

  return urlSearchParams
}
