import { getFetchApiErrorMessage } from "../../frontend-api/mod.js"
import { createErrorMessage } from "../message/creating.js"
import { dispatchMessage } from "../message/dispatching.js"

export const dispatchSigninError = (elem, error) => dispatchMessage(elem, createErrorMessage(getFetchApiErrorMessage(error)))