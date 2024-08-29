import { assertEquals } from "/asserts.ts"
import { Contact } from "./contact.jsx"
import { render } from "/scripts/rendering.js"

Deno.test("use contact", async t =>
{
  await t.step("contact component => render contact => contact name rendered", () =>
  {
    const elem = render(<Contact name="name"></Contact>)
    assertEquals(elem.querySelector(".contact-title").textContent, "name")
  })

  await t.step("contact component => render contact => contact email rendered", () =>
  {
    const elem = render(<Contact email="email"></Contact>)
    assertEquals(elem.querySelector(".contact-email").textContent, "email")
  })

  await t.step("contact component => render contact => contact mobile rendered", () =>
  {
    const elem = render(<Contact mobile="mobile"></Contact>)
    assertEquals(elem.querySelector(".contact-mobile").textContent, "mobile")
  })
})