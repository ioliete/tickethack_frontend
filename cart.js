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
                <div id="price">${cart.price}</div>
                <button class="delete-button">✖</button>`;
                document.querySelector('#my-cart').appendChild(cartElement);
            }

            document.querySelectorAll('.delete-button').forEach(button => {
                button.addEventListener('click', function () {
                    const departureTime = this.parentNode.querySelector('div:nth-child(2)').textContent; // Récupère la valeur de departureTime à partir du div parent
            
                    fetch(`http://localhost:3000/cart?departureTime=${departureTime}`, {
                    method: 'DELETE' })
                        .then(response => response.json())
                        .then(data => {
                            if (data) {
                                this.parentNode.remove();
                            }
                        })
                })
            })
        })
