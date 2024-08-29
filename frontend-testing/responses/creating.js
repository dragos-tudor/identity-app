import { getJsonHeaders, getOkState } from "./getting.js"
import { stringifyBody } from "./stringify.js";

const createResponseInit = (body, status, contentType) => ({headers: getJsonHeaders(body, contentType), ok: getOkState(status), status})

export const createErrorJsonResponse = (data, status = 400) => createJsonResponse(data, status)

export const createProblemDetailsJsonResponse = (data, status = 400) => createJsonResponse(data, status, "application/problem+json")

export const createJsonResponse = (data, status = 200, contentType = "application/json") =>
{
  const body = stringifyBody(data)
  return new Response(body, createResponseInit(body, status, contentType))
}