import { assertEquals } from "/asserts.ts"
import { resolveAnonymousUri, resolveAuthenticatedUri } from "./resolving.js"

Deno.test("use security", async t =>
{
  await t.step("login url => resolve anonymous uri => login uri", () =>
  {
    assertEquals(resolveAnonymousUri(new URL("http://localhost/login")), "/login")
    assertEquals(resolveAnonymousUri(new URL("http://localhost/login?param=1")), "/login?param=1")
  })

  await t.step("non-login url => resolve anonymous uri => login with with non-login uri redirection", () =>
  {
    assertEquals(resolveAnonymousUri(new URL("http://localhost")), "/login?redirect=%2F")
    assertEquals(resolveAnonymousUri(new URL("http://localhost/")), "/login?redirect=%2F")
    assertEquals(resolveAnonymousUri(new URL("http://localhost/test")), "/login?redirect=%2Ftest")
    assertEquals(resolveAnonymousUri(new URL("http://localhost?param=1")), "/login?redirect=%2F%3Fparam%3D1")
    assertEquals(resolveAnonymousUri(new URL("http://localhost/test?param=1")), "/login?redirect=%2Ftest%3Fparam%3D1")
  })

  await t.step("redirected url => resolve authenticated uri => uri or home redirection", () =>
  {
    assertEquals(resolveAuthenticatedUri(new URL("http://localhost?redirect=%2Ftest")), "/test")
    assertEquals(resolveAuthenticatedUri(new URL("http://localhost?redirect=%2Ftest%3Fparam%3D1")), "/test?param=1")
    assertEquals(resolveAuthenticatedUri(new URL("http://localhost?redirect=%2F")), "/home")
    assertEquals(resolveAuthenticatedUri(new URL("http://localhost/login?redirect=%2F")), "/home")
    assertEquals(resolveAuthenticatedUri(new URL("http://localhost?redirect=%2F%3Flang%3Den")), "/home?lang=en")
    assertEquals(resolveAuthenticatedUri(new URL("http://localhost/login?redirect=%2F%3Flang%3Den")), "/home?lang=en")
  })

  await t.step("non-redirected root url => resolve authenticated uri => home uri", () =>
  {
    assertEquals(resolveAuthenticatedUri(new URL("http://localhost")), "/home")
    assertEquals(resolveAuthenticatedUri(new URL("http://localhost/")), "/home")
    assertEquals(resolveAuthenticatedUri(new URL("http://localhost?param=1")), "/home?param=1")
  })

  await t.step("non-redirected login url => resolve authenticated uri => home uri", () =>
  {
    assertEquals(resolveAuthenticatedUri(new URL("http://localhost/login")), "/home")
    assertEquals(resolveAuthenticatedUri(new URL("http://localhost/login?param=1")), "/home?param=1")
  })

  await t.step("non-redirected non-root non-login url => resolve authenticated uri => unmodified uri", () =>
  {
    assertEquals(resolveAuthenticatedUri(new URL("http://localhost/test")), "/test")
    assertEquals(resolveAuthenticatedUri(new URL("http://localhost/test?param=1")), "/test?param=1")
  })

  // https://localhost:5050/login?redirect=%2F =? /home
})