"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./homeCtr.js")

router.get('/', ctrl.callindex);
router.get('/profile', ctrl.profile);

router.get('/login', ctrl.login);
router.post('/login', ctrl.process.login);


module.exports = router;
