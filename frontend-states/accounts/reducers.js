import { AccountStateName } from "./states.js"
const { createReducer } = await import("/scripts/states.js")

export const createAccountReducer = () => createReducer(AccountStateName, {
  setAccountStatus: (state, action) => ({ ...state, ...action.payload })
})