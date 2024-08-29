import { github, linkedin, youtube } from "../../frontend-app/images/icons.jsx"
import { GithubLink, LinkedinLink, YoutubeLink } from "./links.js"

export const createSocial = (href, icon) => Object.freeze({href, icon})

export const createGithubSocial = () => createSocial(GithubLink, github)

export const createLinkedinSocial = () => createSocial(LinkedinLink, linkedin)

export const createYoutubeSocial = () => createSocial(YoutubeLink, youtube)