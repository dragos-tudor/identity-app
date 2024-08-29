import { createJsonResponse, createErrorJsonResponse } from "../responses/creating.js"
import { throwError } from "./throwing.js"
const { fetchJson } = await import("/scripts/fetching.js")

export const fetchError = (apiUrl, data = {}, status = 400) => (url, request) => apiUrl === url? fetchJson(() => createErrorJsonResponse(data, status), url, request): throwError(apiUrl, url)

export const fetchOk = (apiUrl, data = {}, status = 200) => (url, request) => apiUrl === url? fetchJson(() => createJsonResponse(data, status), url, request): throwError(apiUrl, url)