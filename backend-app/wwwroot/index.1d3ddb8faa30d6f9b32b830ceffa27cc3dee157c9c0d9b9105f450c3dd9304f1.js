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
const getGoogleChallengeUrl = (apiOptions, returnUrl)=>getApiUrl(`/accounts/challenge-google?returnUrl=${returnUrl}`, apiOptions);
const getFacebookChallengeUrl = (apiOptions, returnUrl)=>getApiUrl(`/accounts/challenge-facebook?returnUrl=${returnUrl}`, apiOptions);
const getTwitterChallengeUrl = (apiOptions, returnUrl)=>getApiUrl(`/accounts/challenge-twitter?returnUrl=${returnUrl}`, apiOptions);
const { HttpMethods } = await import("/scripts/fetching.js");
const createGetRequest = ()=>({
        method: HttpMethods.GET
    });
const createPostRequest = (body)=>({
        method: HttpMethods.POST,
        body
    });
const getAccountStatusApi = (fetch1 = fetchApi, apiOptions = {})=>fetch1("/accounts/status", createGetRequest(), apiOptions);
const signinAccountApi = (credentials, fetch1 = fetchApi, apiOptions = {})=>fetch1("/accounts/signin", createPostRequest(credentials), apiOptions);
const signoutAccoutApi = (fetch1 = fetchApi, apiOptions = {})=>fetch1("/accounts/signout", createPostRequest(), apiOptions);
await import("/scripts/rendering.js");
const github = React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 50 50"
}, React.createElement("path", {
    d: "M25,8c9.389,0,17,7.611,17,17c0,7.548-4.921,13.944-11.729,16.163c0.002-0.006,0.005-0.016,0.005-0.016 s-1.147-0.538-1.123-1.498c0.027-1.056,0-3.521,0-4.426c0-1.553-0.983-2.654-0.983-2.654s7.709,0.087,7.709-8.139 c0-3.174-1.659-4.825-1.659-4.825s0.871-3.388-0.302-4.825c-1.315-0.142-3.669,1.257-4.675,1.91c0,0-1.593-0.653-4.244-0.653 c-2.65,0-4.244,0.653-4.244,0.653c-1.005-0.653-3.36-2.052-4.675-1.91c-1.173,1.437-0.302,4.825-0.302,4.825 s-1.659,1.652-1.659,4.825c0,8.226,7.709,8.139,7.709,8.139s-0.777,0.878-0.946,2.168c-0.538,0.183-1.33,0.408-1.969,0.408 c-1.673,0-2.946-1.626-3.412-2.379c-0.46-0.742-1.403-1.365-2.281-1.365c-0.579,0-0.861,0.289-0.861,0.62 c0,0.331,0.811,0.562,1.347,1.175c1.129,1.294,1.109,4.202,5.132,4.202c0.437,0,1.329-0.107,2-0.198 c-0.004,0.916-0.005,1.882,0.009,2.447c0.024,0.96-1.123,1.498-1.123,1.498s0.003,0.01,0.005,0.016C12.921,38.944,8,32.548,8,25 C8,15.611,15.611,8,25,8z"
}));
React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48"
}, React.createElement("path", {
    fill: "#4caf50",
    d: "M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
}), React.createElement("path", {
    fill: "#1e88e5",
    d: "M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
}), React.createElement("polygon", {
    fill: "#e53935",
    points: "35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
}), React.createElement("path", {
    fill: "#c62828",
    d: "M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
}), React.createElement("path", {
    fill: "#fbc02d",
    d: "M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
}));
const google = React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48"
}, React.createElement("path", {
    fill: "#FFC107",
    d: "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
}), React.createElement("path", {
    fill: "#FF3D00",
    d: "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
}), React.createElement("path", {
    fill: "#4CAF50",
    d: "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
}), React.createElement("path", {
    fill: "#1976D2",
    d: "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
}));
const facebook = React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48"
}, React.createElement("path", {
    fill: "#3f51b5",
    d: "M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
}), React.createElement("path", {
    fill: "#fff",
    d: "M29.368,24H26v12h-5V24h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H30v4h-2.287 C26.104,16,26,16.6,26,17.723V20h4L29.368,24z"
}));
const linkedin = React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64"
}, React.createElement("path", {
    d: "M 23.773438 12 C 12.855437 12 12 12.854437 12 23.773438 L 12 40.226562 C 12 51.144563 12.855438 52 23.773438 52 L 40.226562 52 C 51.144563 52 52 51.145563 52 40.226562 L 52 23.773438 C 52 12.854437 51.145563 12 40.226562 12 L 23.773438 12 z M 21.167969 16 L 42.832031 16 C 47.625031 16 48 16.374969 48 21.167969 L 48 42.832031 C 48 47.625031 47.624031 48 42.832031 48 L 21.167969 48 C 16.374969 48 16 47.624031 16 42.832031 L 16 21.167969 C 16 16.374969 16.374969 16 21.167969 16 z M 22.501953 18.503906 C 20.872953 18.503906 19.552734 19.824172 19.552734 21.451172 C 19.552734 23.078172 20.871953 24.400391 22.501953 24.400391 C 24.126953 24.400391 25.447266 23.079172 25.447266 21.451172 C 25.447266 19.826172 24.126953 18.503906 22.501953 18.503906 z M 37.933594 26.322266 C 35.473594 26.322266 33.823437 27.672172 33.148438 28.951172 L 33.078125 28.951172 L 33.078125 26.728516 L 28.228516 26.728516 L 28.228516 43 L 33.28125 43 L 33.28125 34.949219 C 33.28125 32.826219 33.687359 30.771484 36.318359 30.771484 C 38.912359 30.771484 38.945312 33.200891 38.945312 35.087891 L 38.945312 43 L 44 43 L 44 34.074219 C 44 29.692219 43.054594 26.322266 37.933594 26.322266 z M 19.972656 26.728516 L 19.972656 43 L 25.029297 43 L 25.029297 26.728516 L 19.972656 26.728516 z"
}));
const twitter = React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48"
}, React.createElement("path", {
    fill: "#03a9f4",
    d: "M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
}), React.createElement("path", {
    fill: "#fff",
    d: "M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3 c-0.951,0.559-2.671,1.156-3.793,1.372C31.311,15.422,30.033,15,28.617,15C25.897,15,24,17.305,24,20v2c-4,0-7.9-3.047-10.327-6 c-0.427,0.721-0.667,1.565-0.667,2.457c0,1.819,1.671,3.665,2.994,4.543c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057 c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27c0.626,1.935,3.773,2.958,5.928,3c-1.686,1.307-4.692,2-7,2 c-0.399,0-0.615,0.022-1-0.023C14.178,33.357,17.22,34,20,34c9.057,0,14-6.918,14-13.37c0-0.212-0.007-0.922-0.018-1.13 C34.95,18.818,35.342,18.104,36,17.12"
}));
const spinner = React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100"
}, React.createElement("path", {
    fill: "#fff",
    d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
}, React.createElement("animateTransform", {
    xmlns: "http://www.w3.org/2000/svg",
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    dur: "1s",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
})));
const youtube = React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64"
}, React.createElement("path", {
    d: "M 32 15 C 14.938 15 12.659656 15.177734 10.472656 17.427734 C 8.2856563 19.677734 8 23.252 8 32 C 8 40.748 8.2856562 44.323266 10.472656 46.572266 C 12.659656 48.821266 14.938 49 32 49 C 49.062 49 51.340344 48.821266 53.527344 46.572266 C 55.714344 44.322266 56 40.748 56 32 C 56 23.252 55.714344 19.677734 53.527344 17.427734 C 51.340344 15.177734 49.062 15 32 15 z M 32 19 C 45.969 19 49.379156 19.062422 50.535156 20.232422 C 51.691156 21.402422 52 24.538 52 32 C 52 39.462 51.691156 42.597578 50.535156 43.767578 C 49.379156 44.937578 45.969 45 32 45 C 18.031 45 14.620844 44.937578 13.464844 43.767578 C 12.308844 42.597578 12.03125 39.462 12.03125 32 C 12.03125 24.538 12.308844 21.402422 13.464844 20.232422 C 14.620844 19.062422 18.031 19 32 19 z M 27.949219 25.017578 L 27.949219 38.982422 L 40.095703 31.945312 L 27.949219 25.017578 z"
}));
const DefaultLocation = new URL("http://localhost");
const getAbsoluteLocationUrl = (location1)=>location1.href;
const getLocationPathName = (location1)=>location1.pathname;
const getLocationSearch = (location1)=>location1.search;
const getRelativeLocationUri = (location1)=>location1.pathname + getLocationSearch(location1);
const resolveLocation = (location1)=>location1 ?? globalThis.location ?? DefaultLocation;
const hasLocationPathName = (location1, pathName)=>getLocationPathName(location1) === pathName;
const getSearchParams = (location1)=>new URLSearchParams(location1.search);
const getSearchParam = (location1, paramName)=>getSearchParams(location1).get(paramName);
const RedirectParamName = "redirect";
const getRedirectParam = (location1)=>decodeURIComponent(getSearchParam(location1, RedirectParamName));
const setRedirectParam = (redirectUri)=>RedirectParamName + "=" + encodeURIComponent(redirectUri);
const isRedirection = (location1)=>getLocationSearch(location1).includes(RedirectParamName);
const setSearchParam = (name, value)=>name + "=" + encodeURIComponent(value);
const Me = "Dragos-Marian Tudor";
const getCurrentYear = ()=>new Date().getFullYear();
const getNameAndYear = ()=>`${Me} - ${getCurrentYear()}`;
const Footer_Me = ()=>React.createElement(React.Fragment, null, React.createElement("style", {
        css: css
    }), React.createElement("span", {
        class: "footer-me-text"
    }, getNameAndYear()));
