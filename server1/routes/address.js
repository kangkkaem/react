var express = require('express');
var router = express.Router();
var db =require('../db');

/* 주소목록 */
router.get('/list', function(req, res, next) {
    var page=req.query.page;
    var start = (page-1) *5;
    var sql='select * from address order by id desc limit ?, 5';
    db.get().query(sql, [start], function(err, rows){
        res.send(rows);
    })
});

//주소등록
router.post('/insert', function(req,res){
    var name=req.body.name;
    var tel=req.body.tel;
    var address=req.body.address;
    var sql ='insert into address(name, tel, address) values(?,?,?)';
    db.get().query(sql, [name,tel,address], function(err,rows){
        res.sendStatus(200);
    });
});

//주소삭제
router.post('/delete' , function(req,res){
    var id= req.body.id;
    var sql ='delete from address where id =?';
    db.get().query(sql, [id], function(err,rows){
        res.sendStatus(200);
    })
});

//전체데이터갯수
router.get('/count', function(req,res){
    var sql ='select count(*) count from address';
    db.get().query(sql, function(err,rows){
        res.send(rows[0]);
    });
});

module.exports = router;
