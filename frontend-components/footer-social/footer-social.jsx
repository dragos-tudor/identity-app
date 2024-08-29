
export const Footer_Social = ({social}) =>
  <>
    <style css={css}></style>
    <a href={social.href} target="_blank" class="footer-social-link">{social.icon}</a>
  </>

const css = `
.footer-social-link:hover, .footer-social-link:focus {
  border-color: transparent;
}`