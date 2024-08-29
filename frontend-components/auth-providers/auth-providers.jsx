import { getFacebookChallengeUrl, getGoogleChallengeUrl, getTwitterChallengeUrl } from "../../frontend-api/mod.js"
import { getAbsoluteLocationUrl, resolveLocation } from "../../frontend-locations/mod.js"
import { Auth_Provider } from "../auth-provider/auth-provider.jsx"
import { createFacebookProvider, createGoogleProvider, createTwitterProvider } from "../auth-provider/creating.js"
import { useApiOptions, useLabels } from "../services/using.js"
import { AuthProvidersLabels } from "./labels/labels.en.js"

export const Auth_Providers = ({"api-options": _apiOptions, location: _location}, elem) =>
{
  const apiOptions = useApiOptions(elem, _apiOptions)
  const labels = useLabels(elem, AuthProvidersLabels.name, AuthProvidersLabels)
  const location = resolveLocation(_location)
  const currentUrl = getAbsoluteLocationUrl(location)
  const returnUrl = encodeURIComponent(currentUrl)

  const googleHref = getGoogleChallengeUrl(apiOptions, returnUrl)
  const facebookHref = getFacebookChallengeUrl(apiOptions, returnUrl)
  const twitterHref = getTwitterChallengeUrl(apiOptions, returnUrl)

  return <>
    <style css={css}></style>
    <Auth_Provider provider={createGoogleProvider(googleHref, labels["auth-google"])} class="auth-provider google-provider"></Auth_Provider>
    <Auth_Provider provider={createFacebookProvider(facebookHref, labels["auth-facebook"])} class="auth-provider facebook-provider"></Auth_Provider>
    <Auth_Provider provider={createTwitterProvider(twitterHref, labels["auth-twitter"])} class="auth-provider twitter-provider"></Auth_Provider>
  </>
}

const css = `
.auth-providers {
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;
}

.auth-provider {
  margin-left: 0.5rem;
}`