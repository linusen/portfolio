import coreWeb from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const core = coreWeb && coreWeb.default ? coreWeb.default : coreWeb;
const ts = typescript && typescript.default ? typescript.default : typescript;

export default [
  ...(Array.isArray(core) ? core : [core]),
  ...(Array.isArray(ts) ? ts : [ts])
];
