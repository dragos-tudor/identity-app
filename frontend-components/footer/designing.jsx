import { Footer } from "./footer.jsx"
const { render } = await import("/scripts/rendering.js")

export const designFooter = () =>
{
  render(<Footer class="footer"></Footer>, document.body)
}