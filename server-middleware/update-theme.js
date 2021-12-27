import { parse, stringify } from 'scss-parser'
import { cloneDeep } from 'lodash'
import { readFile } from 'fs'
import { v4 as uuidv4 } from 'uuid';
import generateScssFile from './generate-scss'
import parseScssFile from './parse-scss'

const updateColor = async (property, value, sessionId) => {
  const uuid = sessionId ?? uuidv4()
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
        generateScssFile(uuid, ret)
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
  try {
    res.writeHead(200, {"Content-Type": "application/json"})
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