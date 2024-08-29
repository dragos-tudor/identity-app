import { assert, assertExists } from "/asserts.ts"
import { fetchError, fetchOk, createLocation } from "/testing.http.js"
import { selectIsAuthenticated } from "../../frontend-states/mod.js"
import { getHomePath } from "../routes/getting.js"
import { AccountStore } from "../states/states.jsx"
import { startApp } from "./starting.js"
const { getStoreStates, setSelectors, useSelector } = await import("/scripts/states.js")
const { Route } = await import("/scripts/routing.js")
const { render } = await import("/scripts/rendering.js")

Deno.test("use app", async t =>
{
  await t.step("authenticated api response => start app => account status is authenticated", async () =>
  {
    const elem = render(<AccountStore state={{isAuthenticated: false}}></AccountStore>)
    await startApp(elem, fetchOk("/accounts/status"), {}, createLocation())

    assert(useSelector(setSelectors(elem), "is-authenticated", selectIsAuthenticated, getStoreStates(elem)))
  })

  await t.step("authenticated api response and login path => start app => navigate to home", async () =>
  {
    const elem = render(<Route path={getHomePath()} child={<home></home>}></Route>)
    await startApp(elem, fetchOk("/accounts/status"), {}, createLocation("http://localhost/login"))

    assertExists(elem.querySelector("home"))
  })

  await t.step("authenticated api response and login path with redirection => start app => navigate to redirected url", async () =>
  {
    const elem = render(<Route path="/test" child={<test></test>}></Route>)
    await startApp(elem, fetchOk("/accounts/status"), {}, createLocation("http://localhost/login?redirect=%2Ftest"))

    assertExists(elem.querySelector("test"))
  })

  await t.step("error api response => start app => no navigation", async () =>
  {
    const elem = render(<Route path={getHomePath()} child={<home></home>}></Route>)
    await startApp(elem, fetchError("/accounts/status"), {}, createLocation())

    assert(elem.querySelector("home") === null)
  })
})
