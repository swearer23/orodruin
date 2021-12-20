module.exports = {
  plugins: [
    "~/plugins/element-ui.js",
  ],
  css: [
    "element-ui/lib/theme-chalk/index.css",
  ],
  build: {
    vendor: ['element-ui']
  }
}