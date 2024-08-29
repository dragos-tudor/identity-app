import { spinner } from "../../frontend-app/images/icons.jsx"
import { resolveLocation } from "../../frontend-locations/mod.js"
import { Footer } from "../footer/footer.jsx"
import { Header } from "../header/header.jsx"
import { Messages } from "../messages/messages.jsx"
import { Routes } from "../routes/routes.jsx"
import { useApiOptions, useFetchApi } from "../services/using.js"
import { States } from "../states/states.jsx"
import { Timer } from "../timer/timer.jsx";
import { startEffect, startApp } from "./starting.js"
const { Router } = await import("/scripts/routing.js")
const { setEffects, setStates, useEffect, useState } = await import("/scripts/rendering.js")

export const App = ({"fetch-api": _fetchApi, location: _location}, elem) =>
{
  const apiOptions = useApiOptions(elem)
  const fetchApi = useFetchApi(elem, _fetchApi)
  const location = resolveLocation(_location)
  const [isStarting, setIsStarting] = useState(setStates(elem), "is-starting", true, [])

  const start = () => startApp(elem, fetchApi, apiOptions, location)
  useEffect(setEffects(elem), "start-app", () => startEffect(elem, start, setIsStarting), [])

  return (
    <>
      <style css={css}></style>
      <States></States>

      <Router no-skip>
        <Header class="header"></Header>
        <main>
          <div hidden={!isStarting} class="app-spinner">{spinner}</div>
          <Routes></Routes>
        </main>
        <Footer class="footer"></Footer>
      </Router>

      <Timer>
        <Messages class="messages" no-skip></Messages>
      </Timer>
    </>
  )
}

const css = `
.app {
  height: 100vh;
}

main {
  height: 100%;
  width: 100%;
  display: grid;
  justify-self: start;
  align-self: center;
}

router {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: inherit;
}

routes, route {
  display: block;
  height: inherit;
}

.app-spinner svg {
  height: 5rem;
}
`