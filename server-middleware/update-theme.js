import { parse, stringify } from 'scss-parser'
import { cloneDeep } from 'lodash'
import { readFile } from 'fs'
import { v4 as uuidv4 } from 'uuid';
import generateScssFile from './generate-scss'
import parseScssFile from './parse-scss'

const updateColor = (property, value, sessionId) => {
  const uuid = sessionId ?? uuidv4()
  return new Promise((resolve, reject) => {
    readFile('element-variables.scss', 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }
      try {
        let ast = cloneDeep(parse(data))
        let valDeclaration = ast.value.find(item => {
          if (item.type !== 'declaration') {
            return false
          }
          return item.value[0].value[0].value === property
        }).value
          .find(item => item.type === 'value').value
          .find(item => item.type === 'color_hex')
        valDeclaration.value = value
        const newScss = stringify(ast)
        generateScssFile(uuid, newScss)
          .then(() => {
            const ret = parseScssFile(`${uuid}.scss`)
            resolve(ret)
          })
          .catch(err => {
            reject(err.message)
          })
      } catch (err) {
        reject(err.message)
      }
    })
  })
}

export default async function (req, res, next) {
  let body = []
  req.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', async () => {
    body = Buffer.concat(body).toString();
    const {propName, propValue} = JSON.parse(body)
    try {
      res.writeHead(200, {"Content-Type": "application/json"})
      let ret = await updateColor(propName, propValue)
      res.end(JSON.stringify(ret))
    } catch(err) {
      console.error(err)
      res.writeHead(500)
      res.end(JSON.stringify({
        errMsg: err
      }))
    }
    // At this point, we have the headers, method, url and body, and can now
    // do whatever we need to in order to respond to this request.
  });
  // req is the Node.js http request object
  // res is the Node.js http response object

  // next is a function to call to invoke the next middleware
  // Don't forget to call next at the end if your middleware is not an endpoint!
  // next()
}