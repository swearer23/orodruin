import themeProcessor from './parse-scss'

export default async function (req, res, next) {
  // req is the Node.js http request object
  res.writeHead(200, {"Content-Type": "application/json"})
  try {
    const ret = await(themeProcessor())
    res.end(JSON.stringify(ret))
  } catch(err) {
    res.writeHead(500)
    res.end({
      errMsg: err
    })
  }

  // res is the Node.js http response object

  // next is a function to call to invoke the next middleware
  // Don't forget to call next at the end if your middleware is not an endpoint!
  // next()
  res.end('theme')
}