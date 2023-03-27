
var users = ["coolguy"];
var pass = ["nopass"];



function Create() {
    unamevalue = document.getElementById("unamecreate").value;
    pswvalue = document.getElementById("pswcreate").value;
    users.push(unamevalue);
    pass.push(pswvalue);
    console.log(users);
    console.log(pass);
    alert("Account Created");
    return false;

}

export{users, pass};