function retrieveCart() {
    if (localStorage.length === 0) {
        alert("Cart is empty!");
        return false;
    } else {
    window.location.href='cart.html';
    }
};

var cartTotal = 0;
function renderCart() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        var cartMovie = JSON.parse(value);
        const writeCart =`
        
			    <tr>
                    <td>${cartMovie.name}</td>
                    <td>${cartMovie.quantity}</td>
                    <td>${cartMovie.price}</td>
			    </tr>
        `;
        cartTotal += cartMovie.price * cartMovie.quantity;

        document.getElementById("cartInfo").innerHTML =`<p>Total: $${cartTotal}</p>`;
        document.getElementById("cart").innerHTML += writeCart; 
        }

    };

    
    if (window.location.href.indexOf("cart.html") > -1) {
        renderCart();
    };

function clearCart() {
    localStorage.clear();
    document.getElementById("cart").innerHTML = "";
    document.getElementById("cartInfo").innerHTML = "";
}

