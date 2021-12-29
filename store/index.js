import axios from 'axios'

const updateCssDomNode = cssPath => {
  if (cssPath) {
    document.querySelector('#chalk-style')?.remove()
    const styleDomNode = document.createElement('link')
    styleDomNode.setAttribute('rel', 'stylesheet');
    styleDomNode.setAttribute('type', 'text/css');
    styleDomNode.setAttribute('href', `${cssPath}?`+new Date())
    styleDomNode.id = 'chalk-style'
    document.querySelector('head').appendChild(styleDomNode)
  }
}

export const state = () => ({
  theme: [],
  isLoading: false
})

export const actions = {
  async get ({ commit }) {
    try {
      const {data: {theme, cssPath}} = await axios.get('http://localhost:3000/api/get-theme')
      commit('onThemeUpdated', {theme, cssPath})
    } catch (err) {
      console.error(err)
    }
  },

  async updateTheme (context, payload) {
    try {
      context.commit('onStartLoading')
      const {data: {theme, cssPath}} = await axios.post('http://localhost:3000/api/update-theme', payload)
      context.commit('onThemeUpdated', {theme, cssPath})
    } catch (err) {
      console.error(err)     
    }
  },

  async deleteConfig (context) {
    try {
      context.commit('onStartLoading')
      await axios.post('http://localhost:3000/api/reset')
      const theme = await axios.get('http://localhost:3000/api/get-theme')
      document.querySelector('#chalk-style').remove()
      context.commit('onThemeUpdated', theme.data)
    } catch (err) {
      console.error(err)
    }
  }
}

export const mutations = {
  onThemeUpdated (state, {theme, cssPath}) {
    console.log(cssPath)
    updateCssDomNode(cssPath)
    state.theme = theme
    state.isLoading = false
  },
  onStartLoading (state) {
    state.isLoading = true
  },
  onFinishedReset (state) {
    state.isLoading = false
  }
}