let username = document.getElementById("username");

let login_result = document.getElementById("login_result");


function input_login() {


if (username.value === "username" && password.value === "password") {

    console.log ("Success" );

    login_result.innerHTML = "Success"

}

else {

    console.log ("Wrong Credentials");

    login_result.innerHTML = "Wrong Credentials"

}

}