const css = `
.footer-me-text {
  color: var(--accent-text-color);
  font-size: var(--font-size)
}`;
const GithubLink = "https://github.com/dragos-tudor";
const LinkedinLink = "https://linkedin.com/in/dragos-tudor-marian";
const YoutubeLink = "https://youtube.com/@dragos-tudor";
const createSocial = (href, icon)=>Object.freeze({
        href,
        icon
    });
const createGithubSocial = ()=>createSocial(GithubLink, github);
const createLinkedinSocial = ()=>createSocial(LinkedinLink, linkedin);
const createYoutubeSocial = ()=>createSocial(YoutubeLink, youtube);
const Footer_Social = ({ social })=>React.createElement(React.Fragment, null, React.createElement("style", {
        css: css1
    }), React.createElement("a", {
        href: social.href,
        target: "_blank",
        class: "footer-social-link"
    }, social.icon));
const css1 = `
.footer-social-link:hover, .footer-social-link:focus {
  border-color: transparent;
}`;
const Footer_Socials = ()=>React.createElement(React.Fragment, null, React.createElement(Footer_Social, {
        social: createGithubSocial(),
        class: "footer-social github"
    }), React.createElement(Footer_Social, {
        social: createLinkedinSocial(),
        class: "footer-social linkedin"
    }), React.createElement(Footer_Social, {
        social: createYoutubeSocial(),
        class: "footer-social youtube"
    }));
