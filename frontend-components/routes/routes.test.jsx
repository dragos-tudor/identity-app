import { assertExists } from "/asserts.ts"
import { Routes } from "./routes.jsx"
import { getContactPath, getForbiddenPath, getHomePath, getLoginPath } from "./getting.js";
const { navigate } = await import("/scripts/routing.js")
const { render } = await import("/scripts/rendering.js")

Deno.test("use routes", async (t) =>
{
  await t.step("routes => render routes => home route set", () =>
    assertExists(render(<Routes></Routes>).querySelectorAll("route").some(route => route.path === getHomePath()))
  )

  await t.step("routes => render routes => login route set", () =>
    assertExists(render(<Routes></Routes>).querySelectorAll("route").some(route => route.path === getLoginPath()))
  )

  await t.step("routes => render routes => forbidden route set", () =>
    assertExists(render(<Routes></Routes>).querySelectorAll("route").some(route => route.path === getForbiddenPath()))
  )

  await t.step("routes => render routes => contact route set", () =>
    assertExists(render(<Routes></Routes>).querySelectorAll("route").some(route => route.path === getContactPath()))
  )

  await t.step("routes => navigate to root => login route rendered", async () => {
    const elem = render(<Routes></Routes>)
    await navigate(elem, "http://localhost")
    assertExists(elem.querySelectorAll(".login"))
  })
})