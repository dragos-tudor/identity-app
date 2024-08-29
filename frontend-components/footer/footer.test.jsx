import { assertExists } from "/asserts.ts"
import { Footer } from "./footer.jsx"
const { render } = await import("/scripts/rendering.js")

Deno.test("use footer", async (t) =>
{
  await t.step("footer component => render footer => footer me rendered", () => {
    assertExists(render(<Footer></Footer>).querySelector(".footer-me"))
  })

   await t.step("footer component => render footer => footer socials rendered", () => {
    assertExists(render(<Footer></Footer>).querySelector(".footer-socials"))
  })
})