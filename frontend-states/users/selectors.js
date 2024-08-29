import { UserStateName } from "./states.js"

export const selectUser = states => (states || {})[UserStateName]
