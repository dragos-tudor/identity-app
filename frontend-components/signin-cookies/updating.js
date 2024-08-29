const { update } = await import("/scripts/rendering.js")

export const updatePassword = (elem, setPassword) => (event) => { setPassword(event.target.value); return update(elem); }

export const updateUserName = (elem, setUserName) => (event) => { setUserName(event.target.value); return update(elem); }