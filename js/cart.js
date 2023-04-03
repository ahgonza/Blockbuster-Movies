function retrieveCart() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        var cartMovie = JSON.parse(value);
        console.log(cartMovie);

        const writeCart =`
        <strong>Name:</strong> ${cartMovie.name}
        `;
        document.getElementById("cart").innerHTML += writeCart;
    }
};
