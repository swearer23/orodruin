import { resolve } from 'path'

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
      path: "/api/*",
      handler: '~/server-middleware/logger.js'
    },
    {
      path: "/api/get-theme",
      handler: '~/server-middleware/get-theme.js'
    },
    {
      path: "/api/update-theme",
      handler: '~/server-middleware/update-theme.js'
    },
  ]
}