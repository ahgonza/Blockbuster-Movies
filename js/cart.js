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
        
			    <tr>
                    <td>${cartMovie.name}</td>
                    <td>${cartMovie.quantity}</td>
                    <td>${cartMovie.price}</td>
			    </tr>
        `;

        document.getElementById("cart").innerHTML += writeCart; 
        }
    };

    
    if (window.location.href.indexOf("cart.html") > -1) {
        renderCart();
    };
