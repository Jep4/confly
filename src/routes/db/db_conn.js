var mysql = require("mysql2");
var config = require('./db_info').local;


const bcrypt = requre("bcrypt")
const express = require("express")
const app = express()

app.use(express.json())
app.post("/createUser", async (req, res) => {
    const user = req.body.name;
    const pw = await bcrypt.hash(req.body.password, 10);
})

module.exports = function () {
    return {
        init: function () {
            return mysql.createConnection({
                host: config.host,
                port: config.port,
                user: config.user,
                password: config.password,
                database: config.database
            })
        }
    }
};