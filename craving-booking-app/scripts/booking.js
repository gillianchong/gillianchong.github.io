function Booking() {
      alert("Your booking is successfully added! Please check at view booking site!");
}

function BookNow (guestName, guestEmail, guestPhone, guestPax, guestHotel, guestCheckin, guestCheckout, guestPayment, guestRemarks) {
  let url = 'https://api.sheety.co/5c1a3167570b84950870483f1c80fbf9/cravingBookingList/booking';
  let body = {
    booking: {
     name:guestName,
     email:guestEmail,
     phonenumber:guestPhone,
     pax:guestPax,
     hotel:guestHotel,
     checkindate:guestCheckin,
     checkoutdate:guestCheckout,
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
       document.getElementById("BookNow").innerHTML = json.booking.name + " successfully added!";
       GetBookings();
    });
   }

  //window.addEventListener("load",function(){
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