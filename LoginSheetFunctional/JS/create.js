
var users = ["coolguy"];
var pass = ["nopass"];



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