function retrieveCart() {
    if (localStorage.length === 0) {
        alert("Cart is empty!");
        return false;
    } else {
    window.location.href='cart.html';
    }
};

function renderCart() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        var cartMovie = JSON.parse(value);
        const writeCart =`
        <div class="cart_image">${cartMovie.image}</div>
        <div class="cart_info"><p>
        <strong>${cartMovie.name}</strong></p>
        <p>
        <strong>Quantity:</strong> ${cartMovie.quantity}
        </p>
        <p>
        <strong>Price:</strong> ${cartMovie.price}
        </div>

        `;

        document.getElementById("cart").innerHTML = writeCart; 
        }
    };
    
    if (window.location.href.indexOf("cart.html") > -1) {
        renderCart();
    };
