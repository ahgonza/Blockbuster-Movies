
var users = ["coolguy"];
var pass = ["nopass"];

function setBooLogIn(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    var stringValue = value ? "true" : "false";
    document.cookie = name + "=" + stringValue + expires + "; path=/";
  }
  

function Create() {
    unamevalue = document.getElementById("unamecreate").value;
    pswvalue = document.getElementById("pswcreate").value;
    users.push(unamevalue);
    pass.push(pswvalue);
    alert("Account Created");
    return false;

}

function Check() {
    const unamecheck = document.getElementById("uname").value;
    const pswcheck = document.getElementById("psw").value;

    try {  
        if (users.includes(unamecheck) && pass.includes(pswcheck)) {
            if (users.indexOf("unamecheck" === pass.indexOf("pswcheck"))) {
                return true;
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