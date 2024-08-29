import { getNameAndYear } from "./getting.js"

export const Footer_Me = () =>
  <>
    <style css={css}></style>
    <span class="footer-me-text">{getNameAndYear()}</span>
  </>

const css = `
.footer-me-text {
  color: var(--accent-text-color);
  font-size: var(--font-size)
}`