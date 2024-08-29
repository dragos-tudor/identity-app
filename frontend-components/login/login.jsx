import { Signin_Cookies } from "../signin-cookies/signin-cookies.jsx"
import { Auth_Providers } from "../auth-providers/auth-providers.jsx"
import { Signin_Validations } from "../signin-validations/signin-validations.jsx"
const { setStates, useState, update } = await import("/scripts/rendering.js")

export const Login = (_, elem) =>
{
  const [credentials, setCredentials] = useState(setStates(elem), "credentials", {}, [])
  return <>
    <style css={css}></style>

    <section class="signin-cookies-section">
      <Signin_Cookies class="signin-cookies" update-credentials={(credentials) => {setCredentials(credentials); update(elem)}}></Signin_Cookies>
      <Signin_Validations class="signin-validations" credentials={credentials}></Signin_Validations>
    </section>

    <div class="login-splitter">or</div>
    <Auth_Providers class="auth-providers"></Auth_Providers>
  </>
}


const css = `
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100%;
}

@media (max-width: 48rem) {
  .login {
    flex-direction: column;
  }
}

.login-splitter {
  color: var(--text-color);
}

.signin-cookies-section, .auth-providers {
  padding: 1em;
  border: thick solid var(--neutral-dark-color);
}`