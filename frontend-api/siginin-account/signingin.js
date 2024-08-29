import { fetchApi } from "../api-fetch/fetching.js"
import { createPostRequest } from "../requests/creating.js"

export const signinAccountApi = (credentials, fetch = fetchApi, apiOptions = {}) => fetch("/accounts/signin", createPostRequest(credentials), apiOptions)