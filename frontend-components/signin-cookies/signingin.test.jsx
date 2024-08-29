import { assert, assertExists, assertStringIncludes } from "/asserts.ts"
import { createJsonResponse, createLocation, fetchError, fetchOk } from "/testing.http.js"
import { selectIsAuthenticated } from "../../frontend-states/mod.js";
import { Messages } from "../messages/messages.jsx"
import { getHomePath } from "../routes/getting.js"
import { AccountStore } from "../states/states.jsx"
import { signinAccount } from "./signingin.js"
import { Signin_Cookies } from "./signin-cookies.jsx"
const { Route } = await import("/scripts/routing.js")
const { render } = await import("/scripts/rendering.js")
const { getStoreStates, setSelectors, useSelector } = await import("/scripts/states.js")

Deno.test("use signin cookies", async t =>
{
  await t.step("credentials => signin account => fetch api receive credentials", async () =>
  {
    const elem = render(<Signin_Cookies></Signin_Cookies>)
    await signinAccount(elem, "credentials", (_, request) => request.body === "credentials" && [createJsonResponse()], {}, createLocation())
  })

  await t.step("ok api response and root path => signin account => navigate to home", async () =>
  {
    const elem = render(<Route path={getHomePath()} child={<home></home>}></Route>)
    await signinAccount(elem, {}, fetchOk("/accounts/signin"), {}, createLocation())

    assertExists(elem.querySelector("home"))
  })

  await t.step("ok api response and login path => signin account => navigate to home", async () =>
  {
    const elem = render(<Route path={getHomePath()} child={<home></home>}></Route>)
    await signinAccount(elem, {}, fetchOk("/accounts/signin"), {}, createLocation("http://localhost/login"))

    assertExists(elem.querySelector("home"))
  })

  await t.step("ok api response and login path with redirection => signin account => navigate to redirection", async () =>
  {
    const elem = render(<Route path="/test" child={<test></test>}></Route>)
    await signinAccount(elem, {}, fetchOk("/accounts/signin"), {}, createLocation("http://login?redirect=%2Ftest"))

    assertExists(elem.querySelector("test"))
  })

  await t.step("ok api response => signin account => account status is authenticated", async () =>
  {
    const elem = render(<AccountStore state={{isAuthenticated: false}}></AccountStore>)
    await signinAccount(elem, {}, fetchOk("/accounts/signin"), {}, createLocation())

    assert(useSelector(setSelectors(elem), "is-authenticated", selectIsAuthenticated, getStoreStates(elem)))
  })

  await t.step("error api response => signin account => no navigation", async () =>
  {
    const elem = render(<Route path={getHomePath()} child={<home></home>}></Route>)
    await signinAccount(elem, {}, fetchError("/accounts/signin"), {}, createLocation())

    assert(elem.querySelector("home") === null)
  })

  await t.step("error api response => signin account => send error message", async () =>
  {
    const elem = render(<a><Messages></Messages></a>)
    await signinAccount(elem, {}, fetchError("/accounts/signin", "error"), {}, createLocation())

    assertExists(elem.querySelector("messages message"))
    assertStringIncludes(elem.querySelector("messages message").textContent, "error")
  })
})