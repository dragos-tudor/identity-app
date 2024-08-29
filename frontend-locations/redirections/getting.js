import { getSearchParam } from "../search-params/getting.js"

export const RedirectParamName = "redirect"

export const getRedirectParam = (location) => decodeURIComponent(getSearchParam(location, RedirectParamName))