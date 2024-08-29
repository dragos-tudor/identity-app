import { assert, assertEquals } from "/asserts.ts"
import { Signin_Validations } from "./signin-validations.jsx"
const { render } = await import("/scripts/rendering.js")

Deno.test("use signin validations", async t =>
{
  await t.step("valid credentials => render signin validations => user name and password validations not rendered", () =>
  {
    const elem = render(<Signin_Validations credentials={{userName: "a", password: "a"}}></Signin_Validations>)

    assertEquals(elem.querySelector(".username-validation").hidden, true)
    assertEquals(elem.querySelector(".password-validation").hidden, true)
  })

  await t.step("default credentials values => render signin validations => user name and password validations not rendered", () =>
  {
    const elem = render(<Signin_Validations credentials={{userName: null, password: null}}></Signin_Validations>)

    assertEquals(elem.querySelector(".username-validation").hidden, true)
    assertEquals(elem.querySelector(".password-validation").hidden, true)
  })

  await t.step("invalid credentials => render signin validations => user name and password validations rendered", () =>
  {
    const elem = render(<Signin_Validations credentials={{userName: "", password: ""}}></Signin_Validations>)

    assert(elem.querySelector(".username-validation").textContent)
    assert(elem.querySelector(".password-validation").textContent)
    assertEquals(elem.querySelector(".username-validation").hidden, false)
    assertEquals(elem.querySelector(".password-validation").hidden, false)
  })
})