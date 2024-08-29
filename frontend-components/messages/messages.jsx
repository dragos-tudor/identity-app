import { Message } from "../message/message.jsx"
import { getValidMessages } from "./getting.js"
import { registerMessage } from "./registering.js"
import { resolveTimeProvider } from "./resolving.js"
import { setMessageEventHandler } from "./setting.js";
import { shouldRegisterMessage } from "./verifying.js"
const { setStates, setEffects, useState, useEffect } = await import("/scripts/rendering.js")


export const Messages = ({message, "time-provider": _timeProvider}, elem) =>
{
  const timeProvider = resolveTimeProvider(_timeProvider)
  const [messages, setMessages] = useState(setStates(elem), "messages", [], [])
  const validMessages = getValidMessages(messages, timeProvider())

  if (shouldRegisterMessage(message, validMessages, timeProvider())) registerMessage(message, validMessages)
  useEffect (setEffects(elem), "update-messages", () => setMessages(validMessages), validMessages)
  useEffect (setEffects(elem), "handle-messages", () => setMessageEventHandler(elem), [])

  return (<>
    <style css={css}></style> {
      ...validMessages.map(message => <Message message={message} class="message"></Message>
    )}
  </>)
}

const css = `
.messages {
  display: grid;
  row-gap: 0.5rem;
  position: absolute;
  bottom: 2rem;
  right: 1rem;
  padding: 1rem;
}`