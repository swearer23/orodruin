export const colors = state => Object.assign([], state.style.color) || []

export const filteredColors = state => {
  const ret = []
  state.style.color.forEach(color => {
    if (!color.propName.includes('light'))
      ret.push(Object.assign({}, color, {light: []}))
    else
      ret.find(item => {
        return color.propName.startsWith(item.propName)
      })?.light.push(color)
  })
  return ret
}

export const getColorByPropName = state => {
  return propName => {
    return state.style.color.find(color => {
      return color.propName === `--color-${propName}`
    })?.propValue 
  }
}

export const getPropValueBySectionAndPropName = state => {
  return (section, propName) => {
    let propValue = state.style[section].find(item => {
      return item.propName === `--${propName}`
    })?.propValue
    if (propValue) {
      if (propValue.trim().startsWith('$')) {
        return Object.values(state.style).flat().find(item => {
          return item.propName === propValue.replace('$', '').replace('!default', '').trim()
        })?.propValue.replace('!default', '').trim()
      } else {
        return propValue.replace('!default', '').trim()
      }
    } else {
      return undefined
    }
  }
}
