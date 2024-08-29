import { Signin_Cookies } from "./signin-cookies.jsx"
const { render } = await import("/scripts/rendering.js")

export const designSigninCookies = () =>
{
  render(<Signin_Cookies class="signin-cookies"></Signin_Cookies>, document.body)
}