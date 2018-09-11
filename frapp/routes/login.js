var express = require('express');
var router = express.Router();

/* GET home page. */

router.post('/', function(req, res, next) {
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
