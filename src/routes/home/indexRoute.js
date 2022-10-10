"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./homeCtr.js")

router.get('/', ctrl.callindex);
router.get('/profile', ctrl.profile);

router.get('/login', ctrl.login);

module.exports = router;