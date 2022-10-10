// JavaScript source code

"use strict";

const id = document.querySelector("#idpart");
const pw = document.querySelector("#passwordpart")
const loginBtn = document.querySelector("#loginB")

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        pw: pw.value,
    };
}
