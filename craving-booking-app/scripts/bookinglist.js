window.addEventListener("load", function() {
  GetBookings();
});

function GetBookings() {
     let url = 
     'https://api.sheety.co/dc6f0424a623e061b0c605a06b375549/bookingList/booking';
     fetch(url)
     .then((response) => response.json())
     .then(json => {
      //Do something with the data
      
      var bookings = document.getElementById("booking-list");
      var bookingIds = [];
      
      for(var i = 0; i < json.booking.length; i++) {
       var name = json.booking[i].name;
       var email = json.booking[i].email;
       var phoneNumber = json.booking[i].phoneNumber;
       var pax = json.booking[i].pax;
       var hotel = json.booking[i].hotel;
       var checkInDate = json.booking[i].checkInDate;
       var checkOutDate = json.booking[i].checkOutDate;
       var payment = json.booking[i].payment;
       var id = json.booking[i].id;
       var remarks = json.booking[i].remarks;
       var buttonId = "delete" + Id;
 
       let row = bookings.insertRow(bookings.rows.length);
       row.insertCell(0).innerHTML = id;
       row.insertCell(1).innerHTML = name;
       row.insertCell(2).innerHTML = email;
       row.insertCell(3).innerHTML = phoneNumber;
       row.insertCell(4).innerHTML = pax;
       row.insertCell(5).innerHTML = hotel;
       row.insertCell(6).innerHTML = checkInDate;
       row.insertCell(7).innerHTML = checkOutDate;
       row.insertCell(8).innerHTML = payment;
       row.insertCell(9).innerHTML = remarks; //Remarks
       row.insertCell(10).innerHTML = "<button id='" + buttonId + "' class='btn btn-danger'>Delete</button><br/>";
     
        bookingIds.push(buttonId);
      }
       for (let j = 0; j < bookingIds.length; j++) {
         let el = document.getElementById(bookingIds[j]);
         console.log("outside :" + j);
         el.addEventListener ("click", function() {
           let theId = bookingIds[j].replace("delete","");
           DeleteBooking(theId);
         });
      }
     });
     }
     
     function DeleteBooking (id) {
       
       if(confirm("Are you sure you want to delete?")){
         let url = 'https://api.sheety.co/dc6f0424a623e061b0c605a06b375549/bookingList/booking/' + id;
         fetch(url, {
           method: 'DELETE',
         })
         .then((response) => {
          location.reload();
        });
      } else {
         alert("Delete cancelled");
      }
    }