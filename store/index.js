import axios from 'axios'

export const state = () => ({
  theme: []
})

export const actions = {
  async get ({ commit }) {
    try {
      const theme = await axios.get('http://localhost:3000/api/get-theme')
      commit('onThemeUpdated', theme.data)
    } catch (err) {
      console.error(err)
    }
  },

  async updateTheme (context, payload) {
    try {
      const theme = await axios.post('http://localhost:3000/api/update-theme', payload)
      context.commit('onThemeUpdated', theme.data)
    } catch (err) {
      console.error(err)     
    }
  }
}

export const mutations = {
  onThemeUpdated (state, theme) {
    document.querySelector('#chalk-style')?.remove()
    const styleDomNode = document.createElement('link')
    styleDomNode.setAttribute('rel', 'stylesheet');
    styleDomNode.setAttribute('type', 'text/css');
    styleDomNode.setAttribute('href', 'http://localhost:3000/.css_files/36b5bf66-aa5a-45a5-b0a7-2be1d9751345/index.css?'+new Date())
    styleDomNode.id = 'chalk-style'
    document.querySelector('head').appendChild(styleDomNode)
    state.theme = theme
  }
}