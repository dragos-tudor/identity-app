import { fetchApi } from "../frontend-api/mod.js"
import { getLanguageParam, isEnglishLanguage, validateLanguage, App, Services } from "../frontend-components/mod.js"
import { settings } from "./settings.js"
const { render } = await import("/scripts/rendering.js")

const language = validateLanguage(getLanguageParam(location))
const labels = isEnglishLanguage(language)? null /*batteries included*/: {...(await import(`/scripts/labels.${language}.js`))}
const validationErrors = isEnglishLanguage(language)? null /*batteries included*/: {...(await import(`/scripts/validation-errors.${language}.js`))}

const servicesProps = {"api-options": settings.apiOptions, "fetch-api": fetchApi, language, labels, ["validation-errors"]: validationErrors}
const services = React.createElement(Services, servicesProps)
const app = React.createElement(App, {class: "app", location})

render(services, document.body)
render(app, document.body)
