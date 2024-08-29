import { createLocation } from "/testing.http.js"
import { Forbidden } from "./forbidden.jsx"
const { render } = await import("/scripts/rendering.js")

export const designForbidden = () => render(<Forbidden class="forbidden" location={createLocation("http://localhost?description=details%20here")}></Forbidden>, document.body)