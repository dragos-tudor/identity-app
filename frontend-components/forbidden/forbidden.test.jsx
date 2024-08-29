import { assertEquals } from "/asserts.ts"
import { Forbidden } from "./forbidden.jsx"
import { ForbiddenLabels } from "./labels/labels.en.js"
import { createLocation } from "/testing.http.js";
import { getHomePath } from "../routes/getting.js";
const { render } = await import("/scripts/rendering.js")

Deno.test("use forbidden", async (t) =>
{
  await t.step("forbidden component => render forbidden => forbidden access denied rendered", () => {
    assertEquals(render(<Forbidden></Forbidden>).querySelector(".forbidden-title").textContent, ForbiddenLabels["forbidden-title"])
  })

  await t.step("forbidden component => render forbidden => forbidden description rendered", () => {
    assertEquals(render(<Forbidden location={createLocation("http://localhost?description=error")}></Forbidden>).querySelector(".forbidden-description").textContent, "error")
  })

  await t.step("forbidden component => render forbidden => forbidden home link rendered", () => {
    assertEquals(render(<Forbidden></Forbidden>).querySelector(".forbidden-link a").href, getHomePath())
  })
})