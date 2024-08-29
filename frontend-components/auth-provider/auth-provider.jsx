
export const Auth_Provider = ({provider}) =>
  <>
    <style css={css}></style>
    <a class="auth-provider-link" href={provider.href}>
      {provider.icon}
      <span class="auth-provider-label">{provider.label}</span>
    </a>
  </>

const css = `
.auth-provider-label {
  margin-left: 0.5rem;
}`