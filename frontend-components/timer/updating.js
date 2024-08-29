import { getHtmlChild } from "../../frontend-html/mod.js"
const { update } = await import("/scripts/rendering.js")

const updateTimerChild = (elem) => (child, index) => update(getHtmlChild(elem, index), child)

export const updateTimerChildren = (elem, children) => children.forEach(updateTimerChild(elem))