const Footer = ()=>React.createElement(React.Fragment, null, React.createElement("style", {
        css: css2
    }), React.createElement(Footer_Socials, {
        class: "footer-socials"
    }), React.createElement(Footer_Me, {
        class: "footer-me"
    }));
const css2 = `
.footer {
  display: grid;
  grid-template-columns: auto;
  row-gap: 1rem;
  justify-items: center;
  padding-block: 0.5rem;
  background-color: var(--neutral-dark-color);
}`;
const { getServices, useService } = await import("/scripts/rendering.js");
const useApiOptions = (elem, fallbackApiOptions)=>useService(getServices(elem), "api-options") ?? fallbackApiOptions;
const useFetchApi = (elem, fallbackFetchApi)=>useService(getServices(elem), "fetch-api") ?? fallbackFetchApi;
const useLabels = (elem, name, fallbackLabels)=>useService(getServices(elem), "labels")?.[name] ?? fallbackLabels;
const useLanguage = (elem, fallbackLanguage)=>useService(getServices(elem), "language") ?? fallbackLanguage;
const useValidationErrors = (elem, fallbackValidationErrors)=>useService(getServices(elem), "validation-errors") ?? fallbackValidationErrors;
const Languages = Object.freeze({
    en: "en",
    ro: "ro"
});
const LanguageParamName = "lang";
const setLanguageParam = (language)=>setSearchParam(LanguageParamName, language);
const getSearchWithLanguageParam = (location1, language)=>(getLocationSearch(location1) ? "" : "?") + setLanguageParam(language);
const getLanguageParam = (location1)=>getSearchParam(location1, LanguageParamName) || Languages.en;
const getLanguageUri = (location1, language)=>getAbsoluteLocationUrl(location1) + getSearchWithLanguageParam(location1, language);
const isEnglishLanguage = (lang)=>Languages.en === lang;
const isValidLanguage = (lang)=>lang in Languages;
const Language = ({ language: _language, location: _location }, elem)=>{
    const lang = useLanguage(elem, _language);
    const location1 = resolveLocation(_location);
    const toggleLang = isEnglishLanguage(lang) ? Languages.ro : Languages.en;
    return React.createElement("a", {
        class: "language-link",
        href: getLanguageUri(location1, toggleLang),
        target: "_self"
    }, toggleLang);
};
const { createStoreState } = await import("/scripts/states.js");
const AccountStateName = "account";
const createAccountState = (account)=>createStoreState(AccountStateName, account);
const { createAction } = await import("/scripts/states.js");
const createSetAccountStatusAction = (isAuthenticated)=>createAction(`${AccountStateName}/setAccountStatus`, {
        isAuthenticated
    });
const { createReducer } = await import("/scripts/states.js");
const createAccountReducer = ()=>createReducer(AccountStateName, {
        setAccountStatus: (state, action)=>({
                ...state,
                ...action.payload
            })
    });
const selectIsAuthenticated = (states)=>states[AccountStateName].isAuthenticated;
const { createStoreState: createStoreState1 } = await import("/scripts/states.js");
const UserStateName = "user";
const createUserState = (user)=>createStoreState1(UserStateName, user);
const { createAction: createAction1 } = await import("/scripts/states.js");
const { createReducer: createReducer1 } = await import("/scripts/states.js");
const createUserReducer = ()=>createReducer1(UserStateName, {
        setUser: (state, action)=>({
                ...state,
                ...action.payload
            }),
        resetUser: (state, action)=>({
                ...state,
                ...action.payload
            })
    });
const getContactPath = ()=>"/contact";
const getForbiddenPath = ()=>"/forbidden";
const getHomePath = ()=>"/home";
const getLoginPath = ()=>"/login";
const getRootPath = ()=>"/";
const MessageTypes = Object.freeze({
    info: 0,
    warning: 1,
    error: 2
});
const getMessageContent = (message)=>message.content;
const getMessageDate = (message)=>message.date;
const getMessageTimeout = (message)=>message.timeout;
const getMessageTypeName = (message)=>Object.entries(MessageTypes).find(([_, value])=>message.type == value)?.[0];
const createMessage = (content, date = Date.now(), timeout = 3000, type = MessageTypes.info)=>Object.freeze({
        content,
        date,
        timeout,
        type
    });
