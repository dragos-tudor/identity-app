import { resolveTimeout } from "./resolving.js"
import { updateTimerChildren } from "./updating.js"
const { setEffects, setInitialEffect, useEffect } = await import("/scripts/rendering.js")

export const Timer = ({timeout: _timeout, children}, elem) =>
{
  const effects = setEffects(elem)
  const timeout = resolveTimeout(_timeout)

  useEffect(effects, "update-children", () => {
    const intervalId = setInterval(() => updateTimerChildren(elem, children), timeout)
    setInitialEffect(effects, "update-children", () => clearInterval(intervalId))
  }, [])

  return <>{children}</>
}