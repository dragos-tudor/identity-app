import { assertExists } from "/asserts.ts"
import { createLocation } from "/testing.http.js";
import { getFacebookChallengeUrl, getGoogleChallengeUrl, getTwitterChallengeUrl } from "../../frontend-api/mod.js"
import { AuthProvidersLabels } from "./labels/labels.en.js"
import { Auth_Providers } from "./auth-providers.jsx"
const { render } = await import("/scripts/rendering.js")

Deno.test("use auth providers", async t =>
{
  await t.step("auth providers => render auth providers => auth providers rendered", () =>
  {
    const elem = render(<Auth_Providers location={createLocation()}></Auth_Providers>)
    assertExists(elem.querySelector(".google-provider"))
    assertExists(elem.querySelector(".facebook-provider"))
    assertExists(elem.querySelector(".twitter-provider"))
  })

  await t.step("auth providers and api options => render auth providers => auth providers with challenge urls", () =>
  {
    const apiOptions = {apiBaseUrl: "http://api"}
    const elem = render(<Auth_Providers location={createLocation("http://localhost/test")} api-options={apiOptions}></Auth_Providers>)
    assertExists(elem.querySelector(".google-provider a").href, getGoogleChallengeUrl(apiOptions, "/test"))
    assertExists(elem.querySelector(".facebook-provider a").href, getFacebookChallengeUrl(apiOptions, "/test"))
    assertExists(elem.querySelector(".twitter-provider a").href, getTwitterChallengeUrl(apiOptions, "/test"))
  })

  await t.step("auth providers and api options => render auth providers => auth providers labels rendered", () =>
  {
    const elem = render(<Auth_Providers location={createLocation()}></Auth_Providers>)
    assertExists(elem.querySelector(".google-provider span").textContent, AuthProvidersLabels["auth-google"])
    assertExists(elem.querySelector(".facebook-provider span").textContent, AuthProvidersLabels["auth-facebook"])
    assertExists(elem.querySelector(".twitter-provider span").textContent, AuthProvidersLabels["auth-twitter"])
  })
})