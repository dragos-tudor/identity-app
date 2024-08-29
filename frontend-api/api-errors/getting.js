import { isProblemDetailsResponse } from "../responses/verifying.js";

const getFetchApiErrorDetail = (error) => JSON.parse(error.message).detail

export const getFetchApiError = (result) => result[1]

export const getFetchApiErrorMessage = (error) => isProblemDetailsResponse(error.response)? getFetchApiErrorDetail(error): error.message