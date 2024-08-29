import { assertEquals } from "/asserts.ts"
import { createLocation } from "/testing.http.js"
import { getLanguageUri } from "./getting.js"
import { Language } from "./language.jsx"
import { Languages } from "./languages.js"
const { render } = await import("/scripts/rendering.js")

Deno.test("use language", async t =>
{
  await t.step("en language => render language => ro language rendered", () =>
  {
    const elem = render(<Language location={createLocation()} language={Languages.en}></Language>)

    assertEquals(elem.querySelector(".language-link").href, getLanguageUri(createLocation(), Languages.ro))
    assertEquals(elem.querySelector(".language-link").textContent, Languages.ro)
  })

   await t.step("ro language => render language => en language rendered", () =>
  {
    const elem = render(<Language location={createLocation()} language={Languages.ro}></Language>)

    assertEquals(elem.querySelector(".language-link").href, getLanguageUri(createLocation(), Languages.en))
    assertEquals(elem.querySelector(".language-link").textContent, Languages.en)
  })
})