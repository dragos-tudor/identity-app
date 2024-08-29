import { Auth_Providers } from "./auth-providers.jsx"
const { render } = await import("/scripts/rendering.js")

export const designAuthProviders = () =>
{
  render(<Auth_Providers class="auth-providers"></Auth_Providers>, document.body)
}