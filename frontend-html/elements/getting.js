
export const getHtmlBody = (elem)=> elem.ownerDocument.body

export const getHtmlChild = (elem, index) => elem.children[index]

export const getHtmlChildren = (elem) => Array.from(elem.children??[])

export const getHtmlName = (elem) => elem.tagName.toLowerCase()

export const getHtmlParentElement = (elem) => elem?.parentElement