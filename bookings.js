document.querySelector('#output-container').innerHTML = "";
    for (let trip of data) {
        const bookingsElement = document.createElement('div');
            bookingsElement.id = 'bookings-datas';
            bookingsElement.innerHTML = `
            <div id="bookings-destination">${bookings.departure} > ${bookings.arrival}</div>
            <div id="bookings-date">${getHour}</div>
            <div id="bookings-price">${bookings.price}€</div>
            <div id="bookings-countdown"></div>`
            document.querySelector('#my-bookings').appendChild(bookingsElement);
}
