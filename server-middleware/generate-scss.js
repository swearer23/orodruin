import { writeFile } from 'fs'
import { SCSS_FOLDER, CSS_FOLDER } from './consts'
import et from 'element-themex'
import { resolve } from 'path'

export const generateFromScssFile = uuid => {
  return new Promise((resolve, reject) => {
    const scssFilePath = `${SCSS_FOLDER}/${uuid}.scss`
    const outputpath = `${CSS_FOLDER}/${uuid}`
    buildCssFromScss(scssFilePath, outputpath, () => {resolve()})
  })
}

export const buildCssFromScss = (scssFilePath, outputpath, callback) => {
  const ret = et.run({
    config: scssFilePath,
    out: outputpath,
    minimize: true
  }, callback)
}

const main = (uuid, content) => {
  return new Promise((resolve, reject) => {
    const scssFilePath = `${SCSS_FOLDER}/${uuid}.scss`
    const outputpath = `${CSS_FOLDER}/${uuid}`
    writeFile(scssFilePath, content, {flag: 'w'},  err => {
      if (err) {
        reject(err)
        return
      }
      buildCssFromScss(scssFilePath, outputpath, () => {resolve()})
    })
  })
}

export default main