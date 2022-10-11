// JavaScript source code

"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#pw")
const loginBtn = document.querySelector("#loginBtn")

function login() {
    const req = {
        id: id.value,
        pw: pw.value,
    };

    console.log(req);
    fetch('/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    }).then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/";
            } else {
                alert(res.msg);
            }
            });
}


loginBtn.addEventListener("click", login);

