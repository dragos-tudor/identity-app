import { assertEquals, assertExists } from "/asserts.ts"
import { getContactPath, getHomePath, getLoginPath } from "../routes/getting.js"
import { NavLinks } from "./navlinks.jsx"
import { AccountStore } from "../states/states.jsx";
const { render } = await import("/scripts/rendering.js")

Deno.test("use navlinks", async (t) =>
{
  await t.step("uthenticated user => render navlinks => home, contact and signout rendered", () => {
    const elem = render(<AccountStore state={{isAuthenticated: true}}><NavLinks></NavLinks></AccountStore>)
    const links = elem.querySelectorAll(".navlink a")

    assertEquals(links[0].href, getHomePath())
    assertEquals(links[1].href, getContactPath())
    assertExists(elem.querySelector(".signout"))
  })

  await t.step("navlinks and unauthenticated user => render navlinks => login and contact rendered", () => {
    const elem = render(<AccountStore state={{isAuthenticated: false}}><NavLinks></NavLinks></AccountStore>)
    const links = elem.querySelectorAll(".navlink a")

    assertEquals(links[0].href, getLoginPath())
    assertEquals(links[1].href, getContactPath())
  })
})