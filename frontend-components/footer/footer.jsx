import { Footer_Me } from "../footer-me/footer-me.jsx"
import { Footer_Socials } from "../footer-socials/footer-socials.jsx"

export const Footer = () =>
  <>
    <style css={css}></style>
    <Footer_Socials class="footer-socials"></Footer_Socials>
    <Footer_Me class="footer-me"></Footer_Me>
  </>

const css = `
.footer {
  display: grid;
  grid-template-columns: auto;
  row-gap: 1rem;
  justify-items: center;
  padding-block: 0.5rem;
  background-color: var(--neutral-dark-color);
}`