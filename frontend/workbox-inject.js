// eslint-disable-next-line no-undef
const { injectManifest } = require("workbox-build");

injectManifest({
  swSrc: "./public/sw.js",
  swDest: "./dist/sw.js",
  globDirectory: "./dist",
  globPatterns: ["**/*.{js,css,html,png,jpg,jpeg,svg}"],
}).then(({ count, size }) => {
  console.log(
    `Generated service worker with ${count} files, totaling ${size} bytes.`
  );
});
