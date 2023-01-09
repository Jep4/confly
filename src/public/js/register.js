
"use strict";

const username = document.getElementById("username");
const password = document.getElementById("password")
const nickname = document.getElementById("nickname")
const submitB = document.querySelector("#submitB")
submitB.addEventListener("click", registerGo);

function registerGo() {
    const req = {
        id: username.value,
        pwd: password.value,
        nickname: nickname.value
    };

    console.log(req);
    fetch('/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    }).then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/";
            } else {
                alert(res.msg);
            }
        });
}



