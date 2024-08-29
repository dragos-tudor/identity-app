import { createInfoMessage, createErrorMessage, createWarningMessage } from "../message/creating.js"
import { Messages } from "./messages.jsx"
import { updateMessages } from "./updating.jsx"
const { render } = await import("/scripts/rendering.js")

export const designMessages = () =>
{
  const elem = render(<Messages message={createInfoMessage("some info text here")} class="messages"></Messages>, document.body)
  updateMessages(elem, createWarningMessage("some warn text here"))
  updateMessages(elem, createErrorMessage("some error text here"))
}