import { AccountStateName } from "./states.js"

export const selectIsAuthenticated = states => states[AccountStateName].isAuthenticated
