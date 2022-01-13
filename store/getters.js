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