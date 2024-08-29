import { createGithubSocial, createLinkedinSocial, createYoutubeSocial } from "../footer-social/creating.js"
import { Footer_Social } from "../footer-social/footer-social.jsx"

export const Footer_Socials = () =>
  <>
    <Footer_Social social={createGithubSocial()} class="footer-social github"></Footer_Social>
    <Footer_Social social={createLinkedinSocial()} class="footer-social linkedin"></Footer_Social>
    <Footer_Social social={createYoutubeSocial()} class="footer-social youtube"></Footer_Social>
  </>