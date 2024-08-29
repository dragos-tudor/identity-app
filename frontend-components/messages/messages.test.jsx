import { assert, assertExists } from "/asserts.ts"
import { render, update } from "/scripts/rendering.js"
import { createMessage, createInfoMessage, createWarningMessage } from "../message/creating.js"
import { Messages } from "./messages.jsx"
import { dispatchMessage } from "../message/dispatching.js"

Deno.test("use messages component", async (t) =>
{
  await t.step("message => render messages => message rendered", () =>
  {
    assertExists(render(<Messages message={createMessage("")}></Messages>).querySelector(".message"))
  })

  await t.step("rendered message and new message => update messages => both messages rendered", () =>
  {
    const elem = render(<Messages message={createInfoMessage("")}></Messages>)
    update(elem, <Messages message={createWarningMessage("")}></Messages>)

    assertExists(elem.querySelector(".message-title.info-color"))
    assertExists(elem.querySelector(".message-title.warning-color"))
  })

  await t.step("rendered message became invalid => update messages => message unrendered", () =>
  {
    const elem = render(<Messages message={createMessage("", 0 , 10)}></Messages>)
    update(elem, <Messages time-provider={() => 20}></Messages>)

    assert(elem.querySelector(".message") == undefined)
  })

  await t.step("invalid message => render messages => message not rendered", () =>
  {
    const elem = render(<Messages message={createMessage("", 0, 10)} time-provider={() => 20}></Messages>)
    assert(elem.querySelector(".message") == undefined)
  })

  await t.step("no message => render messages => nothing happen", () =>
  {
    render(<Messages></Messages>)
  })

  await t.step("new message and some element => dispatch message event from element => message rendered", () =>
  {
    const elem = render(<a><Messages></Messages><b></b></a>)
    dispatchMessage(elem.querySelector("b"), createMessage(""))
    assertExists(elem.querySelector(".message"))
  })
})