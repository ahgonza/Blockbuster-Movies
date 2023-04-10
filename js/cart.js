var isLoggedIn = function() {
    var cookie = document.cookie;
    var splitCook = cookie.split('=');
    return Boolean(splitCook[1]);
};

function retrieveCart() {
    if (localStorage.length === 0 && !isLoggedIn()) {
        alert("Log In!");
        return;
    } 
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



function clearCart() {
    localStorage.clear();
    document.getElementById("cart").innerHTML = "";
    document.getElementById("cartInfo").innerHTML = "";
}
function pay() {
    alert("You bought $"+cartTotal+" worth of Transformers movies." )
    localStorage.clear();
    document.getElementById("cart").innerHTML = "";
    document.getElementById("cartInfo").innerHTML = "";
}
window.addEventListener('load', renderCart);

