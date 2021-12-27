import { parse } from 'scss-parser'
import { readFile } from 'fs'
import { SCSS_FOLDER, DEFAULT_SCSS_TEMPLATE } from './consts'

Array.prototype.last = function () {
  return this[this.length - 1]
}

const isMCSectionTitle = mc => {
  return mc.type === 'comment_multiline' && mc.start.line !== mc.next.line
}

const parseValue = valueList => {
  return valueList.reduce((a, b) => {
    let result = b.value
    if (b.type == 'color_hex')
      result = `#${b.value}`
    if (b.type == 'variable')
      result = `$${b.value}`
    if (b.type == 'function') {
      let args = b.value[1].value.reduce((a, b) => {
        return a = a + b.value
      }, '')
      result = `${b.value[0].value}(${args})`
      // console.log(result, 999)
    }
    if (b.type == 'declaration' || b.type == 'value' || b.type == 'property') {
      result = parseValue(b.value)
    }
    if (b.type == 'parentheses')
      result = `(${parseValue(b.value)})`
    a.push(result)
    return a
  }, []).join('')
}

const parseProp = propList => {
  let result = propList.reduce((a, b) => {
    return a = a + b.value
  }, '')
  return result
}

const parseStyleProp = declaration => {
  const propDefinition = {
    propName: declaration.filter(dec => {return dec.type === 'property'}).map(p => {
      return parseProp(p.value)
    }).join(' '),
    propValue: declaration.filter(dec => {return dec.type === 'value'}).map(v => {
      return parseValue(v.value)
    }).join(' ')
  }
  return propDefinition
}

const splitByMultipleComment = ast => {
  const sectionList = []
  for (let item of ast.value) {
    if (isMCSectionTitle(item)) {
      const sectionTitle = {
        title: item.value.split("\n").shift().trim(),
        declarations: []
      }
      sectionList.push(sectionTitle)
    } else if (item.type === 'declaration') {
      if (item.value[0].type !== 'property') {
        console.error(item.value)
      }
      sectionList.last().declarations.push(parseStyleProp(item.value))
    } else {
      // console.log(item.type)
    }
  }
  return sectionList
}

const main = uuid => {
  const path = uuid ? `${SCSS_FOLDER}/${uuid}.scss` : DEFAULT_SCSS_TEMPLATE
  return new Promise((resolve, reject) => {
    try {
      readFile(path, 'utf8', (err, data) => {
        if (err) {
          reject(err)
        }
        let ast = parse(data)
        const sectionList = splitByMultipleComment(ast)
        resolve(sectionList)
      })
    } catch (err) {
      console.log(err)
      reject(err)
    }
  })
}

export default main

// Create an AST from a string of SCSS
