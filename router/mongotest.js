//初次使用
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat', { useNewUrlParser: true, useUnifiedTopology: true });

const Cat = mongoose.model('Cat', { name: String, age: Number, sex: Number });

// Cat.find().then((value) => {
//   console.log(value)
// })

// Cat.findById().then((value) => {
//   console.log(value)
// })
// 添加
// for (let i = 0; i < 10; i++) {
//   const kitty = new Cat({ name: `kitty${10+i}`, age: 2, sex: 1 });
//   kitty.save(function (error, rel) {
//     if (error) {
//       console.log('插入失败');
//     } else {
//       console.log(rel);
//     }
//   });
// }
//查询
// Cat.find(function(error,rel){
//   if (error) {
//     console.log('查询失败');
//   }else {
//     console.log(rel);
//   }
// });


// 条件查询
// Cat.find({
//   name:'kitty'
// },function(error,rel){
//   if (error) {
//     console.log('查询失败');
//   }else {
//     console.log(rel);
//   }
// });

//只查询一个
// Cat.findOne(function(error,rel){
//   if (error) {
//     console.log('查询失败');
//   }else {
//     console.log(rel);
//   }
// });
// Cat.findOne().then((value) => {
//   Cat.findById({ _id: value.id }).then((one) => {
//     console.log(one);
//   })
// })


//删除
// Cat.remove({
//   age:2
// }, function (error, rel) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(rel);
//   }
// });

// Cat.remove({age:4}).then((value) => {
//   console.log(value);
// }).catch((err) => {
//   console.error(err);
// })
// Cat.remove().then((value) => {
//   console.log(value);
// }).catch((err) => {
//   console.error(err);
// })
// Cat.deleteMany().then((value) => {
//   console.log(value);
// }).catch((err) => {
//   console.error(err);
// })

//更新
// Cat.findByIdAndUpdate('5bb867185389a60658e9e530',{name:"Tom"},function(error,rel){
// if (error) {
//   console.log(error);
// }else {
//   console.log(rel);
// }
// });
// Cat.updateOne({}, { name: 'kitty003', age: 4 }, (err, raw) => {
//   if (err) {
//     console.log('err->>>>>', err);
//   } else {
//     console.log(raw);
//   }
// })
// Cat.updateOne({}, { name: 'kitty002', age: 2 }).then((value) => {
//   console.log(value);
// }).catch((err) => {
//   console.error('err->>>>', err);
// })
// Cat.update({ name: 'kitty002' }, { name: 'kitty003', age: 3 }).then((value) => {
//   console.log(value);
// }).catch((err) => {
//   console.error('err->>>>', err);
// })
