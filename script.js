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
                    const getHour = moment(trip.date).utc().format("HH:mm")
                    document.querySelector('#output-container').innerHTML += 
                    `<div id="trip-datas">
                    <div id="trip-destination">${trip.departure} > ${trip.arrival}</div>
                    <div id="trip-date">${getHour}</div>
                    <div id="trip-price">${trip.price}€</div>
                    <button id="book-button">Book</button>
                    </div>`;
                }
		});
});

