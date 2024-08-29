import { resolveLocation } from "../../frontend-locations/mod.js";
import { selectIsAuthenticated } from "../../frontend-states/mod.js";
import { useLabels, useFetchApi, useApiOptions } from "../services/using.js"
import { concatUserClaims } from "./concating.js"
import { getUser, getUserEffect } from "./getting.js"
import { UserLabels } from "./labels/labels.en.js"
const { getStoreStates, setSelectors, useSelector } = await import("/scripts/states.js")
const { setEffects, setStates, useEffect, useState } = await import("/scripts/rendering.js")

export const User = ({"api-options": _apiOptions, "fetch-api": _fetchApi, location: _location}, elem) =>
{
  const apiOptions = useApiOptions(elem, _apiOptions)
  const fetchApi = useFetchApi(elem, _fetchApi)
  const location = resolveLocation(_location)
  const labels = useLabels(elem, UserLabels.name, UserLabels)
  const [user, setUser] = useState(setStates(elem), "user", {}, [])
  const isAuthenticated = useSelector(setSelectors(elem), "is-authenticated", selectIsAuthenticated, getStoreStates(elem))

  const getting = () => getUser(elem, fetchApi, apiOptions, location)
  useEffect(setEffects(elem), "get-user", () => getUserEffect(elem, getting, setUser), [isAuthenticated])

  return <>
    <style css={css}></style>
    <h3 class="user-title accent-color">{labels["user-title"]}</h3>

    <section class="user-details">
      <label>{labels["user-name"]}</label>
      <span class="user-name">{user?.userName}</span>

      <label>{labels["scheme-name"]}</label>
      <span class="scheme-name">{user?.schemeName}</span>

      <label>{labels["user-claims"]}</label>
      <span class="user-claims">{concatUserClaims(user?.userClaims ?? [])}</span>
    </section>
  </>
}

const css = `.user {
  display: block;
  margin: 3rem;
}

.user-details {
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;
  column-gap: 1rem;
  row-gap: 1rem;
  margin-top: 1.5rem;
}

.user-details label {
  justify-self: end;
}`