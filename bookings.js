fetch('http://localhost:3000/bookings')
        .then(response => response.json())
        .then(data => {
            document.querySelector('#my-bookings').innerHTML = ""
            document.querySelector('#my-bookings').innerHTML = "<h2>My bookings</h2>"
            
            for (let booking of data) {
                
                document.querySelector('#my-bookings').innerHTML += 
                `<div class="bookings-datas">
                <div id="places">${booking.travelInfo}</div>
                <div id="time">${booking.departureTime}</div>
                <div id="price">${booking.price}</div>`

            }})