import { useLabels } from "../services/using.js"
import { ContactLabels } from "./labels/labels.en.js"

export const Contact = ({name, email, mobile}, elem) =>
{
  const labels = useLabels(elem, ContactLabels.name, ContactLabels)
  return <>
    <style css={css}></style>
    <h3 class="contact-title accent-color">{name}</h3>

    <section class="contact-details">
      <label class="contact-label">{labels["contact-email"]}</label>
      <span class="contact-email">{email}</span>

      <label class="contact-label">{labels["contact-mobile"]}</label>
      <span class="contact-mobile">{mobile}</span>
    </section>
  </>
}


const css = `
.contact {
  display: block;
  margin: 3rem;
}

.contact-details {
  display: grid;
  grid-template-columns: min-content min-content;
  row-gap: 0.5rem;
  column-gap: 0.5rem;
  justify-items: start;
  align-items: center;
  margin-top: 1.5rem;
}

.contact-label {
  justify-self: right;
}`