import fs from 'fs'
import { parse } from 'cookie'
import { isCssFileExist, getValidCssFolder, getValidScssFile } from './utils'
import path from 'path'
import JSZip from "jszip"


const addFilesFromDirectoryToZip = (uuid, zipFolder, relativePath = '') => {
  const directoryPath = getValidCssFolder(uuid)
  const directoryContents = fs.readdirSync(path.resolve(directoryPath, relativePath), {
    withFileTypes: true,
  });
 
  directoryContents.forEach(({ name }) => {
    const absPath = `${path.resolve(directoryPath, relativePath)}/${name}`;

    if (fs.statSync(absPath).isFile()) {
      zipFolder.file(path.relative(directoryPath, absPath), fs.readFileSync(absPath, "utf-8"));
    }

    if (fs.statSync(absPath).isDirectory()) {
      addFilesFromDirectoryToZip(uuid, zipFolder, path.relative(directoryPath, absPath))
    }
  });
};

export default async function (req, res, next) {
  const cookies = parse(req.headers.cookie || '')
  const { uuid } = cookies
  // req is the Node.js http request object
  try {
    const ret = {}
    if (isCssFileExist(uuid)) {
      const zip = new JSZip()
      addFilesFromDirectoryToZip(uuid, zip.folder('theme'))
      zip.file('index.scss', fs.readFileSync(getValidScssFile(uuid), "utf-8"))
      const zipAsBase64 = await zip.generateAsync({ type: "base64" });
      res.writeHead(200, {"Content-Type": "plain/text"})
      res.end(zipAsBase64)
    } else {
      res.writeHead(400)
      res.end(JSON.stringify({errmsg: 'css file is not created yet'}))
    }
  } catch(err) {
    console.error(err)
    res.writeHead(500)
    res.end(JSON.stringify({errMsg: err.message}))
  }

  // res is the Node.js http response object

  // next is a function to call to invoke the next middleware
  // Don't forget to call next at the end if your mi
}