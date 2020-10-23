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
     
     for(var i = 0; i < json.bookings.length; i++) {
      var name = json.bookings[i].name;
      var email = json.bookings[i].email;
      var pax = json.bookings[i].pax;
      var id = json.bookings[i].id;
      var buttonId = "delete" + id;

      let row = bookings.insertRow(bookings.rows.length);
      row.insertCell(0).innerHTML = Id;
      row.insertCell(1).innerHTML = Name;
      row.insertCell(2).innerHTML = Email;
      row.insertCell(3).innerHTML = Pax;
      row.insertCell(4).innerHTML = ""; //Remarks
      row.insertCell(5).innerHTML = "<button id='" + buttonId + "' class='btn btn-danger'>Delete</button><br/>";
    
      bookings.innerHTML += id + "- " + name + ", " + email + ", pax:" + pax + "<br/>"; 
      bookings.innerHTML += "<button id='" + buttonId + "'>Delete</button><br/>";
      
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
    document.getElementById("getBooking").addEventListener("click", function() {
      GetBookings();
    })
    
    function BookNow (guestName, guestEmail, guestPax) {
      let url = 'https://api.sheety.co/5c1a3167570b84950870483f1c80fbf9/bookingApp/bookings';
      let body = {
        booking: {
         name:guestName,
         email:guestEmail,
         pax:guestPax
        }
      }
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers:{
         "Content-Type":"application/json"
        }
      })
      .then((response) => response.json())
      .then(json => {
        // Do something with object
        console.log(json.booking);
         document.getElementById("bookMsg").innerHTML = json.booking.name + " successfully added!";
         GetBookings();
      });
     }
    document.getElementById("bookNow").addEventListener("click",function() {
     let guestName = document.getElementById("guestName").value;
     let guestEmail = document.getElementById("guestEmail").value;
     let guestPax = document.getElementById("guestPax").value;
     BookNow(guestName, guestEmail, guestPax);
    });  
    
    function DeleteBooking (id) {
      let url = 'https://api.sheety.co/5c1a3167570b84950870483f1c80fbf9/bookingApp/bookings/' + id;
    fetch(url, {
      method: 'DELETE',
    })
    .then((response) => {
      document.getElementById("deleteMsg").innerHTML = "Booking deleted!"
      document.getElementById("deleteId").value = "";
      GetBookings();
    });
    }
    document.getElementById("deleteBooking").addEventListener("click",function() {
      DeleteBooking(document.getElementById ("deleteId").value);
    });