import { bundle } from  "/emit.ts"
import { encodeHex } from "/hex.ts"
import { resolve } from "/path.ts"

/* WEBPACK, PARCEL, ROLLUP bundlers-free! */
/*
  - hash-based modules versioning.
  - lazy loading module [eg. home module].
  - multiple bundled root modules.
  - css-in-js modules.
  - pure script, 100% control.
*/

const bundleIndex = async (cwd, homeName) => {
  const { code: indexBundle } = await bundle(cwd + "/index.js");
  const indexWithHashes = indexBundle
      .replaceAll("../home.jsx", "/" + homeName)
      .replaceAll("./home.jsx", "/" + homeName)
  const encodedIndex = new TextEncoder().encode(indexWithHashes)
  const hashIndex = await crypto.subtle.digest("SHA-256", encodedIndex)
  const indexName = `index.${encodeHex(hashIndex)}.js`
  return { indexName, encodedIndex }
}

const bundleHome = async (cwd) => {

  const { code: homeBundle } = await bundle(resolve(cwd, "../frontend-components/home/home.jsx"))
  const encodedHome = new TextEncoder().encode(homeBundle)
  const hashHome = await crypto.subtle.digest("SHA-256", encodedHome)
  const homeName = `home.${encodeHex(hashHome)}.js`
  return { homeName, encodedHome }
}

const bundleLabels = async (cwd, lang = "en") => {
  const { code: labelsBundle } = await bundle(resolve(cwd, `../frontend-components/labels.${lang}.js`))
  const encodedLabels = new TextEncoder().encode(labelsBundle)
  const labelsName = `labels.${lang}.js`
  return { labelsName, encodedLabels }
}

const compileIndexHtml = (cwd, indexName, indexCssName) => {
  const indexHtml = Deno.readTextFileSync(cwd + "/index.html")
  const indexHtmlWithHashes = indexHtml
    .replace("index.js", indexName)
    .replace("index.css", indexCssName)
  const encodedIndexHtml = new TextEncoder().encode(indexHtmlWithHashes)
  return { indexHtmlName: "index.html", encodedIndexHtml }
}

const compileIndexCss = async (cwd) => {
  const indexCss = await Deno.readTextFile(cwd + "/index.css")
  const encodedIndexCss = new TextEncoder().encode(indexCss)
  const hashIndexCss = await crypto.subtle.digest("SHA-256", encodedIndexCss)
  const indexCssName = `index.${encodeHex(hashIndexCss)}.css`
  return { indexCssName, encodedIndexCss }
}

const copyFile = (source, target, name) =>
  Deno.copyFileSync(source + "/" + name, target + "/" + name)

const copyFiles = (source, target) =>
  Deno.readDirSync(source)
    .filter(entry => entry.isFile)
    .forEach(file => copyFile(source, target, file.name))

const makeDirectory = (dir) =>
  Deno.mkdirSync(dir, { recursive: true })

const removeDirectory = (dir) =>
  { try { Deno.removeSync(dir, { recursive: true })} catch {;} }


const target = "/workspaces/identity-app/backend-app/wwwroot"
const targetScripts = target + "/scripts"
const targetImages = target + "/images"

const source = import.meta.dirname
const sourceScripts = source + "/scripts"
const sourceImages = source + "/images"

console.log("[publishing]", "bundle home file")
const { homeName, encodedHome } = await bundleHome(source)

console.log("[publishing]", "bundle en labels file")
const { labelsName: labelsNameEn, encodedLabels: encodedLabelsEn } = await bundleLabels(source, "en")


console.log("[publishing]", "bundle ro labels file")
const { labelsName: labelsNameRo, encodedLabels: encodedLabelsRo } = await bundleLabels(source, "ro")

console.log("[publishing]", "bundle index file")
const { indexName, encodedIndex } = await bundleIndex(source, homeName)

console.log("[publishing]", "compile index css file")
const { indexCssName, encodedIndexCss } = await compileIndexCss(source)

console.log("[publishing]", "compile index html file")
const { indexHtmlName, encodedIndexHtml } = compileIndexHtml(source, indexName, indexCssName)


console.log("[publishing]", "remove app wwwroot directory")
removeDirectory(target)

console.log("[publishing]", "make images app wwwroot directory")
makeDirectory(targetImages)

console.log("[publishing]", "make scripts app wwwroot directory")
makeDirectory(targetScripts)

console.log("[publishing]", "publish bundled and compiled files to app wwwroot directory")
Deno.writeFileSync(target + "/" + homeName, encodedHome)
Deno.writeFileSync(target + "/" + indexName, encodedIndex)
Deno.writeFileSync(target + "/" + indexCssName, encodedIndexCss)
Deno.writeFileSync(target + "/" + indexHtmlName, encodedIndexHtml)
Deno.writeFileSync(sourceScripts + "/" + labelsNameEn, encodedLabelsEn)
Deno.writeFileSync(sourceScripts + "/" + labelsNameRo, encodedLabelsRo)

console.log("[publishing]", "copy images, scripts, settings to app wwwroot directory")
copyFiles(sourceImages, targetImages)
copyFiles(sourceScripts, targetScripts)
copyFile(source, target, "settings.js")

console.log("[publishing]", "published www identity to", target)