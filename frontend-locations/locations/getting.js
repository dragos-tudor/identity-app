
export const DefaultLocation = new URL("http://localhost")

export const getAbsoluteLocationUrl = (location) => location.href

export const getLocationPathName = (location) => location.pathname

export const getLocationSearch = (location) => location.search

export const getRelativeLocationUri = (location) => location.pathname + getLocationSearch(location)
