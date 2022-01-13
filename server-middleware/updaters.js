import { parse } from 'scss-parser'

const color = function (valDeclaration, value) {
  valDeclaration.value.find(item => item.type === 'color_hex').value = value
}

const typography = (valDeclaration, value) => {
  valDeclaration.value = parse(` ${value} !default`).value
}

export default {
  color, typography
}