import { fetchOk } from "/testing.http.js"
import { UserStore } from "../states/states.jsx"
import { User } from "./user.jsx"
const { render } = await import("/scripts/rendering.js")

export const designUser = () =>
{
  const user = {userName: "user name", schemeName: "scheme name", userClaims: ["claim 1", "claim 2"]}
  render(<UserStore state={{}}><User class="user" fetch-api={fetchOk("/users", user)}></User></UserStore>, document.body)
}