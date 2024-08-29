import { getUserApi, isFetchApiError } from "../../frontend-api/mod.js"
import { handleFetchApiError } from "../errors/handling.js"
const { update } = await import("/scripts/rendering.js")

export const getUser = async (elem, fetchApi, apiOptions, location) =>
{
  const [user, error] = await getUserApi(fetchApi, apiOptions)
  if (isFetchApiError(error)) return (handleFetchApiError(elem, error, location), null)
  return user
}

export const getUserEffect = async (elem, getUser, setUser) =>
{
  const user = await getUser()
  setUser(user)
  update(elem)
}