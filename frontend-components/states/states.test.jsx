import { assertExists } from "/asserts.ts"
import { AccountStateName, UserStateName } from "../../frontend-states/mod.js"
import { States } from "./states.jsx"
import { getStoreStates } from "/scripts/states.js"
import { render } from "/scripts/rendering.js"

Deno.test("states component", async t =>
{
  await t.step("states component => render states => account states registred", () =>
  {
    const elem = render(<States></States>)
    assertExists(getStoreStates(elem)[AccountStateName])
  })

  await t.step("states component => render states => account states registred", () =>
  {
    const elem = render(<States></States>)
    assertExists(getStoreStates(elem)[UserStateName])
  })
})