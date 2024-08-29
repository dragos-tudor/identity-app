import { isValidLanguage } from "./verifying.js"

const throwError = (message) => { throw new Error(message) }

export const validateLanguage = (lang) => (isValidLanguage(lang) && lang) || throwError(`Invalid language ${lang}`)