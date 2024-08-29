import { DefaultLocation } from "./getting.js";

export const resolveLocation = (location) => (location ?? globalThis.location) ?? DefaultLocation