
export const getHeaderValue = (response, name) => response.headers?.get(name)

export const getContentTypeHeaderValue = (response) => getHeaderValue(response, "content-type")