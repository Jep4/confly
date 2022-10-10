"use strict";

function callindex(req, res) {
    res.render("./home/index")
};

function login(req, res) {
    res.render("./home/login")
};

function profile(req, res) {
    res.render("./home/profile")
};

module.exports = {
    callindex,
    login,
    profile,
};
