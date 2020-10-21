const Schema = require('./dbutil')
const mongoose = require('mongoose')

var userSchema = new Schema({
  user_id: {
    type: Number,
  },
  user_name: {
    type: String,
    required: true
  },
  user_password: {
    type: String,
    required: true
  },
  user_email: {
    type: String,
    required: true
  },
  user_sex: {
    type: Number,
    enum: [-1, 0, 1]
  },
  user_phone: Number,
  user_status: {
    type: Number,
    enum: [0, 1, 2]
  },
  user_time: {
    type: Date,
    default: Date.now
  }

  // user_id int not NULL 
  // user_name string
  // user_email string
  // user_sex int [-1 0 1] # -1保密 0 女 1 男
  // user_phone int
  // user_status int [0 1 2] # 用户状态，0 正常， 1 评论禁止， 2登录禁止
  // user_time date # 注册时间
})
var User = mongoose.model('User', userSchema)

module.exports = User
// bbs_user {
//   user_id int not NULL 
//   user_name string
//   user_password string
//   user_email string
//   user_sex int [-1 0 1] # -1 保密 0 女 1 男
//   user_phone int
//   user_status int [0 1 2] # 用户状态，0 正常， 1 评论禁止， 2登录禁止
//   user_time date # 注册时间
  
// }