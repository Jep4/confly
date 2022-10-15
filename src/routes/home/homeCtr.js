"use strict";
var mysql2 = require('mysql2')

const users = {
     id : ["som", "jun"],
     pw : ["1234", "1234"],
}


function callindex(req, res) {
    res.render("./home/index")
};

function login(req, res) {
    res.render("./home/login")
};

function profile(req, res) {
    res.render("./home/profile")
};

function mysql(req, res) {
    var connection = mysql2.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'confly',
        password: '1234',
    });

    connection.connect(function (err) {
        if (err) {
            res.render("./home/mysql", { connect: 'failed', err: err });
            console.error(err)
            throw err;
        } else {
            res.render("./home/mysql", { connect: "success", err: "none" });
        }
    });
    connection.end();
};


const process = {
    login: (req, res) => {
        const id = req.body.id,
            pw = req.body.pw;

    if (users.id.includes(id)) {
        const idx = users.id.indexOf(id);
        if (users.pw[idx] === pw) {
            return res.json({
                success: true,
            });

        }
    }

    return res.json({
        success: false,
        msg: "login failed",
    })
    }
};

module.exports = {
    callindex,
    login,
    profile,
    process,
    mysql,
};
