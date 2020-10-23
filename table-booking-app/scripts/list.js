window.addEventListener("load", function() {
   GetBookings();
});

function GetBookings() {
    let url = 
    'https://api.sheety.co/5c1a3167570b84950870483f1c80fbf9/bookingApp/bookings';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
     //Do something with the data
     console.log(json.bookings);
     var bookings = document.getElementById("booking-list");
     var bookingIds = [];
     
     for(var i = 0; i < json.bookings.length; i++) {
      var Name = json.bookings[i].name;
      var Email = json.bookings[i].email;
      var Pax = json.bookings[i].pax;
      var Id = json.bookings[i].id;
      var buttonId = "delete" + Id;

      let row = bookings.insertRow(bookings.rows.length);
      row.insertCell(0).innerHTML = Id;
      row.insertCell(1).innerHTML = Name;
      row.insertCell(2).innerHTML = Email;
      row.insertCell(3).innerHTML = Pax;
      row.insertCell(4).innerHTML = ""; //Remarks
      row.insertCell(5).innerHTML = "<button id='" + buttonId + "' class='btn btn-danger'>Delete</button><br/>";
    
       bookingIds.push(buttonId);
     }
      for (let j = 0; j < bookingIds.length; j++) {
        let el = document.getElementById(bookingIds[j]);
        console.log("outside :" + j);
        el.addEventListener ("click", function() {
          let theId = bookingIds[j].replace("delete","");
          //DeleteBooking(theId);
        });
     }
    });
    }
    
    
   