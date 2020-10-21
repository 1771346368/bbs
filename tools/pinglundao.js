const Schema = require('./dbutil')
const mongoose = require('mongoose')

var commentSchema = new Schema({
  content: {
    type: String,
    require: true
  },
  art_id: {
    type: Number,
  },
  user_name: {
    type: String,
    required: true
  },
  time: {
    type: String,
    default: Date.now
  }
})

var Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment
// bbs_comment {
//   com_id int not NULL
//   com_content string # 评论正文
//   com_art_id int # 文章id
//   com_user_id int # 评论用户的id
//   com_time date # 评论时间
// }