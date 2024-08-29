const DefaultLocation = new URL("http://localhost");
const getLocationPathName = (location)=>location.pathname;
const getLocationSearch = (location)=>location.search;
const getRelativeLocationUri = (location)=>location.pathname + getLocationSearch(location);
const resolveLocation = (location)=>location ?? globalThis.location ?? DefaultLocation;
const hasLocationPathName = (location, pathName)=>getLocationPathName(location) === pathName;
const RedirectParamName = "redirect";
const setRedirectParam = (redirectUri)=>RedirectParamName + "=" + encodeURIComponent(redirectUri);
const { createStoreState } = await import("/scripts/states.js");
const AccountStateName = "account";
const { createAction } = await import("/scripts/states.js");
const { createReducer } = await import("/scripts/states.js");
const selectIsAuthenticated = (states)=>states[AccountStateName].isAuthenticated;
const { createStoreState: createStoreState1 } = await import("/scripts/states.js");
const { createAction: createAction1 } = await import("/scripts/states.js");
const { createReducer: createReducer1 } = await import("/scripts/states.js");
const { getServices, useService } = await import("/scripts/rendering.js");
const useApiOptions = (elem, fallbackApiOptions)=>useService(getServices(elem), "api-options") ?? fallbackApiOptions;
const useFetchApi = (elem, fallbackFetchApi)=>useService(getServices(elem), "fetch-api") ?? fallbackFetchApi;
const useLabels = (elem, name, fallbackLabels)=>useService(getServices(elem), "labels")?.[name] ?? fallbackLabels;
const concatUserClaim = (result, claim)=>result + (result ? ", " : "") + claim;
const concatUserClaims = (claims)=>claims.reduce(concatUserClaim, "");
const getApiUrl = (url, apiOptions)=>apiOptions?.apiBaseUrl + url;
const getApiTimeout = (apiOptions)=>apiOptions?.apiTimeout ?? 10000;
const setRequestCredentials = (request, value = "omit")=>Object.assign(request, {
        credentials: value
    });
const setRequestMode = (request, mode = "cors")=>Object.assign(request, {
        mode
    });
const setRequestRedirect = (request, redirect)=>Object.assign(request, {
        redirect
    });
const setRequestCors = (request)=>{
    setRequestMode(request, "cors");
    setRequestRedirect(request, "manual");
    setRequestCredentials(request, "include");
    return request;
};
const { fetchJson, fetchWithTimeout } = await import("/scripts/fetching.js");
const fetchApi = (url, request = {}, apiOptions = {
    apiBaseUrl: ""
}, fetchData = fetch)=>fetchWithTimeout((url, request)=>fetchJson(fetchData, url, request), getApiUrl(url, apiOptions), setRequestCors(request), getApiTimeout(apiOptions));
const getHeaderValue = (response, name)=>response.headers?.get(name);
const getContentTypeHeaderValue = (response)=>getHeaderValue(response, "content-type");
const isForbiddenResponse = (response)=>response.status === 403;
const isResponseError = (response)=>response.status >= 400;
const isUnauthorizedResponse = (response)=>response.status === 401;
const isProblemDetailsResponse = (response)=>getContentTypeHeaderValue(response) === "application/problem+json";
const getFetchApiErrorDetail = (error)=>JSON.parse(error.message).detail;
const getFetchApiErrorMessage = (error)=>isProblemDetailsResponse(error.response) ? getFetchApiErrorDetail(error) : error.message;
const isFetchApiError = (error)=>!!error;
const { HttpMethods } = await import("/scripts/fetching.js");
const createGetRequest = ()=>({
        method: HttpMethods.GET
    });
const getUserApi = (fetch1 = fetchApi, apiOptions = {})=>fetch1("/users", createGetRequest(), apiOptions);
const MessageTypes = Object.freeze({
    info: 0,
    warning: 1,
    error: 2
});
const createMessage = (content, date = Date.now(), timeout = 3000, type = MessageTypes.info)=>Object.freeze({
        content,
        date,
        timeout,
        type
    });
