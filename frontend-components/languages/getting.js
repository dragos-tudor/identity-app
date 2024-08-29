import { getAbsoluteLocationUrl, getLocationSearch, getSearchParam } from "../../frontend-locations/mod.js"
import { Languages } from "./languages.js";
import { setLanguageParam } from "./setting.js"

const getSearchWithLanguageParam = (location, language) => (getLocationSearch(location)? "": "?") + setLanguageParam(language)

export const LanguageParamName = "lang"

export const getLanguageParam = (location) => getSearchParam(location, LanguageParamName) || Languages.en

export const getLanguageUri = (location, language) => getAbsoluteLocationUrl(location) + getSearchWithLanguageParam(location, language)