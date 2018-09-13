var express = require('express');
var router = express.Router();

/* GET home page. */
// router.options('/',function(req, res, next) {
//  res.json({
//      code:200,
//     'Access-Control-Allow-Origin': 'http://localhost:8080',
//     'Access-Control-Allow-Methods':'GTT,POST,PUT,DELETE,OPTIONS',
//     'Access-Control-Allow-Headers':'content-type'
//  })
// })
router.get('/', function(req, res, next) {
  res.statusCode=200
  res.write('成功')
  res.end()
});
router.post('/', function(req, res, next) {
    // res.json(200, {
    //     'Access-Control-Allow-Origin': 'http://localhost:8080',
    //     'Access-Control-Allow-Methods':'GTT,POST,PUT,DELETE,OPTIONS',
    //     'Access-Control-Allow-Headers':'content-type'
    // });
  let obj=req.body
 if(obj.username=="admin"&&obj.password=="123456")
 {
  res.statusCode=200
  res.write('成功')
  res.end()
 }else{
  res.statusCode=200
  res.write('账户密码不对')
  res.end()
 }
});


module.exports = router;
