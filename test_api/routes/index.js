const router = require('koa-router')();   //引入路由函数
const userModel = require('../lib/mysql')   //引入数据库方法
const multer = require('koa-multer');//加载koa-multer模块
//文件上传
//配置
var storage = multer.diskStorage({
  //文件保存路径
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  //修改文件名称
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".");
    cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})
//加载配置
var upload = multer({ storage: storage });

//路由
router.post('/upload', upload.single('file'), async (ctx, next) => {
  ctx.body = {
    filename: ctx.req.file.filename//返回文件名
  }
})

router.post('/from', async (ctx, next) => {
  //前端传的数据
  bodys = ctx.request.body;
  let name = bodys.name
  let region = bodys.region
  await userModel.addtest(region, name)
  ctx.body = { date: 'success', code: 200 }
})

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/home', async (ctx, next) => {
  let bodys = ''
  await userModel.findtest()
    .then(result => {
      //console.log(result)
      bodys = JSON.parse(JSON.stringify(result))
    })
  ctx.body = { 'data': bodys, code: 200 }
})

router.get('/table', async (ctx, next) => {
  let bodys = ''
  await userModel.findtabledate()
    .then(result => {
      //console.log(result)
      bodys = JSON.parse(JSON.stringify(result))
    })
  ctx.body = { 'data': bodys, code: 200 }
})



module.exports = router
