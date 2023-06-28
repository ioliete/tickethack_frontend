document.querySelector("#myCart").addEventListener('DOMContentLoaded', function() {

    fetch('http://localhost:3000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(trip),
    })
        .then(response => response.json())
        .then(data => {
            document.querySelector('#myCart').innerHTML = "";
            for (let cart of data) {
                
                const cartElement = document.createElement('div');
                //cartElement.id = 'trip-datas';
                cartElement.innerHTML = `
                <div id="places">${cart.travelInfo}</div>
                <div id="time">${cart.departureTime}</div>
                <div id="price">${cart.price}€</div>
                <button class="delete">✖</button>`;
                
                //document.querySelector('#output-container').appendChild(tripElement);
            }
        })  
});