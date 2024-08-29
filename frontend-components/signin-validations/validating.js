const { validateValue, isRequired, hasMaxLength } = await import("/scripts/validating.js")

const PasswordValidators = [isRequired, hasMaxLength(10)]

const UserNameValidators = [isRequired, hasMaxLength(10)]

export const validatePassword = (password, validationErrors) => validateValue(password, PasswordValidators, validationErrors)

export const validateUserName = (userName, validationErrors) => validateValue(userName, UserNameValidators, validationErrors)