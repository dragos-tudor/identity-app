import { getContentTypeHeaderValue } from "../response-headers/getting.js";

export const isForbiddenResponse = (response) => response.status === 403

export const isResponseError = (response) => response.status >= 400

export const isUnauthorizedResponse = (response) => response.status === 401

export const isProblemDetailsResponse = (response) => getContentTypeHeaderValue(response) === "application/problem+json"