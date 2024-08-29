
export const setRequestCredentials = (request, value = "omit") => Object.assign(request, {credentials: value})

export const setRequestMode = (request, mode = "cors") => Object.assign(request, {mode})

export const setRequestRedirect = (request, redirect) => Object.assign(request, {redirect})

export const setRequestCors = (request) => {
  setRequestMode(request, "cors")
  setRequestRedirect(request, "manual")
  setRequestCredentials(request, "include")
  return request
}