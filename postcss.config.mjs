/** @type {import('postcss-load-config').Config} */
// Force the LightningCSS wasm transformer to avoid native binary resolution
// problems (works in CI and Vercel). Use dynamic imports so we can set the
// env var before the plugin code loads.
process.env.CSS_TRANSFORMER_WASM = process.env.CSS_TRANSFORMER_WASM ?? "1";

const tailwindcss = (await import("tailwindcss")).default;
const autoprefixer = (await import("autoprefixer")).default;

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
  ],
};
