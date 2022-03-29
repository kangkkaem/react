var express = require('express');
var router = express.Router();
var db = require('../db');

/* 상품목록 */
router.get('/list', function(req, res, next) {
    var page=req.query.page;
    var start = (page-1) *5;
    var sql = 'select *,date_format(regdate, "%Y-%m-%d") date,format(price,0)fprice from product order by id desc limit ?, 5';
    db.get().query(sql,[start], function(err, rows){
        res.send(rows);
    })
});

//상품등록
router.post('/insert',function(req,res){
    var title =req.body.title;
    var price =req.body.price;
    var company =req.body.company;
    var sql ='insert into product(title, price, company) values(?,?,?)';
    db.get().query(sql, [title,price,company], function(err, rows){
        res.sendStatus(200);
    });
});

//전체데이터갯수
router.get('/count', function(req,res){
    var sql ='select count(*) count from product';
    db.get().query(sql, function(err,rows){
        res.send(rows[0]);
    });
});

//상품삭제
router.post('/delete' , function(req,res){
    var id= req.body.id;
    var sql ='delete from product where id =?';
    db.get().query(sql, [id], function(err,rows){
        res.sendStatus(200);
    })
});
module.exports = router;
