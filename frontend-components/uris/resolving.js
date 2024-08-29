import { getRelativeLocationUri, getRedirectParam, isRedirection, setRedirectParam, getLocationSearch } from "../../frontend-locations/mod.js"
import { getHomePath, getLoginPath, getRootPath } from "../routes/getting.js"
import { isLoginPath, isRootPath } from "../routes/verifying.js"

const resolveLoginRedirectedUri = (location) => getLoginPath() + "?" + setRedirectParam(getRelativeLocationUri(location))

const resolveHomeOrRelativeUri = (location) => (isLoginPath(location) || isRootPath(location)? getHomePath() + getLocationSearch(location): getRelativeLocationUri(location))

const resolveAuthenticatedRedirectUri = (location, redirection = getRedirectParam(location)) =>
  (redirection === getRootPath() || redirection.startsWith("/?") || redirection.startsWith("?"))? getHomePath() + redirection.replace("/", ""): getRedirectParam(location)


export const resolveAnonymousUri = (location) => isLoginPath(location)? getRelativeLocationUri(location): resolveLoginRedirectedUri(location)

export const resolveAuthenticatedUri = (location) => isRedirection(location)? resolveAuthenticatedRedirectUri(location): resolveHomeOrRelativeUri(location)