const createErrorMessage = (content, date = Date.now(), timeout = 3000)=>createMessage(content, date, timeout, MessageTypes.error);
const { dispatchEvent } = await import("/scripts/rendering.js");
const dispatchMessage = (elem, message)=>dispatchEvent(elem, "message", message);
const isLoginPath = (location1)=>hasLocationPathName(location1, getLoginPath());
const isRootPath = (location1)=>hasLocationPathName(location1, getRootPath());
const resolveLoginRedirectedUri = (location1)=>getLoginPath() + "?" + setRedirectParam(getRelativeLocationUri(location1));
const resolveHomeOrRelativeUri = (location1)=>isLoginPath(location1) || isRootPath(location1) ? getHomePath() + getLocationSearch(location1) : getRelativeLocationUri(location1);
const resolveAuthenticatedRedirectUri = (location1, redirection = getRedirectParam(location1))=>redirection === getRootPath() || redirection.startsWith("/?") || redirection.startsWith("?") ? getHomePath() + redirection.replace("/", "") : getRedirectParam(location1);
const resolveAnonymousUri = (location1)=>isLoginPath(location1) ? getRelativeLocationUri(location1) : resolveLoginRedirectedUri(location1);
const resolveAuthenticatedUri = (location1)=>isRedirection(location1) ? resolveAuthenticatedRedirectUri(location1) : resolveHomeOrRelativeUri(location1);
const { navigate } = await import("/scripts/routing.js");
const handleFetchApiError = (elem, error, location1)=>{
    const errorMessage = getFetchApiErrorMessage(error);
    if (isUnauthorizedResponse(error.response)) return navigate(elem, resolveAnonymousUri(location1));
    if (isForbiddenResponse(error.response)) return navigate(elem, getForbiddenPath());
    if (isResponseError(error.response)) dispatchMessage(elem, createErrorMessage(errorMessage));
    return errorMessage;
};
const { navigate: navigate1 } = await import("/scripts/routing.js");
const { dispatchAction } = await import("/scripts/states.js");
const signoutAccount = async (elem, fetchApi, apiOptions, location1)=>{
    const [data, error] = await signoutAccoutApi(fetchApi, apiOptions);
    if (isFetchApiError(error)) return handleFetchApiError(elem, error, location1);
    dispatchAction(elem, createSetAccountStatusAction(false));
    navigate1(elem, getLoginPath());
    return data;
};
const SignoutLabels = Object.freeze({
    "signout": "sign out",
    name: "SignoutLabels"
});
const Signout = ({ "api-options": _apiOptions, "fetch-api": _fetchApi, locaiton: _location }, elem)=>{
    const apiOptions = useApiOptions(elem, _apiOptions);
    const fetchApi = useFetchApi(elem, _fetchApi);
    const labels = useLabels(elem, SignoutLabels.name, SignoutLabels);
    const location1 = resolveLocation(_location);
    const signout = ()=>signoutAccount(elem, fetchApi, apiOptions, location1);
    return React.createElement("button", {
        class: "signout",
        onclick: signout
    }, labels["signout"]);
};
const NavLinksLabels = Object.freeze({
    "home": "home",
    "contact": "contact",
    "login": "login",
    "logout": "logout",
    name: "NavLinksLabels"
});
const { getStoreStates, setSelectors, useSelector } = await import("/scripts/states.js");
const { NavLink } = await import("/scripts/routing.js");
const NavLinks = (_, elem)=>{
    const labels = useLabels(elem, NavLinksLabels.name, NavLinksLabels);
    const isAuthenticated = useSelector(setSelectors(elem), "is-authenticated", selectIsAuthenticated, getStoreStates(elem));
    return isAuthenticated ? React.createElement(React.Fragment, null, React.createElement("style", {
        css: css3
    }), React.createElement(NavLink, {
        class: "navlink",
        href: getHomePath()
    }, labels["home"]), React.createElement(NavLink, {
        class: "navlink",
        href: getContactPath()
    }, labels["contact"]), React.createElement(Signout, {
        class: "signout"
    })) : React.createElement(React.Fragment, null, React.createElement("style", {
        css: css3
    }), React.createElement(NavLink, {
        class: "navlink",
        href: getLoginPath()
    }, labels["login"]), React.createElement(NavLink, {
        class: "navlink",
        href: getContactPath()
    }, labels["contact"]));
};
const css3 = `
.navlinks {
  display: flex;
  align-items: center;
  gap: 1rem;
}`;
const HeaderLogo = ()=>React.createElement("h2", null, React.createElement("style", {
        css: css4
    }), React.createElement("a", {
        href: "/",
        class: "header-title second-accent-color"
    }, "Identity app"));
const css4 = `
.header-title {
  font-family: var(--ff-serif);
  text-transform: uppercase;
  border: 0;
}

.header-title:hover, .header-title:focus {
  color: var(--second-accent-color);
}`;
const Header = ()=>React.createElement(React.Fragment, null, React.createElement("style", {
        css: css5
    }), React.createElement(HeaderLogo, {
        class: "header-logo"
    }), React.createElement(Language, {
        class: "language"
    }), React.createElement(NavLinks, {
        class: "navlinks"
    }));
