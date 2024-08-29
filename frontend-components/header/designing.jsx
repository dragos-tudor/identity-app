import { AccountStore } from "../states/states.jsx"
import { Header } from "./header.jsx"
const { render } = await import("/scripts/rendering.js")

export const designHeader = () =>
{
  render(<AccountStore state={{isAuthenticated: false}}><Header class="header"></Header></AccountStore>, document.body)
}