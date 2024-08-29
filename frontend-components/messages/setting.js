import { findHtmlRoot } from "../../frontend-html/mod.js"
import { findMessagesElement } from "./finding.js"
import { handleMessageEvent } from "./handling.js"
const { setHtmlEventHandler } = await import("/scripts/rendering.js")

export const setMessageEventHandler = (elem) =>
{
  const root = findHtmlRoot(elem)
  const messages = findMessagesElement(root)
  if(!messages) return
  return setHtmlEventHandler(root, "onmessage", handleMessageEvent(messages))
}