const css5 = `
.header {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background-color: var(--neutral-dark-color);
}

.header .language {
  flex: 1 1;
  text-align: right;
}`;
const getHtmlBody = (elem)=>elem.ownerDocument.body;
const getHtmlChild = (elem, index)=>elem.children[index];
const getHtmlChildren = (elem)=>Array.from(elem.children ?? []);
const getHtmlName = (elem)=>elem.tagName.toLowerCase();
const getHtmlParentElement = (elem)=>elem?.parentElement;
const findBreadthHtmlDescendant = (elems, func)=>{
    for (const elem of elems)if (func(elem)) return elem;
    for (const elem of elems){
        const descendant = findBreadthHtmlDescendant(getHtmlChildren(elem), func);
        if (descendant) return descendant;
    }
};
const findBreadthHtmlDescendants = (elems, func, result = [])=>{
    for (const elem of elems)if (func(elem)) result.push(elem);
    for (const elem of elems)findBreadthHtmlDescendants(getHtmlChildren(elem), func, result);
    return result;
};
const existsHtmlElement = (elem)=>!!elem;
const findHtmlAscendant = (elem, func)=>{
    if (!existsHtmlElement(elem)) return undefined;
    if (func(elem)) return elem;
    return findHtmlAscendant(getHtmlParentElement(elem), func);
};
const findHtmlDescendant = (elem, func, findStrategy = findBreadthHtmlDescendant)=>findStrategy(getHtmlChildren(elem), func);
const findHtmlRoot = (elem)=>globalThis["Deno"] ? findHtmlAscendant(elem, (elem)=>!getHtmlParentElement(elem)) : getHtmlBody(elem);
const findMessagesElement = (root)=>findHtmlDescendant(root, (elem)=>getHtmlName(elem) === "messages");
const MessageLabels = Object.freeze({
    "info": "information",
    "warning": "warning",
    "error": "error",
    name: "MessageLabels"
});
const Message = ({ message }, elem)=>{
    const messageType = getMessageTypeName(message);
    const labels = useLabels(elem, MessageLabels.name, MessageLabels);
    return React.createElement(React.Fragment, null, React.createElement("style", {
        css: css6
    }), React.createElement("h5", {
        class: `message-title ${messageType}-color`
    }, labels[messageType]), React.createElement("p", {
        class: "message-content"
    }, getMessageContent(message)));
};
const css6 = `
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
}`;
const existsMessage = (message)=>!!message;
const isValidMessage = (message, date)=>getMessageDate(message) + getMessageTimeout(message) >= date;
const getValidMessages = (messages, date)=>messages.filter((message)=>isValidMessage(message, date));
const registerMessage = (message, messages)=>messages.push(message);
const resolveTimeProvider = (timeProvider)=>timeProvider ?? Date.now;
const containsMessage = (message, messages)=>messages.some((m)=>m === message);
const shouldRegisterMessage = (message, messages, date)=>existsMessage(message) && isValidMessage(message, date) && !containsMessage(message, messages);
const { setStates, setEffects, useState, useEffect } = await import("/scripts/rendering.js");
const { setHtmlEventHandler } = await import("/scripts/rendering.js");
const handleMessageEvent = (elem)=>(event)=>updateMessages(elem, event.detail);
const setMessageEventHandler = (elem)=>{
    const root = findHtmlRoot(elem);
    const messages = findMessagesElement(root);
    if (!messages) return;
    return setHtmlEventHandler(root, "onmessage", handleMessageEvent(messages));
};
const Messages = ({ message, "time-provider": _timeProvider }, elem)=>{
    const timeProvider = resolveTimeProvider(_timeProvider);
    const [messages, setMessages] = useState(setStates(elem), "messages", [], []);
    const validMessages = getValidMessages(messages, timeProvider());
    if (shouldRegisterMessage(message, validMessages, timeProvider())) registerMessage(message, validMessages);
    useEffect(setEffects(elem), "update-messages", ()=>setMessages(validMessages), validMessages);
    useEffect(setEffects(elem), "handle-messages", ()=>setMessageEventHandler(elem), []);
    return React.createElement(React.Fragment, null, React.createElement("style", {
        css: css7
    }), " ", ...validMessages.map((message)=>React.createElement(Message, {
            message: message,
            class: "message"
        })));
};
const { update } = await import("/scripts/rendering.js");
const updateMessages = (elem, message)=>update(elem, React.createElement(Messages, {
        message: message,
        class: "messages"
    }));
const css7 = `
.messages {
  display: grid;
  row-gap: 0.5rem;
  position: absolute;
  bottom: 2rem;
  right: 1rem;
  padding: 1rem;
}`;
const ContactLabels = Object.freeze({
    "contact-email": "email",
    "contact-mobile": "mobile",
    name: "ContactLabels"
});
const Contact = ({ name, email, mobile }, elem)=>{
    const labels = useLabels(elem, ContactLabels.name, ContactLabels);
    return React.createElement(React.Fragment, null, React.createElement("style", {
        css: css8
    }), React.createElement("h3", {
        class: "contact-title accent-color"
    }, name), React.createElement("section", {
        class: "contact-details"
    }, React.createElement("label", {
        class: "contact-label"
    }, labels["contact-email"]), React.createElement("span", {
        class: "contact-email"
    }, email), React.createElement("label", {
        class: "contact-label"
    }, labels["contact-mobile"]), React.createElement("span", {
        class: "contact-mobile"
    }, mobile)));
};
const css8 = `
.contact {
  display: block;
  margin: 3rem;
}

.contact-details {
  display: grid;
  grid-template-columns: min-content min-content;
  row-gap: 0.5rem;
  column-gap: 0.5rem;
  justify-items: start;
  align-items: center;
  margin-top: 1.5rem;
}

.contact-label {
  justify-self: right;
}`;
const createContactInfo = ()=>Object.freeze({
        name: "Dragos Tudor",
        email: "dragos.tudor@gmail.com",
        mobile: "+40724542700"
    });
