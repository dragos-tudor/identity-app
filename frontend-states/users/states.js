const { createStoreState } = await import("/scripts/states.js")

export const UserStateName = "user"

export const createUserState = (user) => createStoreState(UserStateName, user)