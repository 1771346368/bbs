const Schema = require('../tools/dbutil')
const mongoose = require('mongoose')

var blogSchema = new Schema({
  title: {
    type: String,
    default: '默认标题'
  },
  author: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  comments: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
});

var Blog = mongoose.model('Blog', blogSchema)