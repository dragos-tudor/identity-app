import { validateCredentials } from "./validating.js"
import { Signin_Validations } from "./signin-validations.jsx"
const { render } = await import("/scripts/rendering.js")

export const designSigninValidations = () =>
{
  const validationResult = validateCredentials({userName: "", password: ""})
  render(<Signin_Validations class="signin-validations" validation-result={validationResult}></Signin_Validations>, document.body)
}