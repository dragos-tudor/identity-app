import { assertEquals, assertExists, assertStringIncludes } from "/asserts.ts"
import { createErrorJsonResponse, createLocation } from "/testing.http.js"
import { Messages } from "../messages/messages.jsx"
import { getForbiddenPath, getLoginPath } from "../routes/getting.js"
import { handleFetchApiError } from "./handling.js"
const { Route, useLocation } = await import("/scripts/routing.js")
const { render } = await import("/scripts/rendering.js")

Deno.test("use security", async t =>
{
  await t.step("unauthenticated api response => handle fetch api error => navigate to login", () =>
  {
    const elem = render(<Route path={getLoginPath()} child={<login></login>}></Route>)
    handleFetchApiError(elem, {response: createErrorJsonResponse({}, 401)}, createLocation())

    assertExists(elem.querySelector("login"))
  })

  await t.step("unauthenticated api response and initial location => handle fetch api error => login with initial uri redirection location", () =>
  {
    const elem = render(<Route path={getLoginPath()} child={<login></login>}></Route>)
    handleFetchApiError(elem, {response: createErrorJsonResponse({}, 401)}, createLocation("http://localhost/test"))

    assertEquals(useLocation(elem).href, "http://localhost/login?redirect=%2Ftest")
  })

  await t.step("forbidden api response => handle fetch api error => navigate to forbidden", () =>
  {
    const elem = render(<Route path={getForbiddenPath()} child={<forbidden></forbidden>}></Route>)
    handleFetchApiError(elem, {response: createErrorJsonResponse({}, 403)}, createLocation())

    assertExists(elem.querySelector("forbidden"))
  })

  await t.step("error api response => handle fetch api error => send error message", () =>
  {
    const elem = render(<a><Messages></Messages></a>)
    handleFetchApiError(elem, {message: "error", response: createErrorJsonResponse({})}, createLocation())

    assertExists(elem.querySelector("messages message"))
    assertStringIncludes(elem.querySelector("messages message").textContent, "error")
  })
})