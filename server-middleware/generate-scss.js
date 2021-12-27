import { writeFile } from 'fs'
import { SCSS_FOLDER, CSS_FOLDER } from './consts'
import et from 'element-theme'

const main = (uuid, content) => {
  return new Promise((resolve, reject) => {
    const scssFilePath = `${SCSS_FOLDER}/${uuid}.scss`
    const outputpath = `${CSS_FOLDER}/${uuid}`
    writeFile(scssFilePath, content, err => {
      if (err) {
        console.error(err)
        reject(err)
      }
      const ret = et.run({
        config: scssFilePath,
        out: outputpath 
      })
      console.log(ret)
      resolve()
    })
  })
}

export default main