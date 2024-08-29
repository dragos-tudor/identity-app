import { hasLocationPathName } from "../../frontend-locations/mod.js"
import { getHomePath, getLoginPath, getRootPath } from "./getting.js"

export const isHomePath = (location) => hasLocationPathName(location, getHomePath())

export const isLoginPath = (location) => hasLocationPathName(location, getLoginPath())

export const isRootPath = (location) => hasLocationPathName(location, getRootPath())