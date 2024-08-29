const ContainsError = 'value not contains "#token"';
const HasMaxLengthError = "maximum #max characters allowed";
const HasMinLengthError = "minimum #min characters required";
const InRangeError = "value is not between #min and #max";
const IsDateError = "invalid date";
const IsEmailError = "invalid email";
const IsIntegerError = "invalid integer";
const IsNumberError = "invalid number";
const IsRequiredError = "value is required";
const IsStringError = "invalid string";
const IsUrlError = "invalid url";
const MatchRegExpError = "value not match expression";
const mod = {
    ContainsError,
    HasMaxLengthError,
    HasMinLengthError,
    InRangeError,
    IsDateError,
    IsEmailError,
    IsIntegerError,
    IsNumberError,
    IsRequiredError,
    IsStringError,
    IsUrlError,
    MatchRegExpError
};
const toValidatorArray = (validators = [])=>typeof validators === "function" ? [
        validators
    ] : validators;
const isNotEmptyValue = (value)=>!!value;
const validateValue = (value, validators, errors = mod)=>toValidatorArray(validators).map((validator)=>validator(value, errors)).filter(isNotEmptyValue).join("\n");
const validateProp = (obj, validators, errors)=>(result, propName)=>Object.assign(result, {
            [propName]: validateValue(obj[propName], validators[propName], errors)
        });
const validateProps = (obj, validators, errors)=>Object.getOwnPropertyNames(validators).reduce(validateProp(obj, validators, errors), {});
const isValidProp = (validations)=>(propName)=>!validations[propName];
const isValidObj = (validations)=>Object.getOwnPropertyNames(validations).every(isValidProp(validations));
const validateObj = (obj, validators, errors = mod)=>{
    const validations = validateProps(obj, validators, errors);
    const isValid = isValidObj(validations);
    return Object.assign(validations, {
        isValid
    });
};
export { validateObj as validateObj };
export { validateValue as validateValue };
const isEmptyString = (value)=>value === "";
const isEmptyValue = (value)=>isNullValue(value) || isEmptyString(value);
const isNullValue = (value)=>value == null;
const contains = (token)=>(str, errors = mod)=>isEmptyValue(str) || str.includes(token) ? null : errors.ContainsError.replace("#token", token);
const isDateValue = (value)=>{
    if (value instanceof Date) return true;
    if (typeof value !== "string") return false;
    return value.match(/\d{4}-\d{2}-\d{2}/g) && !isNaN(Date.parse(value));
};
const isDate = (value, errors = mod)=>isEmptyValue(value) || isDateValue(value) ? null : errors.IsDateError;
const isEmail = (str, errors = mod)=>isEmptyValue(str) || str.match(/[a-zA-Z]+\w*@[a-zA-Z]+(\w|\-)*\.[a-zA-Z]+\w+/g) ? null : errors.IsEmailError;
const isInteger = (value, errors = mod)=>isEmptyValue(value) || !isNaN(value) && value % 1 === 0 ? null : errors.IsIntegerError;
const isNumber = (value, errors = mod)=>isEmptyValue(value) || !isNaN(value) ? null : errors.IsNumberError;
const isString = (value, errors = mod)=>isEmptyValue(value) || typeof value === "string" ? null : errors.IsStringError;
const urlRegExp = /^(http(s)?:\/\/)([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/i;
const isUrl = (value, errors = mod)=>isEmptyValue(value) || urlRegExp.test(value) ? null : errors.IsUrlError;
const isRequired = (val, errors = mod)=>isEmptyValue(val) ? errors.IsRequiredError : null;
const replaceMaxPlaceholder = (error, max)=>(error || "").replace("#max", max);
const hasMaxLength = (max)=>(str, errors = mod)=>isEmptyValue(str) || str.length <= max ? null : replaceMaxPlaceholder(errors.HasMaxLengthError, max);
const replaceMinPlaceholder = (error, min)=>(error || "").replace("#min", min);
const hasMinLength = (min)=>(str, errors = mod)=>isEmptyValue(str) || str.length >= min ? null : replaceMinPlaceholder(errors.HasMinLengthError, min);
const replaceMinMaxPlaceholder = (error, min, max)=>(error || "").replace("#min", min).replace("#max", max);
const inRange = (min, max)=>(value, errors = mod)=>isEmptyValue(value) || value >= min && value <= max ? null : replaceMinMaxPlaceholder(errors.InRangeError, min, max);
const matchRegExp = (pattern)=>(str, errors = mod)=>isEmptyValue(str) || pattern.test(str) ? null : errors.MatchRegExpError;
export { contains as contains };
export { isDate as isDate };
export { isEmail as isEmail };
export { isInteger as isInteger };
export { isNumber as isNumber };
export { isString as isString };
export { isUrl as isUrl };
export { isRequired as isRequired };
export { hasMaxLength as hasMaxLength };
export { hasMinLength as hasMinLength };
export { inRange as inRange };
export { matchRegExp as matchRegExp };
