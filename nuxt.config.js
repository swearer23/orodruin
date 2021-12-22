module.exports = {
  ssr: true,
  plugins: [
    "~/plugins/element-ui.js",
  ],
  css: [
    "element-ui/lib/theme-chalk/index.css",
  ],
  loaders: {
    less: {}
  },
  build: {
    vendor: ['element-ui']
  },
  serverMiddleware: [
    {
      path: "/api/get-theme",
      handler: '~/server-middleware/get-theme.js'
    },
    {
      path: "/api/logger",
      handler: '~/server-middleware/logger.js'
    }
  ]
}