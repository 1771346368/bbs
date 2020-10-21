const express = require('express')
const Comment = require('../tools/pinglundao')
const r = express.Router();


r.get('/', (req, res) => {
  // Comment.deleteMany().then()
  Comment.find().then((data) => {
    res.render('template-list.html', {
      loginUser: req.session.user,
      user: data
    })
  })
})
r.get('/pinglun', (req, res) => {
  if (req.session.user) {
    res.render('pinglun.html', {
      name: req.session.user
    })
  } else {
    res.redirect('/login')
  }
})
r.post('/pinglun', (req, res) => {
  // console.log(req.body)
  var u = req.body;
  u.time = (new Date()).toLocaleDateString();
  var ncom = new Comment({
    user_name: u.uname,
    content: u.utext,
    time: u.time
  })
  ncom.save().then((doc) => {
    console.log('pinglun doc->>>', doc);
    res.send({ 'msg': '200' })
  }).catch((err) => {
    console.log('pinglun err->>>>>', err);
    res.send({ 'msg': '101' })
  })

})
module.exports = r;