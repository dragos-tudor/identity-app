import { createJsonResponse, createErrorJsonResponse, createProblemDetailsJsonResponse } from "/testing.http.js"
import { App } from "./app.jsx"
const { fetchJson } = await import("/scripts/fetching.js")
const { render, Service } = await import("/scripts/rendering.js")

const fetchApi = (url, request) => {
  switch(url) {
    case "/accounts/status": return fetchJson(() => createJsonResponse({}), url, request);
    // case "/accounts/status": return fetchJson(() => createErrorJsonResponse({}, 401), url, request);
    case "/users": return fetchJson(() => createJsonResponse({userName: "user", schemeName: "scheme", userClaims: ["claim"]}), url, request);
    // case "/users": return fetchJson(() => createProblemDetailsJsonResponse({detail: "some error getting user information"}, 400), url, request);
    // case "/users": return fetchJson(() => createErrorJsonResponse("some error getting user information", 400), url, request);
    default: throw new Error(`Unhandled fetch url ${url}`)
  }
}

export const designApp = () =>
{
  render(<main>
    <Service name="fetch-api" value={fetchApi}></Service>
    <App class="app"></App>
  </main>, document.body)
}