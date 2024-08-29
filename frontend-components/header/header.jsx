import { Language } from "../languages/language.jsx"
import { NavLinks } from "../navlinks/navlinks.jsx"
import { HeaderLogo } from "../header-logo/header-logo.jsx"

export const Header = () =>
  <>
    <style css={css} ></style>
    <HeaderLogo class="header-logo"></HeaderLogo>
    <Language class="language"></Language>
    <NavLinks class="navlinks"></NavLinks>
  </>


const css = `
.header {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background-color: var(--neutral-dark-color);
}

.header .language {
  flex: 1 1;
  text-align: right;
}`