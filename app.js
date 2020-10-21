const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
var session = require('express-session')
const userRouter = require('./router/user.js')
// 用户模块 登录注册
const pinglunRouter = require('./router/pinglun.js')
// 评论模块

app.engine('html', require('express-art-template'))
// app.use(express.static('./public'))
// 设置views为views文件夹，默认为views文件夹，
app.set('views', path.join(__dirname, '/views/'))
app.use(express.static('./node_modules'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// session
app.use(session({
  // 加密字符串
  secret: 'Usersession',
  resave: false,
  saveUninitialized: false
}))


app.use(userRouter)
app.use(pinglunRouter)

app.listen(8080, (err) => {
  if (err) {
    console.log('err at app.listen', err)
  }
  console.log('app is running at port 8080');
})