import { updateMessages } from "./updating.jsx";

export const handleMessageEvent = (elem) => (event) => updateMessages(elem, event.detail)