import { resolveLocation } from "../../frontend-locations/mod.js"
import { getErrorDescription } from "./getting.js"
import { getHomePath } from "../routes/getting.js"
import { useLabels } from "../services/using.js"
import { ForbiddenLabels } from "./labels/labels.en.js"
const { NavLink } = await import("/scripts/routing.js")

export const Forbidden = (props, elem) =>
{
  const labels = useLabels(elem, ForbiddenLabels.name, ForbiddenLabels)
  const location = resolveLocation(props.location)
  const description = getErrorDescription(location ?? {})

  return <>
    <style css={css}></style>

    <section class="forbidden-section">
      <h3 class="forbidden-title error-color">{labels["forbidden-title"]}</h3>
      <p class="forbidden-description">{description}</p>
    </section>

    <NavLink class="forbidden-link" href={getHomePath()}>{labels["forbidden-link"]}</NavLink>
  </>
}

const css = `
.forbidden {
  display: block;
  margin: 3rem;
}

.forbidden-section {
  margin-block: 1.5rem 3rem;
}

.forbidden-description {
  padding: var(--padding);
}`