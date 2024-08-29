
export const MessageTypes = Object.freeze({ info: 0, warning: 1, error: 2 })

export const getMessageContent = (message) => message.content

export const getMessageDate = (message) => message.date

export const getMessageTimeout = (message) => message.timeout

export const getMessageType = (message) => message.type

export const getMessageTypeName = (message) => Object.entries(MessageTypes).find(([_, value]) => message.type == value)?.[0]