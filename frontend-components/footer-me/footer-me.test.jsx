import { assertEquals } from "/asserts.ts"
import { getNameAndYear } from "./getting.js"
import { Footer_Me } from "./footer-me.jsx"
const { render } = await import("/scripts/rendering.js")

Deno.test("use footer-me", async (t) =>
{
  await t.step("footer me component => render footer me => footer name and year rendered", () => {
    assertEquals(render(<Footer_Me></Footer_Me>).querySelector(".footer-me-text").textContent, getNameAndYear())
  })
})