function BookNow (guestName, guestEmail, guestPax, guestRemarks) {
    let url = 'https://api.sheety.co/5c1a3167570b84950870483f1c80fbf9/bookingApp/bookings';
    let body = {
      booking: {
       name:guestName,
       email:guestEmail,
       pax:guestPax
       remarks: guestRemarks
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
      alert(json.booking.name + "successfully added!");
    });
   }

   window.addEventListener("load",function(){
       document.getElementById("bookNow").addEventListener("click",function(){
        let name = document.getElementById("guestName").value;
        let email = document.getElementById("guestEmail").value;
        let pax = document.getElementById("guestPax").value;
        let remarks = document.getElementById("guestRemarks").value;
        
        BookNow(name, email, pax, remarks);
       });
   });
   