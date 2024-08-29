import { useLabels } from "../services/using.js";
import { validatePassword, validateUserName } from "./validating.js"
import { isDefaultValue } from "./verifying.js";
import { SigninValidationsLabels } from "./labels/labels.en.js"

export const Signin_Validations = ({credentials}, elem) =>
{
  const {userName, password} = credentials
  const userNameValidation = isDefaultValue(userName)? "": validateUserName(userName)
  const passwordValidation = isDefaultValue(password)? "": validatePassword(password)
  const labels = useLabels(elem, SigninValidationsLabels.name, SigninValidationsLabels)

  return <>
    <style css={css}></style>

    <label hidden={!userNameValidation}>{labels["user-name"]}</label>
    <span hidden={!userNameValidation} class="username-validation error-color">{userNameValidation}</span>

    <label hidden={!passwordValidation}>{labels["password"]}</label>
    <span hidden={!passwordValidation} class="password-validation error-color">{passwordValidation}</span>
  </>
}

const css = `
.signin-validations {
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;
  column-gap: 1rem;
  row-gap: 1rem;
}

.signin-validations label {
  justify-self: end;
}`