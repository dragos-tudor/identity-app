import { selectIsAuthenticated } from "../../frontend-states/mod.js"
import { getHomePath, getLoginPath, getContactPath } from "../routes/getting.js"
import { useLabels } from "../services/using.js"
import { Signout } from "../signout/signout.jsx"
import { NavLinksLabels } from "./labels/labels.en.js"
const { getStoreStates, setSelectors, useSelector } = await import("/scripts/states.js")
const { NavLink } = await import("/scripts/routing.js")

export const NavLinks = (_, elem) =>
{
  const labels = useLabels(elem, NavLinksLabels.name, NavLinksLabels)
  const isAuthenticated = useSelector(setSelectors(elem), "is-authenticated", selectIsAuthenticated, getStoreStates(elem))

  return isAuthenticated?
    <>
      <style css={css}></style>
      <NavLink class="navlink" href={getHomePath()}>{labels["home"]}</NavLink>
      <NavLink class="navlink" href={getContactPath()}>{labels["contact"]}</NavLink>
      <Signout class="signout"></Signout>
    </>:
    <>
      <style css={css}></style>
      <NavLink class="navlink" href={getLoginPath()}>{labels["login"]}</NavLink>
      <NavLink class="navlink" href={getContactPath()}>{labels["contact"]}</NavLink>
    </>
}

const css = `
.navlinks {
  display: flex;
  align-items: center;
  gap: 1rem;
}`