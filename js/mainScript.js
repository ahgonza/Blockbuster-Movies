
var isLoggedIn = function() {
    var cookie = document.cookie;
    var splitCook = cookie.split('=');
    return Boolean(splitCook[1]);
};

if (isLoggedIn()) {
    document.getElementById("logInButton").style.visibility = "hidden";
}

function openLogin() {
    console.log(document.getElementById("overlay"));
    document.getElementById("overlay").style.visibility= 'visible';
    document.getElementById("logInModal").style.visibility= "visible";
    document.getElementById("logInContainer").style.visibility= 'visible';
}

function validateLogIn() {
    const usernameInput = document.getElementById("username");
    let isUsernameValid = true;

    if (usernameInput.value.length < 1) {
        isUsernameValid = false;
    } else {
        isUsernameValid = true;
    }
    
    return isUsernameValid
}
function hideLogin() {
    document.getElementById("overlay").style.visibility= 'hidden';
    document.getElementById("logInModal").style.visibility= "hidden";
    document.getElementById("logInContainer").style.visibility= 'hidden';
}
const logInForm = document.getElementById("logInForm");

logInForm.addEventListener("submit", function(submit) {
  submit.preventDefault(); 
  goodbyeButton(); 
});

function goodbyeButton() {
    document.getElementById("logInButton").style.visibility= "hidden";
}
