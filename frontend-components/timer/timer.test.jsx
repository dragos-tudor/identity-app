import { spy } from "/mock.ts"
import { waitFor } from "/testing.js"
import { Timer } from "./timer.jsx"
import { render, unrender } from "/scripts/rendering.js"

Deno.test("timer component", async t =>
{
  await t.step("timer component => render timer => start update children", async () =>
  {
    const childSpy = spy(() => {})
    const Child = () => { childSpy(); return <></> }
    const elem = render(<Timer timeout={50}><Child no-skip></Child></Timer>)

    await waitFor(() => childSpy.calls.length > 3, 1000)
    unrender(elem)
  })
})