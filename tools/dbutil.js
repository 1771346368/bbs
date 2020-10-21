const mongoose = require('mongoose')

var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function () {
  console.log('mongodb connect success')
})
module.exports = Schema;