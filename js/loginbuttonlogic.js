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
    