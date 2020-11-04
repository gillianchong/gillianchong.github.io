function BookNow (guestName, guestEmail, guestPhone, guestPax, guestHotel, guestCheckin, guestCheckout, guestPayment, guestRemarks) {
  let url = 'https://api.sheety.co/dc6f0424a623e061b0c605a06b375549/bookingList/cravingCo';
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
    let guestname = document.getElementById("guestName").value;
    let guestemail = document.getElementById("guestEmail").value;
    let guestphonenumber = document.getElementById("guestPhone").value;
    let guestpax = document.getElementById("guestPax").value;
    let guesthotel = document.getElementById("guestHotel").value;
    let guestcheckindate = document.getElementById("guestCheckin").value;
    let guestcheckoutdate = document.getElementById("guestCheckout").value;
    let guestpayment = document.getElementById("guestPayment").value;
    let guestremarks = document.getElementById("guestRemarks").value;

    
    BookNow(guestname, guestemail, guestphonenumber, guestpax, guesthotel, guestcheckindate, guestcheckoutdate, guestpayment, guestremarks);
   });
  });