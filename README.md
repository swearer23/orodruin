# orodruin
element-ui scss theme configuration tool

## 与element ui官网上的 [主题生成器](https://element.eleme.cn/#/zh-CN/theme/preview) 类似

但可以

* 在此基础上进一步做一些定制化
* 或者你希望可以私有化部署主题生成器这个应用

## 需要主题

由于 当前使用的 Node Sass 无法运行在nodejs > 14 的版本上

因此你需要使用NVM或者其他方式把运行环境的nodejs版本设置到14以下

## 快速开始

FYI: 本应用基于nuxtjs
使用时：

1. clone 源代码
2. 执行 npm i
3. 使用pm2或者其他的进程守护启动应用 (或者直接在开发环境运行也可以: npm run dev)

就万事俱备了

打开浏览器你应该会看到如下图所示的样子

(开发环境默认为3000端口)

![](https://github.com/swearer23/orodruin/blob/master/preview/1642648631256.jpg)

***

# orodruin
element-ui scss theme configuration tool

## much like theme preview in element ui site [theme preview](https://element.eleme.cn/#/zh-CN/theme/preview)

but this one is open sourced

* in case you can tweak any customization you like
* in case you need to self host the theme generator

## caution

since [element theme](https://github.com/ElementUI/element-theme) does not work smoothly on Nodejs > v12

so you might need to host this project under Nodejs <= 12 by nvm settings

## quick start

the application is built upon Nuxtjs

1. clone this project
2. npm i
3. pm2 for process supervisor or whatever you like (or just run it in development mode: npm run dev)

then, there you go

open browser, and you should see something like this

![](https://github.com/swearer23/orodruin/blob/master/preview/1642648631256.jpg)
