
var users = ["coolguy"];
var pass = ["nopass"];

function setBooLogIn(name, value, days) {
    document.cookie = "isLoggedIn=true; path=/";
  }
  
function renderCreateAccount() {
  document.querySelector('.loggy').style.display = 'none';
  document.querySelector('.createAccount').style.display = 'block';
};
function Create() {
    unamevalue = document.getElementById("unamecreate").value;
    pswvalue = document.getElementById("pswcreate").value;
    users.push(unamevalue);
    pass.push(pswvalue);
    alert("Account Created");
    document.querySelector('.loggy').style.display = 'block';
    document.querySelector('.createAccount').style.display = 'none';
}

function Check() {
    const unamecheck = document.getElementById("uname").value;
    const pswcheck = document.getElementById("psw").value;

    try {  
        if (users.includes(unamecheck) && pass.includes(pswcheck)) {
            if (users.indexOf("unamecheck" === pass.indexOf("pswcheck"))) {
                setBooLogIn();
                window.location.href = "../index.html";
            } else {
                err;

            }
        } else {
            err;

        }
}  catch(err) {
    alert("Username and password do not match please try again");
    return false;
}
}