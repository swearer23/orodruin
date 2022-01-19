import fs from 'fs'
import { parse } from 'cookie'
import { isCssFileExist, getValidCssFolder } from './utils'
import JSZip from "jszip"


const addFilesFromDirectoryToZip = (directoryPath = "", zip) => {
  const directoryContents = fs.readdirSync(directoryPath, {
    withFileTypes: true,
  });
 
  directoryContents.forEach(({ name }) => {
    const path = `${directoryPath}/${name}`;

    if (fs.statSync(path).isFile()) {
      zip.file(path, fs.readFileSync(path, "utf-8"));
    }

    if (fs.statSync(path).isDirectory()) {
      addFilesFromDirectoryToZip(path, zip);
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
      addFilesFromDirectoryToZip(getValidCssFolder(uuid), zip)
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