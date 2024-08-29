import { fetchApi } from "../api-fetch/fetching.js"
import { createGetRequest } from "../requests/creating.js"

export const getAccountStatusApi = (fetch = fetchApi, apiOptions = {}) => fetch("/accounts/status", createGetRequest(), apiOptions)