import fs, { accessSync } from 'fs'
import { SCSS_FOLDER } from './consts';

export const isScssFileExist = uuid => {
  let flag = true;
  try{
    accessSync(`${SCSS_FOLDER}/${uuid}.scss`, fs.constants.F_OK)
  }catch(e){
    // console.error(e)
    flag = false;
  }
  return flag;
}

export const getValidScssFile = uuid => {
  return `${SCSS_FOLDER}/${uuid}.scss`
}