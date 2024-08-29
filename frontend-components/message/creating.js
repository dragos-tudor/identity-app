import { MessageTypes } from "./getting.js"


const DefaultMessageTimeout = 3000

export const createMessage = (content, date = Date.now(), timeout = DefaultMessageTimeout, type = MessageTypes.info) => Object.freeze({ content, date, timeout, type})

export const createInfoMessage = (content, date = Date.now(), timeout = DefaultMessageTimeout) => createMessage(content, date, timeout, MessageTypes.info)

export const createWarningMessage = (content, date = Date.now(), timeout = DefaultMessageTimeout) => createMessage(content, date, timeout, MessageTypes.warning)

export const createErrorMessage = (content, date = Date.now(), timeout = DefaultMessageTimeout) => createMessage(content, date, timeout, MessageTypes.error)