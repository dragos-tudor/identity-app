import { getSearchParam } from "../../frontend-locations/mod.js"

export const getErrorDescription = (location) => decodeURIComponent(getSearchParam(location, "description"))