import { getFetchApiErrorMessage, isForbiddenResponse, isResponseError, isUnauthorizedResponse } from "../../frontend-api/mod.js"
import { createErrorMessage } from "../message/creating.js"
import { dispatchMessage } from "../message/dispatching.js"
import { getForbiddenPath } from "../routes/getting.js"
import { resolveAnonymousUri } from "../uris/resolving.js"
const { navigate } = await import("/scripts/routing.js")

export const handleFetchApiError = (elem, error, location) =>
{
  const errorMessage = getFetchApiErrorMessage(error)
  if (isUnauthorizedResponse(error.response)) return navigate(elem, resolveAnonymousUri(location))
  if (isForbiddenResponse(error.response)) return navigate(elem, getForbiddenPath())
  if (isResponseError(error.response)) dispatchMessage(elem, createErrorMessage(errorMessage))
  return errorMessage
}