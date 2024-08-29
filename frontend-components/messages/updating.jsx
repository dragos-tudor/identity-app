import { Messages } from "./messages.jsx"
const { update } = await import("/scripts/rendering.js")

export const updateMessages = (elem, message) => update(elem, <Messages message={message} class="messages"></Messages>)