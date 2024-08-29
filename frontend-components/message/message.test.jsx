import { assertExists, assertEquals } from "/asserts.ts"
import { render } from "/scripts/rendering.js"
import { createErrorMessage, createInfoMessage, createMessage, createWarningMessage } from "./creating.js";
import { Message } from "./message.jsx"

Deno.test("message", async (t) =>
{
  await t.step("info message => render message => message rendered", () =>
  {
    assertExists(render(<Message message={createInfoMessage("")}></Message>).querySelector(".message-title.info-color"))
  })

  await t.step("warning message => render message => message rendered", () =>
  {
    assertExists(render(<Message message={createWarningMessage("")}></Message>).querySelector(".message-title.warning-color"))
  })

  await t.step("error message => render message => message rendered", () =>
  {
    assertExists(render(<Message message={createErrorMessage("")}></Message>).querySelector(".message-title.error-color"))
  })

  await t.step("message => render message => message content rendered", () =>
  {
    assertEquals(render(<Message message={createMessage("abc")}></Message>).querySelector(".message-content").textContent, "abc")
  })
})