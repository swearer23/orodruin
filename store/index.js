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
  }
}

export const mutations = {
  onThemeUpdated (state, theme) {
    state.theme = theme
  }
}