var express = require('express');
var router = express.Router();
var db =require('../db');

/* 사용자 목록 */
router.get('/list', function(req, res, next) {
  var page = req.query.page;
  var start = (page-1)*4;
  var count =0;
  var sql = 'select count(*) count from user';
  db.get().query(sql,function(err,rows){
      count= rows[0].count;
      var sql ='select * from user limit ?,4';
      db.get().query(sql, [start], function(err,rows){
        res.send({count:count, rows:rows});
  })
  })
});

/*사용자등록 */
var multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});
const upload = multer({storage});

router.post('/insert', upload.single('image'), function(req, res){
    var id=req.body.id;
    var pass=req.body.pass;
    var name=req.body.name;
    var image='/images/' + req.file.filename;
    var sql='insert into user(id,pass,name,image) values(?,?,?,?)';
    db.get().query(sql, [id,pass,name,image], function(err, rows){
        res.sendStatus(200);
    });
});

module.exports = router;
