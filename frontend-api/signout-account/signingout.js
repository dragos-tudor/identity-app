import { fetchApi } from "../api-fetch/fetching.js"
import { createPostRequest } from "../requests/creating.js"

export const signoutAccoutApi = (fetch = fetchApi, apiOptions = {})  => fetch("/accounts/signout", createPostRequest(), apiOptions)