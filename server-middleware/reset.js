import { unlinkSync, rmSync } from 'fs'
import { getValidScssFile, getValidCssFolder, isScssFileExist } from './utils'
import cookie from 'cookie'

export default async function (req, res, next) {

  const cookies = cookie.parse(req.headers.cookie || '')
  const { uuid } = cookies
  if (!uuid) {
    res.writeHead(400)
    res.end(JSON.stringify({errMsg: 'uuid is required, please enable cookie while using this application'}))
  }
  try {
    if (isScssFileExist(uuid)) {
      unlinkSync(getValidScssFile(uuid))
      rmSync(getValidCssFolder(uuid), {recursive: true, force: true})
    }
    res.writeHead(200, {"Content-Type": "application/json"})
    res.end()
  } catch(err) {
    console.error(err)
    res.writeHead(500)
    res.end(JSON.stringify({errMsg: err.message}))
  }
  // req is the Node.js http request object
  // res is the Node.js http response object

  // next is a function to call to invoke the next middleware
  // Don't forget to call next at the end if your middleware is not an endpoint!
  // next()
}