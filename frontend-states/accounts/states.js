const { createStoreState } = await import("/scripts/states.js")

export const AccountStateName = "account"

export const createAccountState = (account) => createStoreState(AccountStateName, account)
