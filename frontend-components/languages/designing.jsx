import { createLocation } from "/testing.http.js";
import { Language } from "./language.jsx"
const { render } = await import("/scripts/rendering.js")

export const designLanguage = () =>
{
  render(<Language location={createLocation("http://localhost/test")} language="ro"></Language>, document.body)
}