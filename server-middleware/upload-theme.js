import { parse }from 'cookie'
import { generateFromCss } from './generate-scss'
import formidable from 'formidable'
import { extname } from 'path'

export default async function (req, res, next) {
  const cookies = parse(req.headers.cookie || '')
  const { uuid = uuidv4() } = cookies
  const form = new formidable.IncomingForm()
  form.parse(req, async (err, fields, files) => {
    if (extname(files.cssfile.originalFilename) === '.css') {
      try {
        generateFromCss(uuid, files.cssfile.filepath)
        res.writeHead(200)
        res.end()
      } catch (err) {
        res.writeHead(500)
        res.end(JSON.stringify({errMsg: err.message}))
      }
    } else {
      res.writeHead(400)
      res.end(JSON.stringify({
        errmsg: 'only css file is allowed'
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