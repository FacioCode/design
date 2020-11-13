import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import nodeResolve from "@rollup/plugin-node-resolve";
import path from "path";
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";

const manualChunks = (id) => path.parse(id).name;
const plugins = [
  nodeResolve(),
  PeerDepsExternalPlugin(),
  typescript(),
  postcss({
    modules: true,
  }),
];

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default ({ browser, directories, displayName, source }) => [
  {
    input: source,
    manualChunks,
    output: {
      chunkFileNames: "[name].js",
      dir: "dist",
      format: "cjs",
    },
    plugins,
  },
  {
    input: source,
    manualChunks,
    output: {
      chunkFileNames: "[name].js",
      dir: "dist/es",
      format: "es",
    },
    plugins,
  },
  {
    input: source,
    output: {
      file: browser,
      format: "umd",
      globals: {
        "react": "React",
      },
      name: displayName,
      sourcemap: true,
    },
    plugins,
  },
];
