import { google } from "./images/icons.jsx"
import { render } from "/scripts/rendering.js"

// wip
export const designMainElements = () =>
{
  const elem = render(
    <system>
      <style css={css}></style>
      <main class="main">
        <div class="main-element main-button">
          <button>button here</button>
          <button class="focus-button">focus button here</button>
          <button disabled>disabled button here</button>
        </div>
        <div class="main-element main-input">
          <input value="input here"></input>
          <input value="focus input here" class="focus-input"></input>
          <input disabled value="disabled input here"></input>
        </div>
        <div class="main-element main-anchor">
          <a href="/abc">link here</a>
          <a href="/abc" class="focus-link">focus link here</a>
          <a href="/abc"><span>text inside link here</span></a>
          <a href="/">{google}<span>link with icon here</span></a>
        </div>
        <div class="main-element main-label">
          <label>label here</label>
          <label>{google}<span>label with icon here</span></label>
        </div>
      </main>
    </system>
  , document.body)
  setInterval((elem) => {
    switch(Math.round(Date.now() / 1000) % 3)
    {
      case 0: elem.querySelector(".focus-button").focus({ focusVisible: true }); break
      case 1: elem.querySelector(".focus-input").focus({ focusVisible: true }); break
      case 2: elem.querySelector(".focus-link").focus(); break
    }
  }, 1000, elem)
}

const css = `
  .main {
    display: grid;
    row-gap: 2rem;
  }

  .main-element > * {
    margin: 0 1rem;
  }
`