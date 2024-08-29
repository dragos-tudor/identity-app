import { RedirectParamName } from "./getting.js";

export const setRedirectParam = (redirectUri) => RedirectParamName + "=" + encodeURIComponent(redirectUri)