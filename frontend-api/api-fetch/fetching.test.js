import { assertEquals } from "/asserts.ts"
import { createJsonResponse } from "/testing.http.js"
import { fetchApi } from "./fetching.js"

Deno.test("fetch api", async t =>
{
  await t.step("ok request => fetch api => json response", async () =>
  {
    const [data] = await fetchApi("", {body: 1}, {}, (_, request) => Promise.resolve(createJsonResponse({val: request.body})))

    assertEquals(data, {val: 1})
  })

  await t.step("ok request => fetch api => api cors request", async () =>
  {
    await fetchApi("", {}, {}, (_, request) => assertEquals(request.mode, "cors"))
  })

  await t.step("ok request => fetch api => api request with credentials", async () =>
  {
    await fetchApi("", {}, {}, (_, request) => assertEquals(request.credentials, "include"))
  })

  await t.step("request url => fetch api => api request url", async () =>
  {
    await fetchApi("/x", {}, {apiBaseUrl: "http://localhost"}, (url) => assertEquals(url, "http://localhost/x"))
  })

  await t.step("bad request => fetch api => response error", async () =>
  {
    const [, error] = await fetchApi("http://localhost")

    assertEquals(error.type, "NetworkError")
  })

})