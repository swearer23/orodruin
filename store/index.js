import axios from 'axios'
import b64ToBlob from "b64-to-blob"
import fileSaver from "file-saver"
import { Message } from 'element-ui'
import * as getters from './getters'
export { getters }

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

const transformStyleListToTree = data => {
  const ret = {}
  data.forEach(section => {
    ret[section.title.toLowerCase()] = section.declarations
  })
  return ret
}

export const state = () => ({
  theme: [],
  style: {},
  isLoading: false
})

export const actions = {
  configSection ({ commit }, sectionName) {
    commit('onStartConfigSection', sectionName)
  },

  startLoading ({commit}) {
    commit('onStartLoading')
  },

  async get ({ commit }) {
    try {
      const {data: {theme, cssPath}} = await axios.get('/api/get-theme')
      commit('onThemeUpdated', {theme, cssPath})
    } catch (err) {
      console.error(err)
    }
  },

  async updateTheme (context, payload) {
    try {
      context.commit('onStartLoading')
      const {data: {theme, cssPath}} = await axios.post('/api/update-theme', payload)
      context.commit('onThemeUpdated', {theme, cssPath})
    } catch (err) {
      console.error(err)     
    }
  },

  async deleteConfig (context) {
    try {
      context.commit('onStartLoading')
      await axios.post('/api/reset')
      const theme = await axios.get('/api/get-theme')
      document.querySelector('#chalk-style').remove()
      context.commit('onThemeUpdated', theme.data)
    } catch (err) {
      console.error(err)
    }
  },

  async downloadTheme (context) {
    try {
      context.commit('onStartLoading')
      const base64 = await axios.post('/api/download-theme')
      fileSaver.saveAs(b64ToBlob(base64.data, "application/zip"), 'theme.zip')
    } catch (err) {
      Message.error(err.message)
      console.error(err)
    } finally {
      context.commit('onFinishLoading')
    }
  },

  updateUploadedTheme ({commit}, payload) {
    commit('onThemeUpdated', payload)
  }
}

export const mutations = {
  onThemeUpdated (state, {theme, cssPath}) {
    updateCssDomNode(cssPath)
    state.theme = theme
    state.style = Object.assign({}, transformStyleListToTree(theme))
    state.isLoading = false
  },
  onStartLoading (state) {
    state.isLoading = true
  },
  onFinishLoading (state) {
    state.isLoading = false
  },
  onFinishedReset (state) {
    state.isLoading = false
  },
  onStartConfigSection (state, sectionName) {
    state.configSection = sectionName
  }
}
