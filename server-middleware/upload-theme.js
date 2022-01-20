import fs from 'fs'
import { parse, serialize }from 'cookie'
import formidable from 'formidable'
import { extname } from 'path'
import themeProcessor from './parse-scss'
import { SCSS_FOLDER } from './consts'
import { deleteCssDirByUUID, getRelativeCssFilePath } from './utils'
import { generateFromScssFile } from './generate-scss'

export default function (req, res, next) {
  const cookies = parse(req.headers.cookie || '')
  const { uuid = uuidv4() } = cookies
  const form = new formidable.IncomingForm()
  form.parse(req, async (err, fields, files) => {
    if (extname(files.cssfile.originalFilename) === '.scss') {
      try {
        const ret = {}
        const scssFilePath = `${SCSS_FOLDER}/${uuid}.scss`
        fs.renameSync(files.cssfile.filepath, scssFilePath)
        deleteCssDirByUUID(uuid)
        await generateFromScssFile(uuid)
        ret.theme = await(themeProcessor(uuid))
        ret.cssPath = getRelativeCssFilePath(uuid)
        res.setHeader('Set-Cookie', serialize('uuid', uuid, { httpOnly: true }))
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(ret))
      } catch (err) {
        console.error(err)
        res.writeHead(500)
        res.end(JSON.stringify({errmsg: err.message}))
      }
    } else {
      res.writeHead(400)
      res.end(JSON.stringify({
        errmsg: 'only scss file is allowed'
      }))
    }
  })
  // let body = []
  // console.log(Object.keys(req))
  // req.on('error', (err) => {
  //   console.error(err);
  // }).on('data', (chunk) => {
  //   body.push(chunk);
  // }).on('end', async () => {
  //   body = Buffer.concat(body).toString();
  //   // console.log(Object.keys(body))
  //   // const {section, propName, propValue} = JSON.parse(body)
  //   // try {
  //   //   res.writeHead(200, {"Content-Type": "application/json"})
  //   //   let ret = {}
  //   //   ret.theme = await update(section, propName, propValue, uuid)
  //   //   ret.cssPath = getRelativeCssFilePath(uuid)
  //   //   res.end(JSON.stringify(ret))
  //   // } catch(err) {
  //   //   console.error(err)
  //   //   res.writeHead(500)
  //   //   res.end(JSON.stringify({
  //   //     errMsg: err
  //   //   }))
  //   // }
  //   // At this point, we have the headers, method, url and body, and can now
  //   // do whatever we need to in order to respond to this request.
  // });
  // generateFromCss(uuid)
  // res.writeHead(500)
  // res.end('shit')
  // req is the Node.js http request object
  // try {
  //   const ret = {}
  //   if (isCssFileExist(uuid)) {
  //     const zip = new JSZip()
  //     addFilesFromDirectoryToZip(uuid, zip.folder('theme'))
  //     const zipAsBase64 = await zip.generateAsync({ type: "base64" });
  //     res.writeHead(200, {"Content-Type": "plain/text"})
  //     res.end(zipAsBase64)
  //   } else {
  //     res.writeHead(400)
  //     res.end(JSON.stringify({errmsg: 'css file is not created yet'}))
  //   }
  // } catch(err) {
  //   console.error(err)
  //   res.writeHead(500)
  //   res.end(JSON.stringify({errMsg: err.message}))
  // }

  // res is the Node.js http response object

  // next is a function to call to invoke the next middleware
  // Don't forget to call next at the end if your mi
}