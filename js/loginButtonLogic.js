const logInButton = document.querySelector('.logInButton'),
    overlay = document.querySelector('.overlay'),
    logInModal = document.querySelector('.modal'),
    closeLogInModalButton = document.querySelector('.close-modal');

function openLoginModal() {
    overlay.classList.add('visible');
    logInModal.classList.add('visible');
}

function closeLoginModal () {
    overlay.classList.remove('visible');
    logInModal.classList.remove('visible');
}

logInButton.addEventListener('click', openLoginModal);
closeLogInModalButton.addEventListener('click', closeLoginModal);
