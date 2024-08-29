import { isFetchApiError, signinAccountApi } from "../../frontend-api/mod.js"
import { createSetAccountStatusAction } from "../../frontend-states/mod.js"
import { resolveAuthenticatedUri } from "../uris/resolving.js"
import { dispatchSigninError } from "./dispatching.js"
const { navigate } = await import("/scripts/routing.js")
const { dispatchAction } = await import("/scripts/states.js")
const { update } = await import("/scripts/rendering.js")

export const signinAccount = async (elem, credentials, fetchApi, apiOptions, location) =>
{
  const [, error] = await signinAccountApi(credentials, fetchApi, apiOptions)
  if (isFetchApiError(error)) return (dispatchSigninError(elem, error), false)

  dispatchAction(elem, createSetAccountStatusAction(true))
  navigate(elem, resolveAuthenticatedUri(location))
  return true
}

export const signinClick = async (elem, signinAccount, setUserName, setPassword, setInProcess) =>
{
  setInProcess(true); update(elem);

  const result = await signinAccount();
  if (result) (setUserName(null), setPassword(null))

  setInProcess(false); update(elem);
  return result
}