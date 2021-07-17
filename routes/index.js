const express = require('express');
const router = express.Router();

//  引入自定义的controller处理方法
const IndexController=require('../controllers/index')
//定义首页路由
router.get('/',IndexController.getList)
//定义提交表单路由
router.post('/add',IndexController.add)

//导出路由，供app.js文件调用
module.exports = router;
