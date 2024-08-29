import { createUser } from "./creating.js";
import { UserStateName } from "./states.js"
const { createAction } = await import("/scripts/states.js")

export const createResetUserAction = () => createAction(`${UserStateName}/resetUser`, createUser(null, null, []))

export const createSetUserAction = (user) => createAction(`${UserStateName}/setUser`, user)