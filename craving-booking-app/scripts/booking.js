function BookNow (guestName, guestEmail, guestPhone, guestPax, guestHotel, guestCheckin, guestCheckout, guestPayment, guestRemarks) {
  let url = 'https://api.sheety.co/dc6f0424a623e061b0c605a06b375549/bookingList/booking';
  let body = {
    booking: {
     name:guestName,
     email:guestEmail,
     phoneNumber:guestPhone,
     pax:guestPax,
     hotel:guestHotel,
     checkInDate:guestCheckin,
     checkOutDate:guestCheckout,
     payment:guestPayment,
     remarks: guestRemarks }
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
      alert("Your booking is successfully added! Please check at view booking site!");
    });
   }

  window.addEventListener("load",function(){
  document.getElementById("BookNow").addEventListener("click",function() {
    let name = document.getElementById("guestName").value;
    let email = document.getElementById("guestEmail").value;
    let phoneNumber = document.getElementById("guestPhone").value;
    let pax = document.getElementById("guestPax").value;
    let hotel = document.getElementById("guestHotel").value;
    let checkInDate = document.getElementById("guestCheckin").value;
    let checkOutDate = document.getElementById("guestCheckout").value;
    let payment = document.getElementById("guestPayment").value;
    let remarks = document.getElementById("guestRemarks").value;

    
    BookNow(name, email, phoneNumber, pax, hotel, checkInDate, checkOutDate, payment, remarks);
   });
  });