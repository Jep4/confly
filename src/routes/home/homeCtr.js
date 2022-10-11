"use strict";

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
};