const getErrorDescription = (location1)=>decodeURIComponent(getSearchParam(location1, "description"));
const ForbiddenLabels = Object.freeze({
    "forbidden-title": "Access denied",
    "forbidden-link": "go home",
    name: "ForbiddenLabels"
});
const { NavLink: NavLink1 } = await import("/scripts/routing.js");
const Forbidden = (props, elem)=>{
    const labels = useLabels(elem, ForbiddenLabels.name, ForbiddenLabels);
    const location1 = resolveLocation(props.location);
    const description = getErrorDescription(location1 ?? {});
    return React.createElement(React.Fragment, null, React.createElement("style", {
        css: css9
    }), React.createElement("section", {
        class: "forbidden-section"
    }, React.createElement("h3", {
        class: "forbidden-title error-color"
    }, labels["forbidden-title"]), React.createElement("p", {
        class: "forbidden-description"
    }, description)), React.createElement(NavLink1, {
        class: "forbidden-link",
        href: getHomePath()
    }, labels["forbidden-link"]));
};
const css9 = `
.forbidden {
  display: block;
  margin: 3rem;
}

.forbidden-section {
  margin-block: 1.5rem 3rem;
}

.forbidden-description {
  padding: var(--padding);
}`;
const SigninCookiesLabels = Object.freeze({
    "user-name": "user name",
    "password": "password",
    "signin": "signin",
    name: "SigninCookiesLabels"
});
const dispatchSigninError = (elem, error)=>dispatchMessage(elem, createErrorMessage(getFetchApiErrorMessage(error)));
const { navigate: navigate2 } = await import("/scripts/routing.js");
const { dispatchAction: dispatchAction1 } = await import("/scripts/states.js");
const { update: update1 } = await import("/scripts/rendering.js");
const signinAccount = async (elem, credentials, fetchApi, apiOptions, location1)=>{
    const [, error] = await signinAccountApi(credentials, fetchApi, apiOptions);
    if (isFetchApiError(error)) return dispatchSigninError(elem, error), false;
    dispatchAction1(elem, createSetAccountStatusAction(true));
    navigate2(elem, resolveAuthenticatedUri(location1));
    return true;
};
const signinClick = async (elem, signinAccount, setUserName, setPassword, setInProcess)=>{
    setInProcess(true);
    update1(elem);
    const result = await signinAccount();
    if (result) setUserName(null), setPassword(null);
    setInProcess(false);
    update1(elem);
    return result;
};
const { update: update2 } = await import("/scripts/rendering.js");
const updatePassword = (elem, setPassword)=>(event)=>{
        setPassword(event.target.value);
        return update2(elem);
    };
const updateUserName = (elem, setUserName)=>(event)=>{
        setUserName(event.target.value);
        return update2(elem);
    };
const { validateValue, isRequired, hasMaxLength } = await import("/scripts/validating.js");
const PasswordValidators = [
    isRequired,
    hasMaxLength(10)
];
const UserNameValidators = [
    isRequired,
    hasMaxLength(10)
];
const validatePassword = (password, validationErrors)=>validateValue(password, PasswordValidators, validationErrors);
const validateUserName = (userName, validationErrors)=>validateValue(userName, UserNameValidators, validationErrors);
const { setEffects: setEffects1, setStates: setStates1, useEffect: useEffect1, useState: useState1 } = await import("/scripts/rendering.js");
const Signin_Cookies = ({ "fetch-api": _fetchApi, location: _location, "update-credentials": updateCredentials }, elem)=>{
    const apiOptions = useApiOptions(elem);
    const fetchApi = useFetchApi(elem, _fetchApi);
    const labels = useLabels(elem, SigninCookiesLabels.name, SigninCookiesLabels);
    const location1 = resolveLocation(_location);
    const validationErrors = useValidationErrors(elem);
    const [userName, setUserName] = useState1(setStates1(elem), "username", null, []);
    const [password, setPassword] = useState1(setStates1(elem), "password", null, []);
    const [inProcess, setInProcess] = useState1(setStates1(elem), "in-process", false, []);
    const disabledSigning = validatePassword(password, validationErrors) || validateUserName(userName, validationErrors) || inProcess;
    const credentials = {
        userName,
        password
    };
    const signin = ()=>signinAccount(elem, credentials, fetchApi, apiOptions, location1);
    useEffect1(setEffects1(elem), "update-credentials", ()=>updateCredentials?.(credentials), [
        credentials
    ]);
    return React.createElement(React.Fragment, null, React.createElement("style", {
        css: css10
    }), React.createElement("label", {
        for: "userName",
        class: "username-label"
    }, labels["user-name"]), React.createElement("input", {
        id: "userName",
        value: userName || "",
        type: "text",
        onchange: updateUserName(elem, setUserName),
        placeholder: labels["user-name"]
    }), React.createElement("label", {
        for: "password",
        class: "password-label"
    }, labels["password"]), React.createElement("input", {
        id: "password",
        value: password || "",
        type: "password",
        onchange: updatePassword(elem, setPassword),
        placeholder: labels["password"]
    }), React.createElement("button", {
        class: "signin",
        disabled: disabledSigning,
        onclick: ()=>signinClick(elem, signin, setUserName, setPassword, setInProcess)
    }, React.createElement("span", {
        hidden: !inProcess
    }, spinner), React.createElement("span", null, labels["signin"])));
};
const css10 = `
.signin-cookies {
  display: grid;
  grid-template-columns: max-content 25rem;
  align-items: center;
  column-gap: 1rem;
  row-gap: 1rem;
}

.signin-cookies label {
  justify-self: end;
}

.signin-cookies .signin {
  grid-column: 1 / span 2;
}`;
const Auth_Provider = ({ provider })=>React.createElement(React.Fragment, null, React.createElement("style", {
        css: css11
    }), React.createElement("a", {
        class: "auth-provider-link",
        href: provider.href
    }, provider.icon, React.createElement("span", {
        class: "auth-provider-label"
    }, provider.label)));
