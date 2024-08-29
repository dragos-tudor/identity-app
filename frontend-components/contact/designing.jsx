import { Contact } from "./contact.jsx";
import { createContactInfo } from "./creating.js"
const { render } = await import("/scripts/rendering.js")

export const designContact = () =>
{
  render(<Contact {...createContactInfo()} class="contact"></Contact>, document.body)
}