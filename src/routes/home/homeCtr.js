"use strict";
var mysql2 = require('mysql2')
var mysql_odbc = require("../db/db_conn")();
var conn = mysql_odbc.init();

const express = require('express');
const app = express();
const bcrypt = require('bcrypt')


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

function register(req, res) {
    res.render("./home/register")
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
        database: 'test',
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

function list(req, res) {
    var sql = "select id, pwd, nickname from users";
    conn.query(sql, function (err, rows) {
        if (err) throw err;
        res.render("./home/list", { title: "user list", rows: rows }        );
    });
}

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


const process2 = {
    register: (req, res) => {
        const { id, pwd, nickname } = req.body


        var sql = "INSERT INTO users (id, pwd, nickname) VALUES ('" + id + "','" + pwd + "','" + nickname + "')"
        conn.query(sql, function (err, result) {
            if (err) throw err;
            console.log("user record inserted")

        })
        return res.json({
            msg: "register success",
        })

      
    }
};

module.exports = {
    callindex,
    login,
    profile,
    process,
    mysql,
    list,
    register,
    process2

};