const css11 = `
.auth-provider-label {
  margin-left: 0.5rem;
}`;
const createProvider = (href, icon, label)=>Object.freeze({
        href,
        icon,
        label
    });
const createGoogleProvider = (href, label)=>createProvider(href, google, label);
const createFacebookProvider = (href, label)=>createProvider(href, facebook, label);
const createTwitterProvider = (href, label)=>createProvider(href, twitter, label);
const AuthProvidersLabels = Object.freeze({
    "auth-google": "signin with google",
    "auth-facebook": "signin with facebook",
    "auth-twitter": "signin with twitter",
    name: "AuthProvidersLabels"
});
const Auth_Providers = ({ "api-options": _apiOptions, location: _location }, elem)=>{
    const apiOptions = useApiOptions(elem, _apiOptions);
    const labels = useLabels(elem, AuthProvidersLabels.name, AuthProvidersLabels);
    const location1 = resolveLocation(_location);
    const currentUrl = getAbsoluteLocationUrl(location1);
    const returnUrl = encodeURIComponent(currentUrl);
    const googleHref = getGoogleChallengeUrl(apiOptions, returnUrl);
    const facebookHref = getFacebookChallengeUrl(apiOptions, returnUrl);
    const twitterHref = getTwitterChallengeUrl(apiOptions, returnUrl);
    return React.createElement(React.Fragment, null, React.createElement("style", {
        css: css12
    }), React.createElement(Auth_Provider, {
        provider: createGoogleProvider(googleHref, labels["auth-google"]),
        class: "auth-provider google-provider"
    }), React.createElement(Auth_Provider, {
        provider: createFacebookProvider(facebookHref, labels["auth-facebook"]),
        class: "auth-provider facebook-provider"
    }), React.createElement(Auth_Provider, {
        provider: createTwitterProvider(twitterHref, labels["auth-twitter"]),
        class: "auth-provider twitter-provider"
    }));
};
const css12 = `
.auth-providers {
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;
}

.auth-provider {
  margin-left: 0.5rem;
}`;
const isDefaultValue = (value)=>value === null;
const SigninValidationsLabels = Object.freeze({
    "user-name": "user name",
    "password": "password",
    name: "SigninValidationsLabels"
});
const Signin_Validations = ({ credentials }, elem)=>{
    const { userName, password } = credentials;
    const userNameValidation = isDefaultValue(userName) ? "" : validateUserName(userName);
    const passwordValidation = isDefaultValue(password) ? "" : validatePassword(password);
    const labels = useLabels(elem, SigninValidationsLabels.name, SigninValidationsLabels);
    return React.createElement(React.Fragment, null, React.createElement("style", {
        css: css13
    }), React.createElement("label", {
        hidden: !userNameValidation
    }, labels["user-name"]), React.createElement("span", {
        hidden: !userNameValidation,
        class: "username-validation error-color"
    }, userNameValidation), React.createElement("label", {
        hidden: !passwordValidation
    }, labels["password"]), React.createElement("span", {
        hidden: !passwordValidation,
        class: "password-validation error-color"
    }, passwordValidation));
};
const css13 = `
.signin-validations {
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;
  column-gap: 1rem;
  row-gap: 1rem;
}

.signin-validations label {
  justify-self: end;
}`;
const { setStates: setStates2, useState: useState2, update: update3 } = await import("/scripts/rendering.js");
const Login = (_, elem)=>{
    const [credentials, setCredentials] = useState2(setStates2(elem), "credentials", {}, []);
    return React.createElement(React.Fragment, null, React.createElement("style", {
        css: css14
    }), React.createElement("section", {
        class: "signin-cookies-section"
    }, React.createElement(Signin_Cookies, {
        class: "signin-cookies",
        "update-credentials": (credentials)=>{
            setCredentials(credentials);
            update3(elem);
        }
    }), React.createElement(Signin_Validations, {
        class: "signin-validations",
        credentials: credentials
    })), React.createElement("div", {
        class: "login-splitter"
    }, "or"), React.createElement(Auth_Providers, {
        class: "auth-providers"
    }));
};
const css14 = `
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100%;
}

@media (max-width: 48rem) {
  .login {
    flex-direction: column;
  }
}

.login-splitter {
  color: var(--text-color);
}

.signin-cookies-section, .auth-providers {
  padding: 1em;
  border: thick solid var(--neutral-dark-color);
}`;
const loadHome = async ()=>{
    const { Home } = await import("/home.67dfa22aa8f3b31aa31ec04361b4603bc214ca55945864e8c0542218d8f61fd1.js");
    return Home;
};
const { Route } = await import("/scripts/routing.js");
const Routes = ()=>React.createElement(React.Fragment, null, React.createElement(Route, {
        path: getLoginPath(),
        child: React.createElement(Login, {
            class: "login"
        }),
        index: true
    }), React.createElement(Route, {
        path: getHomePath(),
        load: async ()=>{
            const Home = await loadHome();
            return React.createElement(Home, {
                class: "home"
            });
        }
    }), React.createElement(Route, {
        path: getContactPath(),
        child: React.createElement(Contact, {
            class: "contact",
            ...createContactInfo()
        })
    }), React.createElement(Route, {
        path: getForbiddenPath(),
        child: React.createElement(Forbidden, {
            class: "forbidden"
        })
    }));
