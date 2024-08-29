const { dispatchEvent } = await import("/scripts/rendering.js")

export const dispatchMessage = (elem, message) =>  dispatchEvent(elem, "message", message)