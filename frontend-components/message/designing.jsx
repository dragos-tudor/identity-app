import { createInfoMessage, createWarningMessage, createErrorMessage } from "./creating.js"
import { Message } from "./message.jsx"
const { render } = await import("/scripts/rendering.js")

export const designMessage = () =>
{
  render(<Message message={createInfoMessage("some info text here")} class="message"></Message>, document.body)
  render(<Message message={createWarningMessage("some warn text here")} class="message"></Message>, document.body)
  render(<Message message={createErrorMessage("some error text here")} class="message"></Message>, document.body)
}