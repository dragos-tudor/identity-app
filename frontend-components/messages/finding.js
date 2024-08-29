import { findHtmlDescendant, getHtmlName } from "../../frontend-html/mod.js"

export const findMessagesElement = (root) => findHtmlDescendant(root, (elem) => getHtmlName(elem) === "messages")