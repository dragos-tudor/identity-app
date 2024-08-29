import { existsMessage, isValidMessage } from "../message/verifying.js"

export const containsMessage = (message, messages) => messages.some(m => m === message)

export const shouldRegisterMessage = (message, messages, date) => existsMessage(message) && isValidMessage(message, date) && !containsMessage(message, messages)