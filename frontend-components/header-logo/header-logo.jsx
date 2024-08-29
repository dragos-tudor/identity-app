
export const HeaderLogo = () =>
  <h2>
    <style css={css}></style>
    <a href="/" class="header-title second-accent-color">Identity app</a>
  </h2>

const css = `
.header-title {
  font-family: var(--ff-serif);
  text-transform: uppercase;
  border: 0;
}

.header-title:hover, .header-title:focus {
  color: var(--second-accent-color);
}`