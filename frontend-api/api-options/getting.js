
const DefaultApiTimeout = 10000 // milliseconds

export const getApiUrl = (url, apiOptions) => apiOptions?.apiBaseUrl + url

export const getApiTimeout = (apiOptions) => apiOptions?.apiTimeout ?? DefaultApiTimeout