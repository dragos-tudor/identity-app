import { setSearchParam } from "../../frontend-locations/mod.js"
import { LanguageParamName } from "./getting.js"

export const setLanguageParam = (language) => setSearchParam(LanguageParamName, language)