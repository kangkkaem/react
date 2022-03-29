var express = require('express');
var router = express.Router();
var db = require('../db');

/* 로그인체크 */
router.get('/:userid', function(req, res, next) {
    var userid=req.params.userid;
    var sql ='select * from tbl_user where userid=?'
    db.get().query(sql, [userid], function(err,rows){
        res.send(rows[0]);
    })
});

//중복체크
router.get('/check/:userid', function(req,res){
    var userid = req.params.userid;
    var sql ='select * from tbl_user where userid=?';
    var check=0;
    db.get().query(sql, [userid], function(err,rows){
        if(rows.length==1) check=1;
        res.send({check:check});
    });
});

//회원가입
router.post('/insert', function(req,res){
    var userid=req.body.userid;
    var password= req.body.password;
    var username = req.body.username;
    var sql = 'insert into tbl_user(userid,password,username) values(?,?,?)';
    db.get().query(sql,[userid,password,username], function(err,rows){
        res.sendStatus(200);
    })
})



module.exports = router;
