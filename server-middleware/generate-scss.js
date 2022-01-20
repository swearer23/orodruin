import { writeFile } from 'fs'
import { SCSS_FOLDER, CSS_FOLDER } from './consts'
import et from 'element-themex'

const main = (uuid, content) => {
  return new Promise((resolve, reject) => {
    const scssFilePath = `${SCSS_FOLDER}/${uuid}.scss`
    const outputpath = `${CSS_FOLDER}/${uuid}`
    writeFile(scssFilePath, content, {flag: 'w'},  err => {
      if (err) {
        console.error(err.stack, 1111111111111)
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