import { parse, stringify } from 'scss-parser'
import { cloneDeep } from 'lodash'
import { readFile } from 'fs'

const updateColor = async (property, value) => {
  return new Promise((resolve, reject) => {
    readFile('element-variables.scss', 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }
      let ast = cloneDeep(parse(data))
      let valDeclaration = ast.value.find(item => {
        if (item.type !== 'declaration') {
          return false
        }
        return item.value[0].value[0].value === property
      }).value
        .find(item => item.type === 'value').value
        .find(item => item.type === 'color_hex')
      try {
        valDeclaration.value = value
        let ret = stringify(ast)
        resolve(ret)
      } catch (err) {
        console.error(err)
        reject(err.message)
      }
    })
  })
}

export default async function (req, res, next) {
  // req is the Node.js http request object
  res.writeHead(200, {"Content-Type": "application/json"})
  try {
    let ret = await updateColor(`--color-danger`, '26384b')
    res.end(JSON.stringify(ret))
  } catch(err) {
    console.error(err)
    res.writeHead(500)
    res.end(JSON.stringify({
      errMsg: err
    }))
  }

  // res is the Node.js http response object

  // next is a function to call to invoke the next middleware
  // Don't forget to call next at the end if your middleware is not an endpoint!
  // next()
  res.end('theme')
}