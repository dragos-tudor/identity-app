import { isFetchApiError, signoutAccoutApi } from "../../frontend-api/mod.js"
import { createSetAccountStatusAction } from "../../frontend-states/mod.js"
import { handleFetchApiError } from "../errors/handling.js"
import { getLoginPath } from "../routes/getting.js"
const { navigate } = await import("/scripts/routing.js")
const { dispatchAction } = await import("/scripts/states.js")

export const signoutAccount = async (elem, fetchApi, apiOptions, location) =>
{
  const [data, error] = await signoutAccoutApi(fetchApi, apiOptions)
  if (isFetchApiError(error)) return handleFetchApiError(elem, error, location)

  dispatchAction(elem, createSetAccountStatusAction(false))
  navigate(elem, getLoginPath())
  return data
}