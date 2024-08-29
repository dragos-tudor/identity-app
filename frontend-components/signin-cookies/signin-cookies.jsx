import { spinner } from "../../frontend-app/images/icons.jsx"
import { resolveLocation } from "../../frontend-locations/mod.js"
import { useApiOptions, useFetchApi, useLabels, useValidationErrors } from "../services/using.js"
import { SigninCookiesLabels } from "./labels/labels.en.js"
import { signinAccount, signinClick } from "./signingin.js"
import { updatePassword, updateUserName } from "./updating.js"
import { validatePassword, validateUserName } from "../signin-validations/validating.js"
const { setEffects, setStates, useEffect, useState } = await import("/scripts/rendering.js")


export const Signin_Cookies = ({"fetch-api": _fetchApi, location: _location, "update-credentials": updateCredentials}, elem) =>
{
  const apiOptions = useApiOptions(elem)
  const fetchApi = useFetchApi(elem, _fetchApi)
  const labels = useLabels(elem, SigninCookiesLabels.name, SigninCookiesLabels)
  const location = resolveLocation(_location)
  const validationErrors = useValidationErrors(elem)

  const [userName, setUserName] = useState(setStates(elem), "username", null, [])
  const [password, setPassword] = useState(setStates(elem), "password", null, [])
  const [inProcess, setInProcess] = useState(setStates(elem), "in-process", false, [])

  const disabledSigning = validatePassword(password, validationErrors) || validateUserName(userName, validationErrors) || inProcess
  const credentials = {userName, password}
  const signin = () => signinAccount(elem, credentials, fetchApi, apiOptions, location)
  useEffect(setEffects(elem), "update-credentials", () => updateCredentials?.(credentials), [credentials])

  return <>
    <style css={css}></style>

    <label for="userName" class="username-label">{labels["user-name"]}</label>
    <input id="userName" value={userName || ""} type="text" onchange={updateUserName(elem, setUserName)} placeholder={labels["user-name"]}/>

    <label for="password" class="password-label">{labels["password"]}</label>
    <input id="password" value={password || ""} type="password" onchange={updatePassword(elem, setPassword)} placeholder={labels["password"]}/>

    <button class="signin"
      disabled={disabledSigning}
      onclick={() => signinClick(elem, signin, setUserName, setPassword, setInProcess)}>
        <span hidden={!inProcess}>{spinner}</span>
        <span>{labels["signin"]}</span>
    </button>
  </>
}

const css = `
.signin-cookies {
  display: grid;
  grid-template-columns: max-content 25rem;
  align-items: center;
  column-gap: 1rem;
  row-gap: 1rem;
}

.signin-cookies label {
  justify-self: end;
}

.signin-cookies .signin {
  grid-column: 1 / span 2;
}`