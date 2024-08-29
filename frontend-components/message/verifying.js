import { getMessageDate, getMessageTimeout } from "./getting.js"

export const existsMessage = (message) => !!message

export const isValidMessage = (message, date) => getMessageDate(message) + getMessageTimeout(message) >= date