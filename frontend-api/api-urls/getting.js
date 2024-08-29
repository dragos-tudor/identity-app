import { getApiUrl } from "../api-options/getting.js";

export const getGoogleChallengeUrl = (apiOptions, returnUrl) => getApiUrl(`/accounts/challenge-google?returnUrl=${returnUrl}`, apiOptions)

export const getFacebookChallengeUrl = (apiOptions, returnUrl) => getApiUrl(`/accounts/challenge-facebook?returnUrl=${returnUrl}`, apiOptions)

export const getTwitterChallengeUrl = (apiOptions, returnUrl) => getApiUrl(`/accounts/challenge-twitter?returnUrl=${returnUrl}`, apiOptions)