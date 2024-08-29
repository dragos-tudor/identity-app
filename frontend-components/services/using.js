const { getServices, useService } = await import("/scripts/rendering.js")

export const useApiOptions = (elem, fallbackApiOptions) => useService(getServices(elem), "api-options") ?? fallbackApiOptions

export const useFetchApi = (elem, fallbackFetchApi) => useService(getServices(elem), "fetch-api") ?? fallbackFetchApi

export const useLabels = (elem, name, fallbackLabels) => useService(getServices(elem), "labels")?.[name] ?? fallbackLabels

export const useLanguage = (elem, fallbackLanguage) => useService(getServices(elem), "language") ?? fallbackLanguage

export const useValidationErrors = (elem, fallbackValidationErrors) => useService(getServices(elem), "validation-errors") ?? fallbackValidationErrors
