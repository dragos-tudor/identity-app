import { AccountStateName } from "../accounts/states.js"
const { createAction } = await import("/scripts/states.js")

export const createSetAccountStatusAction = (isAuthenticated) =>
  createAction(`${AccountStateName}/setAccountStatus`, {isAuthenticated})