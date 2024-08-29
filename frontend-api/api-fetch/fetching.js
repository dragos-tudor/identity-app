import { getApiUrl, getApiTimeout } from "../api-options/getting.js"
import { setRequestCors } from "../requests/setting.js"
const { fetchJson, fetchWithTimeout } = await import("/scripts/fetching.js")

export const fetchApi = (url, request = {}, apiOptions = {apiBaseUrl: ""}, fetchData = fetch) =>
  fetchWithTimeout((url, request) => fetchJson(fetchData, url, request), getApiUrl(url, apiOptions), setRequestCors(request), getApiTimeout(apiOptions))