const createErrorMessage = (content, date = Date.now(), timeout = 3000)=>createMessage(content, date, timeout, MessageTypes.error);
const { dispatchEvent } = await import("/scripts/rendering.js");
const dispatchMessage = (elem, message)=>dispatchEvent(elem, "message", message);
const getForbiddenPath = ()=>"/forbidden";
const getLoginPath = ()=>"/login";
const isLoginPath = (location)=>hasLocationPathName(location, getLoginPath());
const resolveLoginRedirectedUri = (location)=>getLoginPath() + "?" + setRedirectParam(getRelativeLocationUri(location));
const resolveAnonymousUri = (location)=>isLoginPath(location) ? getRelativeLocationUri(location) : resolveLoginRedirectedUri(location);
const { navigate } = await import("/scripts/routing.js");
const handleFetchApiError = (elem, error, location)=>{
    const errorMessage = getFetchApiErrorMessage(error);
    if (isUnauthorizedResponse(error.response)) return navigate(elem, resolveAnonymousUri(location));
    if (isForbiddenResponse(error.response)) return navigate(elem, getForbiddenPath());
    if (isResponseError(error.response)) dispatchMessage(elem, createErrorMessage(errorMessage));
    return errorMessage;
};
const { update } = await import("/scripts/rendering.js");
const getUser = async (elem, fetchApi, apiOptions, location)=>{
    const [user, error] = await getUserApi(fetchApi, apiOptions);
    if (isFetchApiError(error)) return handleFetchApiError(elem, error, location), null;
    return user;
};
const getUserEffect = async (elem, getUser, setUser)=>{
    const user = await getUser();
    setUser(user);
    update(elem);
};
const UserLabels = Object.freeze({
    "user-title": "User information",
    "user-name": "user name",
    "scheme-name": "scheme name",
    "user-claims": "user claims",
    name: "UserLabels"
});
const { getStoreStates, setSelectors, useSelector } = await import("/scripts/states.js");
const { setEffects, setStates, useEffect, useState } = await import("/scripts/rendering.js");
const User = ({ "api-options": _apiOptions, "fetch-api": _fetchApi, location: _location }, elem)=>{
    const apiOptions = useApiOptions(elem, _apiOptions);
    const fetchApi = useFetchApi(elem, _fetchApi);
    const location = resolveLocation(_location);
    const labels = useLabels(elem, UserLabels.name, UserLabels);
    const [user, setUser] = useState(setStates(elem), "user", {}, []);
    const isAuthenticated = useSelector(setSelectors(elem), "is-authenticated", selectIsAuthenticated, getStoreStates(elem));
    const getting = ()=>getUser(elem, fetchApi, apiOptions, location);
    useEffect(setEffects(elem), "get-user", ()=>getUserEffect(elem, getting, setUser), [
        isAuthenticated
    ]);
    return React.createElement(React.Fragment, null, React.createElement("style", {
        css: css
    }), React.createElement("h3", {
        class: "user-title accent-color"
    }, labels["user-title"]), React.createElement("section", {
        class: "user-details"
    }, React.createElement("label", null, labels["user-name"]), React.createElement("span", {
        class: "user-name"
    }, user?.userName), React.createElement("label", null, labels["scheme-name"]), React.createElement("span", {
        class: "scheme-name"
    }, user?.schemeName), React.createElement("label", null, labels["user-claims"]), React.createElement("span", {
        class: "user-claims"
    }, concatUserClaims(user?.userClaims ?? []))));
};
const css = `.user {
  display: block;
  margin: 3rem;
}

.user-details {
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;
  column-gap: 1rem;
  row-gap: 1rem;
  margin-top: 1.5rem;
}

.user-details label {
  justify-self: end;
}`;
const Home = ()=>React.createElement(User, {
        class: "user"
    });
export { Home as Home };
