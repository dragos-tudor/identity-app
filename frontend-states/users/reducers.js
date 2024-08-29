import { UserStateName } from "./states.js"
const { createReducer } = await import("/scripts/states.js")

export const createUserReducer = () => createReducer(UserStateName, {
  setUser: (state, action) => ({...state, ...action.payload }),
  resetUser: (state, action) => ({ ...state, ...action.payload })
})