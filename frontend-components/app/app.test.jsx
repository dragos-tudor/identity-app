import { assertExists } from "/asserts.ts"
import { waitForAsyncs } from "/testing.js"
import { fetchError, fetchOk, createLocation } from "/testing.http.js"
import { App } from "./app.jsx"
const { render, unrender } = await import("/scripts/rendering.js")

Deno.test("use app", async t =>
{
  await t.step("user authenticated => render app => navigate to home", async () =>
  {
    const elem = render(<App fetch-api={fetchOk("/accounts/status")} location={createLocation()} __ignore={["header", "home"]}></App>)
    await waitForAsyncs()

    assertExists(elem.querySelector("home"))
    assertExists(!elem.querySelector("login"))
    unrender(elem)
  })

  await t.step("user unauthenticated => render app => navigate to login", async () =>
  {
    const elem = render(<App fetch-api={fetchError("/accounts/status", {}, 401)} location={createLocation()} __ignore={["header", "login"]}></App>)
    await waitForAsyncs()

    assertExists(elem.querySelector("login"))
    assertExists(!elem.querySelector("home"))
    unrender(elem)
  })
})