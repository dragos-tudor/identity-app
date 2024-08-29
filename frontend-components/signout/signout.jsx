import { resolveLocation } from "../../frontend-locations/mod.js";
import { useApiOptions, useFetchApi, useLabels } from "../services/using.js"
import { signoutAccount } from "./signingout.js"
import { SignoutLabels } from "./labels/labels.en.js"

export const Signout = ({"api-options": _apiOptions, "fetch-api": _fetchApi, locaiton: _location}, elem) =>
{
  const apiOptions = useApiOptions(elem, _apiOptions)
  const fetchApi = useFetchApi(elem, _fetchApi)
  const labels = useLabels(elem, SignoutLabels.name, SignoutLabels)
  const location = resolveLocation(_location)
  const signout = () => signoutAccount(elem, fetchApi, apiOptions, location)

  return <button class="signout" onclick={signout}>{labels["signout"]}</button>
}