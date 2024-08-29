const { Service } = await import("/scripts/rendering.js")

export const Services = (props) =>
  <>
    <Service name="api-options" value={props["api-options"]}></Service>
    <Service name="fetch-api" value={props["fetch-api"]}></Service>
    <Service name="labels" value={props["labels"]}></Service>
    <Service name="language" value={props["language"]}></Service>
    <Service name="validation-errors" value={props["validation-errors"]}></Service>
    {...props.children}
  </>