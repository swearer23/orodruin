import themeProcessor from './parse-scss'
import { parse, serialize } from 'cookie'
import { v4 as uuidv4 } from 'uuid'
import { isScssFileExist, getRelativeCssFilePath } from './utils'

export default async function (req, res, next) {
  const cookies = parse(req.headers.cookie || '')
  const { uuid = uuidv4() } = cookies
  // req is the Node.js http request object
  try {
    const ret = {}
    ret.theme = await(themeProcessor(isScssFileExist(uuid) ? uuid : undefined))
    ret.cssPath = isScssFileExist(uuid) ? getRelativeCssFilePath(uuid) : undefined
    res.setHeader('Set-Cookie', serialize('uuid', uuid, { httpOnly: true }))
    res.writeHead(200, {"Content-Type": "application/json"})
    res.end(JSON.stringify(ret))
  } catch(err) {
    res.writeHead(500)
    res.end(JSON.stringify({errMsg: err.message}))
  }

  // res is the Node.js http response object

  // next is a function to call to invoke the next middleware
  // Don't forget to call next at the end if your middleware is not an endpoint!
  // next()
}