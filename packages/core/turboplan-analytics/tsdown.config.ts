import preserveUseClient from "rollup-plugin-preserve-use-client";
import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "./src/index.ts",
    client: "./src/client.tsx",
    server: "./src/server.ts",
  },
  format: ["esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  plugins: [preserveUseClient()],
  ignoreWatch: ["./.turbo", "./dist"],
});
