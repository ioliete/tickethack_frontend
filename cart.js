fetch('http://localhost:3000/cart')
        .then(response => response.json())
        .then(data => {
            document.querySelector('#my-cart').innerHTML = "";
            document.querySelector('#my-cart').innerHTML = "<h2>My cart</h2>"
            
            let totalPrice = 0

            for (let cart of data) {
                
                document.querySelector('#my-cart').innerHTML += 
                `<div class="cart-datas">
                <div id="places">${cart.travelInfo}</div>
                <div id="time">${cart.departureTime}</div>
                <div id="price">${cart.price}</div>
                <button class="delete-button">✖</button>`;

                let priceToArray = cart.price.split("")
                priceToArray.pop()
                let arrayToNumber = Number(priceToArray.join(""))
                totalPrice += arrayToNumber

            }

            const purchase = document.createElement('div');
            purchase.id = 'total'
            purchase.innerHTML += `<div id= "total">
            <div id="priceTotal"> </div>
            <button id="purchase-button">Purchase</button>
            </div>`;
            document.querySelector('#my-cart').appendChild(purchase)
            document.querySelector('#priceTotal').textContent = `Total: ${totalPrice} €`

            function updateDeleteTrip() {
                for (let i = 0; i < document.querySelectorAll('.delete-button').length; i++) {
                    document.querySelectorAll('.delete-button')[i].addEventListener('click', function () {
                  const departureTime = this.parentNode.querySelector('div:nth-child(2)').textContent; 
            
                    fetch(`http://localhost:3000/cart?departureTime=${departureTime}`, { method: 'DELETE' })
                        .then(response => response.json())
                        .then(data => {
                            if (data) {
                                this.parentNode.remove();
                    updateCartTotal()
                            }
                        });
                });
            }
            }
            updateDeleteTrip()
            
            });
            
            //Fonction pour mettre à jour le panier total après suppression d'un élément
            function updateCartTotal() {
              fetch('http://localhost:3000/cart')
                .then(response => response.json())
                .then(data => {
                  let totalPrice = 0;
                  for (const key of data) {
                    let priceToArray = key.price.split("");
                    priceToArray.pop();
                    let arrayToNumber = Number(priceToArray.join(""));
                    totalPrice += arrayToNumber;
                  }
                  document.querySelector('#priceTotal').textContent = `Total: ${totalPrice} €`
                });
            }
