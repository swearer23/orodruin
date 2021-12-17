module.exports = {
  configureWebpack: config => {
    config.externals = {
      "element-ui": "ELEMENT",
      "vue": "Vue"
    };
  }
  // 选项...
}