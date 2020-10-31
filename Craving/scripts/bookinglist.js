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
       var Phonenumber = json.bookings[i].phone;
       var Pax = json.bookings[i].pax;
       var Hotel = json.bookings[i].hotel;
       var Checkindate = json.bookings[i].checkin;
       var Checkoutdate = json.bookings[i].checkout;
       var Payment = json.bookings[i].payment;
       var Id = json.bookings[i].id;
       var Remarks = json.bookings[i].remarks;
       var buttonId = "delete" + Id;
 
       let row = bookings.insertRow(bookings.rows.length);
       row.insertCell(0).innerHTML = Id;
       row.insertCell(1).innerHTML = Name;
       row.insertCell(2).innerHTML = Email;
       row.insertCell(3).innerHTML = Phonenumber;
       row.insertCell(4).innerHTML = Pax;
       row.insertCell(5).innerHTML = Hotel;
       row.insertCell(6).innerHTML = Checkindate;
       row.insertCell(7).innerHTML = Checkoutdate;
       row.insertCell(8).innerHTML = Payment;
       row.insertCell(9).innerHTML = Remarks; //Remarks
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
         let url = 'https://api.sheety.co/5c1a3167570b84950870483f1c80fbf9/bookingApp/bookings/' + id;
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
     
     
     
    