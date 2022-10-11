var express = require('express')
var router = express.Router();
var mysql = require('mysql')

router.get("/", function (req, res, next){
    var connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'confly',
        password: '1234',
        database: 'nodedb'
    });

    connection.connect(function (err){
        if (err) {
            res.render("mysql", { connect: 'failed', err: err });
            console.error(err)
            throw err;
        } else {
            res.render("mysql", { connect: "success", err: "none" });
        }
    });
    connection.end();
});


module.exports = router