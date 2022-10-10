"use strict";

const users = ["som", "jun"];
const pw =["1234", "1234"];


function callindex(req, res) {
    res.render("./home/index")
};

function login(req, res) {
    res.render("./home/login")
};

function profile(req, res) {
    res.render("./home/profile")
};

function process(req, res) {
    const id = req.id,
        pw = req.pw;

    if (users.id.include(id)) {
        const idx = users.id.indexOf(id);
        if (users.pw[idx] === pw) {
            return res.json({
                success: true,
            })
        }
    }

    return res.json({
        success: false,
        msg: "login failed",
    })
};

module.exports = {
    callindex,
    login,
    profile,
    process,
};
