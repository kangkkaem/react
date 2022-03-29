var express = require('express');
var router = express.Router();
var db = require('../db');

/* 고객목록*/
router.get('/list', function(req, res, next) {
    var page=req.query.page;
    var start = (page-1)* 3;
    var count=0;
    var search= '%' + req.query.search + '%';
    var sql='select count(*) count from customers where name like ?'; //데이터갯수
    db.get().query(sql,[search], function(err,rows){
        count= rows[0].count;
        var sql='select *,date_format(birthday, "%Y-%m-%d") date from customers where name like ? order by id desc limit ?,3'; //해당페이지 목록
        db.get().query(sql,[search,start], function(err,rows){
        res.send({count:count , rows:rows});
    });
    });
});

//고객탈퇴
router.post('/delete/:id',function(req,res){
    var id =req.params.id;
    var sql = 'update customers set isDelete=1 where id=?';
    db.get().query(sql,[id], function(err,rows){
        res.sendStatus(200);
    })
});


//고객복귀
router.post('/restore/:id',function(req,res){
    var id =req.params.id;
    var sql = 'update customers set isDelete=0 where id=?';
    db.get().query(sql,[id], function(err,rows){
        res.sendStatus(200);
    })
});

/* 파일업로드 */
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

//고객등록
router.post('/insert',upload.single('image'), function(req,res){
    var name = req.body.name;
    var birthday= req.body.birthday;
    var job = req.body.job;
    var gender=req.body.gender;
    var image ='/images/' +req.file.filename;
    var sql = 'insert into customers(name,birthday,job,gender,image) values(?,?,?,?,?)';
    db.get().query(sql,[name,birthday,job,gender,image],function(err,rows){
        res.sendStatus(200);
    });
});


module.exports = router;
