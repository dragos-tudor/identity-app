import { createAccountReducer, createAccountState, createUserReducer, createUserState } from "../../frontend-states/mod.js"
const { Store } = await import("/scripts/states.js")

export const AccountStore = ({state, children}) => <Store state={createAccountState(state || {isAuthenticated: false})} reducer={createAccountReducer()}>{children}</Store>

export const UserStore = ({state, children}) => <Store state={createUserState(state || {})} reducer={createUserReducer()}>{children}</Store>

export const States = () =>
  <>
    <Store state={createAccountState({isAuthenticated: false})} reducer={createAccountReducer()}></Store>
    <Store state={createUserState({})} reducer={createUserReducer()}></Store>
  </>