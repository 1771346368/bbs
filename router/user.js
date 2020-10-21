const User = require('../tools/userdao')
const express = require('express')
const md5 = require('blueimp-md5')
const r = express.Router();

r.get('/login', (req, res) => {
  res.render('user_login.html', {})
})

r.post('/login', async (req, res) => {
  var user = req.body;
  var email = user.email;
  var pwd = user.upwd;
  await User.findOne({ 'user_email': email }).then((data) => {
    if (data) {
      if (data.user_password == md5('add' + pwd + 'md5')) {
        req.session.user = data;
        res.send({ 'msg': '200' })
        return;
      } else {
        res.send({ 'msg': '102' })
        return;
      }
    } else {
      res.send({ 'msg': '101' })
      return;
    }
  }).catch((err) => {
    console.error('login error->>>>>', err);
    res.send({ 'msg': '103' })
    return;
  })
})


r.get('/regist', (req, res) => {
  res.render('user_reg.html', {})
})

r.post('/regist', async (req, res) => {
  var user = req.body;
  var name = user.uname;
  var pwd = user.upwd;
  var repwd = user.repwd;
  var email = user.email;
  if (name == '') {
    res.send({ 'msg': '101' })
    return;
  } else if (email == '') {
    res.send({ 'msg': '102' })
    return;
  } else if (pwd == '') {
    res.send({ 'msg': '103' })
    return;
  } else if (pwd != repwd) {
    res.send({ 'msg': '104' })
    return;
  }
  await User.findOne({ 'user_name': name }).then(async (data) => {
    if (data) {
      res.send({ 'msg': '105' })
      return;
    }
    await User.findOne({ 'user_email': email }).then(async (data) => {
      if (data) {
        res.send({ 'msg': '106' })
        return;
      } else {
        var nuser = new User({
          user_name: name,
          user_password: md5('add' + pwd + 'md5'),
          user_email: email,
        })
        await nuser.save().then((resu) => {
          // console.log(resu);
          req.session.user = resu;
          res.send({ 'msg': '200' })
          return;
        })
      }
    })

  }).catch((err) => {
    console.error('reg err ->>>>>', err);
    res.send({ 'msg': '107' })
    return;
  })
})

r.use('/logout', (req, res) => {
  req.session.user = undefined;
  res.redirect('/login')
})

module.exports = r;