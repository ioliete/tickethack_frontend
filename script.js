document.querySelector('#search-button').addEventListener('click', function () {

    const trip = {
        departure : document.querySelector('#input-departure').value,
        date : document.querySelector('#input-date').value,
        arrival : document.querySelector('#input-arrival').value,
    }

    fetch('http://localhost:3000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(trip),
    })
        .then(response => response.json())
        .then(data => {
                document.querySelector('#output-container').innerHTML = "";
                for (let trip of data) {
                    const getHour = moment(trip.date).locale('fr').format("HH:mm")
                    const tripElement = document.createElement('div');
                    tripElement.id = 'trip-datas';
                    tripElement.innerHTML = `
                    <div id="trip-destination">${trip.departure} > ${trip.arrival}</div>
                    <div id="trip-date">${getHour}</div>
                    <div id="trip-price">${trip.price}€</div>
                    <button class="book-button">Book</button>`;
                    document.querySelector('#output-container').appendChild(tripElement);
                }

                document.querySelectorAll('.book-button').forEach(button => {
                    button.addEventListener('click', function () {
                        
                        const travelInfo = this.parentNode.querySelector('#trip-destination').innerHTML;
                        const departureTime = this.parentNode.querySelector('#trip-date').innerHTML;
                        const price = this.parentNode.querySelector('#trip-price').innerHTML;

                        fetch('http://localhost:3000/cart', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ travelInfo, departureTime, price }),
                        })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                        })
                        window.location.assign('cart.html');

    })
})})
})