
const getSearchParams = (location) => new URLSearchParams(location.search)

export const getSearchParam = (location, paramName) => getSearchParams(location).get(paramName)