import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import nodeResolve from "@rollup/plugin-node-resolve";
import path from "path";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";

const manualChunks = (id) => path.parse(id).name;

const plugins = [
  nodeResolve(),
  PeerDepsExternalPlugin(),
  typescript(),
];

const chunkFileNames = "[name].js";

const dir = {
  cjs: "dist",
  es: "dist/es",
};

export default ({ browser, displayName, globals = {}, source }) => [
  {
    external: Object.keys(globals),
    input: source,
    output: [
      {
        chunkFileNames,
        file: `${dir.cjs}/index.js`,
        format: "cjs",
      },
      {
        chunkFileNames,
        file: `${dir.es}/index.js`,
        format: "es",
      },
    ],
    plugins,
  },
  {
    external: Object.keys(globals),
    input: source,
    output: [
      {
        file: browser,
        format: "umd",
        globals,
        name: displayName,
        sourcemap: true,
      },
      {
        file: "dist/iife/index.js",
        format: "iife",
        globals,
        name: displayName,
      },
      {
        file: "dist/umd/index.min.js",
        format: "umd",
        globals,
        name: displayName,
        plugins: [terser()],
        sourcemap: true,
      },
    ],
    plugins,
  },
];
