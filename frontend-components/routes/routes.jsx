import { Contact } from "../contact/contact.jsx"
import { createContactInfo } from "../contact/creating.js"
import { Forbidden } from "../forbidden/forbidden.jsx"
import { Login } from "../login/login.jsx"
import { loadHome } from "../home/loading.jsx"
import { getContactPath, getForbiddenPath, getHomePath, getLoginPath } from "./getting.js"
const { Route } = await import("/scripts/routing.js")

export const Routes = () =>
  <>
    <Route path={getLoginPath()} child={<Login class="login"></Login>} index></Route>
    <Route path={getHomePath()} load={async () => { const Home = await loadHome(); return <Home class="home"></Home>}}></Route>
    <Route path={getContactPath()} child={<Contact class="contact" {...createContactInfo()}></Contact>}></Route>
    <Route path={getForbiddenPath()} child={<Forbidden class="forbidden"></Forbidden>}></Route>
  </>
