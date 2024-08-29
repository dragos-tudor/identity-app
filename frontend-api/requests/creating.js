const { HttpMethods } = await import("/scripts/fetching.js")

export const createGetRequest = () => ({ method: HttpMethods.GET })

export const createPostRequest = (body) => ({ method: HttpMethods.POST, body })