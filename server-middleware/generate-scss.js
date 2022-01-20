import { writeFile } from 'fs'
import { SCSS_FOLDER, CSS_FOLDER } from './consts'
import et from 'element-themex'

export const generateFromCss = (uuid, cssfilepath) => {
  return new Promise((resolve, reject) => {
    et.init(cssfilepath, (err, res) => {
      console.log(111, res)
      resolve()
    }, err => {
      console.log(222, err)
      reject(err)
    })
  })
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
      const ret = et.run({
        config: scssFilePath,
        out: outputpath,
        minimize: true
      }, () => {
        resolve()
      })
    })
  })
}

export default main