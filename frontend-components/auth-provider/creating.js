import { google, facebook, twitter } from "../../frontend-app/images/icons.jsx"

export const createProvider = (href, icon, label) => Object.freeze({href, icon, label})

export const createGoogleProvider = (href, label) => createProvider(href, google, label)

export const createFacebookProvider = (href, label) => createProvider(href, facebook, label)

export const createTwitterProvider = (href, label) => createProvider(href, twitter, label)