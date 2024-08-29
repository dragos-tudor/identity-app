import { isValidMessage } from "../message/verifying.js"

export const getValidMessages = (messages, date) => messages.filter(message => isValidMessage(message, date))

