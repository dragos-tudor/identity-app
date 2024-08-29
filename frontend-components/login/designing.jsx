import { Login } from "./login.jsx"
const { render } = await import("/scripts/rendering.js")

export const designLogin = () =>
{
  render(<Login class="login"></Login>, document.body)
}