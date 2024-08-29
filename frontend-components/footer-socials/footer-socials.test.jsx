import { assertEquals } from "/asserts.ts"
import { GithubLink, LinkedinLink, YoutubeLink } from "../footer-social/links.js"
import { Footer_Socials } from "./footer-socials.jsx"
const { render } = await import("/scripts/rendering.js")

Deno.test("use footer-socials", async (t) =>
{
  await t.step("footer socials component => render footer socials => social github rendered", () =>
  {
    assertEquals(render(<Footer_Socials></Footer_Socials>).querySelector(".footer-social.github a").href, GithubLink)
  })

  await t.step("footer socials component => render footer socials => social linkedin rendered", () =>
  {
    assertEquals(render(<Footer_Socials></Footer_Socials>).querySelector(".footer-social.linkedin a").href, LinkedinLink)
  })

  await t.step("footer socials component => render footer socials => social youtube rendered", () =>
  {
    assertEquals(render(<Footer_Socials></Footer_Socials>).querySelector(".footer-social.youtube a").href, YoutubeLink)
  })
})