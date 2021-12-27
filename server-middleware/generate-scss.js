import { writeFile } from 'fs'

const main = (uuid, content) => {
  return new Promise((resolve, reject) => {
    writeFile(`./.scss_files/${uuid}.scss`, content, err => {
      if (err) {
        reject(err)
      }
      resolve()
    })
  })
}

export default main