const { Store } = await import("/scripts/states.js");
const States = ()=>React.createElement(React.Fragment, null, React.createElement(Store, {
        state: createAccountState({
            isAuthenticated: false
        }),
        reducer: createAccountReducer()
    }), React.createElement(Store, {
        state: createUserState({}),
        reducer: createUserReducer()
    }));
const resolveTimeout = (timeout)=>timeout || 3000;
const { update: update4 } = await import("/scripts/rendering.js");
const updateTimerChild = (elem)=>(child, index)=>update4(getHtmlChild(elem, index), child);
const updateTimerChildren = (elem, children)=>children.forEach(updateTimerChild(elem));
const { setEffects: setEffects2, setInitialEffect, useEffect: useEffect2 } = await import("/scripts/rendering.js");
const Timer = ({ timeout: _timeout, children }, elem)=>{
    const effects = setEffects2(elem);
    const timeout = resolveTimeout(_timeout);
    useEffect2(effects, "update-children", ()=>{
        const intervalId = setInterval(()=>updateTimerChildren(elem, children), timeout);
        setInitialEffect(effects, "update-children", ()=>clearInterval(intervalId));
    }, []);
    return React.createElement(React.Fragment, null, children);
};
const { navigate: navigate3 } = await import("/scripts/routing.js");
const { dispatchAction: dispatchAction2 } = await import("/scripts/states.js");
const { update: update5 } = await import("/scripts/rendering.js");
const startApp = async (elem, fetchApi, apiOptions, location1)=>{
    const [data, error] = await getAccountStatusApi(fetchApi, apiOptions, location1);
    if (isFetchApiError(error)) return handleFetchApiError(elem, error, location1);
    dispatchAction2(elem, createSetAccountStatusAction(true));
    navigate3(elem, resolveAuthenticatedUri(location1));
    return data;
};
const startEffect = async (elem, fetchApi, apiOptions, location1, setIsStarting)=>{
    const result = await startApp(elem, fetchApi, apiOptions, location1);
    setIsStarting(false);
    update5(elem);
    return result;
};
const { Router } = await import("/scripts/routing.js");
const { setEffects: setEffects3, setStates: setStates3, useEffect: useEffect3, useState: useState3 } = await import("/scripts/rendering.js");
const App = ({ "fetch-api": _fetchApi, location: _location }, elem)=>{
    const apiOptions = useApiOptions(elem);
    const fetchApi = useFetchApi(elem, _fetchApi);
    const location1 = resolveLocation(_location);
    const [isStarting, setIsStarting] = useState3(setStates3(elem), "is-starting", true, []);
    useEffect3(setEffects3(elem), "start-app", ()=>startEffect(elem, fetchApi, apiOptions, location1, setIsStarting), []);
    return React.createElement(React.Fragment, null, React.createElement("style", {
        css: css15
    }), React.createElement(States, null), React.createElement(Router, {
        "no-skip": true
    }, React.createElement(Header, {
        class: "header"
    }), React.createElement("main", null, React.createElement("div", {
        hidden: !isStarting,
        class: "app-spinner"
    }, spinner), React.createElement(Routes, null)), React.createElement(Footer, {
        class: "footer"
    })), React.createElement(Timer, null, React.createElement(Messages, {
        class: "messages",
        "no-skip": true
    })));
};
const css15 = `
.app {
  height: 100vh;
}

main {
  height: 100%;
  width: 100%;
  display: grid;
  justify-self: start;
  align-self: center;
}

router {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: inherit;
}

routes, route {
  display: block;
  height: inherit;
}

.app-spinner svg {
  height: 5rem;
}
`;
const { Service } = await import("/scripts/rendering.js");
const Services = (props)=>React.createElement(React.Fragment, null, React.createElement(Service, {
        name: "api-options",
        value: props["api-options"]
    }), React.createElement(Service, {
        name: "fetch-api",
        value: props["fetch-api"]
    }), React.createElement(Service, {
        name: "labels",
        value: props["labels"]
    }), React.createElement(Service, {
        name: "language",
        value: props["language"]
    }), React.createElement(Service, {
        name: "validation-errors",
        value: props["validation-errors"]
    }), ...props.children);
const throwError = (message)=>{
    throw new Error(message);
};
const validateLanguage = (lang)=>isValidLanguage(lang) && lang || throwError(`Invalid language ${lang}`);
const settings = {
    apiOptions: {
        apiBaseUrl: "https://localhost:5080",
        apiTimeout: 10000
    }
};
const { render } = await import("/scripts/rendering.js");
const language = validateLanguage(getLanguageParam(location));
const labels = isEnglishLanguage(language) ? null : {
    ...await import(`/scripts/labels.${language}.js`)
};
const validationErrors = isEnglishLanguage(language) ? null : {
    ...await import(`/scripts/validation-errors.${language}.js`)
};
const servicesProps = {
    "api-options": settings.apiOptions,
    "fetch-api": fetchApi,
    language,
    labels,
    ["validation-errors"]: validationErrors
};
const services = React.createElement(Services, servicesProps);
const app = React.createElement(App, {
    class: "app",
    location
});
render(services, document.body);
render(app, document.body);
