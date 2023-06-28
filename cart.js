fetch('http://localhost:3000/cart')
        .then(response => response.json())
        .then(data => {
            document.querySelector('#my-cart').innerHTML = "";
            for (let cart of data) {
                
                const cartElement = document.createElement('div');
                cartElement.id = 'cart-datas';
                cartElement.innerHTML = `
                <div id="places">${cart.travelInfo}</div>
                <div id="time">${cart.departureTime}</div>
                <div id="price">${cart.price}€</div>
                <button class="delete">✖</button>`;
                document.querySelector('#my-cart').appendChild(cartElement);
            }
        })  
