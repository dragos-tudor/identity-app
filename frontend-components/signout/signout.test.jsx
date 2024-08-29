import { assertExists, assertEquals, assertFalse } from "/asserts.ts"
import { user, waitForAsyncs } from "/testing.js"
import { fetchOk, fetchError } from "/testing.http.js"
import { selectIsAuthenticated } from "../../frontend-states/mod.js"
import { getLoginPath } from "../routes/getting.js"
import { AccountStore } from "../states/states.jsx"
import { Signout } from "./signout.jsx"
const { Route } = await import("/scripts/routing.js")
const { getStoreStates } = await import("/scripts/states.js")
const { render } = await import("/scripts/rendering.js")

Deno.test("use signout", async (t) =>
{
  await t.step("login route => signout account => navigate to login route", async () =>
  {
    const elem = render(<a><Signout fetch-api={fetchOk("/accounts/signout")}></Signout><Route path={getLoginPath()} child={<login></login>}></Route></a>)
    user.click(elem.querySelector(".signout"))

    await waitForAsyncs()
    assertExists(elem.querySelector("route login"))
  })

  await t.step("login route => signout accout with error => no navigation", async () =>
  {
    const elem = render(<a><Signout fetch-api={fetchError("/accounts/signout")}></Signout><Route path={getLoginPath()} child={<login></login>}></Route></a>)
    user.click(elem.querySelector(".signout"))

    await waitForAsyncs()
    assertFalse(elem.querySelector("route login"))
  })

  await t.step("account state => signout account => reset account state", async () =>
  {
    const elem = render(<AccountStore state={{isAuthenticated: true}}><Signout fetch-api={fetchOk("/accounts/signout")}></Signout></AccountStore>)
    user.click(elem.querySelector(".signout"))

    await waitForAsyncs()
    assertEquals(selectIsAuthenticated(getStoreStates(elem)), false)
  })
})