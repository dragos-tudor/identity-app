import { getAccountStatusApi, isFetchApiError } from "../../frontend-api/mod.js"
import { createSetAccountStatusAction } from "../../frontend-states/mod.js"
import { handleFetchApiError } from "../errors/handling.js"
import { resolveAuthenticatedUri } from "../uris/resolving.js"
const { navigate } = await import("/scripts/routing.js")
const { dispatchAction } = await import("/scripts/states.js")
const { update } = await import("/scripts/rendering.js")

export const startApp = async (elem, fetchApi, apiOptions, location) =>
{
  const [data, error] = await getAccountStatusApi(fetchApi, apiOptions, location)
  if (isFetchApiError(error)) return handleFetchApiError(elem, error, location)

  dispatchAction(elem, createSetAccountStatusAction(true))
  navigate(elem, resolveAuthenticatedUri(location))
  return data
}

export const startEffect = async (elem, fetchApi, apiOptions, location, setIsStarting) =>
{
  const result = await startApp(elem, fetchApi, apiOptions, location)
  setIsStarting(false)
  update(elem)
  return result
}