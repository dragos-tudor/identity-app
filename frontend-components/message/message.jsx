import { useLabels } from "../services/using.js";
import { getMessageContent, getMessageTypeName } from "./getting.js"
import { MessageLabels } from "./labels/labels.en.js"

export const Message = ({message}, elem) =>
{
  const messageType = getMessageTypeName(message)
  const labels = useLabels(elem, MessageLabels.name, MessageLabels)

  return <>
    <style css={css}></style>
    <h5 class={`message-title ${messageType}-color`}>{labels[messageType]}</h5>
    <p class="message-content">{getMessageContent(message)}</p>
  </>
}

const css = `
.message {
  display: inline-block;
  padding: 0.5rem;
  background-color: var(--neutral-light-color);
  border: thin solid var(--accent-color);
}

.message-title {
  text-transform: uppercase;
}

.message-content {
  padding: 0 1rem;
  color: var(--text-color);
}`