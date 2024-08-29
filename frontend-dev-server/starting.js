import { createContextOptions } from "./context-options/creating.js"
import { setServerOptionsContextOptions, setServerOptionsCertificates } from "./server-options/setting.js"
import { resolveCwd } from "./resolving.js"
import { startLiveServer } from "/serving.js"
import settings from "./settings.json" with { type: "json" }

const importMap = resolveCwd() + "/deps.map.json"
const contextOptions = createContextOptions(resolveCwd(), {importMap})

setServerOptionsCertificates(settings.serverOptions)
setServerOptionsContextOptions(settings.serverOptions, contextOptions)
startLiveServer(settings.serverOptions)