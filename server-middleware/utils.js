import fs, { accessSync } from 'fs'
import { SCSS_FOLDER, CSS_FOLDER, ROOT_CSS_PATH_FOR_SERVE } from './consts';

const statFileExists = filepath => {
  let flag = true
  try{
    accessSync(filepath, fs.constants.F_OK)
  }catch(e){
    // console.error(e)
    flag = false;
  }
  return flag
}

export const isScssFileExist = uuid => {
  return statFileExists(`${SCSS_FOLDER}/${uuid}.scss`)
}

export const isCssFileExist = uuid => {
  return statFileExists(`${CSS_FOLDER}/${uuid}/index.css`)
}

export const getValidScssFile = uuid => {
  return `${SCSS_FOLDER}/${uuid}.scss`
}

export const getValidCssFolder = uuid => {
  return `${CSS_FOLDER}/${uuid}`
}

export const getRelativeCssFilePath = uuid => {
  return isCssFileExist(uuid) ? `${ROOT_CSS_PATH_FOR_SERVE}${uuid}/index.css` : undefined
}