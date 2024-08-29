import { assertEquals } from "/asserts.ts"
import { waitForAsyncs } from "/testing.js"
import { fetchError, fetchOk } from "/testing.http.js"
import { createSetAccountStatusAction } from "../../frontend-states/mod.js"
import { AccountStore } from "../states/states.jsx"
import { User } from "./user.jsx"
const { dispatchAction } = await import("/scripts/states.js")
const { render, update } = await import("/scripts/rendering.js")

Deno.test("use user", async t =>
{
  await t.step("existing api user => render user => user informations rendered", async () =>
  {
    const user = {userName: "user", schemeName: "scheme", userClaims: ["claim 1", "claim 2"]}
    const elem = render(<AccountStore state={{}}><User fetch-api={fetchOk("/users", user)}></User></AccountStore>)
    await waitForAsyncs()

    assertEquals(elem.querySelector(".user-name").textContent, "user")
    assertEquals(elem.querySelector(".scheme-name").textContent, "scheme")
    assertEquals(elem.querySelector(".user-claims").textContent, "claim 1, claim 2")
  })

  await t.step("non-existing api user => render user => user informations unrendered", async () =>
  {
    const elem = render(<AccountStore state={{}}><User fetch-api={fetchError("/users")}></User></AccountStore>)
    await waitForAsyncs()

    assertEquals(elem.querySelector(".user-name").textContent, "")
    assertEquals(elem.querySelector(".scheme-name").textContent, "")
    assertEquals(elem.querySelector(".user-claims").textContent, "")
  })

  await t.step("rendered user informations and non-existing api user => dispatch account status => user informations unrendered", async () =>
  {
    const user = {userName: "user", schemeName: "scheme", userClaims: ["claim 1", "claim 2"]}
    const elem = render(<AccountStore state={{}}><User fetch-api={fetchOk("/users", user)}></User></AccountStore>)
    await waitForAsyncs()

    update(elem.querySelector("user"), <User fetch-api={fetchError("/users")}></User>)
    dispatchAction(elem, createSetAccountStatusAction(true))
    await waitForAsyncs()

    assertEquals(elem.querySelector(".user-name").textContent, "")
    assertEquals(elem.querySelector(".scheme-name").textContent, "")
    assertEquals(elem.querySelector(".user-claims").textContent, "")
  })
})