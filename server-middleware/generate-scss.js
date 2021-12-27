import { writeFile } from 'fs'
import { SCSS_FOLDER } from './consts'

const main = (uuid, content) => {
  return new Promise((resolve, reject) => {
    console.log(`${SCSS_FOLDER}/${uuid}.scss`)
    writeFile(`${SCSS_FOLDER}/${uuid}.scss`, content, err => {
      if (err) {
        console.error(err)
        reject(err)
      }
      resolve()
    })
  })
}

export default main