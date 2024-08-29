import { resolveLocation } from "../../frontend-locations/mod.js";
import { useLanguage } from "../services/using.js"
import { getLanguageUri } from "./getting.js"
import { Languages } from "./languages.js"
import { isEnglishLanguage } from "./verifying.js"

export const Language = ({language: _language, location: _location}, elem) =>
{
  const lang = useLanguage(elem, _language)
  const location = resolveLocation(_location)
  const toggleLang = isEnglishLanguage(lang)? Languages.ro: Languages.en

  return <a class="language-link" href={getLanguageUri(location, toggleLang)} target="_self">{toggleLang}</a>
}