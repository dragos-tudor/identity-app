import { assertEquals, assertExists } from "/asserts.ts"
import { user, waitForAsyncs } from "/testing.js"
import { fetchOk } from "/testing.http.js"
import { getHomePath } from "../routes/getting.js"
import { SigninCookiesLabels } from "./labels/labels.en.js"
import { Signin_Cookies } from "./signin-cookies.jsx"
const { Route } = await import("/scripts/routing.js")
const { render } = await import("/scripts/rendering.js")

Deno.test("use signin cookies", async t =>
{
  await t.step("valid credentials => write credentials => signing button enabled", () =>
  {
    const elem = render(<Signin_Cookies></Signin_Cookies>)
    user.write(elem.querySelector("#userName"), "username")
    user.write(elem.querySelector("#password"), "password")

    assertEquals(elem.querySelector(".signin").disabled, false)
  })

  await t.step("valid credentials => click signin button => navigate to home", async () =>
  {
    const elem = render(<a><Signin_Cookies fetch-api={fetchOk("/accounts/signin")}></Signin_Cookies><Route path={getHomePath()} child={<home></home>}></Route></a>)
    user.write(elem.querySelector("#userName"), "username")
    user.write(elem.querySelector("#password"), "password")
    user.click(elem.querySelector(".signin"))

    await waitForAsyncs()
    assertExists(elem.querySelector("home"))
  })

  await t.step("update credentials effect => render signin cookies => run update credentials effect", () =>
  {
    render(<a><Signin_Cookies update-credentials={(credentials) => assertEquals(credentials, {userName: null, password: null})}></Signin_Cookies></a>)
  })

  await t.step("invalid credentials => write credentials => signing button disabled", () =>
  {
    const elem = render(<Signin_Cookies></Signin_Cookies>)
    assertEquals(elem.querySelector(".signin").disabled, true)

    user.write(elem.querySelector("#userName"), "username")
    assertEquals(elem.querySelector(".signin").disabled, true)
  })

  await t.step("labels => render signin cookies => signin cookies labels rendered", () =>
  {
    const elem = render(<Signin_Cookies></Signin_Cookies>)
    assertEquals(elem.querySelector(".username-label").textContent, SigninCookiesLabels["user-name"])
    assertEquals(elem.querySelector(".password-label").textContent, SigninCookiesLabels["password"])
    assertEquals(elem.querySelector(".signin").textContent, SigninCookiesLabels["signin"])
  })
})