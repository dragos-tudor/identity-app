import { getLocationSearch } from "../locations/getting.js"
import { RedirectParamName } from "./getting.js"

export const isRedirection = (location) => getLocationSearch(location).includes(RedirectParamName)