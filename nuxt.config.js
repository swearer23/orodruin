
module.exports = {
  ssr: true,
  plugins: [
    "~/plugins/element-ui.js",
  ],
  head: {
    link: [
      {rel: 'stylesheet', type: 'text/css', href: '/theme-chalk/index.css'},
    ]
  },
  // css: [
  //   "element-ui/lib/theme-chalk/index.css",
  // ],
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
      path: "/api/update-theme",
      handler: '~/server-middleware/update-theme.js'
    },
  ]
}