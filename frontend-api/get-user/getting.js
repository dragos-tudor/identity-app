import { fetchApi } from "../api-fetch/fetching.js";
import { createGetRequest } from "../requests/creating.js"

export const getUserApi = (fetch = fetchApi, apiOptions = {}) => fetch("/users", createGetRequest(), apiOptions)